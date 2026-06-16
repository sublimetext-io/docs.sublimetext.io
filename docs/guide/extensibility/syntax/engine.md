---
title: Syntax Engine Overview
---

# Syntax Engine Overview

## TextMate

Sublime Text originally used the TextMate format
for syntax definitions.
Their `tmLanguage` describes a stack-based system of regular expressions
to assign [scopes](#scopes) to specific sets of characters.
While Sublime Text now includes features beyond `tmLanguage`,
it is useful to understand its concepts first.
Many syntax definitions only use TextMate features,
and several other editors use TextMate-derived engines.

This page uses the Sublime Syntax's names for keywords,
but the originals are available
on [the legacy page](/reference/syntaxdefs_legacy.md).


## Walkthrough

1. The engine pushes the first stack frame, `main`.
  It also set the current character
  to the first character
  of the unprocessed editor text.

2. For the current character,
  evaluate the regular expressions
  in the current stack frame
  from first to last
  until one matches.

3. Consume characters
  in the matching regexp
  and assign scopes to them.

4. Optionally push or pop the stack frame.
  The Sublime Text engine has a significant change
  from TextMate,
  wherein multiple stack frames can be pushed or popped at a time.
  Sublime Text also supports replacing the current frame
  with a different one.

5. If none of the regular expressions
  in the current frame match
  at the current position in the file,
  the engine will advance
  to the next character of the file
  and restart the list of regexps
  in the current frame.

6. Go to step 2 at the new character position.

### Caveats

1. Regular expressions that consume no characters
  should change the stack.
  If they do not,
  the current character is advanced
  as in step 5
  to avoid an infinite loop.

2. Regular expressions do not match across line breaks.


## Reusing Matches

### `contexts`

It would be a mess to repeat relevant regular expressions
in each stack frame that needed them.
This is the purpose of the `contexts` section.
Contexts are sets of matches and other instructions
that a stack frame can `include` in its matches.
They are processed in the same order
as if they were `match` instructions
at the location of the `include` instruction.

Contexts can also be pushed onto the stack
as a new frame.
This is why stack frames are often
colloquially referred to as "contexts,"
including in Sublime Text's scope debugger.

### `variables`

Portions of regular expressions can also be saved
in the `variables` section and reused in multiple expressions.
Variables also make some ugly regexps readable.

### Match reuse best practice

Well-designed syntax definitions will define utility contexts
that `include` equivalent things together for re-usability:

- A normal programming language will have things like
  - A **statements** group of all things that can be directly executed.
    This then may or may not (language-dependent) include&hellip;
  - An **expressions** group of things
    that you can put on the right-hand-side of an assignment,
    which will definitely include&hellip;
  - An **atoms** group of strings, numbers, chars, etc.
    that might also be valid statements,
    but that also depends on your language.
  - **function-definitions** probably won't be in **expressions**
    (unless they are lambdas)
    but probably _would_ be in **statements**.
    Function definitions might push into a context
    that lets you `return` and so on.

- A markup language might have
  - An **inlines** group to keep track of all the markup
    one can have within a block.
  - A **blocks** group to hold lists, quotes, paragraphs, headers.
  - &hellip;

<!-- TODO: Development tips: stack pushing -->
<!-- TODO: Development tips: state chaining -->

<!-- TODO: ST keywords: prototype & friends -->
<!-- TODO: ST keywords: embed & friends -->
<!-- TODO: ST keywords: branch & friends -->


## Scopes

Scopes are the names or tags for tokens
matched by a syntax definition.

After scopes have been assigned by a syntax definition,
the user's [Color Scheme][] maps them
to colors and styles to apply to the text.
Using [established conventions for scopes][scope-names]
helps preserve consistency
for colors and styles
across multiple languages that a user may have installed.

Scopes are also used for

- indexing definitions, references, and headings
- context for which completions are available
- context for keybindings
- comment style

[color scheme]: https://www.sublimetext.com/docs/color_schemes.html
[scope-names]: https://www.sublimetext.com/docs/scope_naming.html
