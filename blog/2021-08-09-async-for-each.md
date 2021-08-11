---
title: Async forEach
path: /how-to-async-for-each
date: 2021-09-09
summary: Why forEach and async functions don't mix
tags: ["JavaScript", "Frontend", "Backend"]
---

Consider this piece of JavaScript code:

```javascript
function greetApi(name) {
    return new Promise((resolve) => setTimeout(resolve(`Hello ${name}!`), 300));
}

const test = await greetApi("Brandan Eich");

console.log(test); // "Hello Brendan Eich!"
```

We call an asynchronous function we use the `await` keyword to wait for the promise to resolve and the log the result
of that promise. Easy enough...

Now consider this piece of code:

```javascript
const names = ['Lance', 'Luke', 'Lisa']
const result = []

names.forEach(async name => {
  const greeting = await greetApi(name)
  result.push(greeting)
});

console.log(result); // "[]"
```

Save to say this behavior was not what I expected.
And I proceeded to spend an embarrassing amount of time trying to look for a bug in other areas of my code...

To save you some time here is how you fix this issue:

```javascript
const names = ['Lance', 'Luke', 'Lisa']

const result = await Promise.all(names.map(async (n) => await greetApi(n)))

console.log(result); // "[ 'Hello Lance!', 'Hello Luke!', 'Hello Lisa!' ]"
```

**But Why**

If you take some times think about this, it makes perfect sense.

The forEach method executes the asynchronous function that we provided, but a forEach method also does
not return anything. That's why we cannot wait for all the Promises to be finished.
