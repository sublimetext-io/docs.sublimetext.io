---
title: Command Palette
---

The command palette is fed entries with `.sublime-commands` files.


## File Format

Here's an excerpt from `Packages/Default/Default.sublime-commands`:

```json
[
    { "caption": "Project: Save As", "command": "save_project_and_workspace_as" },
    { "caption": "Project: Close", "command": "close_workspace" },
    { "caption": "Project: Add Folder", "command": "prompt_add_folder" },

    {
        "caption": "Preferences: Settings",
        "command": "edit_settings", "args":
        {
            "base_file": "${packages}/Default/Preferences.sublime-settings",
            "default": "// Settings in here override those in \"Default/Preferences.sublime-settings\",\n// and are overridden in turn by syntax-specific settings.\n{\n\t$0\n}\n"
        }
    },

    { "caption": "Preferences: Browse Packages", "command": "open_dir", "args": {"dir": "$packages"} },

    { "caption": "Permute Lines: Reverse", "command": "permute_lines", "args": {"operation": "reverse"} },
    { "caption": "Permute Lines: Unique", "command": "permute_lines", "args": {"operation": "unique"} },
    { "caption": "Permute Lines: Shuffle", "command": "permute_lines", "args": {"operation": "shuffle"} },
]
```

`caption`
: Text for display in the command palette.

`command`
: Command to be executed.

`args`
: Arguments to pass to `command`. 

  Note that the special snippet-like variable `${packages}`
  is only interpreted by certain :command:commands:.


## How to Use the Command Palette

1. Press <kbd>Ctrl+Shift+P</kbd>
1. Select command

Entries are filtered by current context. Not all entries will be visible at all
times.
