---
title: TLDR JavaScript module formats
path: /tldr-javascript-module-formats
date: 2020-08-19
summary: Since JavaScript didn't use to have a core feature in the language that supports modules, a few different module formats have emerged.
tags: ["JavaScript", "Frontend"]
---

Since JavaScript didn't use to have a core feature in the language that supports modules, a few different
module formats have emerged.

## The different JavaScipt module formats

Here is a short explanation of the different formats and their use cases.

### IIFE - for browsers

IIFE stands for **I**mmediately **I**nvoked **F**unction **E**xpression.

IIFE's where used in ES5 before ES6 modules got introduced.

Nowadays they are still used when you want to include a script directly in the browser. Since a lot of browsers still do not support ES6 modules.

**Example:**

```html
<script src="module-name.js"></script>
```

### CommonJS - for Node

CommonJS is the module specification that is used in Node.js for working with modules.

**Example:**

```javascript
const package = require("module-name");
```

### ES6 modules - for modern frontend build

ES6 modules are native to JavaScript so they can be used without any loaders.

But since modules (and other ES6 features that you likely also want to use) are not
supported in all browsers, we still need to transpile them to ES5 before we can ship
them to our users.

**Example:**

```javascript
import package from "module-name";
```
