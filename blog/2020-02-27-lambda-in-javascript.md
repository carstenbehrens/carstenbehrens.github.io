---
title: What is a Lambda Function in JavaScript
path: /lambda-in-javascript
date: 2020-02-27
summary: Short explanation of Lambda expressions in JavaScript.
tags: ["JavaScript"]
---

Lambda expressions are abstractions that enable a function to be passed around
like data.

```javascript
const testArr = ["1", "2", "3", "4"];

// The function is passed like data,
// like a function parameter in this case
const doubled = testArr.map((x) => x * 2);

const triple = (x) => x * 3;
// Does not have to be an anonymous function
const tripled = testArr.map(triple);
```
