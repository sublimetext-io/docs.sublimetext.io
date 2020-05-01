---
title: Single File
---

## Searching

Keyboard shortcuts related to the search panel:

| Description                | Shortcut                    |
| -------------------------- | --------------------------- |
| **Open search panel**      | <Key k="Ctrl + F" />      |
| Toggle regular expressions | <Key k="Alt + R" />       |
| Toggle case sensitivity    | <Key k="Alt + C" />       |
| Toggle exact match         | <Key k="Alt + W" />       |
| Find next                  | <Key k="Enter" />         |
| Find previous              | <Key k="Shift + Enter" /> |
| Find all                   | <Key k="Alt + Enter" />   |


## Incremental Search

Keyboard shortcuts related to the incremental search panel:

| Description                       | Shortcut                    |
| --------------------------------- | --------------------------- |
| **Open incremental search panel** | <Key k="Ctrl + I" />      |
| Toggle regular expressions        | <Key k="Alt + R" />       |
| Toggle case sensitivity           | <Key k="Alt + C" />       |
| Toggle exact match                | <Key k="Alt + W" />       |
| Find next                         | <Key k="Enter" />         |
| Find previous                     | <Key k="Shift + Enter" /> |
| Find all                          | <Key k="Alt + Enter" />   |


The only difference between this panel
and the regular search panel
lies in the behavior of the <Key k="Enter" /> key.
In incremental searches,
it will select the next match in the file
and dismiss the search panel for you.
Choosing between this panel or the regular search panel
is a matter of preference.


## Replacing Text

Keyboard shortcuts related to the replace panel:


| Description            | Shortcut                         |
| ---------------------- | -------------------------------- |
| **Open replace panel** | <Key k="Ctrl + H" />           |
| Replace next           | <Key k="Ctrl + Shift + H" />   |
| Replace all            | <Key k="Ctrl + Alt + Enter" /> |


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
| Search forward using most recent pattern     | <Key k="F3" />         |
| Search backwards using most recent pattern   | <Key k="Shift + F3" /> |
| Select all matches using most recent pattern | <Key k="Alt + F3" />   |

You can also perform searches
based on the current selection:

| Description                     | Shortcut                       |
| ------------------------------- | ------------------------------ |
| Search using current selection  | <Key k="Ctrl + E" />         |
| Replace using current selection | <Key k="Ctrl + Shift + E" /> |


### Multiline Search

You can type in multiline search patterns
into search panels.
To enter newline characters,
press <Key k="Ctrl + Enter" />.

![Mutiline Replace](../images/2_3-search-replace-multi-line.png)

Note that search panels are resizable too.
