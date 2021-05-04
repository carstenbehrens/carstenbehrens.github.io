---
title: Pure Functions for Dummies
path: /pure-functions
date: 2019-08-26
summary: Functions that produce no side effects and have the same output given the same input are called "pure".
tags: ["JavaScript"]
---

## What is a pure function

Functions that produce no side effects and have the same output given the same input are called "pure".

You can easily check if a function is pure:

- Pure functions always return the same output given the same input

- Pure functions have no side-effects

**Some examples:**

Pure Function:

```javascript
function triple(value) {
  return value * 3;
}
```

Impure Function:

```javascript
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
```

## The advantages of pure functions

- Easier to test, because they are deterministic (Same input = Same output)
- Portable, pure functions are not dependent on their environment and therefore can be more easily reused
- Makes functions memoizable
- Easier to refactor, because you don't have to worry about side effects
