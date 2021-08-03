---
title: The basics of JWT (JSON Web Tokens) for Dummies
path: /jwt-basics-for-dummies
date: 2021-08-03
summary: Simple concise explanation of JSON Web Tokens
tags: ["JWT", "Auth"]
---

JSON Web Tokens are a proposed internet standard that allows for stateless authentication.

## Use

JWT are mostly used to authenticate users in the context of websites / web application.

## Example

Before going into the nitty-gritty here is a simple example of its usage:

Let's say we have a Web Application called Tweeter, this Web Application can do a bunch of fancy stuff but let's focus
on the user profile. Now obviously each user should only be able to access their own user profile settings.

So very simply User with ID 123 should only be able to access profile settings of User ID 123.

**Here is how the authentication flow could look like:**

![Web Push Overview](./images/JWT-1.png)

Looking at this diagram you'll notice two things:

**1.**  
Once the User/Browser has the Token, the DB is no longer needed to authenticate the user.
**This is why it's called stateless authentication.**

**2.**  
With the Token, we can send information about the user, in this example the ID.  
This information can then be verified using the Secret Key.

## The JWT

The Token itself is either send via Cookie or via [Authorization Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization).

E.g.:
```
Authorization:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjc5MjgyMzksInVzZXJSb2xlcyI6WyJBRE1JTiIsIkRCX1JFQUQiLCJEQl9XUklURSJdLCJ1c2VySWQiOjEyMzQ1LCJpYXQiOjE2Mjc5MjgxMTl9.8vTwsBOp8LSa0sdc0nWAUnmWAAgOnS0ElB3bfaiSRfQ
```

The mangled mess of letters and numbers is nothing more than **encoded** JSON. Notice that it is **encoded** not
**encrypted** that means we can easily decode it.

```js
JSON.parse(atob("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")) // This will return: {alg: "HS256", typ: "JWT"}
```

Using the [jwt.io](jwt.io) website we can make it really easy for ourselves. Just paste the JWT and get the decoded JSON data.

![Web Push Overview](./images/JWT-2.png)

The JWT is made up of three parts:

**Header:**  
Contains information on the signing algorithm that was used.  

**Payload:**  
Contains the claims. Like UserId and any other information you want to use, but also a bunch of reserved Claims that you can see [here](https://auth0.com/docs/tokens/json-web-tokens/json-web-token-claims#reserved-claims).

**Footer:**  
Contains the signature of the token that can be verified with the Secret Key. 
If the Token gets changed in any way, it won't be valid anymore.

If you need more input on this topic I highly suggest you watch this [presentation](https://www.youtube.com/watch?v=67mezK3NzpU), it's great.