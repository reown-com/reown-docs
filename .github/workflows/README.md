# Content Review Workflow

This workflow automatically reviews documentation changes for tone of voice compliance using Reown's brand guidelines via Devin AI.

## Setup Requirements

1. **Devin Webhook Token**: Add `DEVIN_WEBHOOK_TOKEN` as a repository secret
   - Go to Repository Settings > Secrets and variables > Actions
   - Add new repository secret with name `DEVIN_WEBHOOK_TOKEN`
   - Value should be provided by your Devin administrator

## How it Works

The workflow triggers on pull requests that modify MDX files and:

1. **Filters relevant files**: Only reviews documentation content, excluding:
   - Code snippets (`snippets/` directory)
   - Installation guides (`**/installation.mdx`)
   - Implementation files (`**/implementation.mdx`)
   - Modal trigger examples (`**/triggermodal.mdx`)
   - About sections (`**/about/**`)

2. **Notifies Devin**: Sends a repository dispatch event to trigger Devin content review with:
   - PR details and changed files
   - Link to Reown's Tone of Voice guidelines
   - Context about the review request

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
3. **Devin Notification** → Repository dispatch event sent to Devin
4. **Pending Comment** → Workflow posts initial comment indicating review in progress
5. **Devin Review** → Devin analyzes content against tone guidelines
6. **Feedback Posted** → Devin posts detailed review comments with suggestions

## Troubleshooting

- **No review comments**: Check that `DEVIN_WEBHOOK_TOKEN` is configured correctly
- **Workflow not triggering**: Ensure changes include `.mdx` files in reviewed directories
- **Devin not responding**: Verify webhook token is valid and Devin service is available
- **Review incomplete**: Check that the Tone of Voice guidelines URL is accessible
