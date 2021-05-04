---
title: Single Responsibility Principle in JavaScript
path: /single-responsibility-principle
date: 2020-01-04
summary: Single Responsibility Principle in the context of JavaScript.
tags: ["JavaScript", "Software Design"]
---

In this series of Blog Posts, I will take a look at SOLID Principles in the context of JavaScript and TypeScript.

**SOLID** is an acronym referring to the SOLID Principles of class design that were
popularized by Robert C. Martin.

Usually, these principles get applied to OOP languages that have classes. JavaScript is different in that it uses prototypal
inheritance instead of classical inheritance. In the code samples, I will be
using ES6 classes because I prefer the new syntax over the ES5 syntax.

## THE SINGLE RESPONSIBILITY PRINCIPLE

> "A class should have one, and only one, reason to change"  
> **Robert C. Martin**

The word **"class"** here can also be replaced by **"module"**, the point is that the
Single Responsibility Principle (SRP) is not limited to object-oriented design.

The best way to understand the SRP is to look at some examples of code that
violates this rule.

```javascript
/* Bad example */

class Employee {
  calculatePay() {
    //...
  }

  reportHours() {
    //...
  }

  saveToDB() {
    //...
  }
}
```

This class violates the SRP because it has more that one reason to change.

Let's say that we wanted to change the **reportHours** method. To do this we
have to change the code inside the **Employee** class, which means that we
could potentially break some of the other methods in our class.

If you think about it, it makes no sense. Why should we be able to break
something that does not need to change?

This is where the SRP is important, it
ensures that there is only **"one reason to change"**. Robert C. Martin defines
**"only one reason to change"** as **"should only be responsible to one"**. In this
case, this means that the Employee class should be split up into smaller
classes.

**This does not mean that the Employee class should only have one method, it can
have many methods but it should only have one reason to change.**
