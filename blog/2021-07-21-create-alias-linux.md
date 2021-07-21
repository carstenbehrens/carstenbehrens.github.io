---
title: How to create an alias on linux
path: /how-to-create-an-alias-on-linux
date: 2021-07-20
summary: 
tags: ["Linux"]
---

First, you have to figure out what shell you are using. This can be done by running this command:

```sh
echo $SHELL
```

In my case it's zsh. Depending on what shell you are using you will have to configure the aliases in different locations.

- zsh:  ~/.zshrc
- bash: ~/.bashrc
- Fish: ~/.config/fish/config.fish

Now open the file in your favorite editor.

```sh
vi ~/.zshrc
```

And add the following line:

```sh
alias list="ls"
```

Now you have to restart your terminal.

After restarting the terminal you now can type `list` to execute the `ls` command.
