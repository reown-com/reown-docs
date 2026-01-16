# Content Review Workflow

This workflow automatically reviews documentation changes for tone of voice compliance using Reown's brand guidelines via Devin AI.

## Setup Requirements

No additional setup required! The workflow uses GitHub's built-in commenting system to request Devin reviews.

## How it Works

The workflow triggers on pull requests that modify MDX files and:

1. **Filters relevant files**: Only reviews documentation content, excluding:
   - Code snippets (`snippets/` directory)
   - Installation guides (`**/installation.mdx`)
   - Implementation files (`**/implementation.mdx`)
   - Modal trigger examples (`**/triggermodal.mdx`)
   - About sections (`**/about/**`)

2. **Requests Devin Review**: Posts a comment mentioning @devin-ai-integration[bot] with:
   - List of changed MDX files to review
   - Link to Reown's Tone of Voice guidelines
   - Summary of key brand principles and review criteria

3. **Provides feedback**: Devin analyzes content against tone of voice guidelines and posts constructive suggestions as PR review comments

## Tone of Voice Guidelines

The workflow enforces these key principles from the [Reown Tone of Voice document](https://walletconnect.notion.site/Reown-Tone-of-Voice-Messaging-Framework-1ba3a661771e8026b3e5f0006be26000):

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

## Workflow Process

1. **PR Created/Updated** → Workflow triggers if MDX files changed
2. **File Filtering** → Only relevant documentation files are identified  
3. **Review Request** → Workflow posts comment mentioning Devin with review criteria
4. **Devin Review** → Devin analyzes content against tone guidelines
5. **Feedback Posted** → Devin posts detailed review comments with suggestions

## Troubleshooting

- **No review comments**: Verify Devin bot has access to the repository and can respond to mentions
- **Workflow not triggering**: Ensure changes include `.mdx` files in reviewed directories
- **Devin not responding**: Check that @devin-ai-integration[bot] is properly mentioned in the comment
- **Review incomplete**: Verify the Tone of Voice guidelines URL is accessible
