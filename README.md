# Reown Documentation

This repository contains the documentation for Reown. The documentation is built using [Mintlify](https://mintlify.com/).

## Contributing to the Documentation

We welcome contributions to improve our documentation! Here's how you can help:

### Creating a Pull Request

1. Fork the repository
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes to the documentation files
4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
5. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Create a Pull Request from your fork to the main repository
7. Fill out the PR template with a description of your changes
8. A team member will review your PR.

### Running the Documentation Locally

To run the documentation locally, you'll need to have Node.js installed on your machine. Then follow these steps:

1. Install the Mintlify CLI globally:
   ```bash
   npm install -g mintlify
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reown-docs.git
   cd reown-docs
   ```

3. Start the development server:
   ```bash
   mintlify dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the documentation

The development server will automatically reload when you make changes to the documentation files.

### Documentation Structure

- `/api` - API documentation
- `/advanced` - Advanced usage guides
- `/appkit` - AppKit documentation
- `/cloud` - Cloud documentation
- `/components` - UI components documentation
- `/snippets` - Code snippets and examples
- `/web3modal` - Web3Modal documentation
- `/walletkit` - WalletKit documentation

### Writing Documentation

- Documentation files are written in MDX format
- Images should be placed in the `/images` directory
- Follow the existing documentation style and formatting
- Use clear and concise language
- Include code examples where appropriate
- Test all code snippets to ensure they work as expected

### Need Help?

If you have any questions or need help with your contribution, please:
1. Check the existing documentation
2. Reach out to the team on [Discord](https://discord.gg/reown)

Thank you for contributing to Reown's documentation! 