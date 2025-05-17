---
title: Indentation
---

# Indentation

Sublime Text can perform automatic indentation when you type.
It can also reindent text according to the indentation rules on demand.
Note that it will not perform auto-formatting, like adding newlines or adjusting spaces around parenthesis and the like. You would need an external tool or plugin for that.
The indentation rules consist of various regular expression patterns applied in different circumstances.
All the regular expression patterns match against one line of text.

## File Format

Indentation rules are defined using metadata files.
However, because metadata for indentation rules is complicated and
is commonly required by packages which add syntax definitions,
it's discussed separately in this page
for convenience.

Just as regular metadata files,
indentation metadata files
have the `.tmPreferences` extension
and use the Property List format.
The file name is ignored by Sublime Text.

::: info See Also
[Metadata](./metadata.md#indentation-options) Detailed documentation on indentation metadata.
:::

The scope selector is equivalent to the `eol_selector` context, wherein it works on the scope of the `\n` character at the end of the line.

## Indentation when pressing <kbd>Enter</kbd>

The main aspect of auto indentation increasing the indent level occurs when pressing <kbd>Enter</kbd>, anywhere on a line.
Note that some keybindings override <kbd>Enter</kbd> with their own logic by inserting a snippet etc.
The `insert` command processes indentation logic, but the `insert_snippet` and `append` commands don't.

## All subsequent lines

Example: type an open HTML tag `<article>` or curly brace `{` and press <kbd>Enter</kbd>
This is handled by the `increaseIndentPattern` regex.

## A single line

Sometimes it is useful to indent just a single line further, for example when typing an if statement without an opening brace `if (x)` <kbd>Enter</kbd>. In this case, only the next line is indented, because the "if" will apply to only a single statement/line. Then, if a `{` is typed, it gets unindented again, because most people want their opening and closing braces in the same column as the start of the "if". See also the "Adjusting indentation when you type on a line" section.

This is also potentially useful for incomplete statements (split over multiple lines), for example some languages require statements to be terminated with a semi-colon `;`, and visually indenting them makes it more readable.
```js
    a.b().c.d.e.f
        .g().h.i();
```
as opposed to
```js
    a.b().c.d.e.f
    .g().h.i();
```

This is handled by the `bracketIndentNextLinePattern` regex - presumably the `bracket` part relates to the `{` behavior, although it is actually not hardcoded, and is instead overridden by a separate `disableIndentNextLinePattern` regex. The naming of this is perhaps a little confusing, because the disable regex applies to the "next line" - the one whose indentation was caused by the `bracketIndentNextLinePattern`. ST handles this by default in `Packages/Default/Indentation Rules.tmPreferences`.

### lines containing only whitespace and comments are ignored

The auto-indenter will ignore lines matching the `unIndentedLinePattern` regex when computing the next line's indentation level. This mainly seems to be used to ensure that `bracketIndentNextLinePattern` can affect multiple lines when the first line(s) is/are purely comment lines.

### other built-ins

The user preference `indent_to_bracket` adds whitespace up to the first open bracket when indenting. It also affects unindenting too, the close paren is placed in the column after the open paren. 
```js
foobar(
       okay(
            'yeah'
            )
       )
```

`indentSquareBrackets` and `indentParens` ensure that an open/unclosed square bracket `[` or paren `(` will cause subsequent lines to be indented an extra level. However, they don't have any affect on unindenting the current line when the closing bracket is typed, so must be combined with a `decreaseIndentPattern` for consistency. See [the JSON indentation rules](https://github.com/sublimehq/Packages/blob/7ef80d531b752baee46f792b6bc6b26206e56012/JavaScript/JSON%20Indent.tmPreferences#L26) for an example. They do, however, unindent the *next* line when typing a closing paren/square bracket that doesn't have a corresponding opening bracket on the same line (ignoring those in a `string` or `comment`).

# Adjusting indentation when you type on a line

The main aspect of auto indentation decreasing the indent level occurs when typing on a line, for example a closing brace `}` or keywords `end if` or closing SGML tags `</div>`

But it can also occur when you typed an if statement on one line and then an opening brace on the next line `if (x)` <kbd>Enter</kbd> `{`. If you then delete that brace, it will increase the indentation level by one again. This means that ST has to keep track of whether it has increased or decreased the indentation while you typed on the line. See also [Indentation when pressing <kbd>Enter</kbd>/A single line](#a-single-line).

Manually adjusting the indentation level on the line by any means will prevent ST from automatically changing the indentation level as you type on the line. As will typing on a different line. So it seems ST analyzes the line between pressing <kbd>Enter</kbd> and typing on a different line - just moving the caret off the line and back again without typing doesn't affect it.

This is handled by the `decreaseIndentPattern` regex.

# Reindenting the whole file or a selected part of the file at once, on demand

One can ask ST to reindent any part of the file on command. (Note that this is different to reformatting i.e. the only changes are to indentation, no non-whitespace characters are moved to different lines etc. Reformatting is best left to plugins and thus is out of scope for this discussion.)

Reindentation uses the indentation of the line above as a reference point to continue from, so even if the file above the part being reindented doesn't completely follow the indentation rules, the part being reindented can still look correct/not out of place.

Also, it is possible to "Paste and Indent" (see the Edit menu) in one go, which, doesn't perform a paste and a reindent as one would expect, but ensures the indentation of the pasted text fits the place where it was pasted, i.e. indentation is added or removed from the lines to keep the same relative indentation in the pasted text but to start from the indentation of where it was pasted.
For example, if your original text was `hello\n\tworld\n` with your cursor at the end and you pasted `\t\t\tfoo\nbar` you'd normally get: `hello\n\tworld\n\t\t\tfoo\nbar`, but using paste and indent, you'd get `hello\n\tworld\n\t\t\t\tfoo\n\tbar`.
