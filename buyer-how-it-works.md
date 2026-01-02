# NovaBid Buyer Guide: How It Works

## Purpose

This guide explains how NovaBid works from a **buyer’s perspective**. It is intended for new and prospective buyers who want transparent pricing, fair competition, and fast outcomes without prolonged negotiation.

---

## What Is NovaBid?

NovaBid is a real-time auction platform built around **time-bound lots**. Instead of static listings or private negotiations, buyers compete openly under predefined rules set by the vendor.

Every bid is:

* Time-stamped
* Cryptographically signed
* Immutable once submitted

This ensures fairness, auditability, and trust.

---

## Key Concepts for Buyers

### Lots

A **lot** is a single auction event. Each lot clearly defines:

* What is being sold
* Auction start and end time
* Bid rules (increments, reserve price, pricing model)
* Eligibility requirements

Lots are temporary. Once closed, outcomes are final.

### Bids

A **bid** represents your offer under the lot’s rules. Bids:

* Cannot be altered after submission
* Are validated instantly
* Compete fairly against other buyers

There are no hidden bids or preferential treatment.

### Events

NovaBid operates on an **event-driven model**. All actions—bids, updates, closures—are recorded as verifiable events, ensuring a clear and complete auction history.

---

## Buyer Journey

### 1. Discover Available Lots

Buyers browse or subscribe to active and upcoming lots. Each lot provides full visibility into:

* Item or service details
* Vendor identity and reputation signals
* Auction rules and timing

You know exactly what you are bidding on and under what conditions.

### 2. Eligibility & Access

Some lots may be:

* Public
* Invite-only
* Restricted by region, verification status, or buyer type

NovaBid enforces eligibility **before bidding**, eliminating uncertainty.

### 3. Place Bids in Real Time

During an active auction:

* Bids are submitted over secure WebSocket (WSS) connections
* Validation and acknowledgment occur in milliseconds
* Competing bids are reflected in near real time

Speed is balanced with fairness—no silent bid manipulation or reordering.

### 4. Auction Close

When the auction ends:

* The winning bid is selected deterministically
* Buyers receive immediate confirmation
* Non-winning bids are finalized cleanly

There are no extensions or manual overrides.

### 5. Settlement & Next Steps

Depending on the lot configuration:

* Settlement instructions may be issued automatically, or
* You proceed through a vendor-defined post-auction workflow

All outcomes are backed by a verifiable event trail.

---

## Buyer Protections

NovaBid is designed to protect buyers through:

* Immutable bid records
* Transparent auction rules
* Deterministic outcomes
* Secure, encrypted transport

What you see during the auction is exactly what the system enforces.

---

## Why Buyers Choose NovaBid

Compared to traditional marketplaces, NovaBid offers:

* Clear pricing competition
* No hidden negotiations
* Faster decision cycles
* Verifiable fairness

You compete on equal footing, every time.

---

## Getting Started as a Buyer

1. Create an account
2. Complete any required verification
3. Browse or subscribe to lots
4. Bid confidently

NovaBid handles the rest.
