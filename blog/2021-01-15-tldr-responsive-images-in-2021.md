---
title: TLDR How to prevent layout shifts from image loading in 2021
path: /tldr-responsive-images-in-2021
date: 2020-11-02
summary: Preventing layout shifts when loading images has never been easier.
tags: ["JavaScript", "Service Worker", "Frontend"]
---

Preventing layout shifts when loading responsive images used to be quite hacky.

The most common solution to this problem used to be the ["padding hack"](https://gist.github.com/ozinepank/f38ea0f1d12e51137dd8).

Don't get me wrong, I don't think it's a bad solution at all, as it solves
the problem. But since all modern browsers support the
[needed](https://caniuse.com/mdn-html_elements_img_aspect_ratio_computed_from_attributes) features nowadays,
there is a simpler solution.

## The Solution

Suppose you have an image that is 1920x1080. You want to make it responsive and prevent layout shifts.

### 1.

Set the height and width of the image in HTML,
this does not have to be the actual size of the image It can also be the aspect ratio.

```html
<img src="landscape.jpeg" height="16" width="9" />
```

### 2.

Add this in the CSS for the image.

```css
img {
  display: block;
  width: 100%;
  height: auto;
}
```

You can see an example of this working [here](https://codepen.io/jensimmons/pen/mddddPw?editors=1100).

Also, check out [this](https://www.youtube.com/watch?v=4-d_SoCHeWE&feature=youtu.be) video if you want
an in-depth explanation of why this works.
