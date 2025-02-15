---
title: Completions Files
---

# Completions Files

::: info See Also
[Completions](/guide/extensibility/completions.md)
: Introduction to the different types of completions
:::

Completions aren't limited to completions files,
because other sources contribute
to the completions list
(see above).
However, the most explicit way
Sublime Text provides you to feed it completions
is by means of `.sublime-completions` files.

This topic only deals with
the format of a `.sublime-completions` file.


## File Format

Completions are JSON files
with the `.sublime-completions` extension.
Entries in completions files can contain
either snippet-like strings or plain text.


### Example

Here's an example (with HTML completions):

```json
{
   "scope": "text.html - source - meta.tag, punctuation.definition.tag.begin",

   "completions":
   [
      { "trigger": "a", "contents": "<a href=\"$1\">$0</a>" },
      { "trigger": "abbr\t<abbr>", "contents": "<abbr>$0</abbr>" },
      { "trigger": "acronym", "contents": "<acronym>$0</acronym>" }
   ]
}
```

**scope**
: Determines when the completions list
  will be populated with this list of completions.

  See [Scopes][] for more information.

[Scopes]: /guide/extensibility/syntaxdefs.md#scopes 

**completions**
: Array of *completions*.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


## Types of Completions

### Plain Strings

Plain strings are equivalent to
an entry where the `trigger`
is identical to the `contents`:

```json
"foo"
// is equivalent to:
{ "trigger": "foo", "contents": "foo" }
```


### Trigger-based Completions

```json
{ "trigger": "foo", "contents": "foobar" },
```

**trigger**
: Text that will be displayed in the completions list
  and will cause the `contents`
  to be inserted when chosen.

**contents**
: Text to be inserted in the buffer.
  Supports the same string interpolation features
  as snippets.

  Refer to [Snippet Features][].

[Snippet Features]: /guide/extensibility/snippets.md#snippet-features

::: tip
If you want a literal `$`,
you have to escape it like this: `\\$`
(double backslashes are needed
because we are within a JSON string).
:::


## Completions Metadata

``` json
{
  "trigger": "func",
  "contents": "funcbar",
  "annotation": "string",
  "kind": "function",
  "details": "A short description of what this string function does."
}

{ "trigger": "func\tstring", "contents": "funcbar" }
```

::: info Added in build 4050.
  These do not affect the triggers themselves, 
  but allow for customization of the appearance of completions in the completions list.
:::

**kind**
: Allows for categorization of the completion via a colored 
  kind letter to the left of the entry in the completions list.
  Colors are determined by the user's color scheme.

**annotation**
: Displays as right-aligned gray to the right of the entry in the completions list.
  Annotations can also be defined using a tab character `\t` in `trigger`.

**details**
: Displays at the bottom of the completions list when the entry is highlighted.
