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

[Selectors][]
: Official documentation on scope selectors
:::

Scopes are a key concept in Sublime Text,
inherited from the macOS editor TextMate.
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
[scope selectors]:https://www.sublimetext.com/docs/selectors.html
[color schemes]: /guide/customization/color_schemes.md


## How Syntax Definitions Work

At their core, syntax definitions are arrays of regular expressions
paired with scope names. Sublime Text will try to match these patterns
against a buffer's text and attach the corresponding scope name to all
occurrences. These pairs of regular expressions and scope names are
known as *rules*.

Rules are applied in order, one line at a time. Rules are applied in the
following order:

1. The rule that matches at the first position in a line
2. The rule that comes first in the array

Each rule consumes the matched text region, which therefore will be
excluded from the next rule's matching attempt (save for a few
exceptions). In practical terms, this means that you should take care to
go from more specific rules to more general ones when you create a new
syntax definition. Otherwise, a greedy regular expression might swallow
parts you'd like to have styled differently.

Syntax definitions from separate files can be combined, and they can be
recursively applied too.
