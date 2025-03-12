# Docusaurus Scripts

This directory contains utility scripts for the Reown documentation site.

## LLMSTXT Conversion Script

The `build-llmstxt.js` script converts Docusaurus markdown files to LLMSTXT format according to the [LLMSTXT spec](https://llmstxt.org/).

### Features

- Converts all Markdown and MDX files in the `docs/` directory to plain text
- Generates two output files:
  - `llms.txt`: Main index file with links to all documentation sections organized by directory and platform (Android, iOS, Flutter, React Native, etc.)
  - `llms-full.txt`: Contains all documentation
- Preserves document structure and metadata
- Follows the LLMSTXT 1.0 specification
- Robust error handling with fallback for complex MDX files
- Progress reporting during conversion
- Properly handles index files by truncating `/index` segments in URLs to prevent 404 errors

### Setup

The script uses ES modules, which are configured in the local `package.json` file in this directory. This allows the script to use modern JavaScript features without affecting the main Docusaurus project.

### Usage

You can run the script directly:

```bash
cd scripts
node --experimental-json-modules build-llmstxt.js
```

Or use the npm script from the project root:

```bash
pnpm run build-llmstxt
```

To build the Docusaurus site and generate the LLMSTXT files in one command:

```bash
pnpm run build
```

### Output

The script generates the following files in the `static/` directory:

- `llms.txt`: Available at `docs.reown.com/llms.txt` - Main index with links to all documentation sections, organized by directory and platform
- `llms-full.txt`: Available at `docs.reown.com/llms-full.txt` - Complete documentation

The files strictly follow the LLMSTXT spec format:

1. An H1 with the name of the project or site
2. A blockquote with a short summary
3. Additional information about the project
4. Sections delimited by H2 headers containing file lists
5. Each file list entry includes a markdown hyperlink and description
6. An "Optional" section as specified by the LLMSTXT spec for content that can be skipped if a shorter context is needed

### Dependencies

The script uses the following npm packages:

- `unified`: Unified text processing interface
- `remark-parse`: Markdown parser
- `remark-mdx`: MDX parser
- `remark-stringify`: Markdown serializer
- `remark-frontmatter`: Frontmatter parser
- `gray-matter`: Frontmatter extractor

### Error Handling

The script includes robust error handling:

1. For standard Markdown files, it uses the full remark/unified pipeline
2. For complex MDX files that can't be parsed by the standard pipeline, it falls back to a simpler regex-based extraction
3. If a file can't be processed at all, it's skipped with an error message

### CI/CD Integration

The script is automatically run as part of the build process through the npm build script.
