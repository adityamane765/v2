/** Plain-language strings for the marketing landing page. */

export const hero = {
  lede:
    "Darknyx is a private central-limit-order-book for Solana. Traders keep order intent out of public mempools, the matcher runs inside an attested Intel TDX enclave, and Solana verifies custody, settlement, and withdrawals with proofs.",
  aside:
    "Built for active traders, market makers, and institutions that need discretion without accepting a custodial black box.",
};

export const plainBand = {
  eyebrow: "Why it matters",
  title: "Public order books leak alpha. Private venues usually ask for trust. Darknyx removes that tradeoff.",
  points: [
    {
      title: "Intent stays private",
      body: "Side, size, and limit price are sent to the TEE matcher, not broadcast into Solana transactions, logs, or accounts before a match clears.",
    },
    {
      title: "Custody stays on Solana",
      body: "Funds live in the vault program as shielded note commitments. The matcher cannot withdraw user funds or bypass nullifier and Merkle checks.",
    },
    {
      title: "Outcomes stay auditable",
      body: "Every batch settles with TEE signatures and zero-knowledge proofs so auditors can verify conservation, authorization, and replay protection.",
    },
  ],
};

export const features = {
  eyebrow: "Investor brief",
  title: "A privacy venue with a verifiable settlement core",
  titleMuted: "built for Solana-scale liquidity.",
  lede:
    "Darknyx pairs the market structure of a dark pool with the audit surface investors expect from crypto infrastructure: user-side keys, attested matching, and on-chain proof verification.",
  cards: [
    {
      eyebrow: "01 · Hidden intent",
      title: "Your orders don't\nhit the public mempool.",
      sub: "Side, size, and price stay private until a batch clears.",
      tech: "Private matching",
    },
    {
      eyebrow: "02 · Verifiable settlement",
      title: "Every fill comes\nwith a proof.",
      sub: "The chain checks that settlement was valid — you don't have to take anyone's word for it.",
      tech: "On-chain proofs",
    },
    {
      eyebrow: "03 · Attested executor",
      title: "A trusted operator\nruns the match.",
      sub: "An attested service signs outcomes; Solana enforces them atomically.",
      tech: "TEE attestation",
    },
    {
      eyebrow: "04 · Shielded balances",
      title: "Tokens move as\nprivate notes.",
      sub: "Deposits and withdrawals use encrypted bookkeeping — only you control your keys.",
      tech: "UTXO vault",
    },
  ],
};

export const flow = {
  eyebrow: "Product flow",
  title: "From wallet to private batch to final settlement.",
  titleMuted: "The user experience stays familiar.",
  lede:
    "Users sign normal Solana transactions for custody actions and sign order intents with a separate trading key. The system keeps the sensitive path private and the money path verifiable.",
  stages: [
    {
      title: "Join & fund",
      body: "Create a local trading key, attest the TEE, and deposit into the vault. The on-chain balance becomes a private note commitment rather than a public strategy signal.",
    },
    {
      title: "Trade in the batch",
      body: "Submit signed order intent to the enclave. The matcher runs frequent batch auctions and returns fills without exposing individual quotes to validators or competitors.",
    },
    {
      title: "Settle & cash out",
      body: "Settlement lands on Solana with proof material and the registered TEE signature. Withdrawals require the user's own spend proof, preserving user-controlled exits.",
    },
  ],
  footnote:
    "The docs page expands this into the custody layer, matching layer, cryptography, trust model, API, and roadmap.",
};

export const cta = {
  title: "Preparing for investor diligence",
  titleMuted: "One story, two depths: overview for the round, docs for technical review.",
  body: "Start with the architecture explorer for the system map, then use the docs portal for the trust model, settlement pipeline, API surface, and competitive differentiation.",
};
