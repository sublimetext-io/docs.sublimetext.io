---
title: Key Bindings
---

Key bindings map key presses to commands.


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

`has_next_field`
: Returns `true`
  if a next snippet field
  is available.

`has_prev_field`
: Returns `true`
  if a previous snippet field
  is available.
   
`last_command`
: Returns the name of the last command run.

`num_selections`
: Returns the number of selections.

`overlay_visible`
: Returns `true`
  if any overlay is visible.

`panel_visible`
: Returns `true`
  if any panel is visible.

`following_text`
: Test against the selected text and the text
  following it until the end of the line.

`preceding_text`
: Test against the text on the line up to and
  including the selection.

`selection_empty`
: Returns `true`
  if the selection
  is an empty region.

`setting.x`
: Returns the value of the `x` setting.
  `x` can be any string.

`text`
: Restricts the test
  to the selected text.

`selector`
: Returns the name of the current scope.

`panel_has_focus`
: Returns `true`
  if a panel
  has input focus.

`panel`
: Returns `true`
  if the panel given as `operand`
  is visible.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Context Operators

`equal`, `not_equal`
: Test for equality.

`regex_match`, `not_regex_match`
: Match against a regular expression (full match).

`regex_contains`, `not_regex_contains`
: Match against a regular expression (partial match).
  
  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


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


## Bindable Keys

Keys in key bindings may be specified
literally or by name.
If using a name doesn't work in your case,
try a literal value.

<!-- TODO: Check the above. -->

Here's the list of all valid names:

| Keys           |                     |       |
| -------------- | ------------------- | ----- |
| `up`           | `keypad0`           | `f1`  |
| `down`         | `keypad1`           | `f2`  |
| `right`        | `keypad2`           | `f3`  |
| `left`         | `keypad3`           | `f4`  |
| `insert`       | `keypad4`           | `f5`  |
| `home`         | `keypad5`           | `f6`  |
| `end`          | `keypad6`           | `f7`  |
| `pageup`       | `keypad7`           | `f8`  |
| `pagedown`     | `keypad8`           | `f9`  |
| `backspace`    | `keypad9`           | `f10` |
| `delete`       | `keypad_period`     | `f11` |
| `tab`          | `keypad_divide`     | `f12` |
| `enter`        | `keypad_multiply`   | `f13` |
| `pause`        | `keypad_minus`      | `f14` |
| `escape`       | `keypad_plus`       | `f15` |
| `space`        | `keypad_enter`      | `f16` |
| `clear`        |                     | `f17` |
| `sysreq`       | `browser_back`      | `f18` |
| `break`        | `browser_forward`   | `f19` |
| `context_menu` | `browser_refresh`   | `f20` |
|                | `browser_stop`      | `f21` |
|                | `browser_search`    | `f22` |
|                | `browser_favorites` | `f23` |
|                | `browser_home`      | `f24` |


### Modifiers

* `shift`
* `ctrl`
* `alt`
* `super` (**Windows**: Windows key, **MacOS**: Command Key)
* `primary` (**Windows**: Windows key, **MacOS**: Command Key)
* `command` (**MacOS only**)
* `option` (**MacOS only**: aliased to the alt key)


### Warning about Bindable Keys

If you're developing a package,
keep this in mind:

* <kbd>Ctrl+Alt+\<alphanum\></kbd> should never be used in any Windows key bindings.
* <kbd>Option+\<alphanum\></kbd> should never be used in any OS X key bindings.

In both cases,
the user's ability
to insert non-ASCII characters
would be compromised otherwise.

End-users are free to remap
any key combination.


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

::: seealso
[Merging and Order of Precedence](/guide/extensibility/packages.html#merging-and-order-of-precedence)
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

[api-docs]: https://www.sublimetext.com/docs/3/api_reference.html
