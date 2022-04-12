---
title: Dependency Inversion Principle in JavaScript and TypeScript
path: /dependency-inversion-principle
date: 2022-01-18
summary: Interface Segregation Principle in the context of JavaScript and TypeScript.
tags: ["JavaScript", "TypeScript", "Software Design"]
---

In this series of blog posts, I will take a look at SOLID Principles in the context of JavaScript.

**SOLID** is an acronym referring to the SOLID Principles of class design that were
popularized by Robert C. Martin.

## THE DEPENDENCY INVERSION PRINCIPLE

> Modules that encapsulate high-level policy should not depend upon modules
> that implement details. Rather, both kinds of modules should depend upon
> abstractions.
> **Robert C. Martin**

Or in a more simple way:  
**A.** High-level modules should not depend on low-level modules. Both should depend on abstractions.  
**B.** Abstractions should not depend upon details. Details should depend upon abstractions.  

This means that an abstraction (interface or abstract class) should not depend
on a detail (concrete classes).

The goal of the DIP is to decouple high-level modules from low-level modules.
This safeguards the higher-level modules from possibly breaking changes in
lower-level modules.

The best way to explain the DIP is to look at the flow of control of an exemplary
program. Let's say we have an API that allows us to create video courses. We have
a `CourseController` that handles the routing, validation, and stuff like that. 
Then we have a `CourseService` that will handle the creation of courses, get courses, and so on...

The simplified code for a class of such program might look like this:

```typescript
class CourseService {
  // ...
}

class CourseController {
  constructor(courseService: CourseService) {
    this.courseService = courseService;
  }

  async get() {
      // ...
        const data = await courseService.getCourses()
      // ...
  }
}
```

In this example we use a constructor function to provide a CourseService to our
CourseController class. The CourseService then gets used in the `get` method
of the CourseController.

The flow of control looks like this:

![diagram](./images/flow-of-control-1.jpg)

This means that **a high-level module depends on a low-level module**. The question
you have to ask yourself is: Do I want my high-level policy to be polluted by
low-level detail?

Now imagine that CourseService itself depends on other modules which themselves
depend on even lower-level modules. A change in one of the low-level modules could
break modules that depend on it.

To stop this from happening we need to **invert** the dependency. Basically, we will
add an interface between the two classes.

Afterward, the flow of control should look like this:

![diagram](./images/flow-of-control-3.jpg)

And the code:

```typescript
interface ICourseService {
  getCourses(): Promise<ICourse>
}

class CourseService implements ICourseService{
  getCourses() {
    //...
  }
}

class CourseController {
  constructor(courseService: ICourseService) {
    this.courseService = courseService;
  }

  async get() {
    // ...
    const data = await courseService.getCourses()
    // ...
  }
}
```

**We changed the CourseController class in such a way that it only refers to an abstraction of the
CourseService (the interface ICourseService), not to a concrete class.**
