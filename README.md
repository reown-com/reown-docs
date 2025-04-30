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

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the development server:
   ```bash
   pnpm run dev
   ```

or 

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

### Building a project with AI?

If you're using Cursor IDE (or another AI-based IDE) to build a project with Reown AppKit, we provide a `.mdc` file that enhances your development experience. The `reown-appkit.mdc` file in this repository contains Cursor-specific rules and type hints for Reown AppKit.

To use it in your project:

1. Copy the `reown-appkit.mdc` file from this repository
2. Create a `.cursor/rules` folder in your project's root directory (if it doesn't exist)
3. Place the `.mdc` file in your project's `.cursor/rules` folder

For more info, refer to [Cursor's documentation](https://docs.cursor.com/context/rules#project-rules).


### Need Help?

If you have any questions or need help with your contribution, please:
1. Check the existing documentation
2. Reach out to the team on [Discord](https://discord.gg/reown)

Thank you for contributing to Reown's documentation! 