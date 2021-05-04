---
title: How to kill a process running on a port
path: /kill-process-on-port
date: 2020-08-30
summary: TLDR How to kill a process running on a port.
tags: ["Linux"]
---

**To find the process id (on port 5000):**

```sh
lsof -i:5000
```

**Output:**

```sh
COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
node    66070 apollo   19u  IPv6 569875      0t0  TCP *:5000 (LISTEN)
```

Here you can see the process id. You'll need this id to kill the process.

**To kill the process:**

```sh
kill 66070
```

That's it.

If this does not work, try:

```sh
kill -9 66070
```

This will send the [SIGKILL](<https://en.wikipedia.org/wiki/Signal_(IPC)#SIGKILL>) signal
wich will immediately kill the process.
