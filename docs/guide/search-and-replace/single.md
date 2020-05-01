---
title: Single File
---

## Searching

Keyboard shortcuts related to the search panel:

| Description                | Shortcut                |
| -------------------------- | ----------------------- |
| **Open search panel**      | <Key k="ctrl+f" />      |
| Toggle regular expressions | <Key k="alt+r" />       |
| Toggle case sensitivity    | <Key k="alt+c" />       |
| Toggle exact match         | <Key k="alt+w" />       |
| Find next                  | <Key k="enter" />       |
| Find previous              | <Key k="shift+enter" /> |
| Find all                   | <Key k="alt+enter" />   |


## Incremental Search

Keyboard shortcuts related to the incremental search panel:

| Description                       | Shortcut                |
| --------------------------------- | ----------------------- |
| **Open incremental search panel** | <Key k="ctrl+i" />      |
| Toggle regular expressions        | <Key k="alt+r" />       |
| Toggle case sensitivity           | <Key k="alt+c" />       |
| Toggle exact match                | <Key k="alt+w" />       |
| Find next                         | <Key k="enter" />       |
| Find previous                     | <Key k="shift+enter" /> |
| Find all                          | <Key k="alt+enter" />   |


The only difference between this panel
and the regular search panel
lies in the behavior of the <Key k="enter" /> key.
In incremental searches,
it will select the next match in the file
and dismiss the search panel for you.
Choosing between this panel or the regular search panel
is a matter of preference.


## Replacing Text

Keyboard shortcuts related to the replace panel:


| Description            | Shortcut                   |
| ---------------------- | -------------------------- |
| **Open replace panel** | <Key k="ctrl+h" />         |
| Replace next           | <Key k="ctrl+shift+h" />   |
| Replace all            | <Key k="ctrl+alt+enter" /> |


## Tips

### Other Ways of Searching in Files

[Goto Anything](../file-management/navigation.md#goto-anything)
provides the `#` operator
to search in the filtered file.


### Other Search-Related Key Bindings

These key bindings work
when the search panel is hidden:

| Description                                  | Shortcut             |
| -------------------------------------------- | -------------------- |
| Search forward using most recent pattern     | <Key k="f3" />       |
| Search backwards using most recent pattern   | <Key k="shift+f3" /> |
| Select all matches using most recent pattern | <Key k="alt+f3" />   |

You can also perform searches
based on the current selection:

| Description                     | Shortcut                 |
| ------------------------------- | ------------------------ |
| Search using current selection  | <Key k="ctrl+e" />       |
| Replace using current selection | <Key k="ctrl+shift+e" /> |


### Multiline Search

You can type in multiline search patterns
into search panels.
To enter newline characters,
press <Key k="ctrl+enter" />.

![Mutiline Replace](../images/2_3-search-replace-multi-line.png)

Note that search panels are resizable too.
