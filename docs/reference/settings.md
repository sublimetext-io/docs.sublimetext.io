---
title: Settings
---

::: warning
This page may contain outdated or incomplete information.
You can see a description of most available settings in the
default settings file (**Preferences → Settings** or
`Default/Preferences.sublime-settings`).
:::

::: seealso
[Settings User Guide](/guide/customization/settings.md)
: Explanations for how settings work in Sublime Text.
:::


## Global Settings

These settings can only be modified from `Preferences.sublime-settings`
and `Preferences ({platform}).sublime-settings`.

<!-- TODO obviously, some settings are missing here ... but do we really need to
- include all the settings with a brief description? That's what the comments
- in the default settings are for, actually. -->

`theme`
: Theme to be used. Accepts a file base name
 (e. g.: `Default.sublime-theme`).

`scroll_speed`
: Set to `0` to disable smooth scrolling. Set to a value between `0` and
  `1` to scroll slower, or set to a value larger than `1` to scroll faster.

`hot_exit`
: Exiting the application or window with an associated project with
  `hot_exit` enabled will cause it to close immediately without prompting.
  Unsaved modifications and open files will be preserved and restored when next
  starting.

`remember_open_files`
: Determines whether to reopen the buffers that were open when Sublime Text was
  last closed.

`open_files_in_new_window`
: macOS only. When filters are opened from Finder, or by dragging onto the
  dock icon, this controls if a new window is created or not.

`close_windows_when_empty`
: Close windows as soon as the last file is closed, unless there's a folder
  open within the window.

`show_full_path`
: Show the full path to files in the title bar.

`preview_on_click`
: If `true`, preview file contents when clicking on a file in the side bar.
  Double clicking or editing the preview will open the file and assign it a
  tab.

`folder_exclude_patterns`
: Excludes the matching folders from the side bar, GoTo Anything, etc.

`file_exclude_patterns`
: Excludes the matching files from the side bar, GoTo Anything, etc.

`binary_file_patterns`
: Excludes the matching files from GoTo Anything and Find in Files but not the
  side bar.

`show_tab_close_buttons`
: If `false`, hides the tabs' close buttons until the mouse hovers over
     the tab.

`mouse_wheel_switches_tabs`
: If `true`, scrolling the mouse wheel will cause tabs to switch if the
  cursor is in the tab area.

`open_files_in_new_window`
: macOS only. When filters are opened from Finder, or by dragging onto the
  dock icon, this controls whether a new window is created or not.

`ignored_packages`
: A list of packages that will be ignored (not loaded).

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

## File Settings

### Whitespace and Indentation


`auto_indent`
: Toggles automatic indentation.

`tab_size`
: Number of spaces a tab is considered equal to.

`translate_tabs_to_spaces`
: Determines whether to replace a tab character with `tab_size` number of
  spaces when <Key k="tab" /> is pressed.

`use_tab_stops`
: If `translate_tabs_to_spaces` is `true`, will make <Key k="tab" /> and
  <Key k="backspace" /> insert/delete `tab_size` number of spaces per key press.

`trim_automatic_white_space`
: Toggles deletion of white space added by `auto_indent`.

`detect_indentation`
: Set to `false` to disable detection of tabs vs. spaces whenever a buffer
  is loaded. If set to `true`, it automatically will modify
  `translate_tabs_to_spaces` and `tab_size`.

`draw_white_space`
: Valid values: `none`, `selection`, `all`.

`trim_trailing_white_space_on_save`
: Set to `true` to remove white space on save.


  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

### Visual Settings
`always_show_minimap_viewport`
: If set to true, then it will always show rectangle on minimap highlighting
  current document position; defualt false,
  which shows position only on mouse over the minimap.

`color_scheme`
: Sets the colors used for text highlighting. Accepts a path rooted at the
  data directory (e.g.: `Packages/Color Scheme - Default/Monokai Bright.tmTheme`).

`font_face`
: Font face to be used for editable text.

`font_size`
: Size of the font for editable text.

`font_options`
: Valid values: `bold`, `italic`, `no_antialias`, `gray_antialias`,
  `subpixel_antialias`, `directwrite` (Windows).

`gutter`
: Toggles display of gutter.

`rulers`
: Columns in which to display vertical rules. Accepts a list of numeric values
  (such as `[79, 89, 99]`) or a single numeric value (for example, `79`).

`draw_minimap_border`
: Set to `true` to draw a border around the minimap's region corresponding
  to the the view's currently visible text. The active color scheme's
  `minimapBorder` key controls the border's color.

`highlight_line`
: Set to `false` to stop highlighting lines with a cursor.

`line_padding_top`
: Additional spacing at the top of each line, in pixels.

`line_padding_bottom`
: Additional spacing at the bottom of each line, in pixels.

`scroll_past_end`
: Set to `false` to disable scrolling past the end of the buffer. If `true`,
  Sublime Text will leave a wide, empty margin between the last line and the
  bottom of the window.

`line_numbers`
: Toggles display of line numbers in the gutter.

`word_wrap`
: If set to `false`, long lines will be clipped instead of wrapped. Scroll
  the screen horizontally to see the clipped text.

`wrap_width`
: If greater than `0`, wraps long lines at the specified column as opposed
  to the window width. Only takes effect if `word_wrap` is set to `true`.

`indent_subsequent_lines`
: If set to `false`, wrapped lines will not be indented. Only takes effect
  if `word_wrap` is set to `true`.

`draw_centered`
: If set to `true`, text will be drawn centered rather than left-aligned.

`match_brackets`
: Set to `false` to disable underlining the brackets surrounding the cursor.

`match_brackets_content`
: Set this to `false` if you'd rather have brackets highlighted only when the
  cursor is next to one.

`match_brackets_square`
: Set to `false` to stop highlighting square brackets. Only takes effect if
  `match_brackets` is `true`.

`match_brackets_braces`
: Set to `false` to stop highlighting curly brackets. Only takes effect if
  `match_brackets` is `true`.

`match_brackets_angle`
: Set to `false` to stop highlighting angle brackets. Only takes effect if
 `match_brackets` is `true`.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


### Automatic Behavior

`auto_match_enabled`
: Toggles automatic pairing of quotes, brackets, etc.

`save_on_focus_lost`
: Set to true to save files automatically when switching to a different file
  or application.

`find_selected_text`
: If `true`, the selected text will be copied into the find panel when it's
  shown.

`word_separators`
: Characters considered to divide words for actions like advancing the cursor,
etc. Not used for every context where a notion of a word separator is
useful (for example, word wrapping). In some contexts, the text might be
tokenized based on other criteria (for example, the syntax definition rules).

`ensure_newline_at_eof_on_save`
: Always adds a new line at the end of the file if not present when saving.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

### System and Miscellaneous Settings

`is_widget`
: Returns `true` if the buffer is an input field in a dialog, as opposed to
  a regular buffer.

`spell_check`
: Toggles the spell checker.

`dictionary`
: Word list to be used by the spell checker. Accepts a path rooted at the
  data directory (such as `Packages/Language - English/en_US.dic`). You can
  [add more dictionaries][].

`fallback_encoding`
: The encoding to use when the encoding can't be determined automatically.
  ASCII, UTF-8 and UTF-16 encodings will be detected automatically .

`default_line_ending`
: Determines what characters to use to designate new lines. Valid values:
  `system` (OS-dependant), `windows` (`CRLF`) and `unix` (`LF`).

`tab_completion`
: Determines whether pressing <Key k="tab" /> will insert completions.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

[add more dictionaries]: https://extensions.services.openoffice.org/en/dictionaries

### Build and Error Navigation Settings

`result_file_regex` and `result_line_regex`
: Regular expressions used to extract error information from some output dumped
  into a view or output panel. Follows the same rules
  as [error capturing in build systems][exec-args].

`result_base_dir`
: Folder to start looking for offending files based on information
  extracted with `result_file_regex` and `result_line_regex`.

`build_env`
: List of paths to add to build systems by default.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

[exec-args]: https://www.sublimetext.com/docs/build_systems.html#exec-target-options

### File and Directory Settings

`default_dir`
: Sets the default save folder for the view.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


### Input Settings

`command_mode`
: If set to `true`, the buffer will ignore key strokes. Useful when emulating
  Vim's modal behavior.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->
