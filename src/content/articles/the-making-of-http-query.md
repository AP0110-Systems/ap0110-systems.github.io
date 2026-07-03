---
title: "The Making of HTTP QUERY"
date: "2026-07-03"
description: "For decades the web had no clean way to send a large search — GET was too small, POST too unsafe. In June 2026 the IETF standardized HTTP QUERY to fix it."
author: "AP0110.ORG"
tags: ["standards", "http", "web"]
---

Almost every developer has done it: needing to send a search to a server, they reach for `POST` — not because the request changes anything, but because the search is too big or too structured to fit in a URL. It works. It also quietly breaks a promise the web makes about what a request means. In June 2026, after roughly two decades of on-and-off debate, the Internet Engineering Task Force ([IETF](/wiki/ietf/)) published [RFC 10008](/docs/rfc-10008-http-query/), giving HTTP a purpose-built method for exactly this: **QUERY**.

## What is the HTTP QUERY method?

The **HTTP QUERY method** is a request method — standardized by the IETF as [RFC 10008](/docs/rfc-10008-http-query/) in June 2026 — that carries a query in the request body while remaining *safe* and *idempotent*. It gives the web one unambiguous way to send a large or structured search that caches and automatic retries can trust, something neither `GET` nor `POST` could offer on its own.

## Two tools, each wrong in its own way

HTTP already had two obvious ways to ask a server a question, and each carried a real cost.

`GET` is the web's read request. It is *safe* — it isn't meant to change anything — and *idempotent* — repeating it has the same effect as making it once. Those two properties are what let the entire ecosystem of browsers, proxies, and CDNs cache responses and retry failed requests without asking permission. The catch is that a `GET` carries its query in the URL. URLs have practical length limits (the spec recommends supporting at least 8,000 octets, but intermediaries vary), they land in server logs and browser history, and encoding rich structured data into them is awkward. Worse, every distinct combination of parameters becomes its own URL — a fragmentation that works against caching rather than with it.

`POST` solves the size problem by putting the query in the request body, where it can be as large and as structured as needed. But `POST` is, by definition, neither safe nor idempotent. To a cache or a proxy, a `POST` looks like it might be *doing* something — placing an order, sending a message — so responses generally aren't cached and failed requests can't be blindly retried. When an API uses `POST` to run a read-only search, the guarantees are lost not because anything changed, but because nothing in the protocol could say "this has a body, and it is still just a question."

QUERY closes that gap: it is a method whose content carries the query, like `POST`, but which is explicitly safe and idempotent, like `GET`.

| Method | Query travels in | Safe & idempotent? | Cacheable / auto-retriable? |
|---|---|---|---|
| `GET` | The URL | Yes | Yes — but capped by URL length |
| `POST` | The request body | No | No |
| `QUERY` | The request body | Yes | Yes |

## A twenty-year itch

The idea is older than the RFC. The HTTP method registry already listed three safe, idempotent methods that carry a body — `PROPFIND`, `REPORT`, and `SEARCH` — all inherited from the WebDAV family of extensions from the early 2000s. `SEARCH` (RFC 5323) in particular did almost exactly what people wanted. But it was bound to XML request formats and tangled up with a corner of HTTP that, as RFC 10008 puts it plainly, "many have mixed feelings" about. It never became the general-purpose query method the wider web reached for.

Discussion resurfaced repeatedly. The RFC credits early conversations to Ashok Malhotra, and notes that the topic was formally reopened by Asbjørn Ulsberg at the 2019 HTTP Workshop — the kind of in-person gathering where long-dormant problems get a second life. From there it moved into the IETF's HTTP Working Group, the same body that maintains the core HTTP specifications, and was carried to publication by Julian Reschke, James Snell, and Mike Bishop, with review from a long list of the group's regulars.

That path matters. HTTP evolves by what the IETF describes as "rough consensus and running code" — a deliberately slow, open process in which a change to something as load-bearing as an HTTP method has to survive years of scrutiny from implementers who will have to live with it. A twenty-year gestation is not a failure of the process; it is the process.

## Why a new name?

One recurring objection was pragmatic: if `SEARCH` already existed and was safe and idempotent, why not simply redefine it? The working group considered exactly that. RFC 10008 lays out why it chose a fresh name instead. The older methods leaned on a single generic media type and let meaning ride entirely on the body; they came weighted with WebDAV history; and crucially, `QUERY` names the thing accurately — it is the natural companion to the *query* component that has lived in URLs since the beginning. A well-chosen method name is documentation that every future reader gets for free.

## What QUERY actually guarantees

Stripped to essentials, a QUERY request sends its parameters in the body and asks the server to process them and return the result — with the standing promise that the request is read-only and repeatable. Because it is safe and idempotent, caches and automatic retries can treat it the way they treat a `GET`.

The specification goes further than a bare method. A server can tell the client that a given query result is *also* available at a stable, cacheable URL — effectively minting a `GET`-able address for a query that was too large to express as one — and it supports conditional requests, so clients can revalidate results they already hold. In other words, QUERY is designed not just to move the query into the body, but to let large, structured queries rejoin the web's caching machinery instead of opting out of it.

## Will anyone use it?

Impartially: a new HTTP method is a slow-burning thing, and QUERY's real test is adoption, not publication. History counsels patience. `PATCH` was standardized in 2010 and took years to become routine in APIs and tooling. WebDAV's methods, for all their technical merit, stayed niche. A method only pays off once servers implement it, client libraries expose it, and — the hard part — the proxies, gateways, and CDNs in between understand it well enough not to mangle or block it. Until that middle layer catches up, developers who adopt QUERY may still need `POST`-based fallbacks, and some will reasonably conclude that a well-documented `POST` convention is good enough for now.

What has changed is that the ambiguity is finally resolvable. Before RFC 10008, a body-carrying read had no standard way to announce itself as safe. Now it does, blessed by the same open, vendor-neutral process that produced the rest of HTTP. Whether QUERY becomes ubiquitous or stays a specialist tool, the web is slightly more honest for having it: a request that only asks a question can, at last, say so.

## Frequently asked questions

### Why not just use POST for searches?

POST works, but it is neither safe nor idempotent, so caches and proxies must assume it might change data. They generally won't cache POST responses or retry failed ones. QUERY signals that a body-carrying request is read-only and repeatable, restoring the caching and retry behavior POST gives up.

### How is QUERY different from GET?

Both are safe and idempotent, but GET carries its query in the URL, which limits size and fragments caches. QUERY moves the query into the request body, so large or structured searches no longer have to fit in a URL — while keeping the same read-only guarantees that make GET cacheable.

### When was HTTP QUERY standardized, and by whom?

The IETF published QUERY as RFC 10008 in June 2026, authored by Julian Reschke, James Snell, and Mike Bishop through the HTTP Working Group. The underlying idea circulated for roughly two decades and was formally reopened at the 2019 HTTP Workshop by Asbjørn Ulsberg.

### Is the HTTP QUERY method widely supported yet?

Not yet. As a newly published standard, QUERY depends on servers, client libraries, and intermediaries such as proxies and CDNs adding support. Adoption of new HTTP methods is historically slow, so developers may still need POST-based fallbacks until tooling catches up.

---

*Primary sources: the full text of [RFC 10008: The HTTP QUERY Method](/docs/rfc-10008-http-query/) is mirrored in our library, alongside background on the [IETF](/wiki/ietf/), the standards body that produced it. The canonical record lives at the [IETF Datatracker](https://datatracker.ietf.org/doc/rfc10008/).*
