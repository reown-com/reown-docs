---
description: Polkadot SDK JSON-RPC Methods
---

# Polkadot SDK

## polkadot_signTransaction

This method returns a signature for the provided transaction payload. It will be signed by the keypair corresponding to the requested signer address.

### Parameters

1. `Object` - Request parameters:
   - `address`: `string` - SS58 encoded address of the signer
   - `transactionPayload`: `Object` - As per Polkadot type `SignerPayloadJSON` containing:
     - `address`: `string` - The SS58 encoded address (must match outer address)
     - `assetId`: `HexString | null` - (optional) The id of the asset used to pay fees
     - `blockHash`: `HexString` - The checkpoint hash of the block, 32 bytes
     - `blockNumber`: `HexString` - The checkpoint block number (hex encoded)
     - `era`: `HexString` - The mortality period of this transaction
     - `genesisHash`: `HexString` - The genesis hash of the chain, 32 bytes
     - `metadataHash`: `HexString | null` - (optional) The hash of the metadata for verification
     - `method`: `string` - The SCALE encoded method data (hex encoded)
     - `mode`: `number` - (optional) The mode for metadata verification (0=none, 1=exact, 2=partial)
     - `nonce`: `HexString` - The nonce for this transaction (hex encoded)
     - `specVersion`: `HexString` - The current specification version (hex encoded)
     - `tip`: `HexString` - The tip for this transaction (hex encoded amount)
     - `transactionVersion`: `HexString` - The current transaction version (hex encoded)
     - `signedExtensions`: `string[]` - The array of signed extension identifiers
     - `version`: `number` - The extrinsic version number
     - `withSignedTransaction`: `boolean` - (optional) Request signed transaction bytes

### Returns

1. `Object` - Signature result:
   - `signature`: `string` - hex encoded signature

### Example

```javascript
// Request
{
    "id": 1,
    "jsonrpc": "2.0",
    "method": "polkadot_signTransaction",
    "params": {
        "address": "15UyNqZ7NB1QQVpY9xv7VGwkxtvXePKihFHx8kH4VgEcS1gU",
        "transactionPayload": {
            "address": "15UyNqZ7NB1QQVpY9xv7VGwkxtvXePKihFHx8kH4VgEcS1gU",
            "assetId": null,
            "blockHash": "0x1b1c32a33c3622044a3be1b7753ff9b24695c327fc9254f97c...",
            "blockNumber": "0x00000393",
            "era": "0x0500",
            "genesisHash": "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
            "metadataHash": null,
            "method": "0x0400....",
            "mode": 0,
            "nonce": "0x00000000",
            "specVersion": "0x00000000",
            "tip": "0x00000000000000000000000000000000",
            "transactionVersion": "0x00000004",
            "signedExtensions": [
                "CheckNonZeroSender",
                "CheckSpecVersion",
                "CheckTxVersion",
                "CheckGenesis",
                "CheckMortality",
                "CheckNonce",
                "CheckWeight",
                "ChargeTransactionPayment"
            ],
            "version": 4
        }
    }
}

// Result
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "signature": "0x01234567..."
    }
}
```

Note: The `method` field in the transaction payload contains the SCALE encoded call data specific to the transaction being signed. This typically includes the pallet name, function name and any parameters required for that specific transaction.

## polkadot_signMessage

This method returns a signature for the provided message payload. It will be signed by the keypair corresponding to the requested signer address.

### Parameters

1. `Object` - As per Polkadot type `SignerPayloadRaw` containing:
   - `address`: `string` - SS58 encoded address
   - `data`: `string` - The hex-encoded data for this request
   - `type`: `'bytes' | 'payload'` - (optional) Identifies if the message is arbitrary bytes or a transaction payload

:::note
`polkadot_signMessage` can potentially be used to sign arbitrary transactions blindly. To mitigate this security risk:

1. Always wrap messages in `<Bytes>message</Bytes>` tags before hex encoding when message `type` is `'bytes'` or not specified
2. If the type is not `'payload'`, signers MUST verify that messages are properly wrapped
3. Use `type: 'payload'` only when signing transaction-like data that should be possible to decrypt

This convention helps prevent malicious applications from using `polkadot_signMessage` for blind transaction signing while maintaining compatibility with widely-used Polkadot signing implementations.
:::

### Returns

1. `Object` - Signature result:
   - `signature`: `string` - hex encoded signature

### Example

```javascript
// Request
{
    "id": 1,
    "jsonrpc": "2.0",
    "method": "polkadot_signMessage",
    "params": {
        "address": "15UyNqZ7NB1QQVpY9xv7VGwkxtvXePKihFHx8kH4VgEcS1gU",
        "data": "0x3c42797465733e68656c6c6f20776f726c643c2f42797465733e", // "<Bytes>hello world</Bytes>" hex encoded
        "type": "bytes"
    }
}

// Result
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "signature": "0x6a98517e159dcaef1855cda5f5e5a61387ac3b63212b0f82642f5599502fc9eb1ea134e2db5dfbe0ec4530c6e7e576b177ad0618f68eaec37a3ac6dce819a30a"
    }
}
```
