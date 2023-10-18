---
title: Commands
sidebarDepth: 1
---

::: tip Note
This list of commands is a work in progress.
:::

<!-- TODO Remove after full ReST to MD Conversion
- .. _cmd-about-paths: -->


## About Paths in Command Arguments
[About Paths in Command Arguments]: #about-paths-in-command-arguments

Some commands take paths as parameters. Among these, some support snippet-like
syntax, while others don't. A command of the first kind would take a parameter
like `${packages}/SomeDir/SomeFile.ext` whereas a command of the second kind
would take a parameter like `Packages/SomeDir/SomeFile.ext`.

Generally, newer commands support the snippet-like syntax.

Commands expect UNIX-style paths if not otherwise noted, including on
Windows (for example, `/c/Program Files/Sublime Text 3/sublime_plugin.py`).

Often, relative paths in arguments to commands are assumed to start at the
:Data_directory:.


<!--  TODO: split into Window and Text (and Application) commands since they behave
- differently and require other call mechanisms when called from a plugin -->


## Commands

### `append`

Inserts a string at the end of the view.

- **characters** (String): String to be inserted.
- **force** (Bool):
- **scroll_to_end** (Bool):

### `auto_complete`

Opens the auto complete list.

### `build`

Runs a build system.

- **variant** (String): Optional. The name of the variant to be run.

### `chain`

Chains multiple commands to execute together. Below are the parameters
accepted by the this command.

- **commands** [{String: String}]: The chain of commands that will be executed.

### `clear_bookmarks`

If no **name** argument, or the **name** "bookmarks" is specified, it
removes all bookmarks set in the current file, but not the marks. If
the **name** "mark" is specified as an argument, it removes all marks set
in the current file, but not the bookmarks.

- **name** (String): e.g. `"mark"`, `"bookmarks"`.

### `clear_fields`

Breaks out of the active snippet field cycle.

### `clear_recent_files`

Deletes records of recently accessed files and folders.

### `clear_recent_projects`

Deletes records of recently accessed projects.

### `clone_file`

Clones the current view into the same tab group, both sharing the same
buffer. That means you can drag one tab to another group and every update to
one view will be visible in the other one too.

### `close_file`

Closes the active view and, under certain circumsances, the whole
application.

<!--   XXX Sounds kinda wrong. -->

### `close_folder_list`

Removes all folders from the current project.

### `close_project`

Closes the current project.

### `close_tag`

Surrounds the current inner text with the appropiate tags.

### `close_window`

Closes the active window.

### `close`

Closes the active view.

### `commit_completion`

Inserts into the buffer the item that's currently selected in the auto
complete list.

<!-- TODO Probably not useful for users. XXX -->

### `context_menu`

Shows the context menu.

### `copy`

Sends the selected text to to the system clipboard.

### `cut`

Removes the selected text and sends it to the system clipboard. Put
differently, it cuts.

### `decrease_font_size`

Decreases the font size.

### `delete_to_mark`

Deletes the text that `select_to_mark` would select.

### `detect_indentation`

Guesses the indentation from the current file.

### `duplicate_line`

Duplicates the current line.

### `exec`

Runs an external process asynchronously. On Windows, GUIs are supressed.

`exec` is the default command used by build systems, thus it provides
similar functionality. However, a few options in build systems are taken
care of by Sublime Text internally so they list below only contains
parameters accepted by this command.

- **cmd** [(String)]
- **shell_cmd** (String): Shell command to use. If given overrides
  `cmd` and ignores `shell`.
- **file_regex** (String)
- **line_regex** (String)
- **working_dir** (String)
- **encoding** (String)
- **env** [{String: String}]
- **quiet** (Bool): If `True` no runtime information is printed if the
  command fails or has a non-zero exit code.
- **kill** (Bool): If `True` will simply terminate the current build
  process. This is invoked via *Build: Cancel* command from the
  [Command Palette][].
- **update_phantoms_only** (Bool)
- **hide_phantoms_only** (Bool)
- **word_wrap** (Bool): Whether to word-wrap the output in the build panel
- **syntax** (String): Syntax file used to colour output.
- **path** (String)
- **shell** (Bool)

::: seealso
[`exec` Target options](https://www.sublimetext.com/docs/build_systems.html#exec-target-options)
: Detailed documentation on all parameters of the `exec` command.
:::

### `exit`

Exits the whole application with all open windows.

### `expand_selection`

Extends the selection up to predefined limits.

- **to** (Enum): Values: *bol*, *hardbol*, *eol*, *hardeol*, *bof*, *eof*,
  *brackets*, *line*, *tag*, *scope*, *indentation*.

### `expand_tabs`

XXX

- **set_translate_tabs** (Bool)

### `find_all_under`

Finds all occurrences of the current selection or the current word.

### `find_next`

Finds the next occurrence of the current search term.

### `find_prev`

Finds the previous occurrence of the current search term.

### `find_under_expand_skip`

Adds a new selection based on the current selection or expands the
selection to the current word while removing the current selection.

### `find_under_expand`

Adds a new selection based on the current selection or expands the
selection to the current word.

### `find_under_prev`

Finds the previous occurrence of the current selection or the current word.

### `find_under`

Finds the next occurrence of the current selection or the current word.

### `focus_group`

Gives focus to the top-most file in the specified group.

- **group** (Int): The group index to focus. This is determined by the order
  of `cells` items from the current layout (see [`Window.set_layout`][]).

### `fold_by_level`

Scans the whole file and folds everything with an indentation level of
`level` or higher. This does not unfold already folded regions if you first
fold by level 2 and then by 3, for example. Sections with cursors are not
folded.

- **level** (Int): The level of indentation that should be folded. `0` is
  equivalent to running #### unfold_all.

### `fold_tag_attributes`

Folds all tag attributes in XML files, only leaving the tag's name and the
closing bracket visible.

### `fold`

Folds the current selection and displays ``…`` instead. Unfold arrows are
added to the lines where a region has been folded.

### `hide_auto_complete`

Hides the auto complete list.

### `hide_overlay`

Hides the active overlay. Show the overlay using the show_overlay command.

### `hide_panel`

Hides the active panel.

- **cancel** (Bool): Notifies the panel to restore the selection to what it
  was when the panel was opened. (Only incremental find panel.)

### `increase_font_size`

Increases the font size.

### `indent`

Increments indentation of selection.

### `insert_best_completion`

Inserts the best completion that can be inferred from the current context.

<!-- TODO Probably useless. XXX -->

- **default** (String): String to insert failing a best completion.

### `insert_snippet`

Inserts a snippet from a string or *.sublime-snippet* file.

- **contents** (String): Snippet as a string to be inserted. Remember that
  backslashes `\` have to be escaped, like in every other JSON string.
- **name** (String): [Relative path][About Paths in Command Arguments] to the
  *.sublime-snippet* file to be inserted.

::: seealso
[Snippets][]

Documentation on snippets and their variable features.
:::

[Snippets]: ../guide/extensibility/snippets

### `insert`

Inserts a string.

- **characters** (String): String to be inserted.

### `join_lines`

Joins the current line with the next one.

### `left_delete`

Deletes the character right before the caret.

### `lower_case`

Makes the selection lower case.

### `move_to_group`

Moves the current file to the specified group.

- **group** (Int): The group index to focus. See #### focus_group command.

### `move_to`

Advances the caret to predefined locations.

- **to** (Enum): Values: *bol*, *eol*, *bof*, *eof*, *brackets*.
- **extend** (Bool): Whether to extend the selection. Defaults to `false`.

### `move`

Advances the caret by predefined units.

- **by** (Enum): Values: *characters*, *words*, *word_ends*, *subwords*,
  *subword_ends*, *lines*, *pages*, *stops*.
- **forward** (Bool): Whether to advance or reverse in the buffer.
- **word_begin** (Bool)
- **empty_line** (Bool)
- **punct_begin** (Bool)
- **separators** (Bool)
- **extend** (Bool): Whether to extend the selection. Defaults to `false`.

### `new_build_system`

Creates a new buffer and inserts a build system template.

### `new_plugin`

Creates a new buffer and inserts a plugin template (a text command).

### `new_snippet`

Creates a new buffer and inserts a snippet template.

### `new_window`

Opens a new window.

### `next_bookmark`

Select the next bookmarked region.

### `next_field`

Advances the caret to the text snippet field in the current snippet field
cycle.

### `next_misspelling`

Advance to the next misspelling

### `next_result`

Advance to the next captured result.

### `next_view_in_stack`

Switches to the most recently active view.

### `next_view`

Switches to the next view.

### `open_dir`

Opens the specified directory with the default file manager.

- **dir** (String): The directory to open.

### `open_file_settings`

Opens the syntax-specific user settings file for the current syntax.

### `open_file`

Opens the specified file.
Will dynamically open resource files
from [sublime-package archives][] as read-only
if the specified *override file* does not exist.

- **file** (String): [Absolute or relative path][About Paths in Command Arguments]
  to the file to be opened. Relative paths will originate from the recently

  Expands snippet-like variables, such as `$platform` and `$packages`.

- **contents** (String): This string will be written to the new buffer if
  the file does not exist. accessed directory (e.g. the directory of the currently opened file).

<!-- XXX more variables? -->

### `open_recent_file`

Opens a recently closed file.

- **index** (Int)

### `open_recent_folder`

Opens a recently closed folder.

- **index** (Int)

### `open_recent_project`

Opens a recently closed project.

- **index** (Int)

### `open_url`

Opens the specified url with the default browser.

- **url** (String)

### `paste_and_indent`

Inserts the clipboard contents after the caret and indents contextually.

### `paste`

Inserts the clipboard contents after the caret.

- **clipboard** (String): May be *selection*. XXX what other values are
  allowed?

### `permute_lines`

XXX

- **operation** (Enum): *reverse*, *unique*, *shuffle* ...?

### `permute_selection`

XXX

- **operation** (Enum): *reverse*, *unique*, *shuffle* ...?

### `prev_bookmark`

Select the previous bookmarked region.

### `prev_field`

Moves the caret to the previous snippet field in the current snippet field
  cycle.

### `prev_misspelling`

Move to the previous misspelling.

### `prev_result`

Move to the previous captured result.

### `prev_view_in_stack`

Switches to the view that was active before the most recently active view.

<!-- TODO I don't think this is very clear or even true. -->

### `prev_view`

Switches to the previous view.

### `prompt_add_folder`

Prompts for a folder to add to the current project.

### `prompt_open_project`

Prompts for a project file to open as a project.

### `prompt_save_as`

Prompts for a new file name and saves the active file.

### `prompt_select_project`

Opens a popup with recently accessed projects where you can fuzzy-search.

### `redo_or_repeat`

Performs the latest action again.

<!-- TODO does this mean selections? -->

### `redo`

Reapplies the latest undone action.

### `refresh_folder_list`

Reloads all folders in the current project and updates the side bar.

### `reindent`

Corrects indentation of the selection with regular expressions set in the
syntax's preferences. The base indentation will be that of the line before
the first selected line. Sometimes does not work as expected.

### `reopen_last_file`

Reopens the last closed file.

### `reopen`

Reopens the current file.

- **encoding** (String): The file encoding the file should be reopened with.

### `replace_completion_with_auto_complete`

XXX

### `replace_completion_with_next_completion`

<!-- TODO Useless for users. XXX -->

### `reset_font_size`

Resets the font size to the default

*Note*: This essentially removes the entry from your User settings, there
might be other places where this has been "changed".

### `revert`

Undoes all unsaved changes to the file.

### `right_delete`

Deletes the character right after the caret.

### `run_macro_file`

Runs a *.sublime-macro* file.

- **file** (String): Relative path to the macro file.

### `run_macro`

Runs the macro stored in the macro buffer.

### `save_all`

Saves all open files.

### `save_macro`

Prompts for a file path to save the macro in the macro buffer to.

### `save_project_as`

Prompts for a new file name and saves the current project.

### `save`

Saves the active file.

- **encoding** (String): The file encoding to save as.

### `scroll_lines`

Scrolls lines in the view.

**amount** \[Float\]\: Positive values scroll lines down and negative values
scroll lines up.

### `select_all_bookmarks`

Selects all bookmarked regions.

### `select_all`

Select the view's content.

### `select_bookmark`

Selects a bookmarked region in the current file.

- **index** (Int)

### `select_by_index`

Focuses a certain tab in the current group.

- **index** (Int): The tab index to focus.

### `select_lines`

Adds a line to the current selection.

- **forward** (Bool): Whether to add the next or previous line. Defaults to
  `true`.

### `select_to_mark`

Selects the text between the current position of each one of the current
carets and the marked position. Each caret is matched with each mark
in order of occurrence, and is moved to the beginning of its selection.

If any number of selections overlap, they are joined and, of all the
carets corresponding to each one of the joined selections, only the one
occurring first in the file is preserved.

If the number of current carets is less or equal to the number of marks,
the remaining marks in order are ignored. Conversely, if currently there
are more carets than marks, the first relevant selections are produced.
Of all extra marks, those contained in the selections are removed, and
the rest of them are left where they are, without triggering a selection
from their position.

### `set_build_system`

Changes the current build system.

- **file** (String): Path to the build system. If empty, Sublime Text tries
  to automatically find an appropriate build systems from specified
  selectors.
- **index** (Int): Used in the **Tools | Build System** menu but otherwise
  probably not useful.

### `set_layout`

Changes the group layout of the current window. This command uses the same
pattern as [`Window.set_layout`][], see there for a list and
explanation of parameters.

### `set_line_ending`

Changes the line endings of the current file.

- **type** (Enum): *windows*, *unix*, *cr*

### `set_mark`

Marks the position of each caret in the current file. If any marks have
already been set in that file, they are removed.

### `set_setting`

Set the value of a setting. This value is view-specific.

- **setting** (String): The name of the setting to changed.
- **value** (\*): The value to set to.

### `show_about_window`

I think you know what this does.

### `show_at_center`

Scrolls the view to show the selected line in the middle of the view and
adjusts the horizontal scrolling if necessary.

### `show_overlay`

Shows the requested overlay. Use the #### hide_overlay command to hide it.

- **overlay** (Enum):
  The type of overlay to show. Possible values:

  - *goto*: Show the [Goto Anything][] overlay.
  - *command_palette*: Show the [Command Palette][].

- **show_files** (Bool): If using the goto overlay, start by displaying
  files rather than an empty widget.
- **text** (String): The initial contents to put in the overlay.


### `show_panel`

Shows a panel.

- **panel** (Enum): Values: *incremental_find*, *find*, *replace*,
  *find_in_files*, *console* or *output.\<panel_name\>*.
- **pattern** (String): The search string/pattern to add to the _Find:_ field. _(ST 4123+)_
- **replace_pattern** (String): The replacement string to add to the _Replace:_ field. _(ST 4123+)_
- **reverse** (Bool): Whether to search backwards in the buffer.
- **toggle** (Bool): Whether to hide the panel if it's already visible.
- **highlight** (Bool): Whether to highlight find results. _(ST 4107+)_
- **in_selection** (Bool): Whether to search within current selection only. _(ST 4107+)_
- **preserve_case** (Bool): Whether to preserve original casing when replacing text. _(ST 4107+)_
- **regex** (Bool): Whether to perform regular expression matching. _(ST 4107+)_
- **use_gitignore** (Bool): Whether to exclude git-ignored files from `find_in_files` search run. _(ST4107+)_
- **whole_word** (Bool): Whether to search for whole words only. _(ST4107+)_
- **wrap** (Bool): Whether to continue search at the beginning of a document if end of file is reached. _(ST4107+)_

### `show_scope_name`

Shows the name for the caret's scope in the status bar.


### `single_selection`

Collapses multiple selections into a single selection.

### `slurp_find_string`

Copies the current selection or word into the "find" field of the find
panel.

### `slurp_replace_string`

Copies the current selection or word into the "replace" field of the find
and replace panel.

### `soft_redo`

Redoes each action stepping through granular edits.

### `soft_undo`

Undoes each action stepping through granular edits.

### `sort_lines`

Sorts lines.

- **case_sensitive** (Bool): Whether the sort should be case sensitive.

### `sort_selection`

Sorts lines in selection.

- **case_sensitive** (Bool): Whether the sort should be case sensitive.

### `split_selection_into_lines`

Splits the selection into multiple selections, one on each line.

### `swap_case`

Swaps the case of each character in the selection.

### `swap_line_down`

Swaps the current line with the line below.

### `swap_line_up`

Swaps the current line with the line above.

### `swap_with_mark`

Marks all the current carets' positions, removes those carets, and sets
new carets at the previously marked positions, if any.

### `switch_file`

Switches between two files with the same name and different extensions.

- **extensions** (String): Extensions (without leading dot) for which
  switching will be enabled.

### `title_case`

Capitalizes the selection's first character and turns the rest into lower
case.

### `toggle_bookmark`

Sets or unsets a bookmark for the active region(s). (Bookmarks can be
accessed via the regions API using `"bookmarks"` as the key.)

### `toggle_comment`

Comments or uncomments the active lines, if available.

- **block** (Bool): Whether to insert a block comment.

### `toggle_distraction_free`

Toggles distraction free mode on or off.

### `toggle_full_screen`

Toggles full screen mode on or off.

### `toggle_minimap`

Shows or hides the minimap.

### `toggle_overwrite`

Toggles overwriting on or off.

### `toggle_record_macro`

Starts or stops the macro recorder.

### `toggle_save_all_on_build`

Toggles whether all open files should be saved before starting the build.

### `toggle_setting`

Toggles the value of a boolean setting. This value is view-specific.

- **setting** (String): The name of the setting to be toggled.

### `toggle_show_open_files`

Shows ot hides the open files in the sidebar.

### `toggle_side_bar`

Shows or hides the sidebar.

### `toggle_status_bar`

Shows or hides the status bar.

### `toggle_tabs`

Shows or hides the tab bar.

### `transpose`

Makes selections or characters swap places.

With selection: The contents of the selected regions are circulated.
Without selection: Swaps adjacent characters and moves the caret forward by
1.

### `undo`

Undoes the latest action.

### `unexpand_tabs`

XXX

- **set_translate_tabs** (Bool)

### `unfold_all`

Unfolds all folded regions.

### `unfold`

Unfolds all folded regions in the selection or the current line if there is
none.

### `unindent`

Unindents selection.

### `upper_case`

Makes the selection upper case.

### `wrap_lines`

Wraps lines. By default, it wraps lines at the first ruler's column.

- **width** (Int): Specifies the column at which lines should be wrapped.

### `yank`

XXX

<!-- Some regex-related and search-related commands missing. They don't seem to
be too useful. -->

## Discovering Commands

There are several ways to discover a command's name in order to use it as a key
binding, in a macro, as a menu entry or in a plugin.

- Browsing the default key bindings at **Preferences | Key Bindings - Default**.
  If you know the key binding whose command you want to inspect, you can just
  search for it using the [search panel][]. This, of course, also works in the
  opposite direction.

[search panel]: /guide/usage/search-and-replace.md

- `sublime.log_commands(True)`

  Running the above in the :console: will tell Sublime Text to print the command's
  name in the console whenever a command is run. You can practically just enter
  this, do whatever is needed to run the command you want to inspect and then
  look at the console. It will also print the passed arguments so you can
  basically get all the information you need from it. When you are done, just
  run the function again with `False` as parameter.

- Inspecting `.sublime-menu` files. If your command is run by a menu item,
  browse the default menu file at `Packages/Default/Main.sublime-menu`.
  You will find them quick enough once you take a look at it, or see the [menu documentation][].

[menu documentation]: ./menus.md

- Similar to menus, you can do exactly the same with `.sublime-command` files.
  See [completions][] for some documentation on completion
  files.

[completions]: ./completions.md
[Goto Anything]: /guide/usage/file-management/navigation.md#goto-anything
[Command Palette]: /guide/extensibility/command_palette.md
[sublime-package archives]: /guide/extensibility/packages.md#package-types
[`Window.set_layout`]: ./python_api.md#window-set-layout
