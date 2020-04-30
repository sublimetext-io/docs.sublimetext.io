---
title: Plugins
---

<!-- TODO merge into guide section -->

::: seealso
[API Reference](../reference/python_api.md)
: More information on the Python API.
:::


Plugins are Python scripts
subclassing any of the `*Command` or `*Listener` classes
from the `sublime_plugin` module.


## Where to Store Plugins

Sublime Text will look for plugins in these places:

* `Packages`
* `Packages/<pkg_name>`
* `.sublime-package` files

Plugin files nested deeper in `Packages` won't be loaded.

All plugins should live inside a folder of their own and not directly
under `Packages`. This will spare you confusions when Sublime Text attempts
to sort packages for loading.


## Conventions for Command Names

By convention, Sublime Text command class names are suffixed with `Command`
and written as `NamesLikeThisCommand`.

However, command names are automatically transformed from `NamesLikeThisCommand`
to `name_like_this`. Thus, `ExampleCommand` would become `example`,
and `AnotherExampleCommand` would become `another_example`.

In names for classes defining commands, use `NameLikeThisCommand`. To call a
command from the API, use the standardized `name_like_this`.


## Types of Commands

* `sublime_plugin.ApplicationCommand`
* `sublime_plugin.WindowCommand`
* `sublime_plugin.TextCommand`

Instances of `WindowCommand` have a `.window` attribute pointing to the
window instance that created them. Similarly, instances of `TextCommand`
have a `.view` attribute.
`ApplicationCommand` instances don't have either.

### Shared Traits for Commands

All commands must implement a `.run()` method.

All commands may additionally provide methods to change their
visibility,
enabled state,
default caption in menus,
or even their name (discouraged).

<!-- TODO want_event -->

## How to Call Commands from the API

Depending on the type of command, use a reference to a `View` or a `Window`
and call `<object>.run_command('command_name')`. In addition to the command's
name, `.run_command` accepts a dictionary whose keys are the names of valid
parameters for said command:

```python
window.run_command("echo", {"Tempus": "Irreparabile", "Fugit": "."})
```

All user-provided arguments to commands must JSON-serializable.
This includes strings, integers, floats, booleans, `None`,
and the recursive list and dict types.
Mapping keys must be strings.


## Text Commands and the `edit` Object

Text commands receive an `edit` object passed to them by Sublime Text.

All actions done within an `edit` are grouped as a single undo action.
Callbacks such as `on_modified()` and `on_selection_modified()` are called
when the most outer edit operation is finished.

The `edit` object's life time is solely managed by Sublime Text internally.
Plugin authors must ensure 
to perform all editing operations 
within the `run()` method of text commands 
so that macros and repeating commands work as expected.


## Responding to Events

Any subclass of `EventListener` will be able to respond to events. You cannot
make a class derive both from `EventListener` and from any other type of
command.

::: warning
Expensive operations in event listeners can cause Sublime Text to become
unresponsive, especially in events triggered frequently, like
`on_modified()` and `on_selection_modified()`. Be careful of how much
work is done in these and don't implement events you don't need, even if
they just `pass`.
:::


## Sublime Text and the Python Standard Library

The most significant omission from the default distribution
is the `tkinter` module.
Otherwise, you can access the entire Python standard library
for the Python version Sublime Text ships with.


## Automatic Plugin Reload

Sublime Text will reload topmost Python modules as they change (perhaps
because you are editing a *.py* file within *Packages*). By contrast, Python
subpackages won't be reloaded automatically, and this can lead to confusion
while you're developing plugins. Generally speaking, it's best to restart
Sublime Text after you've made changes to plugin files, so all changes can take
effect.
