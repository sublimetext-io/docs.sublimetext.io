---
title: Syntax Definitions (Legacy)
---

::: warning
In Sublime Text 3.0 (Build 3084),
a new syntax definition format has been added,
with the `.sublime-syntax` extension.

It is highly encouraged to be used
in favor of the legacy format
described in this document,
unless compatibility with older versions 
or other editors using this format is desired.

See the [official documentation][syntax-docs] for details.

This document describes
the old `.tmLanguage` format
inherited from TextMate.
:::

[syntax-docs]: https://www.sublimetext.com/docs/3/syntax.html


## File Format

TextMate syntax definitions are Plist files with the `.tmLanguage` extension.
However, for convenience in this reference document, YAML is shown instead.

Additionally, Sublime Text also understands the `.hidden-tmLanguage` extension,
which can not be selected by the user but only by set by plugins. 
"Find in Files" makes use of this. 
The downsite is that these can not be included by 
import statements in other language definitions.

```yaml
---
name: Sublime Snippet (Raw)
scopeName: source.ssraw
fileTypes: [ssraw]
uuid: 0da65be4-5aac-4b6f-8071-1aadb970b8d9

patterns:
  - comment: Tab stops like $1, $2...
    name: keyword.other.ssraw
    match: \$\d+

  - comment: Variables like $PARAM1, $TM_SELECTION...
    name: keyword.other.ssraw
    match: \$([A-Za-z][A-Za-z0-9_]+)
    captures:
      '1': {name: constant.numeric.ssraw}

  - name: variable.complex.ssraw
    begin: '(\$)(\{)([0-9]+):'
    beginCaptures:
      '1': {name: keyword.other.ssraw}
      '3': {name: constant.numeric.ssraw}
    end: \}
    patterns:
      - include: $self
      - name: support.other.ssraw
        match: .

  - name: constant.character.escape.ssraw
    match: \\[$<>]

  - name: invalid.illegal.ssraw
    match: '[$<>]'
```


`name`
: Descriptive name for the syntax definition.
  Shows up in the syntax definition dropdown menu located in the bottom right of
  the Sublime Text interface. 
  It's usually the name of the programming language or equivalent.

`scopeName`
: Name of the topmost scope for this syntax definition. 
  Either `source.<lang>` or `text.<lang>`. 
  Use `source` for programming languages and `text` for markup and everything else.

`fileTypes`
: This is a list of file extensions (without the leading dot).
  When opening files of these types,
  Sublime Text will automatically activate this syntax definition for them.
  Optional.

`uuid`
: Unique indentifier for this syntax definition. Currently ignored.

`patterns`
: Array of [patterns](#patterns-array) to match against the buffer's text.

`repository`
: Array of patterns abstracted out from the `patterns` element.
  Useful to keep the syntax definition tidy as well as for 
  specialized uses like recursive patterns or re-using the same pattern.
  Optional.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


## Patterns Array

A pattern is a mapping in one of the following formats:

**match**
: Contains the following elements:

  |  Element   |   Description                                              |
  | ---------- | ---------------------------------------------------------- |
  | `match`    | Pattern to search for.                                     |
  | `name`     | Optional. Scope name to be assigned to matches of `match`. |
  | `comment`  | Optional. For information only.                            |
  | `captures` | Optional. Refinement of `match`. See below.                |

  In turn, `captures` can contain *n* of the following pairs of elements
  (note that ``0`` refers to the whole match):

  | Capture  | Description                                     |
  | -------- | ----------------------------------------------- |
  | `0`..`n` | Name of the group referenced. Must be a string. |
  | `name`   | Scope to be assigned to the group.              |

  *Example:*

  ```yaml
  # Simple

  - comment: Sequences like \$, \> and \<
    name: constant.character.escape.ssraw
    match: \\[$<>]

  # With captures

  - comment: Tab stops like $1, $2...
    name: keyword.other.ssraw
    match: \$(\d+)
    captures:
      '1': {name: constant.numeric.ssraw}
  ```

**include**
: Includes an item from the repository, another syntax definitions or the current
  one.

  References:

  | Include    | Description                    |
  | ---------- | ------------------------------ |
  | $self      | The current syntax definition. |
  | \#itemName | itemName in the repository.    |
  | source.js  | External syntax definitions.   |

  *Examples:*

  ```yaml
  # Requires presence of DoubleQuotedStrings element in the repository.
  - include: '#DoubleQuotedStrings'

  # Recursively includes the complete current syntax definition.
  - include: $self

  # Includes and external syntax definition.
  - include: source.js
  ```

**begin..end**
: Defines a scope potentially spanning multiple lines.
  Contains the following elements (only `begin` and `end` are required):

  |   Scope         | Description                                          |
  | --------------- | ---------------------------------------------------- |
  | `name`          | Scope name for the content including the markers.    |
  | `contentName`   | Scope name for the content excluding the markers.    |
  | `begin`         | The start marker pattern.                            |
  | `end`           | The end marker pattern.                              |
  | `name`          | Scope name for the whole region.                     |
  | `beginCaptures` | `captures` for `begin`. See `captures`.              |
  | `endCaptures`   | `captures` for `end`. See `captures`.                |
  | `patterns`      | Array of patterns to be matched against the content. |

  *Example:*

  ```yaml
  name: variable.complex.ssraw
  begin: '(\$)(\{)([0-9]+):'
  beginCaptures:
    '1': {name: keyword.other.ssraw}
    '3': {name: constant.numeric.ssraw}
  end: \}
  patterns:
  - include: $self
  - name: support.other.ssraw
    match: .
  ```

<!-- TODO explain captures -->


## Repository

A repository defines items
that can be referenced from [a patterns array](#patterns-array)
(global or within a *begin..end* pattern) via an `include` pattern.

A repository item may be a single pattern
or an array of patterns.

*Example:*

```yaml
repository:
  numericConstant:
    patterns:
      - name: constant.numeric.double.powershell
        match: \d*(?<!\.)(\.)\d+(d)?(mb|kb|gb)?
        captures:
          '1': {name: support.constant.powershell}
          '2': {name: support.constant.powershell}
          '3': {name: keyword.other.powershell}
      - name: constant.numeric.powershell
        match: (?<!\w)\d+(d)?(mb|kb|gb)?(?!\w)
        captures:
          '1': {name: support.constant.powershell}
          '2': {name: keyword.other.powershell}

  scriptblock:
    name: meta.scriptblock.powershell
    begin: \{
    end: \}
    patterns:
      - include: $self
```


## Escape Sequences

Be sure to escape JSON/XML sequences as needed.

For YAML, additionally make sure that you didn't unintentionally start a new
scalar by not using quotes for your strings.
Examples that **won't work** as expected:

```yaml
match: [aeiou]

include: #this-is-actually-a-comment

match: "#"\w+"" # contains double quotation marks
```

Use single quotes in these situations:

```yaml
match: '[aeiou]'

include: '#this-is-actually-a-comment'

match: '#"\w+'
```
