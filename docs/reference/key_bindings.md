---
title: Key Bindings
---

# Key Bindings

Key bindings map key presses to commands.

::: info See Also
[Official documentation for Key Bindings](https://www.sublimetext.com/docs/key_bindings.html)
:::


## File Format

Key bindings are stored in `.sublime-keymap` files
and defined in JSON.
Keymap files may be located anywhere in a package.


### Naming Keymap Files

Any keymap named `Default.sublime-keymap`
will always be applied in all platforms.

Additionally, each platform
can optionally have its own keymap:

- `Default (Windows).sublime-keymap`
- `Default (OSX).sublime-keymap`
- `Default (Linux).sublime-keymap`

Sublime Text will ignore any `.sublime-keymap` file
whose name doesn't follow the patterns just described.


### Structure of a Key Binding

Keymaps are arrays of key bindings.
These are all valid elements in a key binding:

`keys`
: An array of case-sensitive keys.
  Modifiers can be specified
  with the `+` sign.
  You can build chords
  by adding elements to the array
  (for example, `["ctrl+k","ctrl+j"]`).
  Ambiguous chords are resolved
  with a timeout.

`command`
: Name of the command to be executed.

`args`
: Dictionary of arguments
  to be passed to `command`.
  Keys must be names
  of parameters to `command`.

`context`
: Array of conditions
  that determine a particular *context*.
  All conditions must evaluate to `true`
  for the context to be active.
  See [Structure of a Context][] below
  for more information.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


Here's an example:

```json
{ "keys": ["shift+enter"], "command": "insert_snippet", "args": {"contents": "\n\t$0\n"}, "context":
   [
      { "key": "setting.auto_indent", "operator": "equal", "operand": true },
      { "key": "selection_empty", "operator": "equal", "operand": true, "match_all": true },
      { "key": "preceding_text", "operator": "regex_contains", "operand": "\\{$", "match_all": true },
      { "key": "following_text", "operator": "regex_contains", "operand": "^\\}", "match_all": true }
   ]
}
```


[Structure of a Context]: #structure-of-a-context

### Structure of a Context

`key`
: Name of the context
  whose value you want to query.

`operator`
: Type of test to perform against `key`'s value.
  Defaults to `equal`.

`operand`
: The result returned by `key`
  is tested against this value.

`match_all`
: Requires the test to succeed
  for all selections.
  Defaults to `false`.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Context Keys

Arbitrary keys may be provided by plugins.
Thus, this section only features keys
provided by Sublime Text itself.

`auto_complete_visible`
: Returns `true`
  if the autocomplete list
  is visible.

`eol_select`
: Selector to match scope name at end of current line

`following_text`
: Test against the selected text and the text
  following it until the end of the line.

`group_has_multiselect`
: Returns `true`
  if the active group currently has multi-select.

  ::: tip Added in build 4050 {added}
  :::

`group_has_transient_sheet`
: Returns `true`
  if group the active group has a transient sheet.

  ::: tip Added in build 4050 {added}
  :::

`has_next_field`
: Returns `true`
  if a next snippet field
  is available.

`has_prev_field`
: Returns `true`
  if a previous snippet field
  is available.

`has_snippet`
: Returns `true`
  if the current word
  matches the tab trigger of a snippet.

  ::: tip Added in build 4050 {added}
  :::

`is_javadoc`
: Returns `true` if caret(s) is (are) in a comment that
  starts with `/**`

  ::: tip Added in build 4050 {added}
  :::

`is_recording_macro`
: Is user currently recording a macro?

`last_command`
: Returns the name of the last command run.

`last_modifying_command`
: Name of last command run that modified a buffer

`num_selections`
: Returns the number of selections.

`overlay_has_focus`
: Returns `true` if any overlay has focus.

  ::: tip Added in build 4082 {added}
  :::

`overlay_name`
: Returns the name of the active overlay.
  Valid values are `goto` and `command_palette`.

  ::: tip Added in build 4082 {added}
  :::

`overlay_visible`
: Returns `true`
  if any overlay is visible.

`panel`
: Returns `true`
  if the panel given as `operand`
  is visible.

`panel_has_focus`
: Returns `true`
  if a panel
  has input focus.

`panel_visible`
: Returns `true`
  if any panel is visible.

`popup_visible`
: Is a popup currently being displayed?

`preceding_text`
: Test against the text on the line up to and
  including the selection.

`read_only`
: Is buffer in read-only state?

`selection_empty`
: Returns `true`
  if the selection
  is an empty region.

`selector`
: Name of scope for current selection.

`setting.x`
: Returns the value of the `x` setting.
  `x` can be any string.

`text`
: Restricts the test
  to the selected text.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Context Operators

`equal`, `not_equal`
: Test for equality.

`regex_match`, `not_regex_match`
: Match against a regular expression (full match).

`regex_contains`, `not_regex_contains`
: Match against a regular expression (partial match).

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


## Bindable Keys

Actions can be bound to the keyboard in two different ways
that cannot be combined:

1. A character glyph/symbol
  that will be triggered when this character
  would be inserted into the buffer. <br>
  Examples: `A`, `$` or `{`.
1. A key chord
  that can consists of an optional list of modifier keys
  and a physical key that can be found
  on the US International keyboard layout,
  joined by a `+` character. <br>
  Examples: `shift+a`, `shift+4`, `ctrl+'`.

In other words,
`B` will catch any key sequence inserting a `B` glyph,
but `ctrl+B` is invalid
and needs to be written as `ctrl+shift+b` instead.

### Modifiers

* `shift`
* `ctrl` or `control`
* `alt` or `option`
* `super` (**Windows/Linux**: Windows key, **MacOS**: Command Key)
* `primary` (**Windows/Linux**: Control key, **MacOS**: Command Key)
* `command` (**MacOS only**)

### Bindable keys

Here's the list of the names for bindable keys in key chords:

```
                                                    Alternate      Specialty
                Regular Key Names                   Symbol Names   Keyboards
--------------------------------------------------  -------------  -----------------
0   a   n   f1   ,   keypad0          up            backquote      close
1   b   o   f2   .   keypad1          down          equals         copy
2   c   p   f3   \   keypad2          left          forward_slash  cut
3   d   q   f4   /   keypad3          right         minus          find
4   e   r   f5   ;   keypad4          insert        plus           open
5   f   s   f6   '   keypad5          delete                       paste
6   g   t   f7   `   keypad6          home                         redo
7   h   u   f8   -   keypad7          end                          save
8   i   v   f9   =   keypad8          pageup                       sysreq
9   j   w   f10  [   keypad9          pagedown                     undo
    k   x   f11  ]   keypad_period    backspace
    l   y   f12      keypad_divide    tab                          browser_back
    m   z   f13      keypad_multiply  enter                        browser_favorites
            f14      keypad_minus     pause                        browser_forward
            f15      keypad_plus      break                        browser_home
            f16      keypad_enter     space                        browser_refresh
            f17      clear            escape                       browser_search
            f18                       context_menu                 browser_stop
            f19
            f20
```

### The Any Character Binding

Adding a binding for `<character>`
(with the angled brackets and no modifiers)
causes Sublime Text to bind the given command
for **all** glyphs provided to it.
You should thus only use this binding
with an accompanying context filter.

The specified command will then receive
an additional `character` argument
containing the glyph that was captured.


### Warning about Bindable Keys

If you're developing a package,
keep this in mind:

* <kbd>Ctrl+Alt+\<alphanum\></kbd> should never be used in any Windows key bindings.
* <kbd>Option+\<alphanum\></kbd> should never be used in any macOS key bindings.

In both cases,
the user's ability
to insert non-ASCII characters
would be compromised otherwise.

End-users are free to remap
any key combination.


## Command Mode

Sublime Text provides a `command_mode` setting
to prevent key presses
from being sent to the buffer.
This is useful, for example,
to emulate Vim's modal behavior.

Key bindings not intended for command mode
(generally, all of them)
should include a context like this:

```json
{"key": "setting.command_mode", "operand": false}
```

This way, plugins legitimately using command mode
will be able to define appropriate key bindings
without interference.


## Order of Preference for Key Bindings

Key bindings in a keymap file are evaluated
from the bottom to the top.
The first matching context wins.


## Keeping Keymaps Organized

Sublime Text ships with default keymaps
under `Packages/Default`.
Other packages may include
keymap files of their own.

The recommended storage location
for your personal keymap files is `Packages/User`.

::: info See Also
[Merging and Order of Precedence](/guide/extensibility/packages.md#merging-and-order-of-precedence)
:::


## International Keyboards

Due to the way Sublime Text
maps key names to physical keys,
key names may not correspond to
physical keys in keyboard layouts
other than US English.


## Troubleshooting

To enable logging
related to keymaps, [see the documentation][api-docs] for:

- sublime.log_commands(flag)
- sublime.log_input(flag)

These may help with debugging keymaps.
When a key chord does not trigger an input log,
another application or your operating system
is likely grabbing the key
before it can reach Sublime Text.

[api-docs]: https://www.sublimetext.com/docs/api_reference.html
