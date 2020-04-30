# Contribution Guidelines


## Issue

Even though it's very unlikely,
please search through the existing issues
and look for existing similar ones
before submitting your own.


## Pull request

Please try to group related changes into single pull requests
and create additional ones if necessary.
This will make reviewing and merging
much easier and faster.


## Markup Style guidelines

This project uses Markdown as its markup language.

Not all the files in this project
follow these guidelines yet,
as we established them
after a large portion of this guide had been written already.
If you find any style inconsistencies,
please file a report or send a pull request to fix them.

When changing a file to use semantic linefeeds,
please apply this in a separate commit
and do not perform any other content changes
in the same commit.


### Markdown Parser

The markup parser is [markdown-it][],
which can be extended by plugins
and is furthermore accompanied
by some of [Vuepress's custom extensions][vuepress-exts].
You can find the list of plugins we use
in the `markdown.plugins` list in `config.js`.

[markdown-it]: https://github.com/markdown-it/markdown-it
[vuepress-exts]: https://vuepress.vuejs.org/guide/markdown.html

Keywords in upper case
follow the meanings specified in [RFC-2119][].

[RFC-2119]: https://tools.ietf.org/html/rfc2119


### Line Widths

Lines MUST NOT be longer than 80 characters,
except for tables, urls and code blocks.

Split text using [semantic linefeeds][].
Using those,
you will hardly ever come near 80 characters
on a single line.
Even when you do,
you should be able to add line breaks
at fitting locations trivially.
This file can serve as an example.

[semantic linefeeds]: https://rhodesmill.org/brandon/2012/one-sentence-per-line/


### Whitespace

Blocks SHOULD be indented by 2 spaces,
but visual indentation is preferred.
Inline code should be using code fences,
especially when syntax highlighting is desired.

*Example:*

```md
- This sentence can be split
  using a semantic linefeed,
  as mentioned earlier.

1. The very same thing applies to this line,
   but it uses a three-spaces indent instead.

1.  You could also indent this block
    by 4 spaces.
```

Trailing whitespace SHOULD be avoided.
Insert manual line breaks using `<br>` tags
instead of using two trailing spaces.

Headings MUST be preceded by two blank lines,
unless they directly follow another heading
or the beginning of the file.

Enumeration and code blocks
SHOULD be surrounded by blank lines.


### Enumerations

Enumeration lists MUST begin on the same indentation level
as their surrounding text.

- Unnumbered lists SHOULD use the following hierarchy:

  ```md
  - first level
    * second level
  ```

- Numbered lists SHOULD use `1.` for all items when possible:

  ```md
  1. This is the first item,
     but it may change places
     in the future.
  1. By always using ``1.``,
     we can swap lines around
     without worrying about numbering.
  ```


### Hyperlinks

Hyperlinks SHOULD NOT be inlined
and instead use deferred definitions.
The linked text SHOULD NOT be "here".
Instead, describe what the target page
covers, represents, or can otherwise be summarized as
and add the reference to the describing text.
Use a descriptive shorthand
if the linked text does not speak for itself.

Hyperlink definitions can be placed
after a paragraph,
at the end of the section,
or at the end of the document –
whatever seems more appropriate.

*Example:*

```md
This is some normal text.
Information on "text"
can be found [on Wikipedia][wiki-text].
<!-- and not "here" -->

[wiki-text]: https://en.wikipedia.org/wiki/Text
```

For relative links,
follow the Vuepress recommendation
of referencing the files with their `.md` extensions.
Use absolute paths when linking
between the guide and the reference sections.
If the relative URL is short,
you MAY directly specify the target URL in text.


### Headings

The page's title is specified in YAML front matter
and is inserted into the rendered as a heading of level one.
Any subsequent headings of the file
MUST NOT be of heading level two or lower
(where lower refers to the significance,
not the numeric value).

Each heading SHOULD be
under a heading with one level higher.

Thus, the first markdown heading of the
The following heading styles
MUST be used in the displayed order
for technical reasons
(e.g. h3 must come after h2 or higher,
and **not** after h1).

*Example:*

```md
---
title: This will be heading 1
---

## Heading 2

### Heading 3

With text


### And proper spacing

## New Heading 2

### This SHOULD NOT be a h4
```

### File Paths

File paths (relative or absolute)
MUST be specified like this:

    `Packages/SomePackage/somefile.ext`

All paths MUST be written with forward slashes
unless they are meant to be used in Windows.

File extensions (when referring to file types)
MUST be written like this:

    `.ext`

### Shortcut Keys

Except for the special OS X bindings site,
all shortcut keys use `<kbd>` HTML tag.

```
<kbd>Ctrl + T</kbd>
```

All key names are written in TitleCase
and all key bindings MUST refer
to the default for Windows.


### Sublime Text-specific

- Command captions in the command palette
  MUST be written as follows:

  ```md
  **Preferences: Settings - User**
  ```

- Menu item captions (from the main menu by default)
  MUST be written as follows (notice the `→`):

  ```md
  *Preferences → Package Settings → ...*
  ```


### Comments

The following comment 'keywords' may be used
*at the beginning* of a comment
to mark a section for review:

- XXX
- TODO

Examples:

```md
<!-- TODO add some screenshots -->
```
