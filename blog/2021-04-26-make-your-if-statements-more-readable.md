---
title: How to Make your If Statements more readable by using this ES2020 Feature
path: /make-your-if-statements-more-readable
date: 2021-04-26
summary: Use Optional Chaining to reduce Noise-to-Signal Ratio.
tags: ["JavaScript", "Software Design"]
---

Have you ever written an if-statement like this?

```javascript
// The object we are working with
const car = {
  make: {
    name: "bmw",
    founded: 1916,
    country: "germany",
  },
};

if (car && car.make && car.make.name && car.make.name === "bmw") {
  // Do something.
}
```

In JavaScript, we often check if each property exists.
We do this because we don't want to run into errors.

**The only problem:**

- It's ugly
- It's harder to read than it needs to be
- Noise-to-Signal Ratio is high

## THE BETTER WAY

Thanks to [optional chaining](https://tc39.es/proposal-optional-chaining/) which is part
of [ES2020](https://262.ecma-international.org/11.0/#sec-optional-chains), you can now do this:

```javascript
// The object we are working with
const car = {
  make: {
    name: "bmw",
    founded: 1916,
    country: "germany",
  },
};

if (car?.make?.name === "bmw") {
  // Do something.
}
```

- Beautiful
- Easier to read
- Noise-to-Signal Ratio is low

In my opinion, it's the best way to check if a property exists in your if statements.
