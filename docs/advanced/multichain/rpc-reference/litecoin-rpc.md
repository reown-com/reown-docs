---
description: Litecoin JSON-RPC Methods
---

# Litecoin
We define an account as the group of addresses derived using the same account value in their [derivation paths](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#user-content-Path_levels). We use the first address of the [external chain](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#examples) ("first external address"), as the identifier for an account. An account's total balance is defined as the sum of all unspent transaction outputs (UTXOs) belonging to its entire group of addresses.

1. Dapps **must** only display the first external address as a connected account.
2. Wallets **must** only offer to connect the first external address(es).

#### Account Definition
The derivation path levels in the [BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#path-levels), [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki#user-content-Public_key_derivation), [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki#public-key-derivation), [BIP86](https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki#user-content-Public_key_derivation) standards are: 
```
m / purpose' / coin_type' / account' / change / address_index
```

Addresses with different `purpose`, `change` and `address_index` values are considered to belong to the same account. Valid `purpose` values are 44, 49, 84 and 86. We use the first external Native SegWit (purpose = 84) address as the default account identifier.

For a specific seed phrase and path `m/84'/2'/0'/0/0` we get account 0 with identifier `ltc1q8c6fshw2dlwun7ekn9qwf37cu2rn755u9ym7p0`. Its total balance is the sum of all UTXO balances on all addresses with derivation paths:
* `m/44'/2'/0'/change/address_index`
* `m/49'/2'/0'/change/address_index`
* `m/84'/2'/0'/change/address_index`
* `m/86'/2'/0'/change/address_index`

If the wallet user changes to account 1 we get path `m/84'/2'/1'/0/0` with identifier `ltc1qn9h77dt0s6ar78ptxq58t2ne7tyhvfnruc3e7d`. Its total balance is the sum of all UTXO balances on all addresses with derivation paths:
* `m/44'/2'/1'/change/address_index`
* `m/49'/2'/1'/change/address_index`
* `m/84'/2'/1'/change/address_index`
* `m/86'/2'/1'/change/address_index`

## sendTransfer
This method is used to sign and submit a transfer of any `amount` of Litecoin to a single `recipientAddress`, optionally including a `changeAddress` for the change amount and `memo` set as the OP_RETURN value by supporting wallets. The transaction will be signed and broadcast upon user approval.

### Parameters
* `Object`
    * `account` : `String` - _(Required)_ The connected account's first external address.
    * `recipientAddress` : `String` - _(Required)_ The recipient's public address.
    * `amount` : `String` - _(Required)_ The amount of Litecoin to send, denominated in litoshis (Litecoin base unit).
    * `changeAddress` : `String` - _(Optional)_ The sender's public address to receive change.
    * `memo` : `String` - _(Optional)_ The OP_RETURN value as a hex string without 0x prefix, maximum 80 bytes.

### Returns
* `Object` 
    * `txid` : `String` - The transaction id as a hex string without 0x prefix.

### Example
The example below specifies a simple transfer of 1.23 LTC (123000000 Litoshi).

```javascript
// Request
{
    "id": 1,
    "jsonrpc": "2.0",
    "method": "sendTransfer",
    "params": {
        "account": "ltc1q8c6fshw2dlwun7ekn9qwf37cu2rn755u9ym7p0",
        "recipient": "ltc1qn9h77dt0s6ar78ptxq58t2ne7tyhvfnruc3e7d",
        "amount": "123000000",
        "memo": "636861726c6579206c6f766573206865"
    }
}

// Result
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "txid": "f007551f169722ce74104d6673bd46ce193c624b8550889526d1b93820d725f7"
    }
}
```

## getAccountAddresses
This method returns all current addresses needed for a dapp to fetch all UTXOs, calculate the total balance and prepare transactions. Dapps will typically use an indexing service to query for balances and UTXOs for all addresses returned by this method, such as:
* [Blockbook API](https://github.com/trezor/blockbook/blob/master/docs/api.md#get-address)
* [Bitcore API](https://github.com/bitpay/bitcore/blob/master/packages/bitcore-node/docs/api-documentation.md#address)

We recognize that there are two broad classes of wallets in use today:
1. Wallets that generate a new change or receive address for every transaction ("dynamic wallet").
2. Wallets that reuse the first external address for every transaction ("static wallet").

#### Implementation Details
* All wallets **should** include the first external address and all addresses with one or more UTXOs, unless they're filtered by `intentions`.
* Dynamic wallets **should** include minimum 2 unused change and receive addresses. Otherwise dapps may have to request [getAccountAddresses](#getAccountAddresses) after every transaction to discover the new addresses and keep track of the user's total balance.
* All wallets **must** return fewer than 20 unused change and receive addresses to avoid breaking the [gap limit](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#address-gap-limit).

### Parameters
* `Object`
    * `account` : `String` - _(Required)_ The connected account's first external address.
    * `intentions` : `String[]` - _(Optional)_ Filter what addresses to return, e.g. "payment" or "ordinal".

### Returns
* `Array`
    * `Object`
        * `address` : `String` - _(Required)_ Public address belonging to the account.
        * `publicKey` : `String` - _(Optional)_ Public key for the derivation path in hex, without 0x prefix.
        * `path` : `String` - _(Optional)_ Derivation path of the address e.g. "m/84'/2'/0'/0/0".
        * `intention` : `String` - _(Optional)_ Intention of the address, e.g. "payment" or "ordinal".

### Example: Dynamic Wallet
The example below specifies a result from a dynamic wallet. For the sake of this example, receive and change addresses with index 3-4 are considered unused and addresses with paths `m/49'/2'/0'/0/7` and `m/84'/2'/0'/0/2` are considered to have UTXOs.

Assuming the dapp monitors all returned addresses for balance changes, a new request to `getAccountAddresses` is only needed when all UTXOs in provided addresses have been spent, or when all provided `receive` addresses or `change` addresses have been used.

```javascript
// Request
{
    "id": 1,
    "jsonrpc": "2.0",
    "method": "getAccountAddresses",
    "params": {
        "account": "ltc1q8c6fshw2dlwun7ekn9qwf37cu2rn755u9ym7p0"
    }
}

// Result
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": [
        {
            "address": "ltc1q8c6fshw2dlwun7ekn9qwf37cu2rn755u9ym7p0",
            "path": "m/84'/2'/0'/0/0"
        },
        {
            "address": "LXkGhTKmZpviAtYdDaxWbiJsdg4tA6EzrU",
            "path": "m/49'/2'/0'/0/7"
        },
        {
            "address": "ltc1qj4plcuyhuzw0sycf99gcayzhhcddfj6xkcke5g",
            "path": "m/84'/2'/0'/0/2"
        },
        {
            "address": "ltc1qsdxa6pseqekqg5d3uksaxnwrey2s2ujcx03alc",
            "path": "m/84'/2'/0'/0/3"
        },
        {
            "address": "ltc1qhuvt3sq8xmx9ktzdfznkzvjl5zup7mg9zpwllw",
            "path": "m/84'/2'/0'/0/4"
        },
        {
            "address": "ltc1qtjd3y5a2axpwzfjcj4y9zy50qfjuxwzm0vu5fq",
            "path": "m/84'/2'/0'/1/3"
        },
        {
            "address": "ltc1qp7ujtprgl0quvcg0dj335p37r2mc2cxdc8xumq",
            "path": "m/84'/2'/0'/1/4"
        }
    ]
}
```

### Example: Static Wallet
The example below specifies a response from a static wallet. The returned address is used for both change and payments. It's the only address with UTXOs.

```javascript
// Request
{
    "id": 1,
    "jsonrpc": "2.0",
    "method": "getAccountAddresses",
    "params": {
        "account": "ltc1q8c6fshw2dlwun7ekn9qwf37cu2rn755u9ym7p0"
    }
}

// Result
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": [
        {
            "address": "ltc1q8c6fshw2dlwun7ekn9qwf37cu2rn755u9ym7p0",
            "path": "m/84'/2'/0'/0/0"
        }
    ]
}
```

## signPsbt
This method can be used to request the signature of a Partially Signed Bitcoin Transaction (PSBT) and covers use-cases e.g. involving multiple-recipient transactions, requiring granular control over which UTXOs to spend or how to route change.

### Parameters
* `Object`
    * `account` : `String` - _(Required)_ The connected account's first external address.
    * `psbt` : `String` - _(Required)_ Base64 encoded string of the PSBT to sign.
    * `signInputs` : `Array`
        * `Object`
            * `address` : `String` - _(Required)_ The address whose private key to use for signing.
            * `index` : `Integer` - _(Required)_ Specifies which input to sign.
            * `sighashTypes` : `Integer[]` - _(Optional)_ Specifies which part(s) of the transaction the signature commits to. Default is `[1]`.
    * `broadcast` : `Boolean` - _(Optional)_ Whether to broadcast the transaction after signing it. Default is `false`.

### Returns
* `Object`
    * `psbt` : `String` - _(Required)_ The base64 encoded signed PSBT.
    * `txid` : `String` - _(Optional)_ The transaction ID as a hex-encoded string, without 0x prefix. This must be returned if the transaction was broadcasted.

## signMessage
This method is used to sign a message with one of the connected account's addresses.

### Parameters
* `Object`
    * `account` : `String` - _(Required)_ The connected account's first external address.
    * `message` : `String` - _(Required)_ The message to be signed by the wallet.
    * `address` : `String` - _(Optional)_ The address whose private key to use for signing the message.
    * `protocol` : `"ecdsa" | "bip322"` - _(Optional)_ Preferred signature type. Default is `"ecdsa"`.

### Returns
* `Object`
    * `address` : `String` - _(Required)_ The Litecoin address used to sign the message.
    * `signature` : `String` - _(Required)_ Hex encoded bytes of the signature, without 0x prefix.
    * `messageHash` : `String` - _(Optional)_ Hex encoded bytes of the message hash, without 0x prefix.

## Events
### bip122_addressesChanged
This event is used by wallets to notify dapps about connected accounts' current addresses, for example all addresses with a UTXO and a few unused addresses. The event data has the same format as the [getAccountAddresses](#getaccountaddresses) result.

#### Implementation Details
* Wallets **should** emit a `bip122_addressesChanged` event immediately after connection approval of a BIP122 chain.
* Wallets **should** emit a `bip122_addressesChanged` event whenever a UTXO is spent or created for a connected account's addresses.
* Dapps **should** listen for `bip122_addressesChanged` events, collect and monitor all addresses for UTXO and balance changes.

Example [session_event](https://specs.walletconnect.com/2.0/specs/clients/sign/session-events#session_event) payload as received by a dapp:
```
{
  "id": 1675759795769537,
  "topic": "95d6aca451b8e3c6d9d176761bf786f1cc0a6d38dffd31ed896306bb37f6ae8d",
  "params": {
    "event": {
      "name": "bip122_addressesChanged",
      "data": [
        {
            "address": "ltc1q8c6fshw2dlwun7ekn9qwf37cu2rn755u9ym7p0",
            "path": "m/84'/2'/0'/0/0"
        },
        {
            "address": "LXkGhTKmZpviAtYdDaxWbiJsdg4tA6EzrU",
            "path": "m/49'/2'/0'/0/7"
        },
        {
            "address": "ltc1qj4plcuyhuzw0sycf99gcayzhhcddfj6xkcke5g",
            "path": "m/84'/2'/0'/0/2"
        },
        {
            "address": "ltc1qsdxa6pseqekqg5d3uksaxnwrey2s2ujcx03alc",
            "path": "m/84'/2'/0'/0/3"
        },
        {
            "address": "ltc1qhuvt3sq8xmx9ktzdfznkzvjl5zup7mg9zpwllw",
            "path": "m/84'/2'/0'/0/4"
        },
        {
            "address": "ltc1qtjd3y5a2axpwzfjcj4y9zy50qfjuxwzm0vu5fq",
            "path": "m/84'/2'/0'/1/3"
        },
        {
            "address": "ltc1qp7ujtprgl0quvcg0dj335p37r2mc2cxdc8xumq",
            "path": "m/84'/2'/0'/1/4"
        }
      ]
    },
    "chainId": "bip122:12a765e31ffd4059bada1e25190f6e98"
  }
}
```
