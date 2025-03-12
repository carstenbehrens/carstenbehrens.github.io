---
title: RegEx Basics Cheat Sheet
path: /regex-basics-cheat-sheet
date: 2025-03-10
summary: RegEx Basics Cheat Sheet
tags: ["RegEx", "Frontend", "Backend"]
---

# Regular Expressions (Regex) Cheat Sheet

## 1. Basic Matching

### 1.1 Explicit Characters

Most characters match themselves literally.

| Example    | Description                                     | Matches                 | Does NOT Match       |
| :--------- | :---------------------------------------------- |:------------------------|:---------------------|
| `/hello/`  | Matches the exact sequence "hello"              | "hello world"           | "Hello", "helo"      |
| `/123/`    | Matches the exact sequence "123"                | "abc123xyz"             | "12", "456"          |
| `/Carsten/`| Matches the exact sequence of "Carsten"         | "Carsten" "Hi, Carsten" | "carsten", "Karsten" |

### 1.2 Escaping Special Characters

Some characters have special meanings in regex (see below). To match them literally, you must *escape* them with a backslash (`\`).

| Special Character | Meaning in Regex                                       | Escaped Version | Matches   |
| :---------------- |:-------------------------------------------------------|:----------------|:----------|
| `.`               | Matches ANY single character (except newline, usually) | `\.`            | "."       |
| `*`               | Quantifier (zero or more)                              | `\*`            | "*"       |
| `+`               | Quantifier (one or more)                               | `\+`            | "+"       |
| `?`               | Quantifier (zero or one)                               | `\?`            | "?"       |
| `[`               | Start of a character class                             | `\[`            | "["       |
| `]`               | End of a character class                               | `\]`            | "]"       |
| `(`               | Start of a capturing group                             | `\(`            | "("       |
| `)`               | End of a capturing group                               | `\)`            | ")"       |
| `{`               | Start of a quantifier with curly braces                | `\{`            | "{"       |
| `}`               | End of a quantifier with curly braces                  | `\}`            | "}"       |
| `^`               | Anchor (start of string) or negation (inside `[]`)     | `\^`            | "^"       |
| `$`               | Anchor (end of string)                                 | `\$`            | "$"       |
| `| `              | Alternation (OR)                                       | `\|`            | "\|"      |

**Example:**

| Example     | Description                                          | Matches      | Does NOT Match |
| :---------- |:-----------------------------------------------------| :----------- | :------------- |
| `/\./`      | Matches a literal dot (`.`)                          | "a.b"        | "ab"           |
| `/a\*b/`    | Matches "a", followed by zero or more "*", then "b"  | "ab", "a*b"  | "acb"          |
| `/\[abc\]/` | Matches the literal string "[abc]"                   | "[abc]"      | "abc"          |

### 1.3 Whitespace Characters

These are special characters that represent whitespace.

| Regex | Whitespace Character | Description                                         |
| :---- | :------------------- |:----------------------------------------------------|
| `\t`  | Tab                  | Matches a horizontal tab character.                 |
| `\n`  | Newline              | Matches a line break.                               |
| `\r`  | Carriage Return      | Matches a carriage return (less common on Unix).    |
| `\f`  | Form Feed            | Matches a form feed (rarely used).                  |
| `\v`  | Vertical Tab         | Matches a vertical tab (rarely used).               |
| ` `   | Space                | Matches a single space character (explicit).        |

## 2. Quantifiers

Quantifiers specify *how many times* the preceding element should occur.

| Quantifier | Description                                       | Example       | Matches                | Does NOT Match |
| :--------- |:--------------------------------------------------|:--------------|:-----------------------|:---------------|
| `?`        | Zero or one (optional)                            | `/colou?r/`   | "color", "colour"      | "colouur"      |
| `*`        | Zero or more                                      | `/bo*a/`      | "ba", "boa", "booa"    | "bca"          |
| `+`        | One or more                                       | `/lo+l/`      | "lol", "lool", "loool" | "ll", "lo"     |
| `{n}`      | Exactly *n* times                                 | `/a{3}/`      | "aaa"                  | "aa", "aaaa"   |
| `{n,}`     | *n* or more times                                 | `/a{2,}/`     | "aa", "aaa", "aaaaa"   | "a"            |
| `{n,m}`    | Between *n* and *m* times (inclusive)             | `/a{1,3}/`    | "a", "aa", "aaa"       | "aaaa"         |

**Examples of curly brace quantifiers:**

| Example      | Description                                     | Matches                   | Does NOT Match     |
| :------------|:------------------------------------------------|:------------------------- |:-------------------|
| `/go{2,4}d/` | Matches "g", 2-4 "o"s, then "d"                 | "good", "goood", "gooood" | "god", "goooood"   |
| `/20{1,2}/`  | Matches a 2 followed by one to two zeroes       | "20" "200"                | "2" "2000"         |

## 3. Character Classes and Groups

### 3.1 Character Sets (`[]`)

Character sets match *any one* of the characters enclosed within the square brackets.

| Example         | Description                                                     | Matches                    | Does NOT Match   |
|:----------------|:----------------------------------------------------------------|:---------------------------|:-----------------|
| `/[abc]/`       | Matches "a", "b", or "c"                                        | "a", "b", "c", "bat"       | "d", "x", " "    |
| `/[aeiou]/`     | Matches any vowel (lowercase)                                   | "a", "e", "i", "apple"     | "b", "x", " "    |
| `/[0-9]/`       | Matches any digit (equivalent to `\d` - see below)              | "0", "5", "9", "123"       | "a", "!", " "    |
| `/[a-z]/`       | Matches any lowercase letter (a to z)                           | "a", "g", "z", "cat"       | "A", "1", "!"    |
| `/[A-Za-z]/`    | Matches any uppercase or lowercase letter                       | "a", "G", "z", "Cat"       | "1", "!", " "    |
| `/[0-9a-fA-F]/` | Matches a character, any hexadecimal digit (case-insensitive)   | "0", "a", "F", "B2"        | "g", "X", " "    |

### 3.2 Negated Character Sets (`[^]`)

Adding a caret (`^`) *immediately after* the opening bracket negates the set, meaning it matches any character *except* those within the brackets.

| Example      | Description                                                 | Matches              | Does NOT Match   |
| :----------- |:------------------------------------------------------------|:-------------------- |:-----------------|
| `/[^abc]/`    | Matches any character *except* "a", "b", or "c"            | "d", "x", " ", "1"   | "a", "b", "c"    |
| `/[^0-9]/`   | Matches any character that is *not* a digit (like `\D`)     | "a", "!", " "        | "0", "5", "9"    |
| `/[^ \t\n]/`| Matches anything that is not a space, a tab or a newline     | "c", "d", "1"        | " ", "\n", "\t"  |

### 3.3 Character Classes (Shorthands)

These are convenient shorthands for common character sets.

| Class | Description                                                 | Equivalent Character Set   | Matches           | Does NOT Match   |
| :---- |:------------------------------------------------------------|:---------------------------|:------------------|:-----------------|
| `\d`  | Digit                                                       | `[0-9]`                    | "0", "5", "9"     | "a", "!"         |
| `\D`  | Non-digit                                                   | `[^0-9]`                   | "a", "!", " "     | "0", "5", "9"    |
| `\w`  | Word character (alphanumeric + underscore)                  | `[a-zA-Z0-9_]`             | "a", "5", "_"     | "!", " "         |
| `\W`  | Non-word character                                          | `[^a-zA-Z0-9_]`            | "!", " ", "-"     | "a", "5", "_"    |
| `\s`  | Whitespace character (space, tab, newline, etc.)            | `[ \t\r\n\f\v]`            | " ", "\t", "\n"   | "a", "1"         |
| `\S`  | Non-whitespace character                                    | `[^ \t\r\n\f\v]`           | "a", "1", "!"     | " ", "\t", "\n"  |
| `.`   | Any character (except newline, usually)                     | (Almost everything)        | "a", "!", "1"     | (Newline)        |

### 3.4 Word Boundary (`\b` and `\B`)

`\b` matches a word boundary. This is a *zero-width assertion*, meaning it doesn't consume characters, but rather asserts a position.

| Example     | Description                                                             | Matches (bold)                                    | Does NOT Match (no bold)   |
| :---------- |:------------------------------------------------------------------------|:--------------------------------------------------|:---------------------------|
| `/\bcat\b/` | Matches "cat" as a whole word                                           | "**cat**", "a **cat**", " **cat**!"               | "scatter", "bobcat"        |
| `/\bcat/`   | Matches "cat" at the beginning of a word                                | "**cat**alog", "a **cat**", " **cat**!"           | "scatter"                  |
| `/cat\b/`   | Matches "cat" at the end of a word                                      | "bob**cat**", "a **cat**", "!**cat**"             | "catalog"                  |
| `/\Bcat\B/` | Matches "cat" *not* at a word boundary. `\B` is the opposite of `\b`.   | s**cat**ter                                       | "cat", "a cat", " cat!"    |
| `/\Bcat/`   | Matches cat when it is not the beginning of a word.                     | s**cat**ter                                       | "cat", "a cat", " cat!"    |

## 4. Grouping and Alternation

### 4.1 Capturing Groups `(...)`

Parentheses create *capturing groups*.  This has two main purposes:

1.  **Grouping:** Apply quantifiers to a whole group, not just a single character.
2.  **Capturing:**  The matched text within the group can be accessed later (backreferences, or in programming languages).

| Example                          | Description                                                                            | Group 1 Contents (if matched)                          |
|:---------------------------------|:---------------------------------------------------------------------------------------|:-------------------------------------------------------|
| `/(ab)+/`                        | Matches one or more repetitions of "ab"                                                | "ab", "abab", etc.                                     |
| `/(\w+)\s(\w+)/`                 | Matches two words separated by whitespace; captures each word as a separate group      | First word, Second word                                |
| `/(https?):\/\/(www\.\w+\.\w+)/` | Captures the protocol http or https and the domain                                     | "http", "https", and the domain like "www.example.com" |

### 4.2 Non-Capturing Groups `(?:...)`

Sometimes you want to group, but *don't* need to capture the matched text.  Use `(?:...)` for this.  This improves performance slightly.

| Example                            | Description                                                                                                            | Group 1 Contents |
|:-----------------------------------|:-----------------------------------------------------------------------------------------------------------------------| :--------------- |
| `/(?:https?):\/\/(www\.\w+\.\w+)/` | Matches the same as above, but the protocol ("http://" or "https://") is *not* captured as a separate group.  | The domain       |

### 4.3 Backreferences (`\1`, `\2`, etc.)

Backreferences refer to the text captured by a previous capturing group.  `\1` refers to the first group, `\2` to the second, and so on.

| Example             | Description                                                                                                        | Matches                      | Does NOT Match  |
| :------------------ |:-------------------------------------------------------------------------------------------------------------------|:-----------------------------|:----------------|
| `/(a)(b)\1\2/`     | Matches "a", then "b", then "a" again (from group 1), then "b" again (from group 2).                                | "abab"                       | "abba", "abcd"  |
| `/(cat\|dog) is \1/`| Matches a string where "cat" or "dog" is repeated, e.g. "cat is cat" or "dog is dog", with proper backreference    | "cat is cat", "dog is dog"   | "cat is dog"    |
| `<([a-z]+)>.+<\/\1>`| Matches basic HTML tags. Captures tag name, then matches content and closing tag.                                  | `<p>text</p>`, `<b>bold</b>` | `<p>text</b>`   |

### 4.4 Alternation (`|`)

The pipe symbol (`|`) acts like an "OR".

| Example          | Description                        | Matches         | Does NOT Match   |
|:-----------------|:-----------------------------------|:----------------|:-----------------|
| `/cat\|dog/`     | Matches either "cat" or "dog"      | "cat", "dog"    | "bird", "catdog" |
| `/(c\|d)at/`     | Matches either "cat" or "dat"      | "cat", "dat"    | "bat"            |
| `/gr(a\|e)y/`    | Matches "gray" or "grey"           | "gray", "grey"  | "graey"          |

## 5. Anchors

Anchors assert the position within the string, but *don't* consume characters (zero-width assertions).

| Anchor | Description                                  | Example      | Matches (bold)       | Does NOT Match (no bold)   |
| :----- |:---------------------------------------------| :----------- |:---------------------|:---------------------------|
| `^`    | Start of string (or line, in multiline mode) | `/^Hello/`   | "**Hello** world"    | "Say Hello"                |
| `$`    | End of string (or line, in multiline mode)   | `/world$/`   | "Hello **world**"    | "world peace"              |
| `^$`   | Matches only an empty line                   | `/^$/`       | "", "\n"             | "a" " "                    |

**Example of combined start and end anchors:**

| Example      | Description                                                                                     | Matches  | Does NOT Match         |
|:-------------|:------------------------------------------------------------------------------------------------|:---------|:-----------------------|
| `/^Monday$/` | Will match "Monday" but only as the only content on the string.  This is useful for validation. | "Monday" | " Monday" or "Monday " |

## 6. Flags (Modifiers)

Flags modify the behavior of the regex engine. They are typically placed *after* the closing slash of the regex.

| Flag | Description                                                                                                                                                                           | Example     |  Matches (without flag)                         | Matches (with flag)         |
| :--- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|:------------------------------------------------|:----------------------------|
| `g`  | **Global:** Find *all* matches, not just the first one.                                                                                                                               | `/a/g`      | "b**a**nana"                                    | "b**a**n**a**n**a**"        |
| `i`  | **Case-insensitive:**  Ignore case when matching.                                                                                                                                     | `/hello/i`  | (no match)                                      | "**Hello**", "**hello**"    |
| `m`  | **Multiline:**  Treat `^` and `$` as the start/end of each *line* (instead of the start/end of the entire string).                                                                    | `/^cat$/m`  | (no match)                                      | "**cat**\ndog\n**cat**"     |
| `s`  | **Dotall (Single-line):**  Makes the dot (`.`) match *any* character, *including* newline characters.                                                                                 | `/a.b/s`    | (no match if a and b are on different lines)    | "a\nb"                      |
| `u`  | **Unicode:** Enable full Unicode support.  Important for working with characters outside the basic ASCII range.                                                                       | `/\p{L}/u`  | (May not match all Unicode letters without `u`) | Matches all Unicode letters |
| `y`  | **Sticky:** Matches only from the index indicated by the `lastIndex` property of this regular expression in the target string (and does not attempt to match from any later indexes). | `/foo/y`    | "**foo**bar"                                    | (no match)                  |
