---
title: Syntax Definitions
---


# Syntax Definitions

Syntax definitions make Sublime Text aware
of programming and markup languages.
Most noticeably, they work together with color schemes
to provide syntax highlighting.
Syntax definitions define *[scopes](#scopes)*
that divide the text in a buffer into named regions.
Several editing features in Sublime Text make extensive use
of this fine-grained contextual information.

Essentially, syntax definitions consist
of regular expressions used to find text,
as well as more-or-less arbitrary, dot-separated strings
called *scopes* or *scope names*.
For every occurrence of a given regular expression,
Sublime Text gives the matching text its corresponding *scope name*.


## Syntax Definition Formats

### `sublime-syntax`

For Sublime Text 3 (Build 3084),
a new syntax definition format has been added
with the `.sublime-syntax` extension.
This is based on YAML
and uses slightly different keywords.

It is highly encouraged to be used
in favor of the legacy TextMate format below,
unless compatibility with older versions
or other editors is desired.

Reference documentation is available
on the [official website][sublime-syntax].

[sublime-syntax]: https://www.sublimetext.com/docs/syntax.html


### TextMate `tmLanguage` and derivatives

Sublime Text originally used TextMate language files
(with the `.tmLanguage` extension)
in [property list][plist] (PList) format
for syntax definitions.
Because the XML of PList was cumbersome,
many developers used a YAML or JSON representation
and compiled it to PList afterward.

Reference documentation is available
at [TextMate Syntax Definitions](/reference/syntaxdefs_legacy.md)

[plist]: https://en.wikipedia.org/wiki/Property_list


## Scopes

::: info See Also
[Scope Naming][]
: Official documentation on assigning scopes to code,
  including a section on Color Schemes

[Selectors][scope selectors]
: Official documentation on scope selectors
:::

Scopes are a key concept in Sublime Text,
which it inherits from the macOS editor TextMate.
Essentially, scopes are named text regions in a buffer.
They don't do anything by themselves,
but Sublime Text peeks at them when it needs contextual information.

For instance, when you trigger a snippet, Sublime Text checks the scope
bound to the snippet and looks at the caret's position in the file. If
the caret's current position matches the snippet's scope selector,
Sublime Text fires it off. Otherwise, nothing happens.

Furthermore, [Color Schemes][] make extensive use of scopes
to style every aspect of a language in the desired color.

::: tip Info
There's a slight difference between *scopes* and *[scope selectors][]*: Scopes
are the names defined in a syntax definition, while scope selectors are used
in items like snippets and key bindings to target scopes. When creating a
new syntax definition, you care about scopes; when you want to constrain a
snippet to a certain scope, you use a scope selector.
:::

Scopes can be nested to allow for a high degree of granularity. You can drill
down the hierarchy very much like with CSS selectors. For instance, thanks to
scope selectors, you could have a key binding activated only within single
quoted strings in Python source code, but not inside single quoted strings in
any other language.

[scope naming]: https://www.sublimetext.com/docs/scope_naming.html
[scope selectors]: https://www.sublimetext.com/docs/selectors.html
[color schemes]: /guide/customization/color_schemes.md


## How Syntax Definitions Work

At their core,
syntax definitions are arrays of regular expressions
paired with scope names.
Sublime Text will try to match these patterns
against a buffer's text
and attach the corresponding scope name
to each occurrence.
These pairs of regular expressions and scope names
are known as *rules*.
Sets of rules called *contexts*
are pushed to and popped from a stack.

### Basic Processing

The basic loop for the syntax engine looks like this:

1. The engine pushes the first context, `main`.
  It also sets the current character
  to the first character
  of the unprocessed editor text.

2. From the current character
  to the end of its line,
  evaluate the regular expressions
  in the current stack frame
  from first to last
  until one matches.

3. Consume characters
  in the matching regexp
  and assign scopes to them.

4. Optionally push or pop a context on the stack.
  The `sublime-syntax` format has a significant change
  from TextMate,
  wherein multiple stack frames can be pushed or popped at a time.
  It also supports replacing the current context
  with a different one.

5. If none of the regular expressions
  in the current context match
  at the current position in the file,
  the engine will advance
  to the next character of the file
  and restart the list of regexps
  in the current context.

6. Go to step 2 at the new character position.

::: warning Caveats
- Regular expressions that consume no characters
  should change the stack.
  If they do not,
  the current character is advanced
  as in step 5
  to avoid an infinite loop.
  Common examples are
  lookaheads like `(?=\S)`,
  BOL or EOL anchors like `^` and `$`,
  and the null regexp `''` that always matches.

- Regular expressions *do not match* across line breaks.

- Since rules are matched in order,
  make sure that more specific rules
  come sooner in each context.
  Otherwise, a greedy regular expression might swallow parts
  you'd like to have styled differently.
:::


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

::: tip
- Contexts can be included from separate files.

- Rules can recurse through pushed contexts.
  (`main` -> `brace-blocks` -> `main`)
:::

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


## Manipulating the Stack

Sublime's syntax definitions allow better stack control
than TextMate languages,
allowing some common patterns.
These are adapted from [the Tips issue][tips]
on the repository for ST's own syntaxes.

[tips]: https://github.com/sublimehq/Packages/issues/757


### Pushing multiple contexts

When you have a construction
where you expect a list of elements in sequence,
put them all onto the stack at once.
The stack will unwind as the elements are recognized.

```yaml
contexts:

  else-pop:
    - match: (?=\S)
      pop: 1

  functions:
    - match: function(?=\s)
      scope: keyword.declaration.function
      push:
        - function-body
        - function-params
        - function-name

  function-name:
    - match: (?:{{identifier_function}})?(?=[({])
      scope: entity.name.function
      pop: 1
    - include: storage-modifiers  # global, private, etc.

  function-params:
    - match: \(
      scope: punctuation.section.parameters.begin
      push: function-param-body
    - include: else-pop

  function-param-body:
    - meta_scope: meta.function.parameters
    - match: \)
      scope: punctuation.section.parameters.end
      pop: 2
    - ...

  function-body:
    - meta_scope: meta.function
    - match: \{
      scope: punctuation.section.block.begin
      push: function-body-content
    - include: else-pop

  function-body-content:
    - match: \}
      scope: punctuation.section.block.end
      pop: 2
    - include: statements
```

As an added benefit, most of these scopes can be reused:

```yaml
  immediately-pop:
    - match: ''
      pop: 1

  statements:
    ...
    - match: \{
      scope: punctuation.section.braces.begin
      push:
        - meta-block
        - expect-closing-brace
        - statements
    ...

  meta-block:
    - meta_scope: meta.block
    - include: immediately-pop
```

As a bonus, states stacked this way are implicitly optional.
If one is omitted,
the highlighter will move on to the next without interruption.
For instance, in the first example,
the construction will be parsed correctly
whether or not the author supplies a function name.

::: tip Tip
Use plural context names to indicate non-popping contexts.
In other words, plural contexts can match multiple times.

Use singular context names where the contents can only match once.
:::


### Context chaining

You can also manipulate the stack with sequences of `set`s.
Before making an elaborate state machine,
ask yourself if you *really* need to.


#### Push your first state

While it is absolutely possible to have a match in `main`
which `set`s into a chain of stateful contexts
and subsequently sets back into `main` at the end,
it is not recommended.
`main` should be a stateless "baseline" context
that is always the last element on the stack.

Instead, have your match in `main` use push
to get into your first state,
then `pop` out of the last state.
For example, imagine we wanted
to match the sequence `abc` with each character scoped differently
and only when they follow each other.
For illustration purposes, we will also match numerics in `main`:

```yaml
contexts:
  main:
    - match: a
      scope: first
      push: expect-b
    - match: \d+
      scope: constant.numeric

  expect-b:
    - match: b
      scope: second
      set: expect-c

  expect-c:
    - match: c
      scope: third
      pop: 1
```

Notice how `a` pushes `expect-b`.
We don't set the first context, only the second one.
Once we find the terminator, we pop out.


#### Lookahead push for meta scoping

Sometimes you need to apply a meta scope
to an entire stateful chunk.
When this is the case,
you almost certainly want your push rule
to be a non-consuming lookahead
rather than a consuming scoped match.
We can modify the above:

```yaml
contexts:
  main:
    - match: (?=a)
      push: expect-a
    - match: \d+
      scope: constant.numeric

  expect-a:
    - meta_scope: meta.abc
    - match: a
      scope: first
      set: expect-b

  expect-b:
    - meta_scope: meta.abc
    - match: b
      scope: second
      set: expect-c

  expect-c:
    - meta_scope: meta.abc
    - match: c
      scope: third
      pop: 1
```


#### Bail outs

Always remember that you're writing a parser
for a set of partially valid syntax fragments.
The normal mode of operation is that someone is actively typing new text.
For this reason,
make sure that any and all stateful contexts you use
have aggressive "bail-outs" for when something goes wrong.
As a rule of thumb, if there's a case where a compiler's parser would have produced an error,
your syntax mode should handle that case by `pop`ing back to `main`.

Consider the example from above. Imagine the user is typing typing into the following buffer:

```
42
ab
12
```

Even if the user is actively typing `c` following `b`,
it would be a terrible experience for the scoping on `12`
to shift back and forth as they type in the middle.
For this reason, you should always end your mid-state scopes
with a lookahead match like `else-pop` from the multi-push section above
that pops out of the state chain.

Getting this wrong is one of the easiest ways
to create a terrible experience for users of your mode
without even realizing it yourself.


## Other Instruction Keywords

Consult [the official documentation][sublime-syntax]
for more detail on the terms below.


### Meta scopes

`meta_scope`
: Apply a scope to a whole context,
  including the matches that push and pop it.

`meta_content_scope`
: Apply a scope to a whole context,
  except for the matches that push and pop it.


### Prototyping

The `prototype` context
: A special context included
  at the beginning of every context
  except contexts included by `prototype` itself.
  For example: comments

`meta_include_prototype`
: Keyword to disable including `prototype`.
  For example: inside strings

`with_prototype`
: When pushing a context,
  also include these rules
  at the beginning of *every* nested context.


### Embedding

`embed`
: Like a pushed context,
  popping rules are different
  as described in `escape`.

`escape`
: Aggressively return directly to the embedding context,
  popping any number of contexts upon match.

`escape_captures`
: Allow assigning scopes to the regexp in `escape`.


### Branching

Sometimes the appropriate scope is not decidable
without context beyond a line break.
For these cases, the `branch` keyword
describes an array of speculative contexts
to try until a `fail` match rewinds
back to the `branch_point`.


### Inheritance

Syntaxes can extend from other syntaxes.
Each variable can be overridden at will.
Each context can be prepended to, appended to, or replaced outright.


## Regular Expression Performance

Sublime built a custom regexp engine to process rules,
commonly called `sregex`.
It explicitly excludes support for certain constructs
that are slow or explode backtracking.

Oniguruma is still available and used where necessary,
but the best practice for development is to eliminate incompatible patterns.

In practice, this means to avoid

- Anything non-regular in the formal sense
  (backreferences, recursive matches, etc.).
    + Except when capture groups are used in a `push`.
      Those are available in a `pop` as backrefs.

- Lookbehinds
    + Except in `escape` patterns.

- Atomic groups and possessive quantifiers

- Some Unicode character properties

- Named captures


### Testing `sregex` Compatibility

Syntax definitions have a build variant
to test pattern compatibility with the `sregex` engine.
Use <Key k="ctrl+shift+b" /> and choose the
**Syntax Tests - Regex Compatibility** option.
