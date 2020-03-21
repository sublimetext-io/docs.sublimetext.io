=============
Color Schemes
=============

.. contents::
   :local:
   :depth: 2

Overview
========

Color schemes define the colors
used to highlight source code in Sublime Text views
and to style different elements
found in the editing area:
background, foreground, selection, caret...


File Format
===========

.. include:: /_includes/color_scheme_summary_table.g.txt

The file format of color scheme files
is inherited from Textmate.

.. note::

   Sublime Text uses the ``.tmTheme`` extension for color scheme files
   to maintain compatibility with Textmate.
   Rather confusingly,
   Sublime Text also has a notion
   of a user interface (UI) theme.
   A UI theme is a set of styles and decorations
   to alter the look of the editor's UI.

   It's important to remember
   that UI themes and color schemes
   are two different customization mechanisms.
   Generally speaking, it is far less complex
   to create a new color scheme
   than it is to create a new UI theme.


Where to Store Color Schemes
============================

By convention,
:doc:`packages </extensibility/packages>` primarily containing
a set of color scheme files
have the *Color Scheme -* prefix.
For example: *Color Scheme - Default*.

The file names of all available color schemes
are displayed in the **Preferences → Color Scheme** menu,
grouped by the containing package.


.. _color-scheme-structure:

Structure of a Color Scheme File
================================

All color scheme files share
the same topmost structure.

Colors can be expressed in the
following formats:
``#RRGGBB``, ``#RGB``, `X11 color names`__

.. __: https://en.wikipedia.org/wiki/X11_color_names

Most elements controlling colors
accept an alpha channel value:
``#RRGGBBAA``.

.. contents:: Contents
   :local:

Topmost Elements in Color Schemes Files
***************************************

.. code-block:: xml

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

``name``
   Optional.
   Name of the color scheme.
   Ignored by Sublime Text.

``settings``
   Required.
   Container for further color scheme settings.
   See :ref:`color-scheme-settings` for details.

``uuid``
   Optional.
   A unique identifier for the file.
   Ignored by Sublime Text.


.. _color-scheme-settings:

Sub-elements of Settings
************************

Sublime Text supports
the following color scheme settings:


Global Settings
---------------

Not associated with any scope.
These settings affect global visual items
in the editing area.

Global settings go inside a ``<dict>`` element
within the topmost ``<array>``.

.. code-block:: xml

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


General
^^^^^^^

``foreground``
   Default foreground color for the view.
   Affects file contents, the gutter, rulers and guides.

   The alpha channel does not apply to file contents.

   Because there is no override setting for rulers,
   the only way to change the color of rulers
   is a "hack" further described `here`__.

   .. __: https://github.com/icylace/CursorRuler/wiki/Tips#ruler-colors

``background``
   Default background color of the view (and gutter).

``invisibles``
  Ignored.

``caret``
   Color of the caret.

``lineHighlight``
   Color of the line the caret is in.

   Only used when the ``higlight_line`` setting is set to ``true``.


Brackets
^^^^^^^^

``bracketContentsOptions``
   Controls how brackets are highlighted
   when a caret is between a bracket pair.
   Expects a space-separated list of the available options.

   Only applied when the ``match_brackets`` setting
   is set to ``true``.

   Options: ``underline``, ``stippled_underline``, ``squiggly_underline``,
   ``foreground``

   Default: ``underline``

``bracketContentsForeground``
   Color of the highlighting(s)
   selected by ``bracketContentsOptions``.

   Only applied when the ``match_brackets`` setting
   is set to ``true``.

``bracketsOptions``
   Controls how brackets are highlighted
   when a caret is next to a bracket.
   Expects a space-separated list of the available options.

   Only applied when the ``match_brackets`` setting
   is set to ``true``.

   Options: ``underline``, ``stippled_underline``, ``squiggly_underline``,
   ``foreground``

   Default: ``underline``

``bracketsForeground``
   Color of the highlighting(s)
   selected by ``bracketOptions``.

   Only applied when the ``match_brackets`` setting
   is set to ``true``.


Tags
^^^^

``tagsOptions``
   Controls how tags are highlighted
   when a caret is inside a tag.
   Expects a space-separated list of the available options.

   Only applied when the ``match_tags`` setting
   is set to ``true``.

   Options: ``underline``, ``stippled_underline``, ``squiggly_underline``,
   ``foreground``

   Default: ``stippled_underline``

``tagsForeground``
   Color of the highlighting(s)
   selected by ``tagsOptions``.

   Only applied when the ``match_tags`` setting
   is set to ``true``.


Find
^^^^

``findHighlight``
   Background color of regions matching the current search.

``findHighlightForeground``
   Foreground color of regions matching the current search.


Gutter
^^^^^^

``gutter``
   Background color of the gutter.

``gutterForeground``
   Foreground color of the gutter.


Selection
^^^^^^^^^

``selection``
   Color of the selection regions.

``selectionBorder``
   Color of the selection regions' border.

``inactiveSelection``
   Color of inactive selections (inactive view).


Guides
^^^^^^

``guide``
   Color of the guides displayed to indicate nesting levels.

   Only used if the ``indent_guide_options`` setting
   includes``draw_normal``.

``activeGuide``
   Color of the guide lined up with the caret.

   Only applied if the ``indent_guide_options`` setting
   includes ``draw_active``.

``stackGuide``
   Color of the current guide's parent guide levels.

   Only used if the ``indent_guide_options`` setting
   is set to ``draw_active``.

.. TODO image


Highlighted Regions
^^^^^^^^^^^^^^^^^^^

``highlight``
   Background color for regions added via ``sublime.add_regions()``
   with the ``sublime.DRAW_OUTLINED`` flag added.

``highlightForeground``
   Foreground color for regions added via ``sublime.add_regions()``
   with the ``sublime.DRAW_OUTLINED`` flag added.


Shadow
^^^^^^

``shadow``
   Color of the shadow effect when the buffer is scrolled.

``shadowWidth``
   Width of the shadow effect when the buffer is scrolled.

   Values greater than 32
   cause the shadow to be hidden.
   The default is 8.

   Note that, despite its nature,
   this expects a **string value**.


Scoped Settings
---------------

Settings associated with a particular scope.

.. code-block:: xml

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


``name``
   Descriptive name of the item.

``scope``
   Target scope name.

``settings``
   Container for settings.

   Valid settings are:

   ``fontStyle``
      Space-separated list of
      styles for the font.

      Options: ``bold``, ``italic``, nothing (resets fontStyle to normal)

   ``foreground``
      Foreground color.

   ``background``
      Background color.


Minimal Scope Coverage
======================

Refer to the `official Scope Naming guidelines`__
in order to find out
which scopes a color scheme should cover at minimum.

.. __: http://www.sublimetext.com/docs/3/scope_naming.html#color_schemes


Sublime Text Settings Related to Color Schemes
==============================================

View Settings
*************

``color_scheme``
   Path to a color scheme file
   relative to the Data folder
   (example: :file:`Packages/Color Scheme - Default/Monokai.tmTheme`).
