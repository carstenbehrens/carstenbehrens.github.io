---
title: How to block domains in Lighthouse
path: /block-domains-in-lighthouse
date: 2020-06-06
summary: Learn to measure your Lighthouse Performance without 3rd Party JavaScript and Ads
tags: ["Frontend", "JavaScript"]
---

We all know that third-party JavaScript and Ads have a big impact on performance.

To know how much of an impact third-party JavaScript and Ads have on our performance we need to be able to measure our
websites performance without them.

As of now, this feature is not available in google chrome directly, so we have to use the Lighthouse CLI.

## 1. Download the Lighthouse CLI

```sh
  npm install -g lighthouse
```

## 2. Create a Lighthouse config file

```javascript
module.exports = {
  extends: "lighthouse:default",
  settings: {
    onlyCategories: ["performance"],
    blockedUrlPatterns: [
      "*upscore.com*",
      "*connect.facebook*",
      "*google-analytics.com*",
    ],
  },
};
```

You use the blockedUrlPatterns array to specify which domains you want to
block.

```javascript
"*test.com"; // Blocks https://somethingtest.com
```

```javascript
"*test*";
// Blocks https://somethingtest.com
// Blocks https://testsomething.com
```

There is no other way to block domains using more complex patterns.

## 3. Run Lighthouse

```sh
lighthouse --config-path=path/to/custom-config.js https://example.com
```

## 4. Get correct results

Make sure to run Lighthouse at least 3 times if you want somewhat accurate
results.
