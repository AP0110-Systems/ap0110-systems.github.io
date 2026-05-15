# Schema Templates Reference

Full JSON-LD templates for all schema types used in SEO, GEO, and AEO.
Always place in `<head>` or end of `<body>`. Validate at schema.org/validator
and Google's Rich Results Test.

---

## Organization (site-wide — homepage and About page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brand Name",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "description": "What the organization does in 1-2 sentences.",
  "foundingDate": "2020",
  "sameAs": [
    "https://www.linkedin.com/company/brand",
    "https://twitter.com/brand",
    "https://www.wikidata.org/wiki/Q[ID]",
    "https://en.wikipedia.org/wiki/Brand_Name"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@example.com"
  }
}
```

---

## Article (all blog posts and guides)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title Here",
  "description": "150-160 character description.",
  "image": "https://example.com/article-image.jpg",
  "datePublished": "2026-03-22",
  "dateModified": "2026-03-22",
  "author": {
    "@type": "Person",
    "name": "Author Full Name",
    "url": "https://example.com/authors/name/",
    "sameAs": "https://www.linkedin.com/in/authorname"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Brand Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "mainEntityOfPage": "https://example.com/article-url/"
}
```

---

## FAQPage (any page with a FAQ section)

Use on any page with 2+ Q&A pairs. This is the highest-impact AEO schema —
enables PAA eligibility, AI Overviews inclusion, and voice answer sourcing.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is [Topic]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complete answer here in plain text, no HTML. 40-60 words ideal."
      }
    },
    {
      "@type": "Question",
      "name": "How do I [action]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct answer. Works as standalone audio with no visual context."
      }
    }
  ]
}
```

---

## QAPage (dedicated Q&A pages)

Use on pages where the entire page is built around one question and answer.
This is the primary voice answer source schema.

```json
{
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "What is the best way to [action]?",
    "text": "Full question text as a user would type or speak it.",
    "dateCreated": "2026-01-15",
    "answerCount": 1,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Complete answer here. 40-60 words for snippet eligibility. No HTML tags. Reads naturally aloud.",
      "dateCreated": "2026-01-15",
      "upvoteCount": 0,
      "url": "https://example.com/page/#answer"
    }
  }
}
```

---

## HowTo (step-by-step instructional pages)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to [Complete Task]",
  "description": "Brief description of what this guide accomplishes.",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "tool": [
    {"@type": "HowToTool", "name": "Tool or item needed"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1 short title",
      "text": "Full instruction in 1-2 sentences. Action verb first.",
      "image": "https://example.com/step1-image.jpg",
      "url": "https://example.com/how-to-page/#step1"
    },
    {
      "@type": "HowToStep",
      "name": "Step 2 short title",
      "text": "Full instruction for step 2.",
      "url": "https://example.com/how-to-page/#step2"
    }
  ]
}
```

---

## Speakable (Google Assistant TTS optimization)

Marks specific page sections as optimized for text-to-speech reading.
Currently used by Google Assistant primarily for news content, but
benefits any page with structured answer sections.

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".answer-box", "h1", ".article-summary"]
  },
  "url": "https://example.com/this-page/"
}
```

Mark only the most concisely written content. Avoid marking sections with
tables, bullet points, or special characters — TTS handles these poorly.

---

## Person (author pages and personal brand sites)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Full Name",
  "jobTitle": "Job Title",
  "url": "https://example.com/about/",
  "image": "https://example.com/headshot.jpg",
  "sameAs": [
    "https://linkedin.com/in/name",
    "https://twitter.com/name",
    "https://www.wikidata.org/wiki/Q[ID]"
  ],
  "knowsAbout": ["Topic 1", "Topic 2", "Topic 3"],
  "worksFor": {
    "@type": "Organization",
    "name": "Brand Name"
  }
}
```

---

## BreadcrumbList (all non-homepage pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/"},
    {"@type": "ListItem", "position": 2, "name": "Category", "item": "https://example.com/category/"},
    {"@type": "ListItem", "position": 3, "name": "This Page", "item": "https://example.com/category/page/"}
  ]
}
```

---

## DefinedTerm (glossary and definition pages)

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "name": "Term Name",
  "description": "Plain-language definition in 1-2 sentences.",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "name": "Your Glossary Name",
    "url": "https://example.com/glossary/"
  }
}
```

---

## LocalBusiness (local and product businesses)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://example.com/photo.jpg",
  "url": "https://example.com",
  "telephone": "+1-555-555-5555",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "CA",
    "postalCode": "90210",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.0,
    "longitude": -118.0
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.google.com/maps/place/...",
    "https://maps.apple.com/?id=..."
  ]
}
```
