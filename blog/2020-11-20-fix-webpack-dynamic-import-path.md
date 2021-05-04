---
title: How to Fix Webpack Dynamic Import with Wrong Path
path: /fix-webpack-dynamic-import-path
date: 2020-11-20
summary: When using the dynamic import for code splitting you'll need to specify the publicPath option to let Webpack know where your assets are.
tags: ["JavaScript", "Webpack", "Frontend"]
---

When using the dynamic import for code splitting you'll need to specify the
[publicPath](https://webpack.js.org/guides/public-path/) option to let Webpack
know where your assets are.

Here is an example:

**webpack.config.js**

```js
output: {
  filename: "[name].[contenthash].js",
  path: path.join(__dirname, "public/__assets"),
  publicPath: "/__assets/",
},
```

**path**  
All our bundle files are saved into the directory specified in this entry.
So in my case, all my Javascript files are saved under "/public/\_\_assets".

**publicPath**  
When using the dynamic import, webpack will just generate script tags in your HTML
that will point to the files with this prefix added.

In my case, this would be "/public/\_\_assets".

If you leave this blank **it defaults to "/"** meaning that the browser would try
to find the requested Javascript file under /[chunkname].js

![script-tag](script-tag.jpg)

If the browser cannot find this file you will see the error:
Uncaught (in promise) ChunkLoadError: Loading chunk failed.

![error](error.jpg)
