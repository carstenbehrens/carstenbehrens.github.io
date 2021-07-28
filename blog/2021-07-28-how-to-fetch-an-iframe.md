---
title: How to add Request Headers to an IFrame src request
path: /how-to-send-request-headers-iframe
date: 2021-07-28
summary: In this blog post, you'll learn how to send a request header while fetching an iframe.
tags: ["iframe", "JWT"]
---

In this blog post, you'll learn how to send a request header while fetching an iframe.

One possible use case for this method is, that you can send an authentication token ([JWT](https://jwt.io/)) to your iframe URL.

# The Solution

Since there is no HTML-Only solution for this problem we'll need some JavaScript.

Here is an simple vanilla JS example:

```html
 <iframe></iframe>
  <script>
    async function getSrc() {
      const res = await fetch("http://example.com/someiframe", {
        method: 'GET',
        headers: {
          // Here you can set any headers you want
        }
      });
      const blob = await res.blob();
      const urlObject = URL.createObjectURL(blob);
      document.querySelector('iframe').setAttribute("src", urlObject)
    }
    getSrc();
</script>
```

**So what's happening here?**

1. We fetch the iframe using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
2. We use the [Response.blob()](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob) method which returns a promise that resolved into a Blob. The [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) object allows us to store the iframe as raw data.
3. Using the [URL.createObjectUrl()](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) method and the Blob as an argument, we create an object URL which is then inserted as the source of our iframe.