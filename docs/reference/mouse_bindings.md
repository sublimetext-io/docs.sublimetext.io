---
title: Mouse bindings
---

The mousemap files (which have the extension `.sublime-mousemap`)
control what commands are executed when a user performs an action
with a mouse e.g. clicking a mouse button, scrolling the scroll
wheel etc.


## File Format

Here is a small excerpt from `Default/Default (Windows).sublime-mousemap`.

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

The following are the keys that a single JSON entry 
in a mousemap file can take.

`button`
: The name of the button.

  This defines the name of the button.
  E.g. `button1` defines the left mouse button, `button2`
  defines the right mouse button etc.
  Similarly, if a command has to be executed when the scroll
  wheel scrolls, then we have `scroll_up` & `scroll_down`.

`modifiers`
: A list of modifier keys.

  This defines a list of modifiers keys that have to 
  be pressed simultaneously (along with the corresponding button click)
  for the command to be triggered. E.g. `["ctrl", "alt"]`.

`command`
: The `command` to execute.

  This defines the command to be executed when the corresponding
  button is **released after being pressed**.

`args`
: The arguments for `command`.

  This is a dictionary of arguments to be passed
  on to the `command`.

`press_command`
: The `press_command` to execute.

  This defines the command to be executed when the corresponding
  button is **pressed**. Note that this is different from `command`,
  in the sense that it is triggered when a user presses the corresponding 
  mouse button, while the former is executed when the user releases the 
  said button after it is pressed.

`press_args`
: The arguments for `press_command`.

  This is a dictionary of arguments to be passed
  on to the `press_command`.

`count`
: The count of the button press.

  This defines the number of times the button has to be pressed
  for the corresponding `command` to trigger.


::: warning
Mousemap files currently don't have the ability to define contexts 
like key bindings, hence it is not advisable to ship them with 
packages or plugins, since the lack of context means the shipped 
mousemap files, taking over the default mouse actions leading to 
undesirable behaviour. The issue is currently being tracked here
([#105](https://github.com/sublimehq/sublime_text/issues/105))
:::