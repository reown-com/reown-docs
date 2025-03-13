/**
 * Docusaurus-to-LLMSTXT Conversion Script
 *
 * This script converts Docusaurus markdown files to LLMSTXT format according to the
 * LLMSTXT spec (https://llmstxt.org/). It generates two files:
 * - llms.txt: Main index file with links to all documentation sections organized by directory and platform
 * - llms-full.txt: Contains all documentation
 *
 * The index file (llms.txt) is organized by:
 * 1. Top-level directories (Advanced, Api, Appkit, Cloud, Walletkit, Web3modal)
 * 2. Platform subdivisions within each directory (Android, iOS, Flutter, React Native, etc.)
 * 3. General sections for content not specific to any platform
 *
 * Files are generated in the static/ directory before the Docusaurus build process.
 * The files strictly follow the LLMSTXT spec format:
 * 1. An H1 with the name of the project or site
 * 2. A blockquote with a short summary
 * 3. Additional information about the project
 * 4. Sections delimited by H2 headers containing file lists
 * 5. Each file list entry includes a markdown hyperlink and description
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMdx from 'remark-mdx'
import remarkStringify from 'remark-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import grayMatter from 'gray-matter'

// Get the directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const DOCS_DIR = path.join(__dirname, '..', 'docs')
const OUTPUT_DIR = path.join(__dirname, '..', 'static')
const SITE_URL = 'https://docs.reown.com'

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

/**
 * Process a markdown file and convert it to plain text
 * @param {string} filePath - Path to the markdown file
 * @returns {Object} - Object containing the processed content and metadata
 */
async function processMarkdownFile(filePath) {
  try {
    // Read the file content
    const content = fs.readFileSync(filePath, 'utf8')

    // Parse frontmatter
    const { data: frontmatter, content: markdownContent } = grayMatter(content)

    try {
      // Process MDX/Markdown to plain text
      const processor = unified()
        .use(remarkParse)
        .use(remarkMdx)
        .use(remarkFrontmatter)
        .use(remarkStringify, {
          bullet: '-',
          listItemIndent: 'one',
          fences: true,
          rule: '-'
        })

      const file = await processor.process(markdownContent)
      let plainText = String(file)

      // Clean up the text (remove HTML, simplify formatting)
      plainText = plainText
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\n\s*\n/g, '\n\n') // Normalize line breaks
        .trim()

      // Get relative path for URL construction
      const relativePath = path.relative(DOCS_DIR, filePath)
      const urlPath = relativePath
        .replace(/\\/g, '/') // Convert Windows path separators
        .replace(/\.(md|mdx)$/, '') // Remove file extension
        .replace(/\/index$/, '') // Truncate '/index' segments to prevent 404 errors

      // Construct URL
      const url = `${SITE_URL}/${urlPath}`

      // Get directory path relative to docs for categorization
      const relativeDir = path.dirname(relativePath)

      return {
        title: frontmatter.title || path.basename(filePath, path.extname(filePath)),
        url,
        content: plainText,
        path: relativePath,
        directory: relativeDir
      }
    } catch (mdxError) {
      // If MDX parsing fails, try a simpler approach for basic markdown
      console.warn(`MDX parsing failed for ${filePath}, falling back to basic content extraction`)

      // Extract title from frontmatter or filename
      const title = frontmatter.title || path.basename(filePath, path.extname(filePath))

      // Get basic content (strip out complex MDX syntax)
      let basicContent = markdownContent
        .replace(/import\s+.*?from\s+['"].*?['"]/g, '') // Remove import statements
        .replace(/<.*?>/g, '') // Remove JSX/HTML tags
        .replace(/\{.*?\}/g, '') // Remove JSX expressions
        .replace(/\n\s*\n/g, '\n\n') // Normalize line breaks
        .trim()

      // Get relative path for URL construction
      const relativePath = path.relative(DOCS_DIR, filePath)
      const urlPath = relativePath
        .replace(/\\/g, '/') // Convert Windows path separators
        .replace(/\.(md|mdx)$/, '') // Remove file extension
        .replace(/\/index$/, '') // Truncate '/index' segments to prevent 404 errors

      // Construct URL
      const url = `${SITE_URL}/${urlPath}`

      // Get directory path relative to docs for categorization
      const relativeDir = path.dirname(relativePath)

      return {
        title,
        url,
        content: basicContent,
        path: relativePath,
        directory: relativeDir
      }
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error)
    return null
  }
}

/**
 * Recursively find all markdown files in a directory
 * @param {string} dir - Directory to search
 * @param {Array} fileList - Accumulator for found files
 * @returns {Array} - List of markdown file paths
 */
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList)
    } else if (/\.(md|mdx)$/.test(file)) {
      fileList.push(filePath)
    }
  }

  return fileList
}

/**
 * Generate LLMSTXT content from processed markdown files
 * @param {Array} processedFiles - List of processed markdown files
 * @param {string} title - Title for the LLMSTXT file
 * @param {string} description - Description for the LLMSTXT file
 * @returns {string} - LLMSTXT formatted content
 */
function generateLLMSTXT(processedFiles, title, description) {
  // LLMSTXT header - H1 with the name of the project or site
  let llmstxt = `# ${title}\n\n`

  // Blockquote with a short summary
  llmstxt += `> ${description}\n\n`

  // Additional information about the project
  llmstxt += `This file contains documentation for the Reown platform, formatted according to the [LLMSTXT spec](https://llmstxt.org/).\n`
  llmstxt += `Last updated: ${new Date().toISOString().split('T')[0]}\n\n`

  // Add content from each processed file as a section with H2 header
  for (const file of processedFiles) {
    if (!file) continue

    llmstxt += `## ${file.title}\n\n`
    llmstxt += `- [${file.title}](${file.url}): Documentation for ${file.title}\n\n`
    llmstxt += `${file.content}\n\n`
  }

  return llmstxt
}

/**
 * Generate an index file in LLMSTXT format with links to documentation sections
 * organized by directory and platform
 * @param {Array} processedFiles - List of processed markdown files
 * @returns {string} - LLMSTXT formatted index content with platform subdivisions
 */
function generateLLMSTXTIndex(processedFiles) {
  // LLMSTXT header - H1 with the name of the project or site
  let llmstxt = `# Reown Documentation\n\n`

  // Blockquote with a short summary
  llmstxt += `> Documentation for Reown, the onchain UX platform.\n\n`

  // Additional information about the project
  llmstxt += `Reown provides tools and SDKs for building Web3 applications and integrating wallets. `
  llmstxt += `This index contains links to all documentation sections, organized by directory and platform.\n`
  llmstxt += `Last updated: ${new Date().toISOString().split('T')[0]}\n\n`

  // Get all top-level directories
  const topDirs = fs.readdirSync(DOCS_DIR).filter(item => {
    const itemPath = path.join(DOCS_DIR, item)
    return fs.statSync(itemPath).isDirectory()
  })

  // Group files by top-level directory
  const filesByDir = {}
  for (const dir of topDirs) {
    filesByDir[dir] = processedFiles.filter(
      file => (file && file.directory.startsWith(dir)) || file.path.startsWith(dir)
    )
  }

  // Platform directories to look for
  const platformDirs = [
    'android',
    'ios',
    'flutter',
    'react-native',
    'web',
    'javascript',
    'react',
    'vue',
    'next',
    'unity',
    'c-sharp'
  ]

  // Add links to each section
  for (const dir of topDirs) {
    const dirFiles = filesByDir[dir]
    if (dirFiles.length === 0) continue

    // Capitalize directory name for section title
    const sectionTitle = dir.charAt(0).toUpperCase() + dir.slice(1)
    llmstxt += `## ${sectionTitle}\n\n`

    // Add description of the section based on the directory name
    const sectionDescriptions = {
      api: 'API reference documentation for the WalletConnect protocol.',
      appkit: 'Documentation for AppKit, a toolkit for building applications with WalletConnect.',
      walletkit:
        'Documentation for WalletKit, a toolkit for integrating wallets with WalletConnect.',
      cloud: 'Documentation for WalletConnect Cloud services and infrastructure.',
      advanced: 'Advanced topics and guides for WalletConnect integration.',
      web3modal: 'Documentation for Web3Modal, a UI component for connecting to wallets.',
      components: 'Reusable components for WalletConnect integration.'
    }

    if (sectionDescriptions[dir]) {
      llmstxt += `${sectionDescriptions[dir]}\n\n`
    }

    // Check if this directory has platform subdirectories
    const dirPath = path.join(DOCS_DIR, dir)
    let hasPlatformSubdirs = false

    if (fs.existsSync(dirPath)) {
      const subdirs = fs.readdirSync(dirPath).filter(item => {
        const itemPath = path.join(dirPath, item)
        return fs.statSync(itemPath).isDirectory()
      })

      // Check if any of the subdirectories are platform directories
      hasPlatformSubdirs = subdirs.some(subdir => platformDirs.includes(subdir.toLowerCase()))
    }

    if (hasPlatformSubdirs) {
      // Group files by platform
      const filesByPlatform = {}
      const otherFiles = []

      for (const file of dirFiles) {
        let foundPlatform = false

        for (const platform of platformDirs) {
          // Check if the file path contains the platform directory
          if (
            file.directory.includes(`/${platform}/`) ||
            file.directory === platform ||
            file.path.includes(`/${platform}/`) ||
            file.path === platform
          ) {
            if (!filesByPlatform[platform]) {
              filesByPlatform[platform] = []
            }
            filesByPlatform[platform].push(file)
            foundPlatform = true
            break
          }
        }

        if (!foundPlatform) {
          otherFiles.push(file)
        }
      }

      // Add platform-specific sections
      for (const platform of platformDirs) {
        if (filesByPlatform[platform] && filesByPlatform[platform].length > 0) {
          // Format platform name for display
          let platformDisplay = platform
          if (platform === 'ios') platformDisplay = 'iOS'
          else if (platform === 'c-sharp') platformDisplay = 'C#'
          else if (platform === 'javascript') platformDisplay = 'JavaScript'
          else if (platform === 'react-native') platformDisplay = 'React Native'
          else platformDisplay = platform.charAt(0).toUpperCase() + platform.slice(1)

          llmstxt += `### ${platformDisplay}\n\n`

          // Sort files by path for a more organized listing
          const sortedFiles = [...filesByPlatform[platform]].sort((a, b) =>
            a.path.localeCompare(b.path)
          )

          // Add links to files for this platform
          for (const file of sortedFiles) {
            llmstxt += `- [${file.title}](${file.url}): ${file.title} documentation for ${platformDisplay}\n`
          }

          llmstxt += '\n'
        }
      }

      // Add other files that don't belong to a specific platform
      if (otherFiles.length > 0) {
        llmstxt += `### General\n\n`

        // Sort files by path for a more organized listing
        const sortedOtherFiles = [...otherFiles].sort((a, b) => a.path.localeCompare(b.path))

        // Add links to other files
        for (const file of sortedOtherFiles) {
          llmstxt += `- [${file.title}](${file.url}): General documentation for ${file.title}\n`
        }

        llmstxt += '\n'
      }
    } else {
      // No platform subdirectories, just list all files
      // Sort files by path for a more organized listing
      const sortedFiles = [...dirFiles].sort((a, b) => a.path.localeCompare(b.path))

      // Add links to all files
      for (const file of sortedFiles) {
        llmstxt += `- [${file.title}](${file.url}): Documentation for ${file.title}\n`
      }

      llmstxt += '\n'
    }
  }

  // Add a footer with links to specialized documentation files
  llmstxt += `## Optional\n\n`
  llmstxt += `These links contain more detailed or specialized documentation that can be skipped if a shorter context is needed:\n\n`
  llmstxt += `- [Complete Documentation](${SITE_URL}/llms-full.txt): Full documentation for all Reown components\n\n`

  return llmstxt
}

/**
 * Main function to process all markdown files and generate LLMSTXT files
 */
async function main() {
  try {
    console.log('Starting Docusaurus-to-LLMSTXT conversion...')

    // Find all markdown files
    const markdownFiles = findMarkdownFiles(DOCS_DIR)
    console.log(`Found ${markdownFiles.length} markdown files to process.`)

    // Process all markdown files with progress tracking
    let processedCount = 0
    const totalFiles = markdownFiles.length

    // Process files in batches to avoid overwhelming the system
    const batchSize = 50
    const processedFiles = []

    for (let i = 0; i < markdownFiles.length; i += batchSize) {
      const batch = markdownFiles.slice(i, i + batchSize)
      const batchResults = await Promise.all(
        batch.map(async file => {
          const result = await processMarkdownFile(file)
          processedCount++

          // Log progress every 10% or for the last file
          if (
            processedCount % Math.max(1, Math.floor(totalFiles / 10)) === 0 ||
            processedCount === totalFiles
          ) {
            const percentage = Math.floor((processedCount / totalFiles) * 100)
            console.log(`Progress: ${processedCount}/${totalFiles} files (${percentage}%)`)
          }

          return result
        })
      )

      processedFiles.push(...batchResults)
    }

    // Filter out null results (files that failed to process)
    const validFiles = processedFiles.filter(file => file !== null)
    console.log(`Successfully processed ${validFiles.length}/${totalFiles} files.`)

    // Generate LLMSTXT files
    console.log('Generating LLMSTXT files...')

    // Generate full documentation file
    const fullLLMSTXT = generateLLMSTXT(
      validFiles,
      'Reown Documentation',
      'Complete documentation for Reown platform'
    )

    // Generate index file with platform subdivisions
    const indexLLMSTXT = generateLLMSTXTIndex(validFiles)

    // Write output files
    console.log('Writing output files...')
    fs.writeFileSync(path.join(OUTPUT_DIR, 'llms-full.txt'), fullLLMSTXT)
    fs.writeFileSync(path.join(OUTPUT_DIR, 'llms.txt'), indexLLMSTXT)

    console.log('LLMSTXT files generated successfully:')
    console.log(`- ${path.join(OUTPUT_DIR, 'llms.txt')}`)
    console.log(`- ${path.join(OUTPUT_DIR, 'llms-full.txt')}`)
  } catch (error) {
    console.error('Error generating LLMSTXT files:', error)
    process.exit(1)
  }
}

// Run the script
main()
