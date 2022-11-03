---
title: Editing
---

Sublime Text is brim-full of editing features. This topic just
scratches the surface of what's possible.

## Multiple Selections

Multiple selections let you make sweeping changes to your text efficiently.
Any praise about multiple selections is an understatement. This is why:

Select some text and press <Key k="ctrl+D" /> to **add more** instances. If
you want **to skip the current instance**, press <Key k="ctrl+k, ctrl+d" />.

If you go too far, press <Key k="ctrl+U" /> to **deselect** the current instance.


## Transforming Multiple Selections into Lines

<Key k="ctrl+l" /> expands the selections to the end of the line.
<Key k="ctrl+shift+l" /> splits the selections into lines.

You can copy multiple selected lines to a separate buffer, edit them there,
select the content again as multiple lines and then paste them back into
place in the first buffer.


## Column Selection

You can select a rectangular area of a file. Column selection makes use of
multiple selections.

It's possible to add blocks of text to or remove them from the selection.

### Using the Mouse

**Windows & Linux**

| Description           | Shortcut                                    |
| --------------------- | ------------------------------------------- |
| Select Block          | <Key k="shift" /> + Right Mouse Button      |
| Add to Selection      | <Key k="ctrl+shift" /> + Right Mouse Button |
| Remove from Selection | <Key k="alt+shift" /> + Right Mouse Button  |

**macOS**

| Description           | Shortcut                                             |
| --------------------- | ---------------------------------------------------- |
| Select Block          | <Key k="option" /> + Left Mouse Button               |
| Add to Selection      | <Key k="option+command" /> + Left Mouse Button       |
| Remove from Selection | <Key k="option+shift+command" /> + Left Mouse Button |


### Using the Keyboard


| System  | Shortcut                                                  |
| ------- | --------------------------------------------------------- |
| Windows | <Key k="ctrl+alt+up" /> and <Key k="ctrl+alt+down" />     |
| Linux   | <Key k="alt+shift+up" /> and <Key k="alt+shift+down" />   |
| macOS   | <Key k="ctrl+shift+up" /> and <Key k="ctrl+shift+down" /> |


## Other Ways of Selecting Text

The list is long; all available options can be found under **Selection**. To
name a few:

* Select subwords (<Key k="alt+shift+left" /> and <Key k="alt+shift+right" />)
* Expand selection to brackets (<Key k="ctrl+shift+m" />)
* Expand selection to indentation (<Key k="ctrl+shift+j" />)
* Expand selection to scope (<Key k="ctrl+shift+space" />)


## Transposing Things

Need to swap two letters or, better yet, two words? Experiment with
<Key k="ctrl+t" />.

## Arithmetic

Need to create a series of numbers? Try <Key k="ctrl+shift+p" /> and "Arithmetic".

Best used when having multiple selections.

| Expression         | Selection   | Result                         |
| ------------------ | ----------- | ------------------------------ |
| `1+i`              |             | 1, 2, 3, 4, 5, 6, 7, ...       |
| `30+(i%3)`         |             | 30, 31, 32, 30, 31, 32, ...    |
| `(x*2)+i`          | 10, 20, 30  | 20, 41, 62                     |
| `math.ceil(x)`     | 0.25, 2.25  | 1, 3                           |
| `len(s)`           | house, tree | 5, 4                           |
| `format(s, '^10')` | fish        | '&nbsp;&nbsp;&nbsp;fish&nbsp;&nbsp;&nbsp;' (centered string) |

You can use the following variables:

* `i` being the index of the selection
* `x` being the selected number
* `s` being the selected string

As you can see above you can even use a certain set of built-in python functions:

* [docs.python.org/3.8/library/math.html](https://docs.python.org/3.8/library/math.html)
* [docs.python.org/3.8/library/functions.html](https://docs.python.org/3.8/library/functions.html)
* [docs.python.org/3.8/library/string.html#formatspec](https://docs.python.org/3.8/library/string.html#formatspec)

## And much, much more...

The **Edit**, **Selection**, **Find** and **Goto** menus are good places to
look for handy editing tools. You might end up using just a few of them,
but the rest will still be there for when you need them.
