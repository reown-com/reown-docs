## Summary

This PR adds documentation for new configuration options introduced in AppKit version 1.7.11:

- **`enableReconnect`**: General AppKit flag to prevent automatic reconnection on initialization and page load
- **`registerWalletStandard`**: Solana adapter-specific flag to allow automatic registration of WalletConnect relay connector as a Wallet Standard wallet

## Changes Made

- Added documentation for `enableReconnect` configuration option in the shared options file
- Added documentation for `registerWalletStandard` configuration option in Solana adapter documentation
- Updated all Solana implementation examples to show the SolanaAdapter constructor with configuration options
- Corrected placement based on GitHub feedback that `registerWalletStandard` is a Solana adapter flag, not a general AppKit flag
- Added dedicated "Solana Adapter Configuration" section with detailed documentation for Solana-specific options

## GitHub Feedback Addressed

✅ **tomiir's comment**: Moved `registerWalletStandard` from shared options to Solana adapter documentation as it's a Solana adapter flag, not a general AppKit flag

## Context

These changes are based on the AppKit version 1.7.11 release which introduced these new user-facing configuration options. The documentation updates ensure developers are aware of these new options and understand how to use them.

## References

- **Link to Devin run**: https://app.devin.ai/sessions/e7d5b069314b4e93a409e02ff09f84ef
- **Original AppKit commit**: https://github.com/reown-com/appkit/commit/74e61a3491a9df65879e893bb65fff28eb500a20
- **Requested by**: User via Slack integration

## Testing

- Verified markdown syntax is correct
- Ensured TypeScript code examples follow existing conventions
- Confirmed placement maintains logical grouping with other enable* flags
