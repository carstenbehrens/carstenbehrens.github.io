---
title: The Origins of OOP
path: /history-of-oop
date: 2020-11-20
summary: A short blog post about the origins of object-oriented Programming
tags: ["Software Design"]
---

OOP is the most popular of the big three programming paradigms.

So who invented OOP?

Well, it's difficult....

## BEGINNINGS

The terms "object" and "oriented" in the context of object-oriented programming
were first used at MIT in the late 50s and early 60s.

There seems to be some conflicting information on the internet on who invented
object-oriented programming.

The earliest example of object-oriented programming was Sketchpad which was a program written by Ivan Sutherland in 1963.

On a side note, you should have a look at the [demo](https://www.youtube.com/watch?v=YB3saviItTI)
of Sketchpad, it's stunning how ahead of it's time this program truly was.

## Simula

The first object-oriented programming languages (Simula I and SIMULA-67) were
developed by **Kirsten Nygaard and Ole-Johan Dahl** in the 1960s.

It is noteworthy that Simula was not inspired by Sketchpad in any way, the development of Simula happened independently of Sketchpad.

Simula 67, which was released in 1967, had many features we are used to in modern
object-oriented programming languages like objects, classes, inheritance,
subclasses and so on.

I found some sample code on Wikipedia [[1]](#1) which demonstrates how modern
Simula looks:

```code
Begin
   Class Glyph;
      Virtual: Procedure print Is Procedure print;;
   Begin
   End;

   Glyph Class Char (c);
      Character c;
   Begin
      Procedure print;
        OutChar(c);
   End;

   Glyph Class Line (elements);
      Ref (Glyph) Array elements;
   Begin
      Procedure print;
      Begin
         Integer i;
         For i:= 1 Step 1 Until UpperBound (elements, 1) Do
            elements (i).print;
         OutImage;
      End;
   End;

   Ref (Glyph) rg;
   Ref (Glyph) Array rgs (1 : 4);

   ! Main program;
   rgs (1):- New Char ('A');
   rgs (2):- New Char ('b');
   rgs (3):- New Char ('b');
   rgs (4):- New Char ('a');
   rg:- New Line (rgs);
   rg.print;
End;
```

The reason Simula 67 looks so modern even more than 50 years after its creation
is the simple fact that Simula 67 heavily influenced Java and C++, among the most popular
OO languages to date.

## The definition of OOP

In 1967, influenced by, among others, Sketchpad and Simula **Alan Kay**
coined the term "Object-Oriented Programming". [[2]](#2)

> I wrote my first program that I would call object-oriented in 1962.
> And people have been writing programs in that style even earlier than
> that.
> -- <cite>Alan Kay</cite> [[3]](#3)

The definition of OOP that most programmers would come up with today is very different
from the definition of OOP by Alan Kay - the term got "colonized" to what it is today. [[4]](#4)

> OOP to me means only messaging, local retention and protection and
> hiding of state-process, and extreme late-binding of all things. It
> can be done in Smalltalk and in LISP. There are possibly other
> systems in which this is possible, but I'm not aware of them.
> -- <cite>Alan Kay</cite> [[5]](#5)

Since the definition of OOP by Alan Kay differs from the understanding we have
of it today, it's sometimes referred to as "Message Oriented Programming" so as not to
get the two confused.

If you want more in-depth information about "Message Oriented Programming"
[here](https://ovid.github.io/articles/alan-kay-and-oo-programming.html)
is the best explanation of it I could find.

## Smalltalk

Smalltalk which was created during the 70s is the third object-oriented programming language.
It was created at Xerox PARC by a team led by Alan Kay.

Smalltalk was not only a programming language but also a live dynamic development
environment where you can debug your program while it's running. It's very different
from what programmers are used to nowadays.

[Here](https://www.youtube.com/watch?v=eGaKZBr0ga4) is a great talk that
shows this environment and the workflow one would use when working with Smalltalk.

The first public release was Smalltalk-80 and had a respectable market share during
the 1980s to mid-1990s before getting killed off by Java.

Smalltalk was very influential and influenced almost all object-oriented programming
languages that followed it.

## References

<a id="1" href="https://en.wikipedia.org/wiki/Simula">[1] Simula Wikipedia Entry</a>

<a id="2" href="https://www.quora.com/What-did-Alan-Kay-mean-by-I-made-up-the-term-object-oriented-and-I-can-tell-you-I-did-not-have-C++-in-mind">[2] Alan Key's answer on Quora</a>

<a id="3" href="https://www.youtube.com/watch?v=QjJaFG63Hlo&t=0m55s&ab_channel=YoshikiOhshima">[3] Seminar with Alan Kay on Object Oriented Programming (VPRI 0246)</a>

<a id="4" href="https://www.quora.com/What-is-Alan-Kays-definition-of-Object-Oriented">[4] What is Alan Kay's definition of Object Oriented? Alan Kay's answer on Quora</a>

<a id="5" href="http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en">
[5] Alan Kay email exchange
</a>
