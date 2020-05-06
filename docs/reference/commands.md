---
title: Commands
---

::: tip Note
This list of commands is a work in progress.
:::

<!-- TODO Remove after full ReST to MD Conversion
- .. _cmd-about-paths: -->

## About Paths in Command Arguments
[About Paths in Command Arguments]: #about-paths-in-command-arguments

Some commands take paths as parameters.
Among these, some support snippet-like syntax, while others don't.
A command of the first kind would take a parameter like
`${packages}/SomeDir/SomeFile.ext` whereas a command of the second kind would
take a parameter like `Packages/SomeDir/SomeFile.ext`.

Generally, newer commands support the snippet-like syntax.

Commands expect UNIX-style paths if not otherwise noted, including on Windows
(for example, `/c/Program Files/Sublime Text 3/sublime_plugin.py`).

Often, relative paths in arguments to commands are assumed to start at the
:Data_directory:.

<!--  TODO: split into Window and Text (and Application) commands since they behave
- differently and require other call mechanisms when called from a plugin -->

## Commands

`build`
: Runs a build system.
  - **variant** (String): Optional. The name of the variant to be run.

`set_build_system`
: Changes the current build system.

  - **file** (String): Path to the build system.
    If empty, Sublime Text tries to automatically find an appropriate build
    systems from specified selectors.
  - **index** (Int): Used in the **Tools | Build System** menu but otherwise
    probably not useful.

`new_build_system`
: Creates a new buffer and inserts a build system template.

`toggle_save_all_on_build`
: Toggles whether all open files should be saved before starting the build.

`run_macro_file`
: Runs a *.sublime-macro* file.

  - **file** (String): Relative path to the macro file.

`insert_snippet`
: Inserts a snippet from a string or *.sublime-snippet* file.

  - **contents** (String): Snippet as a string to be inserted.
    Remember that backslashes `\` have to be escaped, like in every other JSON
    string.
  - **name** (String): [Relative path][About Paths in Command Arguments] to the
    *.sublime-snippet* file to be inserted.

::: seealso
[Snippets][]
: Documentation on snippets and their variable features.
:::

[Snippets]: ../guide/extensibility/snippets

`insert`
: Inserts a string.

  - **caracters** (String): String to be inserted.

`append`
: Inserts a string at the end of the view.

  - **characters** (String): String to be inserted.
  - **force** (Bool):
  - **scroll_to_end** (Bool):

`move`
: Advances the caret by predefined units.

  - **by** (Enum): Values:
    *characters*, *words*, *word_ends*, *subwords*, *subword_ends*, *lines*,
    *pages*, *stops*.
  - **forward** (Bool): Whether to advance or reverse in the buffer.
  - **word_begin** (Bool)
  - **empty_line** (Bool)
  - **punct_begin** (Bool)
  - **separators** (Bool)
  - **extend** (Bool): Whether to extend the selection. Defaults to `false`.

`move_to`
: Advances the caret to predefined locations.

  - **to** (Enum): Values:
    *bol*, *eol*, *bof*, *eof*, *brackets*.
  - **extend** (Bool): Whether to extend the selection.
    Defaults to `false`.

`open_file`
: Opens the specified file.
  Will dynamically open resource files from [sublime-package archives][] as
  read-only if the specified *override file* does not exist.

  - **file** (String): [Absolute or relative path][About Paths in Command Arguments]
    to the file to be opened.
    Relative paths will originate from the recently

    Expands snippet-like variables, such as `$platform` and `$packages`.

  - **contents** (String):
    This string will be written to the new buffer if the file does not exist.
    Accessed directory (e.g. the directory of the currently opened file).

    <!-- XXX more variables? -->

`open_dir`
: Opens the specified directory with the default file manager.

  - **dir** (String): The directory to open.

`open_file_settings`
: Opens the syntax-specific user settings file for the current syntax.

`new_window`
: Opens a new window.

`close_window`
: Closes the active window.

`switch_file`
: Switches between two files with the same name and different extensions.

  - **extensions** (String):
    Extensions (without leading dot) for which switching will be enabled.

`close`
: Closes the active view.

`close_file`
: Closes the active view and, under certain circumsances, the whole application.

<!--   XXX Sounds kinda wrong. -->

`exit`
: Exits the whole application with all open windows.

`reopen_last_file`
: Reopens the last closed file.

`save`
: Saves the active file.

  - **encoding** (String): The file encoding to save as.

`save_all`
: Saves all open files.

`prompt_save_as`
: Prompts for a new file name and saves the active file.

`save_project_as`
: Prompts for a new file name and saves the current project.

`prompt_select_project`
: Opens a popup with recently accessed projects where you can fuzzy-search.

`prompt_open_project`
: Prompts for a project file to open as a project.

`close_project`
: Closes the current project.

`prompt_add_folder`
: Prompts for a folder to add to the current project.

`close_folder_list`
: Removes all folders from the current project.

`refresh_folder_list`
: Reloads all folders in the current project and updates the side bar.

`toggle_side_bar`
: Shows or hides the sidebar.

`toggle_show_open_files`
: Shows ot hides the open files in the sidebar.

`toggle_status_bar`
: Shows or hides the status bar.

`toggle_full_screen`
: Toggles full screen mode on or off.

`toggle_distraction_free`
: Toggles distraction free mode on or off.

`toggle_tabs`
: Shows or hides the tab bar.

`toggle_minimap`
: Shows or hides the minimap.

`left_delete`
: Deletes the character right before the caret.

`right_delete`
: Deletes the character right after the caret.

`undo`
: Undoes the latest action.

`redo`
: Reapplies the latest undone action.

`redo_or_repeat`
: Performs the latest action again.

<!-- TODO does this mean selections? -->

`soft_undo`
: Undoes each action stepping through granular edits.

`soft_redo`
: Redoes each action stepping through granular edits.

`cut`
: Removes the selected text and sends it to the system clipboard.
  Put differently, it cuts.

`copy`
: Sends the selected text to to the system clipboard.

`paste`
: Inserts the clipboard contents after the caret.

  - **clipboard** (String): May be *selection*.
    <!-- XXX what other values are allowed? -->

`paste_and_indent`
: Inserts the clipboard contents after the caret and indents contextually.

`select_lines`
: Adds a line to the current selection.

  - **forward** (Bool): Whether to add the next or previous line.
    Defaults to `true`.

`scroll_lines`
: Scrolls lines in the view.

  **amount** \[Float\]\:
  Positive values scroll lines down and negative values scroll lines up.

`prev_view`
: Switches to the previous view.

`next_view`
: Switches to the next view.

`next_view_in_stack`
: Switches to the most recently active view.

`prev_view_in_stack`
: Switches to the view that was active before the most recently active view.

<!-- TODO I don't think this is very clear or even true. -->

`select_all`
: Select the view's content.

`split_selection_into_lines`
: Splits the selection into multiple selections, one on each line.

`single_selection`
: Collapses multiple selections into a single selection.

`clear_fields`
: Breaks out of the active snippet field cycle.

`hide_panel`
: Hides the active panel.

  - **cancel** (Bool):
    Notifies the panel to restore the selection to what it was when the panel
    was opened. (Only incremental find panel.)

`hide_overlay`
: Hides the active overlay. Show the overlay using the show_overlay command.

`hide_auto_complete`
: Hides the auto complete list.

`insert_best_completion`
: Inserts the best completion that can be inferred from the current context.
<!-- TODO Probably useless. -->

  - **default** (String): String to insert failing a best completion.

`replace_completion_with_next_completion`
  <!-- TODO Useless for users. -->

`reindent`
: Corrects indentation of the selection with regular expressions set in the
  syntax's preferences.
  The base indentation will be that of the line before the first selected line.
  Sometimes does not work as expected.

`indent`
: Increments indentation of selection.

`unindent`
: Unindents selection.

`detect_indentation`
: Guesses the indentation from the current file.

`next_field`
: Advances the caret to the text snippet field in the current snippet field
  cycle.

`prev_field`
: Moves the caret to the previous snippet field in the current snippet field
  cycle.

`commit_completion`
: Inserts into the buffer the item that's currently selected in the auto
  complete list.
<!-- TODO Probably not useful for users. -->

`toggle_overwrite`
: Toggles overwriting on or off.

`expand_selection`
: Extends the selection up to predefined limits.

  - **to** (Enum): Values:
    *bol*, *hardbol*, *eol*, *hardeol*, *bof*, *eof*, *brackets*, *line*, *tag*,
    *scope*, *indentation*.

`close_tag`
: Surrounds the current inner text with the appropiate tags.

`toggle_record_macro`
: Starts or stops the macro recorder.

`run_macro`
: Runs the macro stored in the macro buffer.

`save_macro`
: Prompts for a file path to save the macro in the macro buffer to.

`show_overlay`
: Shows the requested overlay. Use the `hide_overlay` command to hide it.

  - **overlay** (Enum):
    The type of overlay to show. Possible values:

    - *goto*: Show the [Goto Anything][] overlay.
    - *command_palette*: Show the [Command Palette][].

  - **show_files** (Bool):
    If using the goto overlay, start by displaying files rather than an empty
    widget.
  - **text** (String):
    The initial contents to put in the overlay.

`show_panel`
: Shows a panel.

  - **panel** (Enum): Values:
    *incremental_find*, *find*, *replace*, *find_in_files*, *console* or
    *output.\<panel_name\>*.
  - **reverse** (Bool): Whether to search backwards in the buffer.
  - **toggle** (Bool): Whether to hide the panel if it's already visible.

`find_next`
: Finds the next occurrence of the current search term.

`find_prev`
: Finds the previous occurrence of the current search term.

`find_under_expand`
: Adds a new selection based on the current selection or expands the selection
  to the current word.

`find_under_expand_skip`
: Adds a new selection based on the current selection or expands the selection
  to the current word while removing the current selection.

`find_under`
: Finds the next occurrence of the current selection or the current word.

`find_under_prev`
: Finds the previous occurrence of the current selection or the current word.

`find_all_under`
: Finds all occurrences of the current selection or the current word.

`slurp_find_string`
: Copies the current selection or word into the "find" field of the find panel.

`slurp_replace_string`
: Copies the current selection or word into the "replace" field of the find and
  replace panel.

`next_result`
: Advance to the next captured result.

`prev_result`
: Move to the previous captured result.

`toggle_setting`
: Toggles the value of a boolean setting.
  This value is view-specific.

  - **setting** (String):
    The name of the setting to be toggled.

`set_setting`
: Set the value of a setting.
  This value is view-specific.

  - **setting** (String):
    The name of the setting to changed.
  - **value** (\*):
    The value to set to.

`set_line_ending`
: Changes the line endings of the current file.

  - **type** (Enum): *windows*, *unix*, *cr*

`next_misspelling`
: Advance to the next misspelling

`prev_misspelling`
: Move to the previous misspelling.

`swap_line_down`
: Swaps the current line with the line below.

`swap_line_up`
: Swaps the current line with the line above.

`toggle_comment`
: Comments or uncomments the active lines, if available.

  - **block** (Bool):
    Whether to insert a block comment.

`join_lines`
: Joins the current line with the next one.

`duplicate_line`
: Duplicates the current line.

`auto_complete`
: Opens the auto complete list.

`replace_completion_with_auto_complete`
: XXX

<!-- TODO: fix above -->

`show_scope_name`
: Shows the name for the caret's scope in the status bar.

`exec`
: Runs an external process asynchronously. On Windows, GUIs are supressed.

  `exec` is the default command used by build systems, thus it provides
  similar functionality.
  However, a few options in build systems are taken care of by Sublime Text
  internally so they list below only contains parameters accepted by this
  command.

  - **cmd** [(String)]
  - **shell_cmd** (String): Shell command to use.
    If given overrides `cmd` and ignores `shell`.
  - **file_regex** (String)
  - **line_regex** (String)
  - **working_dir** (String)
  - **encoding** (String)
  - **env** [{String: String}]
  - **quiet** (Bool):
    If `True` no runtime information is printed if the command fails or has a
    non-zero exit code.
  - **kill** (Bool):
    If `True` will simply terminate the current build process.
    This is invoked via *Build: Cancel* command from the [Command Palette][].
  - **update_phantoms_only** (Bool)
  - **hide_phantoms_only** (Bool)
  - **word_wrap** (Bool): Whether to word-wrap the output in the build panel
  - **syntax** (String): Syntax file used to colour output.
  - **path** (String)
    - **shell** (Bool)

  ::: seealso
  [`exec` Target options](https://www.sublimetext.com/docs/3/build_systems.html#exec_options)
  : Detailed documentation on all parameters of the `exec` command.
  :::

`transpose`
: Makes selections or characters swap places.

  With selection: The contents of the selected regions are circulated.
  Without selection: Swaps adjacent characters and moves the caret forward by
  `1`.

`sort_lines`
: Sorts lines.

  - **case_sensitive** (Bool):
    Whether the sort should be case sensitive.

`sort_selection`
: Sorts lines in selection.

  - **case_sensitive** (Bool):
    Whether the sort should be case sensitive.

`permute_lines`
: XXX

<!-- TODO: fix above -->

  - **operation** (Enum): *reverse*, *unique*, *shuffle* ...?

`permute_selection`
: XXX

<!-- TODO: fix above -->

  - **operation** (Enum): *reverse*, *unique*, *shuffle* ...?

`set_layout`
: Changes the group layout of the current window.
  This command uses the same pattern as [`Window.set_layout`][], see there for a
  list and explanation of parameters.

`focus_group`
: Gives focus to the top-most file in the specified group.

  - **group** (Int):
    The group index to focus.
    This is determined by the order of `cells` items from the current layout
    (see [`Window.set_layout`][]).

`move_to_group`
: Moves the current file to the specified group.

  - **group** (Int):
    The group index to focus.
    See `focus_group` command.

`select_by_index`
: Focuses a certain tab in the current group.

  - **index** (Int): The tab index to focus.

`next_bookmark`
: Select the next bookmarked region.

`prev_bookmark`
: Select the previous bookmarked region.

`toggle_bookmark`
: Sets or unsets a bookmark for the active region(s).
  (Bookmarks can be accessed via the regions API using `"bookmarks"` as the
  key.)

`select_bookmark`
: Selects a bookmarked region in the current file.

  - **index** (Int)

`clear_bookmarks`
: Removes all bookmarks.

`select_all_bookmarks`
: Selects all bookmarked regions.

`wrap_lines`
: Wraps lines.
  By default, it wraps lines at the first ruler's column.

  - **width** (Int): Specifies the column at which lines should be wrapped.

`upper_case`
: Makes the selection upper case.

`lower_case`
: Makes the selection lower case.

`title_case`
: Capitalizes the selection's first character and turns the rest into lower
  case.

`swap_case`
: Swaps the case of each character in the selection.

`set_mark`
: Marks the position of each caret in the current file.
  If any marks have already been set in that file, they are removed.

`select_to_mark`
: Selects the text between the current position of each one of the current
  carets and the marked position.
  Each caret is matched with each mark in order of occurrence, and is moved to
  the beginning of its selection.

  If any number of selections overlap, they are joined and, of all the carets
  corresponding to each one of the joined selections, only the one occurring
  first in the file is preserved.

  If the number of current carets is less or equal to the number of marks, the
  remaining marks in order are ignored.
  Conversely, if currently there are more carets than marks, the first relevant
  selections are produced.
  Of all extra marks, those contained in the selections are removed, and the
  rest of them are left where they are, without triggering a selection from
  their position.

`delete_to_mark`
: Deletes the text that `select_to_mark` would select.

`swap_with_mark`
: Marks all the current carets' positions, removes those carets, and sets
  new carets at the previously marked positions, if any.

`clear_bookmarks`
: If no **name** argument, or the **name** "bookmarks" is specified, it
   removes all bookmarks set in the current file, but not the marks.
   If the **name** "mark" is specified as an argument, it removes all marks set
   in the current file, but not the bookmarks.

  - **name** (String): e.g. `"mark"`, `"bookmarks"`.

`yank`
: XXX

<!-- TODO: fix above -->

`show_at_center`
: Scrolls the view to show the selected line in the middle of the view and
  adjusts the horizontal scrolling if necessary.

`increase_font_size`
: Increases the font size.

`decrease_font_size`
: Decreases the font size.

`reset_font_size`
: Resets the font size to the default

  *Note*:
  This essentially removes the entry from your `User` settings, there might be
  other places where this has been "changed".

`fold`
: Folds the current selection and displays ``…`` instead.
  Unfold arrows are added to the lines where a region has been folded.

`unfold`
: Unfolds all folded regions in the selection or the current line if there is
  none.

`fold_by_level`
: Scans the whole file and folds everything with an indentation level of
  `level` or higher.
  This does not unfold already folded regions if you first fold by level 2 and
  then by 3, for example.
  Sections with cursors are not folded.

  - **level** (Int):
    The level of indentation that should be folded.
    `0` is equivalent to running `unfold_all`.

`fold_tag_attributes`
  Folds all tag attributes in XML files, only leaving the tag's name and the
  closing bracket visible.

`unfold_all`
: Unfolds all folded regions.

`context_menu`
: Shows the context menu.

`open_recent_file`
: Opens a recently closed file.

  - **index** (Int)

`open_recent_folder`
: Opens a recently closed folder.

  - **index** (Int)

`open_recent_project`
: Opens a recently closed project.

  - **index** (Int)

`clear_recent_files`
: Deletes records of recently accessed files and folders.

`clear_recent_projects`
: Deletes records of recently accessed projects.

`reopen`
: Reopens the current file.

  - **encoding** (String):
    The file encoding the file should be reopened with.

`clone_file`
: Clones the current view into the same tab group, both sharing the same buffer.
  That means you can drag one tab to another group and every update to one view
  will be visible in the other one too.

`revert`
: Undoes all unsaved changes to the file.

`expand_tabs`
: XXX

<!-- TODO: fix above -->

  - **set_translate_tabs** (Bool)

`unexpand_tabs`
: XXX

<!-- TODO: fix above -->

  - **set_translate_tabs** (Bool)

`new_plugin`
: Creates a new buffer and inserts a plugin template (a text command).

`new_snippet`
: Creates a new buffer and inserts a snippet template.

`open_url`
: Opens the specified url with the default browser.

  - **url** (String)

`show_about_window`
: I think you know what this does.

<!--
  TODO: Some regex-related and search-related commands missing.
        They don't seem to be too useful.
-->

## Discovering Commands

There are several ways to discover a command's name in order to use it as a key
binding, in a macro, as a menu entry or in a plugin.

- Browsing the default key bindings at **Preferences | Key Bindings - Default**.
  If you know the key binding whose command you want to inspect, you can just
  search for it using the [search panel][].
  This, of course, also works in the opposite direction.

[search panel]: /guide/search-and-replace/single.md

- `sublime.log_commands(True)`

  Running the above in the :console: will tell Sublime Text to print the
  command's name in the console whenever a command is run.
  You can practically just enter this, do whatever is needed to run the command
  you want to inspect and then look at the console.
  It will also print the passed arguments so you can basically get all the
  information you need from it.
  When you are done, just run the function again with `False` as parameter.

- Inspecting `.sublime-menu` files.
  If your command is run by a menu item, browse the default menu file at
  `Packages/Default/Main.sublime-menu`.
  You will find them quick enough once you take a look at it, or see the
  [menu documentation][].

[menu documentation]: ./menus.md

- Similar to menus, you can do exactly the same with `.sublime-command` files.
  See [completions][] for some documentation on completion files.

[completions]: ./completions.md
[Goto Anything]: /guide/file-management/navigation.md#goto-anything
[Command Palette]: /guide/extensibility/command_palette.md
[sublime-package archives]: /guide/extensibility/packages.md#package-types
[`Window.set_layout`]: ./python_api.md#window-set-layout
