---
title: How to test a class method with Jest
path: /how-to-test-class-method-jest
date: 2020-09-01
summary: Shot explanation of how to test a class method with Jest.
tags: ["JavaScript", "Frontend", "Backend"]
---

How to test if a method has been called:

```javascript
class Person {
  greet() {
    console.log("Hi!");
  }
}

test("greet has been called", () => {
  const person = new Person();

  // We have to spy on the instance of the Person class because jest.spyOn expects an object as its first argument
  const spyOnGreet = jest.spyOn(person, "greet");

  person.greet();

  expect(spyOnGreet).toHaveBeenCalled();
});
```

How to test a method that gets called in the constructor:

```javascript
class Person {
  constructor() {
    this.greet();
  }

  greet() {
    console.log("Hi!");
  }
}

test("greet has been called", () => {
  // Now we have to spy on the prototype of the Person class because jest.spyOn expects an object as its first argument
  const spyOnGreet = jest.spyOn(Person.prototype, "greet");

  const person = new Person();

  expect(spyOnGreet).toHaveBeenCalled();
});
```
