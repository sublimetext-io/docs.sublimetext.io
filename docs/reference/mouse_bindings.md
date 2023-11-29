---
title: Mouse Bindings
---

# Mouse Bindings

The mousemap files
(which have the extension `.sublime-mousemap`)
control what commands are executed
when a user performs an action with a mouse,
e.g. clicking a mouse button,
scrolling the scroll wheel,
etc.


## File Format

Mousmap files are JSON files,
following the naming schema of Keybindings.

Here is a small excerpt from `Default/Default (Windows).sublime-mousemap`:

```json
[
    // Basic drag select
    {
        "button": "button1", "count": 1,
        "press_command": "drag_select"
    },
    {
        "button": "button1", "count": 1, "modifiers": ["ctrl"],
        "press_command": "drag_select",
        "press_args": {"additive": true}
    },
    {
        "button": "button1", "count": 1, "modifiers": ["alt"],
        "press_command": "drag_select",
        "press_args": {"subtractive": true}
    },
]
```

Following are the keys that a single JSON entry
in a mousemap file can take.

`button`
: The name of the button.

  This defines the name of the button.
  There can be upto 16 buttons, `button1` to `button16`
  along with `scroll_up` & `scroll_down` for the scroll wheel.

`modifiers`
: A list of modifier keys.

  This defines a list of modifiers keys
  that have to be pressed simultaneously
  (along with the corresponding button click)
  for the command to be triggered,
  e.g. `["ctrl", "alt"]`.
  A list of all the modifier keys
  can be found in the keybindings section on [Modifiers][].

  [Modifiers]: https://docs.sublimetext.io/reference/key_bindings.html#modifiers

`count`
: The count of the button press.

  This defines the number of times the button has to be pressed
  for the corresponding `command` to trigger.
  Defaults to `1`.

`command`
: The `command` to execute.

  This defines the command to be executed
  when the corresponding button
  is **released**.

`args`
: The arguments for `command`.

  This is a mapping of arguments
  to be passed on to the `command`.

`press_command`
: The `press_command` to execute.

  This defines the command to be executed
  when the corresponding button is **pressed**.

`press_args`
: The arguments for `press_command`.

  This is a mapping of arguments
  to be passed on to the `press_command`.
