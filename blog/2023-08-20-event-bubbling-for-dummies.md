---
title: Event bubbling for Dummies
path: /form-validation-using-vue-and-yup
date: 2023-08-20
summary: Event bubbling describes how Events bubble from child element to parent element through the DOM.
tags: ["JavaScript", "Frontend"]
---

Before we can go into what Event bubbling is, we have to make sure that we understand what an `Event` is.

An `Event` is something that happens on a webpage, for example, a user clicking on a button or an error that occurs.

Events are fired and then handled via an event handler. (Or ignored if we don't have any event handler listing for that Event)

## Events in action

An example of an event being fired and an event handler looks like this.

```html
<button>Click Me</button>
<script>
    document.querySelector("button").addEventListener("click", (event) => console.log(event))
</script>
```

So what is happening here is the following:

1. We search the button via the querySelector
2. We attach an event listener
3. We `console.log` the event

Now let's go into event bubbling.

## Event bubbling

The example above is pretty straightforward, but what happens if we don't attach the event handler to the button directly?

```html
<div>
    <button>Click Me</button>
</div>
<script>
    document.querySelector("div").addEventListener("click", (event) => console.log(event))
</script>
```

In this case, we attach the event handler to the div that is the **parent** of the button. Even though the event handler
is not attached to the button, the event handler still gets called.

This is because the event "bubbles" up from the child element to the parent element and so on.

It is noteworthy that the event will keep "bubbling up" after an event handler has already handled it.

```html
<div>
    <button>Click Me</button>
</div>
<script>
    document.querySelector("div").addEventListener("click", (event) => console.log(event))
    document.querySelector("button").addEventListener("click", (event) => console.log(event))
</script>
```

Both event handlers will be called.