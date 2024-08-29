---
description: Solana JSON-RPC Methods
---

# Solana

## solana_getAccounts

This method returns an Array of public keys available to sign from the wallet.

### Parameters

    none

### Returns

    1.`Array` - Array of accounts:
    	1.1. `Object`
    		1.1.1. `pubkey` : `String` - public key for keypair

### Example

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "solana_getAccounts",
  "params": {}
}

// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [{ "pubkey": "722RdWmHC5TGXBjTejzNjbc8xEiduVDLqZvoUGz6Xzbp" }]
}
```

## solana_requestAccounts

This method returns an Array of public keys available to sign from the wallet.

### Parameters

    none

### Returns

    1.`Array` - Array of accounts:
    	1.1. `Object`
    		1.1.1. `pubkey` : `String` - public key for keypair

### Example

```javascript
// Request
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "solana_getAccounts",
  "params": {}
}

// Result
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [{ "pubkey": "722RdWmHC5TGXBjTejzNjbc8xEiduVDLqZvoUGz6Xzbp" }]
}
```

## solana_signTransaction

This method returns a signature over the provided instructions by the targeted public key.

### Parameters

`Object` - Signing parameters:<br />
- **[deprecated]** `feePayer` : `String` -  public key of the transaction fee payer<br />
- **[deprecated]** `instructions` : `Array` of `Object` - instructions to be atomically executed:<br />
&nbsp;- `Object` - instruction<br />
&emsp;- `programId` : `String` - public key of the on chain program<br />
&emsp;- `data` : `String | undefined` - encoded calldata for instruction<br />
&emsp;- `keys` : `Array` of `Object`- account metadata used to define instructions<br />
&emsp;&emsp;- `Object` - key<br />
&emsp;&emsp;&emsp;- `isSigner` : `Boolean` - true if an instruction requires a transaction signature matching `pubkey`<br />
&emsp;&emsp;&emsp;- `isWritable` : `Boolean` - true if the `pubkey` can be loaded as a read-write account<br />
&emsp;&emsp;&emsp;- `pubkey` : `String` - public key of authorized program<br />
- **[deprecated]** `recentBlockhash` : `String` - a recent blockhash<br />
- **[deprecated]** `signatures` : `Array` of `Object`, - (optional) previous partial signatures for this instruction set<br />
&nbsp;- `Object` - partial signature<br />
&emsp;- `pubkey` : `String` - pubkey of the signer<br />
&emsp;- `signature` : `String` - signature matching `pubkey`<br />
- `transaction` : `String`, - base64-encoded serialized transaction<br />

### Returns

    1. `Object`
    	1.1. `signature` : `String` - corresponding signature for signed instructions

### Example

```javascript
// Request
{
	"id": 1,
	"jsonrpc": "2.0",
	"method": "solana_signTransaction",
	"params": {
		"feePayer": "AqP3MyNwDP4L1GJKYhzmaAUdrjzpqJUZjahM7kHpgavm",
		"instructions": [{
			"programId": "Vote111111111111111111111111111111111111111",
			"data": "37u9WtQpcm6ULa3VtWDFAWoQc1hUvybPrA3dtx99tgHvvcE7pKRZjuGmn7VX2tC3JmYDYGG7",
			"keys": [{
				"isSigner": true,
				"isWritable": true,
				"pubkey": "AqP3MyNwDP4L1GJKYhzmaAUdrjzpqJUZjahM7kHpgavm"
			}]
		}],
		"recentBlockhash": "2bUz6wu3axM8cDDncLB5chWuZaoscSjnoMD2nVvC1swe",
		"signatures": [{
			"pubkey": "AqP3MyNwDP4L1GJKYhzmaAUdrjzpqJUZjahM7kHpgavm",
			"signature": "2Lb1KQHWfbV3pWMqXZveFWqneSyhH95YsgCENRWnArSkLydjN1M42oB82zSd6BBdGkM9pE6sQLQf1gyBh8KWM2c4"
		}],
                "transaction": "r32f2..FD33r"
	}
}

// Result
{
	"id": 1,
	"jsonrpc": "2.0",
	"result":  { signature: "2Lb1KQHWfbV3pWMqXZveFWqneSyhH95YsgCENRWnArSkLydjN1M42oB82zSd6BBdGkM9pE6sQLQf1gyBh8KWM2c4" }
}
```

## solana_signMessage

This method returns a signature for the provided message from the requested signer address.

### Parameters

    1. `Object` - Signing parameters:
    	1.1. `message` : `String` -  the message to be signed (base58 encoded)
    	1.2. `pubkey` : `String` -  public key of the signer

### Returns

    1. `Object`
    	1.1. `signature` : `String` - corresponding signature for signed message

### Example

```javascript
// Request
{
	"id": 1,
	"jsonrpc": "2.0",
	"method": "solana_signMessage",
	"params": {
		"message": "37u9WtQpcm6ULa3VtWDFAWoQc1hUvybPrA3dtx99tgHvvcE7pKRZjuGmn7VX2tC3JmYDYGG7",
		"pubkey": "AqP3MyNwDP4L1GJKYhzmaAUdrjzpqJUZjahM7kHpgavm"
	}
}

// Result
{
	"id": 1,
	"jsonrpc": "2.0",
	"result":  { signature: "2Lb1KQHWfbV3pWMqXZveFWqneSyhH95YsgCENRWnArSkLydjN1M42oB82zSd6BBdGkM9pE6sQLQf1gyBh8KWM2c4" }
}
```
