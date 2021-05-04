---
title: TLDR - Recursion in JavaScript
path: /recursion-javascript
date: 2019-09-08
summary: Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.
tags: ["JavaScript", "Frontend"]
---

## What is Recursion

Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.

## Problem: Counting Vowels of a String

### Not using Recursion

```javascript
function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char);
}

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count++;
    }
  }
  return count;
}
```

### Using Recursion

```javascript
function countVowels(str) {
  if (str.length == 0) return 0;
  let first = isVowel(str[0]) ? 1 : 0;
  return first + countVowels(str.slice(1));
}
```
