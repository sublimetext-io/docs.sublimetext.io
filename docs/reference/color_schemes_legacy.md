---
title: Color Schemes (Legacy)
---

Color schemes define the colors
used to highlight source code in Sublime Text views
and to style different elements
found in the editing area:
background, foreground, selection, caret...


::: warning
This document describes
the old `.tmTheme` color scheme (not theme!) format
inherited from TextMate.

For the new `.sublime-color-scheme` format
added in Sublime Text 3.1,
refer to the [official documentation][].
:::

[official documentation]: https://www.sublimetext.com/docs/3/color_schemes.html

::: tip Note
Sublime Text differentiates
between "color schemes" defining colors in the editor area
and "themes" defining the layout for the rest of the UI.
Rather confusingly,
the *color scheme* format inherited from TextMate
uses the `.tmTheme` unchanged extension,
because themes in TextMate themes
are what color schemes are for Sublime Text.

It's important to remember
that UI themes and color schemes
are two different customization mechanisms.
Generally speaking, it is far less complex
to create a new color scheme
than it is to create a new UI theme.
:::


##  File Format

| Name          | Description                               |
| ------------- | ----------------------------------------- |
| **Format**    | Property List                             |
| **Extension** | `.tmTheme`                                |
| **Name**      | Any                                       |
| **Location**  | Any under `Packages`                      |

The file format of color scheme files
is inherited from Textmate.


##  Where to Store Color Schemes

By convention,
[packages][] primarily containing
a set of color scheme files
have the *Color Scheme -* prefix.
For example: *Color Scheme - Default*.

The file names of all available color schemes
are displayed in the **Preferences → Color Scheme** menu,
grouped by the containing package.

[packages]: /guide/extensibility/packages.md

## Structure of a Color Scheme File

All color scheme files share
the same topmost structure.

Colors can be expressed in the
following formats:
`#RRGGBB`, `#RGB`, [X11 color names][]

[X11 color names]: https://en.wikipedia.org/wiki/X11_color_names

Most elements controlling colors
accept an alpha channel value:
`#RRGGBBAA`.


## Root Elements in Color Schemes Files

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>name</key>
    <string>Monokai</string>
    <key>settings</key>
    <array>
        <!-- INSERT DICTIONARIES WITH COLOR SETTINGS HERE -->
    </array>
    <key>uuid</key>
    <string>D8D5E82E-3D5B-46B5-B38E-8C841C21347D</string>
</dict>
</plist>
```

`name`
: **Optional.**
  Name of the color scheme.
  Ignored by Sublime Text.

`settings`
: **Required.**
  Container for further color scheme settings.
  See [Sub-elements of Settings][] for details.

`uuid`
: **Optional.**
  A unique identifier for the file.
  Ignored by Sublime Text.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->



[Sub-elements of Settings]: #sub-elements-of-settings

## Sub-elements of Settings

Sublime Text supports
the following color scheme settings:


### Global Settings

Not associated with any scope.
These settings affect global visual items
in the editing area.

Global settings go inside a `<dict>` element
within the topmost `<array>`.

```xml
<array>
   <dict>
      <key>settings</key>
      <dict>
         <key>background</key>
         <string>#272822</string>
         <key>caret</key>
         <string>#F8F8F0</string>
         ...
      </dict>
   </dict>
...
</array>
```

#### General

`foreground`
: Default foreground color for the view.
  Affects file contents, the gutter, rulers and guides.
  The alpha channel does not apply to file contents.
  Because there is no override setting for rulers,
  the only way to change the color of rulers
  is a "hack" further described [on CursorRuler's wiki][hack].

  [hack]: https://github.com/icylace/CursorRuler/wiki/Tips#ruler-colors

`background`
: Default background color of the view (and gutter).

`invisibles`
: Ignored.

`caret`
: Color of the caret.

`lineHighlight`
: Color of the line the caret is in.
  Only used when the `higlight_line` setting is set to `true`.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Brackets

`bracketContentsOptions`
: Controls how brackets are highlighted
  when a caret is between a bracket pair.
  Expects a space-separated list of the available options.

  Only applied when the `match_brackets` setting
  is set to `true`.

  Options: `underline`, `stippled_underline`, `squiggly_underline`,
  `foreground`

  **Default:** `underline`

`bracketContentsForeground`
: Color of the highlighting(s)
  selected by `bracketContentsOptions`.

  Only applied when the `match_brackets` setting
  is set to `true`.

`bracketsOptions`
: Controls how brackets are highlighted
  when a caret is next to a bracket.
  Expects a space-separated list of the available options.

  Only applied when the `match_brackets` setting
  is set to `true`.

  Options: `underline`, `stippled_underline`, `squiggly_underline`,
  `foreground`

  **Default:** `underline`

`bracketsForeground`
: Color of the highlighting(s)
  selected by `bracketOptions`.

  Only applied when the `match_brackets` setting
  is set to `true`.


#### Tags

`tagsOptions`
: Controls how tags are highlighted
  when a caret is inside a tag.
  Expects a space-separated list of the available options.

  Only applied when the `match_tags` setting
  is set to `true`.

  Options: `underline`, `stippled_underline`, `squiggly_underline`,
  `foreground`

  **Default:** `stippled_underline`

`tagsForeground`
: Color of the highlighting(s)
  selected by `tagsOptions`.

  Only applied when the `match_tags` setting
  is set to `true`.


#### Find

`findHighlight`
: Background color of regions matching the current search.

`findHighlightForeground`
: Foreground color of regions matching the current search.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Gutter

`gutter`
: Background color of the gutter.

`gutterForeground`
: Foreground color of the gutter.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Selection

`selection`
: Color of the selection regions.

`selectionBorder`
: Color of the selection regions' border.

`inactiveSelection`
: Color of inactive selections (inactive view).

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Guides

`guide`
: Color of the guides displayed to indicate nesting levels.

  Only used if the `indent_guide_options` setting
  includes`draw_normal`.

`activeGuide`
: Color of the guide lined up with the caret.

  Only applied if the `indent_guide_options` setting
  includes `draw_active`.

`stackGuide`
: Color of the current guide's parent guide levels.

  Only used if the `indent_guide_options` setting
  is set to `draw_active`.

<!-- TODO image -->


#### Highlighted Regions

`highlight`
: Background color for regions added via `sublime.add_regions()`
with the `sublime.DRAW_OUTLINED` flag added.

`highlightForeground`
: Foreground color for regions added via `sublime.add_regions()`
  with the `sublime.DRAW_OUTLINED` flag added.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Shadow

`shadow`
: Color of the shadow effect when the buffer is scrolled.

`shadowWidth`
: Width of the shadow effect when the buffer is scrolled.

  Values greater than 32
  cause the shadow to be hidden.
  The default is 8.

  Note that, despite its nature,
  this expects a **string value**.


### Scoped Settings

Settings associated with a particular scope.

```xml
<array>
   ...
   <dict>
      <key>name</key>
      <string>Comment</string>
      <key>scope</key>
      <string>comment</string>
      <key>settings</key>
      <dict>
         <key>foreground</key>
         <string>#75715E</string>
      </dict>
   </dict>
   ...
</array>
```

`name`
: Descriptive name of the item.

`scope`
: Target scope name.

`settings`
: Container for settings.
  Valid settings are:
  
  `fontStyle`
  : Space-separated list of
    styles for the font.

    Options: `bold`, `italic`, nothing (resets fontStyle to normal)

  `foreground`
  : Foreground color.

  `background`
  : Background color.


##  Minimal Scope Coverage

Refer to the [official Scope Naming guidelines]
in order to find out
which scopes a color scheme should cover at minimum.

[official Scope Naming guidelines]: http://www.sublimetext.com/docs/3/scope_naming.html#color_schemes


##  Sublime Text Settings Related to Color Schemes

### View Settings

`color_scheme`
: Path to a color scheme file
  relative to the Data folder
  (example: `Packages/Color Scheme - Default/Monokai.tmTheme`).

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->
