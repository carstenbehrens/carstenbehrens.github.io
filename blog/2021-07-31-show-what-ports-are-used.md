---
title: How to show what Ports are being used on Linux
path: /show-what-ports-are-used-on-linux
date: 2021-07-31
summary: 
tags: ["Linux", "Ports"]
---

To show what ports are being used on your Linux system you can run the ss command:

```
ss -ltp
```

Here are the options and their explanation that are added to the ss command:

**-l**  
Display only listening sockets.

**-t**  
Display TCP sockets.

**-p**  
Show the process that is using the socket.

