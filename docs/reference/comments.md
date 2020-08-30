---
title: Comments
---

Sublime Text provides a default command
to comment and uncomment lines of code.
This command can be enabled
for any type of file using metadata files.


## File Format

Comment markers are defined using metadata files.
However, because metadata for comment markers
is commonly required by packages,
it's discussed separately in this page
for convenience.

Just as regular metadata files,
comment metadata files
have the `.tmPreferences` extension
and use the Property List format.
The file name is ignored by Sublime Text.

::: seealso
[Metadata](./metadata.md) Detailed documentation on metadata.
:::


## Example

Let's see a basic example
of a comment metadata file:

```xml {12,16,18}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   <key>name</key>
   <string>Miscellaneous</string>
   <key>scope</key>
   <string>source.python</string>
   <key>settings</key>
   <dict>
      <key>shellVariables</key>
      <array>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_START</string>
            <key>value</key>
            <string># </string>
         </dict>
      </array>
   </dict>
</dict>
</plist>
```
In the example we've highlighted
some parts that are specific
to comment metadata files.


## Structure of a Comment Metadata File

All comment metadata files
share the same topmost structure,
which is inherited from Property List format:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   ...
</dict>
</plist>
```

These are all the valid elements
in a comment metadata file:

`name`
: **Optional.**
  Name of the metadata.
  Ignored by Sublime Text.

  ```xml
  <key>name</key>
  <string>Shell Variables</string>
  ```

`scope`
: **Required.**
  Comma-separated list of scope selectors
  to determine in which context the metadata
  should be active.

  In most cases you'll use
  the base scope for a particular syntax.

  ```xml
  <key>scope</key>
  <string>source.python</string>
  ```

``settings``
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

`shellVariables`
: Required.
  Container for comment markers.

  ```xml
  <key>shellVariables</key>
  <array>
  ...
  </array>
  ```

## `shellVariables` Subelements

::: tip Note
The `shellVariables` array
may contain any arbitrary subelement,
but here we're only concerned
with those related to comments.
See [Shell Variables][] for details.
:::

[Shell Variables]: ./metadata.md#shell-variables

`TM_COMMENT_START`
: **Required.**
  Defines a default comment marker.

  To define additional comment markers,
  name them `TM_COMMENT_START_2`, `TM_COMMENT_START_3`, etc.

  ```xml
  <dict>
  <key>name</key>
  <string>TM_COMMENT_START</string>
  <key>value</key>
  <string># </string>
  </dict>
  ```

`TM_COMMENT_END`
: **Optional.**
  Defines an end comment marker.
  If omitted,
  `TM_COMMENT_START` will be treated as a line comment marker.

  If present
  and a corresponding start comment marker
  can be found,
  the pair is treated as block comment markers.

  To define additional end comment markers,
  name them `TM_COMMENT_END_2`, `TM_COMMENT_END_3`, etc.

  ```xml
  <dict>
  <key>name</key>
  <string>TM_COMMENT_END_2</string>
  <key>value</key>
  <string>*/</string>
  </dict>
  ```

`TM_COMMENT_DISABLE_INDENT`
: **Optional.**
  Valid values are `yes` and `no`.
  Disables indentation for the `TM_COMMENT_START`
  marker.

  To target other group of markers,
  use `TM_COMMENT_DISABLE_INDENT_2`, etc.

  ```xml
  <dict>
  <key>name</key>
  <string>TM_COMMENT_DISABLE_INDENT</string>
  <key>value</key>
  <string>yes</string>
  </dict>
  ```

## Example

Here's a more complete example
of a comment metadata file
using some of the features just discussed:

```xml {15,21}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
   <dict>
      <key>shellVariables</key>
      <array>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_START</string>
            <key>value</key>
            <string>// </string>
         </dict>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_START_2</string>
            <key>value</key>
            <string>/*</string>
         </dict>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_END_2</string>
            <key>value</key>
            <string>*/</string>
         </dict>
      </array>
   </dict>
</dict>
</plist>
```

## Related Keyboard Shortcuts

Once comment metadata has been defined,
you can use standard key bindings
to comment and uncomment lines of code.

| Description          | Shortcut                 |
| -------------------- | ------------------------ |
| Toggle line comment  | <Key k="ctrl+/" />       |
| Toggle block comment | <Key k="ctrl+shift+/" /> |
