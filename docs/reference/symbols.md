---
title: Symbols
---

# Symbols

Sublime Text provides basic support
for [symbol navigation][symbol-navigation]
(jumping to class and function definitions, etc.).
Symbol navigation can be enabled
for any type of file.

The symbol navigation framework in Sublime Text
is strictly text-based.
No lexical or syntactical analysis is performed.

[symbol-navigation]: /guide/usage/file-management/navigation.md#goto-anything-operators

## Format

Symbols are defined using metadata files.
Because symbol definition files
are commonly required by packages,
they are discussed separately in this page
for convenience.

Just as regular metadata files,
symbol definition files
have the `.tmPreferences` extension
and use the Property List format.
The file name is ignored by Sublime Text.

::: info See Also
[Metadata](./metadata.md)
: Detailed documentation on metadata files.
:::


## Defining Symbols

Sublime Text features two types of symbol list:
a local symbol list (active file)
and a global symbol list (project-wide).
Using symbol definition files,
you can target both individually.

Symbol definition files use scope selectors
to capture symbols in source code files.

Several symbol definition files can coexist
in the same package.
For example, two symbol definition files
could work in tandem:
one would define all symbols,
and a second one
could selectively hide some of them
if they were uninteresting for users.

Let's see an example
of a symbol definition file:

```xml {7-8,11-12}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>name</key>
    <string>Symbol List</string>
    <key>scope</key>
    <string>source.python meta.function.python, source.python meta.class.python</string>
    <key>settings</key>
    <dict>
        <key>showInSymbolList</key>
        <integer>1</integer>
    </dict>
</dict>
</plist>
```

Using the file above,
Sublime Text would scan source code files
for scope names `source.python meta.function.python`
and `source.python meta.class.python`,
and text within would be indexed
as symbols.
The `showInSymbolList` setting tells
Sublime Text to use
the local symbol list.


## Text Transformations

It is possible
to apply transformations to symbols
before they are displayed to the user.
Symbol transformations consist of text substitutions
defined as regular expressions
using the [Oniguruma][] syntax.

This is an example of a text substitution:

```perl
s/class\s+([A-Za-z_][A-Za-z0-9_]*.+?\)?)(\:|$)/$1/g;
```

In this case, a captured symbol such as `class FooBar(object)`
would show up as `FooBar(object)`
in the symbol list.

Let's expand our previous example
to use a symbol transformation:


```xml {15-16}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>name</key>
    <string>Symbol List</string>
    <key>scope</key>
    <string>source.python meta.function.python, source.python meta.class.python</string>
    <key>settings</key>
    <dict>
        <key>showInSymbolList</key>
        <integer>1</integer>
        <key>symbolTransformation</key>
        <string>
            s/class\s+([A-Za-z_][A-Za-z0-9_]*.+?\)?)(\:|$)/$1/g;
            s/def\s+([A-Za-z_][A-Za-z0-9_]*\()(?:(.{0,40}?\))|((.{40}).+?\)))(\:)/$1(?2:$2)(?3:$4…\))/g;
        </string>
    </dict>
</dict>
</plist>
```


## Structure of a Symbol Definition File

All metadata files
share the same topmost structure,
which is inherited from the Property List format.


```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    ...
</dict>
</plist>
```

These are all the valid elements
in a symbol definition file:

`name`
: **Optional.**
  Name of the symbol definition. Ignored by Sublime Text.

  ```xml
  <key>name</key>
  <string>Some arbitrary name goes here</string>
  ```

`scope`
: **Required.**
   Comma-separated list of scope names
  that Sublime Text will use
  to capture symbols in files.

  ```xml
  <key>scope</key>
  <string>source.python meta.function.python, source.python meta.class.python</string>
  ```

`settings`
: **Required.**
  A container for settings.

  ```xml
  <key>settings</key>
  <dict>
     ...
  </dict>
  ```

`uuid`
: **Optional.**
  A unique identifier for the file.
  Ignored by Sublime Text.

  ```xml
  <key>uuid</key>
  <string>BC062860-3346-4D3B-8421-C5543F83D11F</string>
  ```


## `settings` Subelements

`showInSymbolList`
: **Optional.**
  Links symbols to the local symbol list.
  Valid values are `0` or `1`.
  If `0`,
  the corresponding symbols
  will not be displayed.

   ```xml
   <key>showInSymbolList</key>
   <integer>1</integer>
   ```

`showInIndexedSymbolList`
: **Optional.**
  Links symbols to the global symbol list.
  Valid values are `0` or `1`.
  If `0`,
  the corresponding symbols
  will not be displayed.

   ```xml
   <key>showInIndexedSymbolList</key>
   <integer>1</integer>
   ```

`symbolTransformation`
: **Optional.**
  Targets the local symbol list.
  Semicolon-separated list of text substitutions
  expressed as regular expressions
  using the [Oniguruma][] syntax.
  Whitespace between substitution instructions
  is ignored.


   ```xml
   <key>symbolTransformation</key>
   <string>
      s/class\s+([A-Za-z_][A-Za-z0-9_]*.+?\)?)(\:|$)/$1/g;
      s/def\s+([A-Za-z_][A-Za-z0-9_]*\()(?:(.{0,40}?\))|((.{40}).+?\)))(\:)/$1(?2:$2)(?3:$4…\))/g;
   </string>
   ```

`symbolIndexTransformation`
: **Optional.**
  Targets the global symbol list.
  Semicolon-separated list of text substitutions
  expressed as regular expressions
  using the [Oniguruma][] syntax.
  Whitespace between substitution instructions
  is ignored.

   ```xml
   <key>symbolIndexTransformation</key>
   <string>
      s/class\s+([A-Za-z_][A-Za-z0-9_]*.+?\)?)(\:|$)/$1/g;
      s/def\s+([A-Za-z_][A-Za-z0-9_]*\()(?:(.{0,40}?\))|((.{40}).+?\)))(\:)/$1(?2:$2)(?3:$4…\))/g;
   </string>
   ```

[Oniguruma]: https://github.com/kkos/oniguruma/blob/master/doc/RE

<!-- TODO: Are there more settings/options? -->

## Navigating Symbols

Once symbols are defined,
you can navigate them
using standard key bindings:

| Shortcut                 | Description             |
| ------------------------ | ----------------------- |
| <Key k="f12" />          | Go to definition        |
| <Key k="ctrl+r" />       | Show local symbol list  |
| <Key k="ctrl+shift+r" /> | Show global symbol list |

::: info See Also
[Goto Anything](/guide/usage/file-management/navigation.md#goto-anything)
: Browsing symbols using Goto Anything.
:::
