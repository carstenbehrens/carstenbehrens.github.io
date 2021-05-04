---
title: Open-Closed Principle in JavaScript and TypeScript
path: /open-closed-principle
date: 2020-01-05
summary: Open-Closed Principle in the context of JavaScript and TypeScript.
tags: ["JavaScript", "Software Design"]
---

In this series of Blog Posts, I will take a look at the SOLID Principles in the context of JavaScript and TypeScript.

**SOLID** is an acronym referring to the SOLID Principles of class design that were
popularized by Robert C. Martin.

Usually, these principles get applied to OOP
languages that have classes. JavaScript is different in that it uses prototypal
inheritance instead of classical inheritance. In the code samples, I will be
using the ES6 class syntax because I prefer the new syntax over the ES5 syntax.

## THE OPEN-CLOSED PRINCIPLE

> A software artifact should be open for extension but closed for modification.  
> **Bertrand Meyer**

Or alternatively

> You should be able to extend a classes behavior, without modifying it.  
> **Robert C. Martin**

The goal of software architecture is to make sure that changes to the software are easy to
make. The Open-Closed Principle (OCP) helps us with this goal in that it minimizes changes
that have to be made to working code.

> This goal is accomplished by partitioning the system into components, and arranging those
> components into a dependency hierarchy that protects higher-level components from changes
> in lower-level components.  
> **Robert C. Martin**

This means that we should design a class that is closed to modifications, meaning that it will
not be changed, but also open, since new functionality can be added by **extending** this class.

Let's look at a simple example:

```javascript
class DecimalToBinary {
  // Some other helper functions …

  dec2bin(number) {
    return parseInt(number, 10).toString(2);
  }
}
```

Let's say we have a web app that needed the functionality to convert from decimal to binary
numbers. We could implement a class like the DecimalToBinary class in the example above.
But what would happen if we suddenly need to also convert binary numbers to decimal numbers,
or decimal to hexadecimal and so on?

To do so, we would most likely modify the DecimalToBinary
class. This would violate the Open-Closed Principle.

A better way would be to anticipate this change when designing the class in the first place:

```javascript
class NumberConverter {
  isNumber(number) {
    // Just an example of a helper function
    return true;
  }

  convertBase(number, fromBase, toBase) {
    // A naive implementation without error checking etc.
    return parseInt(number, fromBase).toString(toBase);
  }
}

class DecimalToBinary extends NumberConverter {
  isDecimalNumber(number) {
    // Just an example of a helper function, not actual implementation
    return true;
  }

  dec2bin(number) {
    return this.convertBase(number, 10, 2);
  }
}

class BinaryToDecimal extends NumberConverter {
  isBinaryNumber(number) {
    // Just an example of a helper function, not actual implementation
    return true;
  }

  bin2dec(number) {
    return this.convertBase(number, 2, 10);
  }
}
```

Now you can see that we were able to extend the functionality of our program
without modifying any old code.

This is obviously not the best example as this is a bit overkill and could
also just be solved by a simple function, but it's still a good way to demonstrate the OCP.

### OCP AT THE ARCHITECTURAL LEVEL

By using the OCP together with the [Single Responsibility Principle](https://carstenbehrens.com/single-responsibility-principle/) to organize our components
and the [Dependency Inversion Principle](https://carstenbehrens.com/dependency-inversion-principle/) to manage the dependencies you will naturally create a hierarchy of components.

Higher-level components in that hierarchy are protected from changes made to low-level
components.
