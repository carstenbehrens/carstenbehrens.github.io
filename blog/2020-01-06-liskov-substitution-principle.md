---
title: Liskov Substitution Principle in JavaScript and TypeScript
path: /liskov-substitution-principle
date: 2020-01-06
summary: The Liskov Substitution Principle in the context of JavaScript and TypeScript.
tags: ["JavaScript", "Software Design"]
---

In this series of Blog Posts, I will take a look at the SOLID Principles in the context of JavaScript and TypeScript.

**SOLID** is an acronym referring to the SOLID Principles of class design that were
popularized by Robert C. Martin.

Usually, these principles get applied to OOP
languages that have classes. JavaScript is different in that it uses prototypal
inheritance instead of classical inheritance. In the code samples, I will be
using the ES6 class syntax because I prefer the new syntax over the ES5 syntax.

## THE LISKOV SUBSTITUTION PRINCIPLE

> Derived classes must be substitutable for their base classes.  
> **Robert C. Martin**

Or

> All derivatives must conform to the behavior that clients expect of the base classes that they use.  
> **Robert C. Martin**

In the context of JavaScript, this means that:

- Methods of a subclass that override methods of a base class must have exactly
  the same number of arguments.

- Each argument of the overridden method must be the same type as the method of
  the base class.

- The return type of the overridden method must be the same as the method of
  the base class.

- The types of exceptions thrown from the overridden method must be the same as
  the method of the base class.

**The best way to explain the LSP is by showing an example:**

```javascript
class Bird {
  fly(speed) {
    return `Flying at ${speed} km/h`;
  }
}

class Eagle extends Bird {
  dive() {
    // ...
  }

  fly(speed) {
    return `Soaring through the sky at ${speed}`;
  }
}

// LSP Violation:
class Penguin extends Bird {
  fly() {
    return new Error("Sorry, I cant fly");
  }
}
```

In this example, the Eagle class overrides the fly method this does not violate
the LSP because the new methods signature is compatible with the base class
method. Methods of a subclass that override methods of a base class must have the same number of arguments. The LSP **does not** insists that the return value of an overridden method also has to be the same.

The Penguin class violates the LSP in three ways:

1. The overridden fly method does not have the same number of arguments.
2. The return type of the fly method is not the same.
3. The types of exceptions thrown are not the same.
