---
description: Solana JSON-RPC Methods
---

# Solana

## solana_getAccounts

This method returns an Array of public keys available to sign from the wallet.

### Parameters

    none

### Returns

`Array` - Array of accounts:
- `Object` :
  - `pubkey` : `String` - public key for keypair

### Example

```typescript
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

`Array` - Array of accounts:
- `Object` :
  - `pubkey` : `String` - public key for keypair

### Example

```typescript
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

## solana_signMessage

This method returns a signature for the provided message from the requested signer address.

### Parameters

`Object` - Signing parameters:
 - `message` : `String` - the message to be signed (base58 encoded)
  - `pubkey` : `String` - public key of the signer

### Returns

`Object`:
 - `signature` : `String` - corresponding signature for signed message

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

## solana_signTransaction

This method returns a signature over the provided instructions by the targeted public key.

> [!WARNING]  
> Refer always to `transaction` param.
> The deprecated parameters are not compatible with versioned transactions.

### Parameters

`Object` - Signing parameters:<br />
- `transaction` : `String` - base64-encoded serialized transaction<br />
- **[deprecated]** `feePayer` : `String | undefined` -  public key of the transaction fee payer<br />
- **[deprecated]** `instructions` : `Array` of `Object` or `undefined` - instructions to be atomically executed:<br />
&nbsp;- `Object` - instruction<br />
&emsp;- `programId` : `String` - public key of the on chain program<br />
&emsp;- `data` : `String | undefined` - encoded calldata for instruction<br />
&emsp;- `keys` : `Array` of `Object` - account metadata used to define instructions<br />
&emsp;&emsp;- `Object` - key<br />
&emsp;&emsp;&emsp;- `isSigner` : `Boolean` - true if an instruction requires a transaction signature matching `pubkey`<br />
&emsp;&emsp;&emsp;- `isWritable` : `Boolean` - true if the `pubkey` can be loaded as a read-write account<br />
&emsp;&emsp;&emsp;- `pubkey` : `String` - public key of authorized program<br />
- **[deprecated]** `recentBlockhash` : `String | undefined` - a recent blockhash<br />
- **[deprecated]** `signatures` : `Array` of `Object` or `undefined` - (optional) previous partial signatures for this instruction set<br />
&nbsp;- `Object` - partial signature<br />
&emsp;- `pubkey` : `String` - pubkey of the signer<br />
&emsp;- `signature` : `String` - signature matching `pubkey`<br />

### Returns

`Object`:
 - `signature`: `String` - corresponding signature for signed instructions
 - `transaction`?: `String | undefined` - optional: base64-encoded serialized transaction

### Example

```typescript
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


## solana_signAllTransactions

This method is responsible for signing a list of transactions. The wallet must sign all transactions and return the signed transactions in the same order as received. Wallets must sign all transactions or return an error if it is not possible to sign any of them.

### Parameters

`Object` - Signing parameters:
- `transactions` : `String[]` - base64-encoded serialized list of transactions<br />

### Returns

`Object`:
- `transactions` : `String[]` - base64-encoded serialized list of signed transactions in the same order as received<br />

### Example

```typescript
// Request
{
	"id": 1,
	"jsonrpc": "2.0",
	"method": "solana_signAllTransactions",
	"params": {
    "transactions": string[]
	}
}

// Response
{
	"id": 1,
	"jsonrpc": "2.0",
	"result":  { 
	  "transactions": string[]
	} 
}
```

## solana_signAndSendTransaction

This method is responsible for signing and sending a transaction to the Solana network. The wallet must sent the transaction and return the signature that can be used as a transaction id.

### Parameters

`Object` - transaction and options:<br />
- `transaction` : `String` - the whole transaction serialized and encoded with base64<br />
- `sendOptions` : `Object` - options for sending the transaction<br />
	- `skipPreflight` : `Boolean` - skip preflight checks<br />
	- `preflightCommitment` : `'processed' | 'confirmed' | 'finalized' | 'recent' | 'single' | 'singleGossip' | 'root' | 'max'` - preflight commitment level<br />
	- `maxRetries` : `Number` - maximum number of retries<br />
	- `minContextSlot` : `Number` - minimum context slot<br />

### Returns

`Object`:
- `signature` : `String`, - the signature of the transaction encoded with base58 used as transaction id<br />

### Example

```typescript
// Request
{
	"id": 1,
	"jsonrpc": "2.0",
	"method": "solana_signAndSendTransaction",
	"params": {
    "transaction": string,
    "sendOptions": {
	    "skipPreflight"?: boolean,
	    "preflightCommitment"?: 'processed' | 'confirmed' | 'finalized' | 'recent' | 'single' | 'singleGossip' | 'root' | 'max',
	    "maxRetries"?: number,
	    "minContextSlot"?: number,
    }
	}
}

// Response
{
	"id": 1,
	"jsonrpc": "2.0",
	"result":  { 
	  "signature": string
	} 
}
```