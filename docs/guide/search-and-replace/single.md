---
title: Single File
---

## Searching

Keyboard shortcuts related to the search panel:

| Description                | Shortcut                    |
| -------------------------- | --------------------------- |
| **Open search panel**      | <Key key="Ctrl + F" />      |
| Toggle regular expressions | <Key key="Alt + R" />       |
| Toggle case sensitivity    | <Key key="Alt + C" />       |
| Toggle exact match         | <Key key="Alt + W" />       |
| Find next                  | <Key key="Enter" />         |
| Find previous              | <Key key="Shift + Enter" /> |
| Find all                   | <Key key="Alt + Enter" />   |


## Incremental Search

Keyboard shortcuts related to the incremental search panel:

| Description                       | Shortcut                    |
| --------------------------------- | --------------------------- |
| **Open incremental search panel** | <Key key="Ctrl + I" />      |
| Toggle regular expressions        | <Key key="Alt + R" />       |
| Toggle case sensitivity           | <Key key="Alt + C" />       |
| Toggle exact match                | <Key key="Alt + W" />       |
| Find next                         | <Key key="Enter" />         |
| Find previous                     | <Key key="Shift + Enter" /> |
| Find all                          | <Key key="Alt + Enter" />   |


The only difference between this panel
and the regular search panel
lies in the behavior of the <Key key="Enter" /> key.
In incremental searches,
it will select the next match in the file
and dismiss the search panel for you.
Choosing between this panel or the regular search panel
is a matter of preference.


## Replacing Text

Keyboard shortcuts related to the replace panel:


| Description            | Shortcut                         |
| ---------------------- | -------------------------------- |
| **Open replace panel** | <Key key="Ctrl + H" />           |
| Replace next           | <Key key="Ctrl + Shift + H" />   |
| Replace all            | <Key key="Ctrl + Alt + Enter" /> |


## Tips

### Other Ways of Searching in Files

[Goto Anything](../file-management/navigation.md#goto-anything)
provides the `#` operator
to search in the filtered file.


### Other Search-Related Key Bindings

These key bindings work
when the search panel is hidden:

| Description                                  | Shortcut                 |
| -------------------------------------------- | ------------------------ |
| Search forward using most recent pattern     | <Key key="F3" />         |
| Search backwards using most recent pattern   | <Key key="Shift + F3" /> |
| Select all matches using most recent pattern | <Key key="Alt + F3" />   |

You can also perform searches
based on the current selection:

| Description                     | Shortcut                       |
| ------------------------------- | ------------------------------ |
| Search using current selection  | <Key key="Ctrl + E" />         |
| Replace using current selection | <Key key="Ctrl + Shift + E" /> |


### Multiline Search

You can type in multiline search patterns
into search panels.
To enter newline characters,
press <Key key="Ctrl + Enter" />.

![Mutiline Replace](../images/2_3-search-replace-multi-line.png)

Note that search panels are resizable too.
