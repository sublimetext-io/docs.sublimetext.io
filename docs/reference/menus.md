---
title: Menus
---

::: seealso
[Documentation on menus][menu-guide]
: Explains how menus work and what you can do with them.
:::


## File Format

| Format        | Description                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Format**    | JSON (with comments)                                                                                                     |
| **Extension** | `.sublime-menu`                                                                                                          |
| **Name**      | One out of the list of available menus. See [Available Menus][] for the complete name list and what menu they represent. |
| **Location**  | Any under `Packages`                                                                                                     |
| **Content**   | A list of [*Menu Item* objects](#menu-item-objects)                                                                      |

[Available Menus]: /guide/customization/menus.md#available-menus

### Example

The following is an excerpt
from the default `Main.sublime-menu` file.

```json
[
    {
        "caption": "Edit",
        "mnemonic": "E",
        "id": "edit",
        "children":
        [
            { "command": "undo", "mnemonic": "U" },
            { "command": "redo_or_repeat", "mnemonic": "R" },
            {
                "caption": "Undo Selection",
                "children":
                [
                    { "command": "soft_undo" },
                    { "command": "soft_redo" }
                ]
            },
            { "caption": "-", "id": "clipboard" },
            { "command": "copy", "mnemonic": "C" },
            { "command": "cut", "mnemonic": "t" },
            { "command": "paste", "mnemonic": "P" },
            { "command": "paste_and_indent", "mnemonic": "I" },
            { "command": "paste_from_history", "caption": "Paste from History" }
        ]
    }
]
```


## *Menu Item* Objects

[Menu items][] may have the following properties.

[Menu items]: /guide/customization/menus.md#menu-items

Unless you are referencing an existing item via ID,
each menu item must define either
`children`, `command` or `caption`.

`command`
: Name of the command to be called
  when the menu item is selected.

`args`
: Object of arguments to the command.
  For **Side Bar** and **Side Bar Mount Point** menus,
  this is extended by a `files` argument
  that contains all selected items in the sidebar as a list.

`caption`
: Text to be displayed in the menu.
  A single hyphen (`-`) turns the item
  into a [Menu Separator][].

`children`
: List of [*Menu Item* objects](#menu-item-objects) that are displayed
  when the item is hovered.
  Overrides existence of `command` property.

`mnemonic`
: A single character used for menu accelerators.
  The character must be contained in the caption
  and is case-sensitive.

`id`
: A unique string identifier for the menu item.
  This can be used to extend menu sections or sub-menu
  or to alter a menu item entirely.

  Refer to the [main documentation][item-ids] on how this works.

[menu-guide]: /guide/customization/menus.md
[Menu Separator]: /guide/customization/menus.md#separators
[item-ids]: /guide/customization/menus.md#item-ids
