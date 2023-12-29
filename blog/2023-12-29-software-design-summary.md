---
title: Summary of "A Philosophy of Software Design" by John Ousterhout
path: /a-philosophy-of-software-design-summary
date: 2023-12-29
summary: A summary of "A Philosophy of Software Design" a book written by John Ousterhout.
tags: ["Software Design", "Frontend", "Backend"]
---
 
"A Philosophy of Software Design" is a book written by John Ousterhout.
It summarizes the author's extensive experience in computer science and
his experience of teaching software design at Standford University. The main focus of this book is problem decomposition: "how to take a complex problem and device it up into pieces that can be solved independently." The book provides techniques on how to deal with the complexity of software.

## Chapter 1 Introduction (It's all about complexity)

In the first chapter, Ousterhout lays out what the book is about. As software systems are not
limited by practical limitations such as physics, the only limit to what we can create is our ability
to read and understand the code we are writing.

Any program generally gets more complex with time, as new features are always added.
He states that there are two general approaches when fighting complexity:

- "Making code simpler and more obvious"
- "Encapsulate complexity (also called modular design)"

Next, he explains that, in contrast with physical systems (like bridges and buildings), software systems tend to be more complex, and it isn't possible to fully visualize the design before writing the code.

Therefore, a waterfall model doesn't work for software, and this is also why an incremental approach like agile
development makes more sense when writing software.

The developers should constantly consider design issues since incremental development also means incremental software design. The author finds that reducing complexity is the most important element of software design, so the developers should be focusing on that.

Then, he lays out the two overall goals of the book:
- "Describing the nature of complexity"
- "Present techniques for minimizing complexity"

He also emphasizes that since the concepts in the book can be abstract, the book should be used during code reviews. A list of red flags at the end of the book can provide some guidance
during these reviews.

## Chapter 2 The Nature of Complexity

In this chapter, the author provides us with his definition of complexity.

He defines complexity as follows: "Complexity is anything related
to the structure of a software system that makes it hard to understand and modify the system."

The author notes that complexity is experienced more often when reading code than writing code.
Hence, it is crucial to focus on creating code that others can easily understand.

According to Ousterhout, complexity shows itself in three different ways:
- "Change Amplification" which means that a simple change requires changes in many different places
- "Cognitive Load" which refers to how much a developer has to know (or keep in mind)
- "Unknown unknowns" refers to a situation where it is not obvious what files must be modified

Ousterhout states that two things cause complexity:
- "dependencies"
- "obscurity"

A dependency exists when "a given piece of code can not be understood or modified in isolation."
However, he acknowledges that dependencies are an essential part of software and that they can never be
fully eliminated.

Nevertheless, one of the goals of software design should be to reduce the amount of dependencies as
much as possible, or at least make the remaining dependencies as obvious and straightforward as possible.

An Obscurity exists when "important information is not obvious."

This can happen due to various reasons:
- A non-obvious dependency between two parts of the code base
- Inconsistency
- Missing documentation (while keeping in mind that a need for extensive documentation could be a red flag in itself)

Ousterhout notes that complexity builds up slowly over time and is hard to eliminate once it has
accumulated. Therefore, he suggests "zero tolerance" towards complexity.

## Chapter 3: Working Code Isn't Enough (Strategic vs. Tactical Programming)

In this chapter, Ousterhout identifies the difference between "Tactical Programming" and "Strategic Programming".

Tactical Programmer:
- Gets stuff done fast
- Doesn't care about complexity building up
- Introduces complexity to the system over time

Strategic Programmer:
- Focuses on good design while also having working code
- Has an investment mindset
- Doesn't increase complexity and tries to reduce it constantly

He suggests spending 10 to 20% of development time on "investments." He argues that this investment will start to pay off within a few months, after which the velocity will increase by 10-20%, meaning that
the investment will pay off quickly.

Ousterhout also acknowledges that this "investment" approach is not suited well for early start-ups but that the "tactical" approach hurts a company in the medium to long run.
Finally, he concludes that a tactical approach will speed up the first product launch since the payoff from good design comes so quickly.

## Chapter 4: Modules Should Be Deep

In this chapter, the author presents the basic principles of "modular design" while introducing the concept of "deep modules."

Ousterhout notes that one of the most important techniques for managing complexity is to ensure that developers only focus on a small amount of complexity at a time.

In modular design, a system is decomposed into smaller - relatively independent - modules.
A module can be anything, for example, a class, a sub-system, or a service. Ideally, all of our modules would be completely
independent of each other. Ousterhout acknowledges, however, that there will always be dependencies between modules in the real world.
Still, the goal of modular design should be to minimize dependencies between modules.

He states that each module has two parts:
- An interface, which refers to the knowledge that a developer needs to work with the module
- an implementation, which refers to the actual implementation of the module

He also defines that anything with an interface and an implementation is a module for this book's purpose.
This would include classes but also methods and functions (and also other services or sub-systems).

**What's in an interface?**

He explains that an interface has two kinds of information: formal and informal.

The formal parts of an interface (such as method parameters) can be checked for correctness by the programming language.
The informal parts cannot be understood or enforced by the programming language. An example of this could be a function that
deletes a file named in one of its arguments. If a developer needs to know any information besides the formal parts, this information is part of the module's interface.

**Deep Modules**

Ousterhout argues that the best modules "provide powerful functionality yet have simple interfaces."
These modules are "deep," meaning they hide much of their complexity from other modules through simple interfaces.

Deep modules are a good abstraction because only a small amount of the module's complexity is exposed to other modules.
The depth of a module also describes its usefulness. The module's functionality should be weighed against the complexity
of its interface.

**Shallow Modules**

The opposite of a deep module is a shallow module. Its interface is relatively complex when compared to the functionality
the module provides.

**Classitis**

Ousterhout notes that his view of deep modules vs. shallow modules differs from that of many developers today.
Many developers have the view that classes should be small, not deep. Ousterhout claims that this approach often leads to a lot of shallow classes, which increases the overall complexity of the system. Ousterhout invented a new syndrome called "classitis" for extreme forms of this programming style.

"Classitis" helps to create simple classes, but the overall system complexity increases when using this coding style:
- Since small classes only provide a little functionality, you'll need a lot of them - each with its own interface.
- All these small classes accumulate to create a lot of overall complexity
- Having a lot of small classes is more verbose than having fewer larger classes due to the boilerplate required for each class

**Example: Java and Unix I/O**

He believes that an example of this "classitis" is the Java class library. Java in itself doesn't require lots of small classes, but Ousterhout believes that a culture of "classitis" has affected the Java programming community.

To illustrate this, he shows us an example of how to open a file in order to create a serialized object from it.

```java
FileInputStream fileStream = new FileInputStream(fileName);
BufferedInputStream bufferedStream = new BufferedInputStream(fileStream);
ObjectInputStream objectStream = new ObjectInputStream(bufferedStream);
```

He explains that the FileInputStream object only provides I/O but is incapable of performing buffered I/O, nor can it read or write a serialized object. To enable buffered I/O, it is required to add buffering by creating a BufferedInputStream object. Finally, the ObjectInputStream adds the ability to read and write serialized objects.
Ousterhout notes that the FileInputStream and the BufferedInputStream objects are never used once the file has been opened.
He finds it annoying (and error-prone) that the developer must always remember to create a BufferedInputStream because otherwise, there will be no buffering, and I/O will be slow.
Ousterhout acknowledges that some users might not need or want buffering, but in his opinion, "interfaces should be designed to make the most common case as simple as possible." Buffering should be the default since most users require it.

## Chapter 5: Information Hiding (and Leakage)

In this chapter, the author shares one of the techniques for creating deep modules.

According to Ousterhout, information hiding is the most crucial idea to remember while creating deep modules. Information hiding means that each module should encapsulate some functionality.
The only thing visible from the outside of the module is its interface. This means that the implementation of the functionality is hidden.

**Information Hiding**

Information hiding is so essential because it reduces complexity in two significant ways. First, it simplifies the interface of a module since the module provides its users with a simpler and more abstract view of the module's functionalities.
Second, it reduces dependencies between the modules. For example, if a change is required, but it only affects the parts of the module that are hidden, then that change only affects this module and no other modules that may depend on it.

Ousterhout suggests carefully considering what information can be hidden when creating a module.
If it is possible to hide a piece of information, then it should also be possible to simplify the module's interface, thus
making it deeper.

**Information Leakage**

The opposite of information hiding is information leakage. "Information Leakage occurs when a design decision is reflected in multiple modules." When information is leaked, other modules that use the affected module will start to depend on this information, thus creating a dependency between modules.

Ousterhout notes that if a piece of information is part of the interface of a module, then it is leaked. However, there are other ways information can be leaked. As an example, Ousterhout describes a situation where two classes have knowledge of a file format (one class could be reading the file in that format while the other writes to the file)
then this information - the file format - is leaked between the two classes. This type of information leakage is called
Back-door leakage is the worst type of information leakage since it is not obvious.

He argues that information leakage is one of software design's most important red flags. He suggests that one should ask oneself, "How can I reorganize these classes so that this particular piece of knowledge only affects
a single class?"

To do this, it can make sense to combine smaller classes into a bigger one or to pull out all the information and
create a new class that encapsulates just that information.

**Information hiding within a class**

Information hiding can also be applied to methods in a class, which means that a private method within a class should encapsulate some information and hide it from the rest of the class.

## Chapter 6 General-Purpose Modules are Deeper

In this chapter, Ousterhout tackles the question of how generic or specific modules should be.
According to Ousterhout, the general-purpose approach is more consistent with the investment mindset mentioned in Chapter 3. Still, he acknowledges that the special-purpose approach aligns more with the agile way of developing software today.

He thinks that the best solution is the sweet spot between general-purpose and special-purpose. This means that a module should provide the features that are needed today while also offering an interface that is general enough to support
multiple use cases.

To illustrate this, Ousterhout provides an example from his software design class where students were asked to build a simple text editor. Many student projects had a `Text` class that provided methods for - among other things - modifying the text file.

Some projects created a special-purpose method for each text editing feature:

```java
void backspace(Cursor cursor)
void delete(Cursor cursor)
void deleteSelection(Selection selection)
...
```

Due to this approach, the class had a large amount of shallow methods, each of which was only usable for one of the required features. This also leaked information between the user interface and the `Text` class
since the `Text` class had knowledge of the user interface. This is not good because it creates a dependency between the two modules.

A better solution for this would be to make the `Text` class more generic:

```java
void insert(Cursor cursor)
void delete(Cursor cursor)
```

With this interface, the `Text` class could be reused for other purposes than an editor. This solution is also better because it provides better information hiding. There is no need for the `Text` class to
be aware of the UI-specific features such as backspace or delete.

Ousterhout finds that general-purpose interfaces tend to have simpler interfaces than special-purpose ones.
They also provide better separation between the classes than special-purpose interfaces that tend to leak information between classes.

## Chapter 7 Different Layer, Different Abstraction

In this chapter, Ousterhout describes how abstractions should change on each system layer and how to refactor your code base if this is not the case. Software systems are composed of layers, where higher
layers use the functionality provided by lower layers. Ousterhout argues that in a well-designed system, each layer should provide a different abstraction than the layer above or below it. This means that if you follow a single operation through the layers, the abstraction should change with each method call.

The opposite would be the case when the abstractions are not changing or are very similar. According to Ousterhout, this red flag indicates a problem with the separation of classes.

**Pass-through methods**

One way this problem manifests itself is in the form of pass-through methods. A pass-through method is a method that does very little besides passing the arguments on to the next method, whose signature is similar to that of the calling method.

Ousterhout notes that a method with the same interface is not always bad, but each method should add some
functionality. Pass-through methods do not provide additional functionality; thus, they are bad.

**Decorators**

Next, Ousterhout describes the decorator design pattern. According to Ousterhout, a decorator object is an object that extends an existing object while providing a similar interface. An example is the `BufferedInputStream` class shown in Chapter 4.

The purpose of decorator classes is to extend core classes to fit a more specific use case.
However, according to Ousterhout, they tend to be shallow because they add a large amount of boilerplate code (many pass-through methods) for a relatively small amount of new functionality.

Therefore, decorator classes should be kept to a minimum. Ousterhout suggests to **consider** alternatives such as:
- Adding the new functionality directly to the underlying class
- Add the new functionality to an already existing decorator class
- Create a whole new class

**Interface versus Implementation**

Ousterhout argues that the interface of a class should be different from its implementation. This means that the representation used internally should differ from the abstractions in the interface.

To illustrate this, Ousterhout presents another example from his software design class text editor project. The `Text` class usually **stored** the text in lines within the file. Some of the teams also designed
the **interface** of the `Text` class around lines, with methods like `getLine` and `putLine.`

However, this interface leads to problems because sometimes text gets inserted in the middle of a line, which means that the callers of this class have to split and join texts. The `Text` class was much easier to use when
it provided a character-oriented interface.

**Pass-through** variables

According to Ousterhout, a Pass-through variable is "a variable which is passed down a long chain of methods."
They add complexity because all intermediate methods must be aware of them even though they might not use the variable themselves. This also means that if you need to change this variable or add a new one, you must modify many methods.

He notes that it can be challenging to remove pass-through variables. One approach to do this is to see if an object is already shared by the topmost and bottommost methods. If this is the case, one can
store the needed information in that object. Another option is storing the information in a global variable, although this typically creates other problems.

Ousterhout finds the most fitting solution in most situations is using a context object, one per instance of the system. The context object will allow multiple system instances to coexist in a single process. Still
Ousterhout warns that contexts are far from an ideal solution and that without discipline, a "context can turn into a huge grab-bag of data that creates nonobvious dependencies throughout the system."

## Chapter 8 Pull Complexity Downwards

In this chapter, Ousterhout introduces another way of thinking about deeper classes. He argues that a module developer should always strive to make using the module as easy as possible. This also means that one should handle complexity internally within the module when possible, which means that we are pulling complexity downwards.

**Configuration parameters**

According to Ousterhout, configuration parameters are an example of moving complexity upwards. Instead of defining the behavior internally, a module can export a few parameters that control its behavior. Users of that module now have to configure these parameters and deal with the complexity that comes with that.

Ousterhout recognizes that these parameters can be useful because they allow the user of a module to configure the module to their particular requirements. However, they can also easily be used as an excuse not to deal with complexity internally and pass it to the user of the module instead.

**Taking it too far**

Ousterhout warns that pulling complexity upwards should be done with discretion and that it can easily be overdone.
Pulling complexity downwards makes sense if it results in the overall reduction of complexity. For example, if the complexity being pulled down simplifies the class's interface,

## Chapter 9 Better Together Or Better Apart

In this chapter, Ousterhout discusses the fundamental question of whether two pieces of functionality should be implemented
together or apart. According to Ousterhout, this question applies to all levels of the system, such as functions, methods, classes, and services.

The goal, as always, is to reduce the overall complexity of the system as a whole. To do this, it is tempting to divide the system into many small components since the smaller the component, the simpler it will likely be.

The problem with this approach is that it leads to a high number of components. The more components, the harder it will be to manage them all. This also means the system will need additional code just to manage the components.
Another disadvantage of this approach is that we now have multiple components instead of having one component.
This can make it harder for developers to change the system because they have to modify and be aware of various components instead of one.

If the components are truly independent and don't have many dependencies between them, then this subdivision is good.
Otherwise, it is bad. According to Ousterhout, this will cause developers to need to know a lot of components, which causes a higher cognitive load. It can also lead to bugs if developers are unaware of these dependencies.

Ousterhout notes that bringing together pieces of code is most beneficial if they are closely related.

He also lists a few tips on how to notice that this is the case:
- They share the same information. For example, if both share some knowledge about a file format
- They are used together, meaning that users of this piece of code also often use the other
- They overlap conceptually, meaning that both of the pieces of code are part of a higher-level category
- It is hard to understand one of the pieces of code without looking at the other

**Separate general-purpose and special-purpose**

Next, Ousterhout explains that when a module contains a functionality that can be used for several other purposes, it should only provide this functionality and no other special-purpose code. This allows the module to be independent and reusable in other modules.

**Splitting and joining methods**

According to Ousterhout, the same questions also apply to methods. Ousterhout finds that - contrary to popular belief - long methods are not always bad. He believes a method containing five 20-line blocks of code is acceptable as long as the blocks are relatively independent and executed in order. This would mean that the method can be read one block at a time; thus, there would not be a benefit in moving the blocks into separate methods.
He explains that this is especially true when the blocks have complex interactions. Because the developer needs to see all the code at once. If they would be in different methods, the developer that works on the
code would be forced to switch back and forth to understand how they work together.

Next, he applies the idea of deep modules to methods. He finds that a method containing hundreds of lines of code is fine if it has a simple interface because this would mean that the method is 'deep.'

## Chapter 10 Define Errors Out Of Existence

In this chapter, Ousterhout discusses exception handling and why exceptions contribute disproportionately to complexity and
how to simplify exception handling.

**Why exceptions add complexity**

Ousterhout notes that, exception-handling code is more complex to write than regular code because exceptions tend to disrupt the normal flow of the code. When an exception occurs, a developer can either move forward to the next step regardless of the exception or abort the operation and throw an error. As the error gets reported 'upwards,' the developer must eventually find a way to handle the exception. Ousterhout states that exceptions usually don't occur often in running systems, so the error handling code is not executed often. Thus, bugs can sometimes go undetected for a long time.

To prove his point, Ousterhout cites a study that found that more than 90% of catastrophic failures in distributed data-intensive systems were caused by incorrect error handling.

**Too many exceptions**

Ousterhout states that one of the reasons that problems related to exception handling increase is that developers
define too many unnecessary exceptions. According to Ousterhout, most developers are taught that detecting and reporting errors is essential, but some take this to the extreme.

As an example, Ousterhout describes an error he himself made while designing the Tcl scripting language.
The Tcl scripting language had a command called `unset,` which is used to remove a variable. The command throws an error if the variable that should be deleted doesn't exist. Ousterhout explains that he thought that when someone tries to remove a variable that doesn't exist, it must be a bug, and therefore it should be reported. However, he did not
foresee that the most common use case of `unset` would be the clean-up of temporary state after a previous operation. Unfortunately, it is often hard to predict the state of a variable at the time of clean-up, especially
after an operation was aborted. Thus, most developers will try to reset all variables regardless of their current state.

Since `unset` throws an error when the variable doesn't exist, developers end up enclosing every unset call with a
catch statement to ignore all errors thrown by it.

Ousterhout views this design decision as one of his biggest mistakes when designing Tcl.

**Define errors out of existence**

Ousterhout suggests that the best way to deal with exception-handling complexity is to define your interfaces so that no exceptions need to be thrown. He calls this "define errors out of existence."

As an example, he circles back to the `unset` command discussed above. Ousterhout states that he should have used a better definition for the `unset` command. Instead of deleting the variable, the `unset` command should be defined as ensuring that the variable no longer exists. With the first definition (deleting), the `unset` command can't do its job
if the variable doesn't exist. With the second definition (ensuring that the variable doesn't exist), the unset command could just do nothing if it doesn't exist. Meaning that it would not have to throw an error.

**Mask exceptions**

Next, Ousterhout describes the second technique for reducing the number of places exceptions must be handled: Exception masking. The basic idea of this technique is that the lower module handles the error so that the higher-level modules don't need to do it.

He provides TCP as an example since TCP masks packet loss by simply resending lost packets. So that clients are unaware that a problem has occurred.

**Exception aggregation**

Next, Ousterhout describes the third technique, "exception aggregation." The idea behind exception aggregation is to handle many exceptions with a single piece of code. Instead of having to write exception handlers for each exception, handle them all with a single handler.

As an example, Ousterhout describes the error handling for a missing parameter in a web server. Typically, a service
method will call a low-level method (e.g., `getParameter`) to get the needed parameters. This method will throw an error if the requested parameter does not exist.

When the students of his software design class implement this, many of them wrap the `getParameter` call in an exception handler. This approach resulted in a large number of methods that essentially did the same thing - generating an error response.

Ousterhout suggests a better approach would be to let the errors propagate up to the top-level dispatch method and handle them there. Thus, a single handler could catch all of the `ParameterNotFound` exceptions and generate the error response.

He highlights that this and the **Mask exceptions** approach - even though they are both the opposite - both aim to reduce places where exception handlers would be otherwise created.

**Just crash?**

The final technique that Ousterhout describes is just to let the application crash. These errors are either impossible to handle or not worth trying to handle.

**Taking it too far**

Ousterhout warns that the "masking" and the "defining out of existence" techniques only make sense if the exception information
is not needed outside the module. He stresses that when something is important, it should be exposed.

## Chapter 11 Design it twice

In this chapter, Ousterhout argues that one should consider multiple options before deciding on a major design.
To help find the best design, he suggests that one approach the problem from different angles. Then, after one has
designed the alternatives, one should make a list of pros and cons to find the best one. He also provides a few questions
that one should ask oneself:

- "Does one alternative have a simpler interface than another?"
- "Is one interface more general-purpose than another?"
- "Does one interface enable more efficient implementation than another?"

## Chapter 12 Why Write Comments? The Four Excuses

In this chapter, Ousterhout points out the excuses developers use to avoid writing comments and why comments play a crucial
role in software design.

**1. Good code is self-documenting**

Ousterhout states that some people believe a code does not need comments if it is well-written.
He calls this a "delicious myth". He believes that the informal aspects of an interface can only be described in comments.
According to Ousterhout, there are many other reasons as to why comments make sense. For example, one could explain the rationale behind the code or give a high-level explanation of a method.

Comments also save time. For example, it's faster to understand what a method does by reading its description than
by reading the methods code. Another reason for comments is that they allow us to provide additional information to the
user of a module.

**2. I don't have time to write comments**

Ousterhout observes that although it is tempting to de-prioritize writing comments, they provide a massive difference in maintainability and that the effort spent on them pays off quickly. It is the same investment mindset that is discussed in previous chapters that also applies here.

**3. Comments get out of date and become misleading**

Ousterhout suggests that code reviews should fix this issue.

**4. All the comments I have seen are worthless**

Although Ousterhout agrees that some comments are worthless, he suggests that writing good comments is easy once one knows how to write them.

**Benefits of well-written comments**

In summary, Ousterhout concludes that the idea comments should "capture information that was in the mind of the designer but couldn't
be represented in the code." He argues that good comments save future developers time because they will be able to understand
the intent behind the code better. Therefore, good documentation reduces **Cognitive load** and helps to reduce **Unknown unknowns**.

## Chapter 13 Comments Should Describe Things that Aren't Obvious from the Code

In this chapter, Ousterhout discusses what information needs to be described and how to write good comments.

**Pick conventions**

Ousterhout mentions that it is important to pick conventions that decide what and how you will comment.

The most important comments are the interface and the data structure member (e.g., a class variable or a method)
comments. According to Ousterhout, every class interface, variable, and method should have a comment.
Although occasionally, the declaration of a variable is so obvious that a comment would be redundant, he finds it easier to comment it anyway instead of worrying whether a comment is really needed.

**Don't repeat the code**

Ousterhout states that many comments are not helpful because they repeat the code. It is not very useful if all the information can be easily deducted from the code **next to** the comment.

Then, he provides a few examples of bad comments.

```java
// Add a horizontal scroll bar
hScrollBar = new JScrollBar(JScrollBar.Horizontal);
add(hScrollBar, BorderLayout.SOUTH)

// Add a vertical scroll bar
vScrollBar = new JScrollBar(JScrollBar.Vertical);
add(vScrollBar, BorderLayout.EAST);

// Initialize the caret-position values
caretX = 0;
caretY = 0;
caretMemX = null;
```

These comments don't add any information.

```java
/*
 * obtain a normalized resource name from req.
 */
private static string[] getnormalizedresourcenames(httprequest req) ...

/*
 * downcast parameter to type.
 */
private static object downcastparameter(string parameter, string type) ...

/*
 * the horizontal padding of each line in the text.
 */
private static final int texthorizontalpadding = 4;
```

In this example, the sentences are just made up of the words and the variable names. This is a good indication that a comment isn't helpful.

A first step to writing better comments is to use different words than the words that are already present in the code:

```java
/*
 * The amount of blank space to leave on the left and right sides of each line
 * of text, in pixels.
 */
private static final int textHorizontalPadding = 4;
```

In this case, we use a word different from "padding" because some people might not know what it means.

**Lower-level comments add precision; higher-level comments enhance intuition**

Next, Ousterhout explains that comments should be on a different level of detail than the code.
A comment can either be on a higher-level, a lower-level, or the same level as the code.
A lower-level comment is a comment that is more detailed than the code. A higher-level comment provides high-level
information about the code, such as the rationale behind the code.

Ousterhout notes that comments on the same level will likely repeat the code. Comments on a higher level provide intuition by helping us understand the code's overall intent and rationale.

**Interface documentation**

According to Ousterhout, the most important role of comments is to describe the abstraction an interface provides.
He recalls his definition of abstraction as a "simplified view of an entity, which preserves essential information but omits details that can safely be ignored." He argues that since code isn't able to describe abstracts at a high level, one must provide comments to document the abstraction.

He distinguishes between interface comments and implementation comments. An interface comment is a comment that provides
information about a class or method for the user who wants to use it. The implementation comments, on the other hand, describe how a class or method works internally to implement the functionality. Ousterhout notes that it is crucial to separate these two comments so that the user of an interface is not confronted with the implementation details.

He provides an example of an interface comment:

```java
/**
 * This class implements a simple server-side interface to the HTTP protocol:
 * by using this class, an application can receive HTTP requests, process them, and
 * and return responses. Each interface of this class corresponds to a particular
 * socket used to receive requests. The current implementation is single-threaded and
 * processes one request at a time.
 */
public class Http {...}
```

**Implementation comments: what and why, not how**

Ousterhout explains that, implementation comments are the comments that appear within the methods of a class that help the readers understand how it works and what it is doing. Although the focus should not be on **how** something is done, the focus is **what** and **why**.

**Cross-module design decisions**

Ousterhout states that real systems often end up with design decisions that affect multiple classes. As an example of this
he names the design decisions of a network protocol that affect both the sender and the receiver, which may be implemented in different places.

This can make it hard to decide where the best place to document these design decisions is.
In a case like this, Ousterhout suggests putting the documentation in a place that will naturally be discovered by
a developer working on these classes. If there is no obvious place like that, he suggests having a file called **designNotes**
that is divided up with labels for each major design decision.

Then, in the code related to this design decision, he suggests putting a comment referring to the **designNotes** file.

```
// See 'topic' in designNotes.
```

Ousterhout notes that one disadvantage is that the documentation is not close enough to the code, so keeping it up to date with the code could be difficult.

## Chapter 14 Choosing Names

In this chapter, Ousterhout discusses naming things, which, according to Ousterhout, is one of the most underrated aspects of software design. When variables - and classes, methods, and so on - have good names, it is easier to understand the code because they act like a form of documentation and thus make the code more obvious.

The opposite is true about bad names since poor name choices increase the complexity of the code and can lead to misunderstandings, which can result in bugs.

**Example: bad names cause bugs**

As an example of a bug due to bad naming, Ousterhout recalls the most challenging bug he ever fixed.
At the time, he was working on an operating system called Sprite. A bug occurred randomly where some files would lose data.
The bug was quite simple but was very hard to find because the naming of the variable was ambiguous. The file system code used the variable name `block` for two different things. Sometimes, the name `block` would refer to a physical block on a disk, and sometimes it would refer to a logical block within a file. At one point in the code, there was a mix-up due to this naming, which caused an unrelated block on the disk
to be overwritten with zeros.

Ousterhout notes that a more precise naming, such as `fileBlock` and `diskBlock` could have prevented this bug. Hence, he suggests that one should take extra time to choose great names which are precise, unambiguous, and intuitive.

**Names should be precise**

Ousterhout finds that a name must be precise and consistent for it to be good. The most common problem with variable names is that most of them are too generic and not precise enough. If a name is too broad, it may be confused with other things, which it is not. Ousterhout notes that if one has trouble coming up with a good name for a variable,
this could indicate that the variable may need a more straightforward definition or purpose. For example, a variable could be used to represent too many things; in that case, it would make sense to separate it into multiple variables.

## Chapter 15 Write The Comments First (Use Comments as Part of The Design Process)

In this chapter, Ousterhout discusses how comments can help during the design process and why writing them as one writes the code is essential.

**Delayed comments are bad comments**

He states that almost every developer he has met puts off writing documentation. This is a problem because once this process is delayed, it often means that the documentation does not get written at all. Ousterhout argues that
even if it does eventually get done, the quality of the documentation will not be the same because the developer will have
forgotten some of the details of the design process.

**Write the comments first**

Instead, he suggests writing the comments before implementing the code. For a new class, he starts by writing the class interface comment. Next, he will write the interface comments and signatures for the most important public methods. Then, he will iterate a bit until the comments and the basic structure of the class feel right. At that point,
he will write the declarations and comments for the most important instance variables. As the last step, he will implement the methods and add the implementation comments.

With this approach, there will never be a backlog of unwritten comments. According to Ousterhout, this approach has three
benefits:

- It produces better comments
- Design decisions are still fresh on one's mind, so there is no need to remember things
- It's easier to focus on the abstraction and the interface of a method when writing the comment first without having
  to worry about its implementation

**Comments are a design tool**

An important benefit of writing comments at the beginning, which Ousterhout mentions, is that it improves the system design.
When writing a comment, one can think about the abstraction before actually implementing it.
Also, comments are essential to good system design because they provide the only way to describe the abstraction fully. The very act of writing a good comment forces one to identify the essence of a variable or a piece of code, which also helps improve the overall system design.

**Early comments are fun**

Another benefit that Ousterhout mentions is that for him, one of the most enjoyable part of programming is the early design phase, where he can think about the abstraction and structure of the class. Ousterhout argues that writing comments during this phase is more fun.

## Chapter 16 Modifying Existing Code

In this chapter, Ousterhout shares his views on modifying existing code. He argues that since software development is iterative and incremental, the final design of a system is more influenced by the design decisions that were made during the systems
evolution than the initial design.

**Stay strategic**

He warns that one must resist the temptation to make quick fixes. Instead, one should consider if the system's current design is still the best for its job and change it if it's not.

**Maintaining comments: keep the comments near the code**

Ousterhout notes that it's easy to keep the comments up to date when they are near the code. For example, the methods interface comment should be above the method's body.

He also argues that the farther away the comment is from the code, the more abstract it should be.

A comment that gives a high-level overview should not go into implementation details. By doing this, we reduce the likelihood of the comment being invalidated by code changes.

**Comments belong in the code, not the commit log**

He argues that since the commit log is less likely to be seen than the source code itself, placing the documentation there does not make sense. Instead, it should be in the source code itself.

**Maintaining comments: avoid duplication**

Next, Ousterhout suggests avoiding duplicate comments since it is more difficult to update multiple places instead of one. He also mentions that if information is already documented outside the source code, one should reference that external documentation.

## Chapter 17 Consistency

In this chapter, Ousterhout shares his thoughts on consistency and how consistency can help reduce a system's overall complexity by making things more obvious. Consistency allows a developer to learn how a thing
is done in one place and apply that knowledge to other places. If a code base is inconsistent, developers must learn each situation separately.

**Examples of consistency**

Consistency can be applied at all levels of a system. To illustrate this, Ousterhout provides a few examples:
- Names
- Coding style
- Interfaces (meaning `interfaces` as a language feature)
- Design patterns
- Invariants

**Ensuring consistency**

Ousterhout states that consistency is hard to maintain since many people typically work on a project over time. Another reason is that some people (e.g., a new co-worker) might now know about already established conventions.

He provides a few tips that help to maintain consistency:
- Document a list that describes the most important overall conventions, such as coding style guidelines.
- Enforce the conventions by having a tool that checks for violations and checks the code before it can be committed.

As a final tip on conventions, Ousterhout shares the old saying: "When in Rome, do as the Romans do."

**Taking it too far**

Ousterhout argues that consistency is only beneficial if it applies to similar things. Meaning that it is fine to do things differently if it makes sense in that case. Ousterhout warns that one should not become overzealous
and try to force things into being done the same way for consistency's sake, as this will only create complexity and confusion.

## Chapter 18 Code Should be Obvious

In this chapter, Ousterhout tackles one of the two leading causes of complexity: Obscurity. He then shares some factors that make code more or less obvious.

**Things that make code more obvious**

First, Ousterhout recalls previously discussed techniques that help to reduce obscurity:
**Choosing good names** and **consistency**.

He then offers a few more general-purpose techniques for making code more obvious. The first is to use white space when formatting one's code, as it impacts how easy it is to read. An example of this he provides
two code snippets.

Without whitespace:
```java
/**
  * ...
  * @param numThreads The number of threads that this manager should 
  * spin up in order to manage ongoing connections. The MessageManager
  * spins up at least one thread for every open connection, so this
  * should be at least equal to the number of connections you expect
  * to be open at once. This should be a multiple of that number if
  * you expect to send a lot of messages in a short amount of time.
  * @param handler Used as a callback in order to handle incoming
  * messages on this MessageManagers's open connections. See
  * {@code MessageHandler} and {@code handleMessage} for details.
```

With whitespace:
```java
/**
  * ...
  * @param numThreads
  *   The number of threads that this manager should spin up in
  *   order to manage ongoing connections. The MessageManager spins
  *   up at least one thread for every open connection, so this
  *   should be at least equal to the number of connections you 
  *   expect to be open at once. This should be a multiple of that 
  *   number if you expect to send a lot of messages in a short
  *   amount of time.
  * @param handler 
  *   Used as a callback in order to handle incoming
  *   messages on this MessageManagers's open connections. See
  *   {@code MessageHandler} and {@code handleMessage} for details.
```

He also suggests using whitespaces within methods to separate major blocks. He suggests adding a comment above each block to make the code even more obvious.

**Things that make code less obvious**

In this section, the author shares a few examples of things that can make the code nonobvious.

**Event-driven programming**

According to Ousterhout, Event-driven programming is a programming style where an application responds to
external occurrences, such as the arrival of a network packet or the press of a mouse button.

One module will be in charge of reporting incoming events (the event module), while other parts of the application register
interest in an event and asking the event module to invoke a given function or method once the event occurs.
Ousterhout finds this programming style hard to follow because the event handler functions are never invoked directly.
Typically, they are invoked indirectly by the event module using a function pointer or interface.

**Generic containers**

Ousterhout states that many programming languages provide classes to group two or more items into a single object. For example, `Pair` in Java. He states that one of the most common use cases of these classes is to return multiple values from a method.

```java
return new Pair<Integer, Boolean>(currentTerm, false);
```

Ousterhout claims that, these generic containers result in nonobvious code because the elements have generic names
that obscure their actual names.

To solve the issue of returning multiple values from a method, Ousterhout suggests just creating a specialized class structure for this use case. That way, one can provide meaningful names for the elements, and it is also possible to add documentation to the declaration.

He notes that, this example illustrates a general rule where "software should be designed for ease of reading, not ease of writing".

Generic containers break this rule because they are easy to write but can be confusing for the reader.

## Chapter 19 Software Trends

In this chapter, Ousterhout considers several trends in the software development world and evaluates if and how they might
help to reduce complexity.

**Object-oriented programming and inheritance**

Ousterhout states that, one of the main elements of OOP is inheritance. He believes that inheritance comes in two forms, which both have a different impact on complexity:

The first form of inheritance is interface inheritance, where a parent class defines the signatures of one or more methods but does not implement them. Ousterhout finds that interface inheritance reduces complexity because one will reuse the same interface for multiple purposes. This is especially true if an interface has many implementations,
because then it is more likely that this interface captures essential features of all the implementations while not being concerned with the implementation details.

The second form of inheritance is the implementation inheritance, where a parent class not only defines the signatures but also implements one or more methods. Subclasses inherit these methods, but they can also overwrite them.
This allows for code sharing among classes because it is possible to provide an implementation of a method to all
subclasses.

A disadvantage to implementation inheritance, according to Ousterhout, is that the inheritance creates dependencies between the parent class and the subclasses. He finds this can lead to information leakage between
the classes in the class tree. For example, he mentions the case where a developer needs to make changes to the parent class; in that case, he may have to check all of its subclasses to ensure they still work as expected.

In an extreme case, the developer would have to check all classes in the tree to ensure nothing breaks.
Therefore, Ousterhout suggests using implementation inheritance cautiously and that one should consider a composition-based approach first.

**Agile development**

Agile development is a practice that aims to make software development more lightweight, flexible, and incremental.

Ousterhout finds this approach is similar to the one he advocates in this book. However, he also finds that one of the risks of this agile, incremental approach is that it can encourage tactical programming to get a feature done as fast as possible. Another problem, in his opinion, is that some practitioners argue that one shouldn't implement a general-purpose approach right away. They argue that one should first implement a special-purpose solution and then implement the general-purpose one once needed.

Although Ousterhout agrees that this makes sense, he still finds that it encourages a tactical style of programming that can result in a rapid accumulation of complexity.

**Unit tests**

Unit tests are one of the tenets of agile development, and the practice of writing unit tests has become widely accepted today. Since unit tests help verify that the code works as expected, they also help facilitate refactoring. Hence, he finds that unit tests are crucial in software design as they encourage developers to refactor and improve the code.

**Test-driven development**

Test-driven development is an approach to software development where developers write the tests before implementing the code. Since the developer's goal is to make the test pass, Ousterhout finds that this approach focuses too much on getting stuff done rather than finding the best design.

The only place where he uses this approach is when fixing bugs. This means that he'll write a test that reproduces the bug and fails, and only then will he start with the implementation of the fix.
Now, if the test passes, one can be sure that the bug is fixed.

**Design patterns**

According to Ousterhout, a design pattern is a commonly used approach for solving a particular problem.
He finds that one should use the patterns when it makes sense because it would be hard to devise a better solution yourself. However, he warns that one should not try to force it and that a custom approach
is preferred if it is cleaner.

**Getters and Setters**

Getters and setters are a popular design pattern in software design, especially within the Java programming community. He finds that getters and setters can make sense if one must expose an instance variable. However, he argues that one should be wary of exposing instance variables in the first place since this means that a part of the class's implementation is leaked, violating the idea of information hiding.

He also argues that getters and setters typically are shallow because they are often just one line. They add clutter to the class interface without providing much functionality. Therefore, he believes one should avoid getters and setters as much as possible.

## Chapter 20 Design for Performance

In this chapter, Ousterhout discusses how to achieve high performance without sacrificing clean design.

**How to think about performance**

Ousterhout suggests that, one should neither try to optimize for maximum speed nor completely ignore it. This is because an approach for maximum speed will likely slow down development while ignoring performance
completely will likely lead to many inefficiencies, which will be hard to fix.

Hence, he suggests to use the middle road of these two approaches.

**Measure before modifying**

Ousterhout observes that, it is tempting to make performance tweaks based on intuition. He argues that one should avoid doing this because intuition can be unreliable. Instead, he suggests measuring the system's existing behavior before trying to fix it.

This will have the benefit of identifying the places where performance tuning will have the most impact while also ensuring that the performance tweak actually improves performance.

He also believes there is no need to retain complex changes if they do not improve performance significantly.

**Design around the critical path**

When fixing performance issues, the first question one should ask oneself
what is the smallest amount of code that must be executed to achieve the desired outcome.
Also, one should focus on something other than special cases when fixing performance issues. When performance is an issue, one should minimize the number of special cases that must be checked. Ideally, this check should be done at the end, where the special cases can then be handled.

Since performance is less critical for special cases, one should focus on lowering the case's complexity instead of worrying about performance.

**Conclusion**

Ousterhout concludes that one should focus on simplicity when trying to create fast code, because slow code tends to be slow because it does unnecessary work. He finds that simple code often is fast enough, and
therefore, one does not have to worry about performance much in the first place.

## Chapter 21 Conclusion

In this chapter, Ousterhout gives a summary of the topics that were discussed in this book. He also reiterates that this book is all about one thing: complexity. 
