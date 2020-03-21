====================
Settings – Reference
====================

.. seealso::

   :doc:`Customization - Settings </customization/settings>`
      A detailed overview on settings in Sublime Text and their order of
      precedence.


Global Settings
===============

.. FIXME: Wrong information

Global settings can only be modified
in :file:`Preferences.sublime-settings` and :file:`Preferences (<platform>).sublime-settings`
(where ``<platform>`` can be any of ``Linux``, ``OSX`` or ``Windows``)
and, where indicated, also in :file:`.sublime-project` files.

.. XXX obviously, some settings are missing here ... but do we really need to
.. include all the settings with a brief description? That's what the comments
.. in the default settings are for, actually.

.. include:: /_includes/settings_global.g.txt


File Settings
=============

Whitespace and Indentation
**************************

.. include:: /_includes/settings_file.g.txt

Visual Settings
***************
``always_show_minimap_viewport``
  if set to true, then it will always show rectangle on minimap highlighting current document position; defualt false,   which shows position only on mouse over the minimap. 
``color_scheme``
   Sets the colors used for text highlighting. Accepts a path rooted at the
   data directory (e.g.: :file:`Packages/Color Scheme - Default/Monokai Bright.tmTheme`).
``font_face``
   Font face to be used for editable text.
``font_size``
   Size of the font for editable text.
``font_options``
   Valid values: ``bold``, ``italic``, ``no_antialias``, ``gray_antialias``,
   ``subpixel_antialias``, ``directwrite`` (Windows).
``gutter``
   Toggles display of gutter.
``rulers``
   Columns in which to display vertical rules. Accepts a list of numeric values
   (such as ``[79, 89, 99]``) or a single numeric value (for example, ``79``).
``draw_minimap_border``
   Set to ``true`` to draw a border around the minimap's region corresponding
   to the the view's currently visible text. The active color scheme's
   ``minimapBorder`` key controls the border's color.
``highlight_line``
   Set to ``false`` to stop highlighting lines with a cursor.
``line_padding_top``
   Additional spacing at the top of each line, in pixels.
``line_padding_bottom``
   Additional spacing at the bottom of each line, in pixels.
``scroll_past_end``
   Set to ``false`` to disable scrolling past the end of the buffer. If ``true``,
   Sublime Text will leave a wide, empty margin between the last line and the
   bottom of the window.
``line_numbers``
   Toggles display of line numbers in the gutter.
``word_wrap``
   If set to ``false``, long lines will be clipped instead of wrapped. Scroll
   the screen horizontally to see the clipped text.
``wrap_width``
   If greater than ``0``, wraps long lines at the specified column as opposed
   to the window width. Only takes effect if ``word_wrap`` is set to ``true``.
``indent_subsequent_lines``
   If set to ``false``, wrapped lines will not be indented. Only takes effect
   if ``word_wrap`` is set to ``true``.
``draw_centered``
   If set to ``true``, text will be drawn centered rather than left-aligned.
``match_brackets``
   Set to ``false`` to disable underlining the brackets surrounding the cursor.
``match_brackets_content``
   Set this to ``false`` if you'd rather have brackets highlighted only when the
   cursor is next to one.
``match_brackets_square``
   Set to ``false`` to stop highlighting square brackets. Only takes effect if
   ``match_brackets`` is ``true``.
``match_brackets_braces``
   Set to ``false`` to stop highlighting curly brackets. Only takes effect if
   ``match_brackets`` is ``true``.
``match_brackets_angle``
   Set to ``false`` to stop highlighting angle brackets. Only takes effect if
   ``match_brackets`` is ``true``.

Automatic Behavior
******************

.. include:: /_includes/settings_automatic.g.txt

System and Miscellaneous Settings
*********************************

``is_widget``
   Returns ``true`` if the buffer is an input field in a dialog, as opposed to
   a regular buffer.
``spell_check``
   Toggles the spell checker.
``dictionary``
   Word list to be used by the spell checker. Accepts a path rooted at the
   data directory (such as :file:`Packages/Language - English/en_US.dic`). You can
   `add more dictionaries <https://extensions.services.openoffice.org/en/dictionaries>`_.
``fallback_encoding``
   The encoding to use when the encoding can't be determined automatically.
   ASCII, UTF-8 and UTF-16 encodings will be detected automatically .
``default_line_ending``
   Determines what characters to use to designate new lines. Valid values:
   ``system`` (OS-dependant), ``windows`` (``CRLF``) and ``unix`` (``LF``).
``tab_completion``
   Determines whether pressing :kbd:`Tab` will insert completions.


Build and Error Navigation Settings
***********************************

.. include:: /_includes/settings_build.g.txt


File and Directory Settings
***************************

.. include:: /_includes/settings_filesystem.g.txt


Input Settings
**************

.. include:: /_includes/settings_input.g.txt
