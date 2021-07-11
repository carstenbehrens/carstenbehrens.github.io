---
title: How to add a path to zsh or bash on Linux
path: /how-to-add-path-to-zsh-or-bash-on-linux
date: 2021-07-11
summary: How to fix the command not found on Linux.
tags: ["Linux"]
---

If you just want to get straight to the point, here is the [TLDR](#1).

After installing programs on Linux you'll often find that you cannot execute them from your terminal.

I had this issue after installing [httpie](https://httpie.io/) on my Linux system. Here is the error message I saw when trying to start http from the terminal.

```bash
zsh: command not found: http
```

The problem here is that the directory where this program is located is not in the PATH variable. This means that
Linux cannot find the program since it does not know where to look for it.

Here is how I fixed this issue:

## Find the path of the program

```bash
sudo find / -name 'http' -executable -type f
```

This will output a bunch of search results
```
/var/lib/docker/overlay2/b283f8edcb8d1489f307b9e42948cb959a066f92429d526922fd2ec34555bf7e/diff/usr/lib/apt/methods/http
find: ‘/run/user/1000/gvfs’: Permission denied
/usr/lib/apt/methods/http
/home/username/.local/bin/http
```

So on my system, I have three different search results...

How do I know which one is the correct one?

The standard directoy for executable programs is /bin. So I will just
assume that the /home/username/.local/bin/http is the correct one.

## Show our current PATH variable 

So lets take a look at our current path.

```bash
echo $PATH
/home/username/.nvm/versions/node/v14.17.2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

Here you can see all directories that I have in my PATH variable. The directories are divided by `:`.

So here is the full list displayed in an more eye friendly way:

```bash
/home/username/.nvm/versions/node/v14.17.2/bin
/usr/local/sbin
/usr/local/bin
/usr/sbin:/usr/bin
/sbin
/bin
/usr/games
/usr/local/games
/snap/bin
```

So you'll notice that `/home/username/.local/bin/http` is missing from that list, therefore Linux is not able to find `http`.

## Add a new directory to our PATH variable
<div id="1"></div>

Edit your .zshrc or your .bashrc file depending on what shell you use. And add the following line, where `/home/username/.local/bin` is the path you want to add.

```bash
PATH=$PATH:/home/username/.local/bin
```

As you can see we use the $PATH variable and the `:` to **add** to the already existing list of directories.

After that restart your terminal and test the command again.

```bash
http google.com
```