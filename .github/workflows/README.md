# Content Review Workflow

This workflow automatically reviews documentation changes for tone of voice compliance using Reown's brand guidelines.

## Setup Requirements

1. **OpenAI API Key**: Add `OPENAI_API_KEY` as a repository secret
   - Go to Repository Settings > Secrets and variables > Actions
   - Add new repository secret with name `OPENAI_API_KEY`
   - Value should be your OpenAI API key with GPT-4 access

## How it Works

The workflow triggers on pull requests that modify MDX files and:

1. **Filters relevant files**: Only reviews documentation content, excluding:
   - Code snippets (`snippets/` directory)
   - Installation guides (`**/installation.mdx`)
   - Implementation files (`**/implementation.mdx`)
   - Modal trigger examples (`**/triggermodal.mdx`)
   - About sections (`**/about/**`)

2. **Analyzes content**: Uses AI to review content against Reown's tone of voice guidelines:
   - Clear and accessible language
   - Professional yet friendly tone
   - Developer-focused but approachable
   - Consistent terminology

3. **Provides feedback**: Posts constructive suggestions as PR review comments when improvements are needed

## Tone of Voice Guidelines

The workflow enforces these key principles:

- **Clear & Accessible**: Translate complex ideas into approachable language
- **Professional yet Friendly**: Maintain authority while being welcoming
- **Developer-Focused**: Understand technical audience but remain inclusive
- **Consistent**: Use standard terminology throughout

## What Gets Reviewed

✅ **Included:**
- Feature descriptions and overviews
- User-facing documentation
- Conceptual explanations
- Getting started guides (content sections)

❌ **Excluded:**
- Code examples and snippets
- Technical implementation details
- Installation commands
- API reference tables
- Configuration files

## Troubleshooting

- **No comments posted**: Check that `OPENAI_API_KEY` is configured correctly
- **Workflow not triggering**: Ensure changes include `.mdx` files in reviewed directories
- **API errors**: Verify OpenAI API key has sufficient credits and GPT-4 access
