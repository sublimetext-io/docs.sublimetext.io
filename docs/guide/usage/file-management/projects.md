---
title: Projects
---

Projects group sets of files and folders
to keep your work organized.
They support project-specific settings and build systems
and you can quickly switch between them
to continue working where you left off.

Adding folders to a project is necessary for
[Goto Anything](./navigation.md#goto-anything)
and project-wide Goto Definition.

There is always an active project,
even if you haven't created or opened one.
In this situation,
you are working with an *anonymous project*,
which has limited functionality.
New windows always use an anonymous project
when they first open.

Project metadata is stored in JSON files
with a `.sublime-project` extension.
Wherever there's a `.sublime-project` file,
you will find an ancillary `.sublime-workspace` file too.
The `.sublime-workspace` file contains session data
that you *should* never edit.
(More on workspaces later.)

::: tip Note
Generally speaking,
it's fine to commit `.sublime-project` files
to a source code repository,
but always be mindful of what you store in them.
:::


## Creating a Project

Start with an anonymous project
by opening a new window
or closing any active project
with the **Project → Close Project** menu.

You can add and remove folders to/from a project
using the **Project** menu
or the side bar's context menu.
If you drag a folder onto a Sublime Text window,
it will be added to the project too.

To save an anonymous project,
go to **Project → Save Project As...**.

After the project is saved,
you can edit it by hand
to adjust further options.


## Opening Projects

Using the main menu,
you can open or switch projects
by selecting **Project → Open Recent**,
**Project → Switch Project…**
or **Project → Quick Switch Project…**.

When switching projects,
Sublime Text will close the current project
and open the specified one in the same window,
When opening a project,
Sublime Text will open a new window
and open the selected project there.

Keyboard shortcuts related to projects:

| Description               | Shortcut       |
| ------------------------- | -------------- |
| **Quick Switch Project…** | Ctrl + Alt + P |

::: tip Note
The key binding was removed with build 3096 for Windows
and must be added manually,
if desired.
In order to do this,
add the following [key binding](../../customization/key_bindings.md)
to your user key bindings file:
:::

```json
{ "keys": ["ctrl+alt+p"], "command": "prompt_select_workspace" }
```

<!-- TODO remove mention of ctrl+alt+p entirely -->

Additionally,
you can open a project from the **command line**
by passing the `.sublime-project` file as an argument
to the `subl` command line helper
included with Sublime Text.


## Advanced Configuration for Project Files

Along with more options for individual directories,
projects can have specific build systems or settings overrides.

::: seealso
[Projects - Reference](/reference/projects.md)
: Documentation on project file format and options.
:::


## Settings Related to the Sidebar and Projects

`binary_file_patterns`
: A list of wildcards.
  Files matching these wildcards will show up in the side bar,
  but will be excluded from Goto Anything
  and Find in Files.

<!-- TODO: file_exlude_patterns and folder_exlude_patterns also exist -->
<!-- TODO: Add reference to setting or explain wildcards -->


## Workspaces

Workspaces hold session data
associated with a project,
which includes information
about the opened files, pane layout,
find history and more.
A project can have multiple workspaces.

A common use case for workspaces is
to work on different features
*within the same project*,
where each feature requires
a different set of files to be open,
and you want to switch between features quickly.
In this case you'll want to have
a second workspace available.
Writing tests could be an example for this.

Workspaces behave very much like projects.
To create a new workspace,
select **Project → New Workspace for Project**.
To save the active workspace,
select **Project → Save Workspace As...**.

The workspace metadata is stored in JSON files
with the `.sublime-workspace` extension,
which you are not supposed to edit.

To switch between different workspaces,
use <Key k="ctrl+alt+p" />,
exactly as you do with projects.

As with projects,
you can open a workspace
from the **command line**
by passing the desired `.sublime-workspace` file
as an argument to the `subl` command line helper
included with Sublime Text.

::: warning
Unlike `.sublime-project` files,
`.sublime-workspace` files
are not meant to be shared or edited manually.
**You should never commit** `.sublime-workspace` **files
into a source code repository.**
:::
