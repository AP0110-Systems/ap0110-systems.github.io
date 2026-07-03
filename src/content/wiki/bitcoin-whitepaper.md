---
title: "Bitcoin: A Peer-to-Peer Electronic Cash System"
date: "2008-10-31"
description: "Nakamoto's nine-page design for electronic cash without a trusted third party — the strongest practical proof that a global system can run with no central owner."
type: analysis
tags: ["decentralization", "cryptography", "2000s"]
---

## Summary

[Nakamoto](/wiki/nakamoto/)'s whitepaper defines an electronic coin as a chain of digital signatures and solves the one problem signatures alone cannot: double-spending. Instead of a bank or mint deciding which transaction came first, transactions are publicly announced and timestamped into a chain of hash-based proof-of-work. The longest chain is the agreed history, and rewriting it requires redoing the work — so the record stands as long as honest nodes control a majority of CPU power ("one-CPU-one-vote"). Block rewards and transaction fees make it more profitable to extend the honest chain than to attack it, and the closing calculations show an attacker's chance of catching up falls off exponentially as confirmations accumulate.

## Why it matters

The paper's core move is replacing *trust in an intermediary* with *cryptographic proof verifiable by anyone* — and it worked at global scale, making it the strongest practical demonstration of [decentralization](/wiki/decentralization/) to date. The network design is deliberately minimal: nodes need no identity, no registration, and no permission; they can leave and rejoin at will. Bitcoin is the "Own" in the Read-Write-Own framing of the web's evolution, later generalized from currency to applications by [Ethereum's Web3](/docs/ethereum-web3/), and a direct input to the Independent Internet's trustless-infrastructure principle — see [decentralization across the lineage](/wiki/decentralization-across-the-lineage/).

> Part of the AP0110.ORG source library. See the [wiki overview](/wiki/).

---
*Full source text: [read the original document](/docs/bitcoin-whitepaper/).*
