---
title: How to render an Array in React
path: /render-an-array-in-react
date: 2020-01-28
summary: Let's say you have an array like this...
tags: ["JavaScript", "React", "Frontend"]
---

Let's say you have an array like this:

```javascript
const cars = ["BMW", "Mercedes", "Audi", "Volkswagen", "Ferrari"];
```

Let's say you want to render those names in a list.

A typical solution to this problem would look like this:

```javascript
const cars = ["BMW", "Mercedes", "Audi", "Volkswagen", "Ferrari"];

function App() {
  return (
    <ul>
      {cars.map((car) => (
        <li key={car}>Car: {car}</li>
      ))}
    </ul>
  );
}
```

You just have to remember that you need to provide a unique key to each child.

For more information check out the [React Documentation](https://fb.me/react-warning-keys) on this specific issue.
