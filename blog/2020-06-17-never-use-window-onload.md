---
title: Never use window.onload
path: /never-use-window-onload
date: 2020-06-17
summary: What to do when window.onload is not working.
tags: ["JavaScript", "Frontend"]
---

The window.onload event gets fired when all resources - including images, external script, CSS - of a page have been loaded.

If you want to do something when that event has been fired you should always use the window.addEventListener method.

```javascript
window.addEventListener("load", function() {
  console.log("Site has been loaded");
});
```

Here is why:

```javascript
window.onload = function() {
  console.log("Site has been loaded");
};
```

Consider this code above, the result is exactly the same as when using the addEventListener method.

So what is the difference?

**The window.onload property can only be assigned once!**

```javascript
window.onload = function() {
  console.log("This will not be logged");
};

window.onload = function() {
  console.log("Because its overwritten here!");
};
```

This can lead to ugly bugs and unintended behavior.

[Here](https://codepen.io/cbeh/pen/jOWMQaG) is a codepen demonstrating this behavior.
