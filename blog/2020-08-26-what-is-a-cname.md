---
title: What is a CNAME record
path: /what-is-a-cname
date: 2020-08-26
summary: CNAME stands for Canoncial Name. A CNAME record is an entry in the Domain Name System (DNS), that specifies that one domains is an alias of another canonical domain name.
---

CNAME stands for Canoncial Name. A CNAME record is an entry in the Domain Name System (DNS), that specifies that one domains is an alias of another canonical domain name.

Every website has an IP, the DNS resolves the URL to this IP.

![ping](./images/google.jpg)

By creating a new CNAME we can have more than one domain name resolve to the same IP. This would allow us to have one domain named **ftp.example.com** and one domain named **example.com**.

In this case ftp.example.com is the **alias** and example.com is the **canonical name**.

Therefore example.com is the CNAME, and the CNAME record is the entry that maps the alias ftp.example.com to the CNAME.
