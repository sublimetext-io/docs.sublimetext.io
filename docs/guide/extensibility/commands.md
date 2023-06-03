---
title: Commands
---

Commands are ubiquitous in Sublime Text: key bindings, menu items and
macros all work through the command system. They are found in other
places too.

Some commands are implemented in the editor's core, but many of them are
provided as Python plugins. Every command can be called from a Python
plugin.

## Command Dispatching

Normally, commands are bound to the application object, a window object
or a view object. Window objects, however, will dispatch commands based
on input focus, so you can issue a view command from a window object and
the correct view instance will be found for you.

## Anatomy of a Command

Commands have a name separated by underscores (snake_case) like
`hot_exit`, and can take a dictionary of arguments whose keys must be
strings and whose values must be JSON types. Here are a few examples of
commands run from the Python console:

```py
view.run_command("goto_line", {"line": 10})
view.run_command('insert_snippet', {"contents": "<$SELECTION>"})
view.window().run_command("prompt_select_project")
```

## From command line (CLI)

Commands may be passed to Sublime Text directly from the command line
of the operating system. Usage:

```bash
subl --command 'show_overlay {"overlay": "command_palette", "text": "hello"}'
# on Windows:
sublime-text.exe --command "show_overlay {\"overlay\": \"command_palette\", \"text\": \"hello\"}"
```

::: seealso
[Reference for commands](/reference/commands)
:::
