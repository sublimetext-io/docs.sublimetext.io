---
title: Metadata Files
---

Metadata are parameters
that can be assigned to certain text sections
using scope selectors.

<!-- TODO ref scope selectors -->

These paremeters can be used
for many purposes; for example:

- specifying the current comment markers,
  even within embedded source code,
  so that you can toggle comments in any syntax,
- defining rules for auto-indentation,
- marking symbols that Sublime Text will allow you to
  [browse to quickly][goto-anything].

<!-- TODO Link to the separate comment and symbol sections from here -->

Furthermore, snippets can access metadata
declared in the `shellVariables` setting,
which allows you to create a snippet
that has different contents
depending on where it's used.

[goto-anything]: /guide/usage/file-management/navigation.md#goto-anything


## File Format

Metadata files have the `.tmPreferences` extension
and use the Property List format.
The file name is ignored by Sublime Text.

Metadata files are inherited from TextMate.


## Example

Here's an example of a metadata file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   <key>name</key>
   <string>JavaScript Metadata</string>
   <key>scope</key>
   <string>source.js</string>
   <key>settings</key>
   <dict>
      <key>decreaseIndentPattern</key>
      <string>^(.*\*/)?\s*\}.*$</string>
      <key>increaseIndentPattern</key>
      <string>^.*\{[^}"']*$</string>

      <key>bracketIndentNextLinePattern</key>
      <string>(?x)
      ^ \s* \b(if|while|else)\b [^;]* $
      | ^ \s* \b(for)\b .* $
      </string>
   </dict>
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
   <key>uuid</key>
   <string>BC062860-3346-4D3B-8421-C5543F83D11F</string>
</dict>
</plist>
```

The example file combines
several types of metadata.


## Structure of a Metadata File

All metadata files share the same topmost structure,
which is inherited from the Property List format.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   ...
</dict>
</plist>
```

Sublime Text uses the following topmost keys
in metadata files;
all others are ignored by default.

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
  Scope selector to determine
  in which context the metadata should be available.

  ```xml
  <key>scope</key>
  <string>source.python</string>
  ```

`settings`
: **Required.**
  Container for settings.

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


## Subelements of `settings`

The `settings` element can contain
subelements for different purposes,
which will be grouped in the following sections.

Some subelements have certain functionality associated with them by default,
while others can only be accessed via the [API][].


### Indentation Options

Indentation options control aspects of the auto-indentation mechanism.

`increaseIndentPattern`
: *Regex.*
  If it matches on the current line,
  lines after current line will be indented one level further.

  If in `.tmPreferences`:

  ```xml
  <key>increaseIndentPattern</key>
  <string><![CDATA[^\s*increase]]></string>
  ```

  Then, in the corresponding buffer view:

  ```
  line1
  line2
  increase
    after increase1
    after increase2
  ```

`decreaseIndentPattern`
: *Regex.*
  If it matches on the current line,
  current line and lines after current line will be unindented one level.

  If in `.tmPreferences`:

  ```xml
  <key>decreaseIndentPattern</key>
  <string><![CDATA[^\s*decrease]]></string>
  ```

  Then, in the corresponding buffer view:

  ```
    line1
    line2
  decrease
  after decrease1
  after decrease2
  ```

`bracketIndentNextLinePattern`
: *Regex.*
  If it matches on the current line,
  only the next non-whitespace line will be indented one level further.

  If in `.tmPreferences`:

  ```xml
  <key>bracketIndentNextLinePattern</key>
  <string><![CDATA[^\s*bracket]]></string>
  ```

  Then, in the corresponding buffer view:

  ```
  line1
  line2
  line3
  bracket
    
    first non-whitespace line after bracket
  after bracket2
  after bracket3
  ```

`disableIndentNextLinePattern`
: *Regex.*
  If it matches on the current line,
  and `bracketIndentNextLinePattern`'s *Regex* also matches on the current line.
  The auto-indenter will ignore the effects made by `bracketIndentNextLinePattern`
  when computing the indentation level of lines after current line.

  If in `.tmPreferences`:

  ```xml
  <key>bracketIndentNextLinePattern</key>
  <string><![CDATA[^\s*[A-z]]]></string>
  <key>disableIndentNextLinePattern</key>
  <string><![CDATA[^\s*disable]]></string>
  ```

  Then, in the corresponding buffer view:

  ```xml
  lineone only match bracketIndentNextLinePattern Regex effects made
    after lineone1
  after lineone2
  disable both match bracketIndentNextLinePattern and disableIndentNextLinePattern Regex effects for lines below ignored
  after disable1
  after disable2
  ```

`unIndentedLinePattern`
: *Regex.*
  If it matches on the current line,
  and `increaseIndentPattern` and/or `decreaseIndentPattern` and/or `bracketIndentNextLinePattern` *Regex* also matches on the current line.
  The auto-indenter will ignore
  the effects made by `increaseIndentPattern` and/or `decreaseIndentPattern` and/or `bracketIndentNextLinePattern`
  when computing the indentation level of lines after current line.

  If in `.tmPreferences`:

  ```xml
  <key>increaseIndentPattern</key>
  <string><![CDATA[^\s*[A-z]+]]></string>
  <key>unIndentedLinePattern</key>
  <string><![CDATA[^\s*unindented]]></string>
  ```

  Then, in the corresponding buffer view:

  ```xml
  lineone only match increaseIndentPattern Regex effects made
    after lineone1
    after lineone2
    linetwo  only match increaseIndentPattern Regex effects made
      after linetwo1
      after linetwo2
      unindented both match increaseIndentPattern and unIndentedLinePattern Regex effects for lines below ignored
      after unindented1
      after unindented2
  ```

  If in `.tmPreferences`:

  ```xml
  <key>decreaseIndentPattern</key>
  <string><![CDATA[^\s*[A-z]+]]></string>
  <key>unIndentedLinePattern</key>
  <string><![CDATA[^\s*unindented]]></string>
  ```

  Then, in the corresponding buffer view:

  ```xml
        0START0
      lineone only match decreaseIndentPattern Regex effects made
      after lineone1
      after lineone2
    linetwo only match decreaseIndentPattern Regex effects made
    after linetwo1
    after linetwo2
  unindented  both match decreaseIndentPattern and unIndentedLinePattern Regex effects for lines below ignored
    after unindented1
    after unindented2
  ```

  If in `.tmPreferences`:

  ```xml
  <key>bracketIndentNextLinePattern</key>
  <string><![CDATA[^\s*[A-z]]]></string>
  <key>unIndentedLinePattern</key>
  <string><![CDATA[^\s*unindented]]></string>
  ```

  Then, in the corresponding buffer view:

  ```xml
  lineone only match bracketIndentNextLinePattern Regex effects made
    after lineone1
  after lineone2
  unindented both match bracketIndentNextLinePattern and unIndentedLinePattern Regex effects for lines below ignored
  after unindented1
  after unindented2
  ```

### Completions Options

Completion options control aspects of the completions mechanism.

`cancelCompletion`
: *Regex.*
  If it matches on the current line,
  supresses the autocomplete popup.

  ```xml
  <key>cancelCompletion</key>
  <string>insert regex here</string>
  ```


### Symbol Definitions

Documentation for symbol definitions
was moved to a separate page:
[Symbol Definition settings][].

[Symbol Definition settings]: ./symbols.md#settings-subelements


### Shell Variables

Shell variables are used for different purposes
and can be accessed from snippets.

<!-- TODO reference to section in snippets once added -->

Note that shell variables are defined
as dictionaries in an array,
and thus have a different format
from `settings` subelements.

`shellVariables`
: Container for "shell variables".

  ```xml
  <key>shellVariables</key>
  <array>
  ...
  </array>
  ```

#### `shellVariables` Subelements

Subelements of `shellVariables` are
dictionaries with `name` and `value` keys.

```xml
<dict>
   <key>name</key>
   <string>BOOK_OPENING</string>
   <key>value</key>
   <string>Once upon a time...</string>
</dict>
```

::: seealso
[Comments](./comments.md#shellvariables-subelements)
: Shell variables defining comment markers.
:::

[API]: #related-api-functions

## Related API Functions

To extract metadata information from plugin code,
you can use the `view.meta_info(key, point)`
API call.
