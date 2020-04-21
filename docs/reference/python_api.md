---
title: Python API
---

::: seealso
[Official API Documentation](https://www.sublimetext.com/docs/3/api_reference.html)
:::

The official documentation covers the majority of the available API.
This document only serves as an addition to that.


## Exploring the API

A quick way to see the API in action:

1. Launch the **View Package File** command
   from the command palette.
1. Insert and filter for `Default/.py`
   and choose one of the default plugins
   to view their source code.

You can not directly edit these files
and should not under normal conditions,
but they serve as a good reference
for the API in usage.

Of course, you may also refer to the source code
of any open-source third-party plugin.


## Missing in the official docs

There are a few things
that are not (yet) documented in the official documentation.
A list of undocumented functions or inconsistencies in the documentation
has been collected in a [GitHub issue][documentation-bugs].

[documentation-bugs]: https://github.com/sublimehq/sublime_text/issues/2290


Following are a few methods (read: one)
that we have written our own documentation for.


### Window.set_layout

Signature
: `Window.set_layout(layout: dict)`

Changes the tile-based panel layout of view groups.
Returns `None`.

Expects a dictionary like this::

```py
{"cols": [float], "rows": [float], "cells": [[int]]}
```

where `[type]` represents a list of *type*.

**cols**
: A list of the column separators (floating point numbers), should
  start with `0` (left) and end with `1` (right).

**rows**
: A list of the row separators (floating point numbers), should start
  with `0` (top) and end with `1` (bottom).

**cells**
: A list of cell lists which describe a cell's boundaries each. Cells
  can be imagines as rectangles with the rows and cols specified along
  in this dictionary. Think like this:

  ```
  [x1, y1, x2, y2]
  ```

  where all values are integers respectively and map to the *cols* and
  *rows* indices. Thus, a cell with `[0, 0, 1, 2]` translates to a
  cell from the top left to the first column and the second row
  separator (in a 2x2 grid this would be bottom center).

::: tip Note
**rows** and **cols** are not tested for boundaries and they are not
adjusted either. Thus, it is possible to specify values lower than
`0` or higher than `1` and Sublime Text will in fact treat them
accordingly. That means you can crop views or create borders. It is
not known whether the "background color" of these empty spaces can
be modified, the default is black. Use at your own risk!

The order of column or row separators is not checked either. If you,
for example, use a reversed column list like `[1, 0.5, 0]` you
get to see two black panels. Sublime Text is unusable in this state.
:::

#### Examples

```py
# A 2-column layout with a separator in the middle
window.set_layout({
    "cols": [0, 0.5, 1],
    "rows": [0, 1],
    "cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
})

# A 2x2 grid layout with all separators in the middle
window.set_layout({
    "cols": [0, 0.5, 1],
    "rows": [0, 0.5, 1],
    "cells": [[0, 0, 1, 1], [1, 0, 2, 1],
              [0, 1, 1, 2], [1, 1, 2, 2]]
})

# A 2-column layout with the separator in the middle and the right
# column being split in half
window.set_layout({
    "cols": [0, 0.5, 1],
    "rows": [0, 0.5, 1],
    "cells": [[0, 0, 1, 2], [1, 0, 2, 1],
                            [1, 1, 2, 2]]
})
```
