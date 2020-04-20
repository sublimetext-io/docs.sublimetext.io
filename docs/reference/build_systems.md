---
title: Build Systems
---
::: warning Warning
Build system selection is currently
undergoing a rework in the dev channel.
The following information may be outdated.

See [this forum thread][] for details.
:::

[this forum thread]: https://forum.sublimetext.com/t/build-systems/14435

Using build systems, you can run files
through external programs
without leaving Sublime Text,
and see the output they generate.

- [Basics](#basics)
- [Configuration](#configuration)
- [exec Command Arguments](#exec-command-arguments)
- [Troubleshooting](#troubleshooting-build-systems)

## Basics

You can use build systems
to run files through external programs
and see any generated output,
all without leaving Sublime Text.

::: tip Note
We use the term *build* in a broad sense.
A build system doesn't need to generate
a compiled executable---it could simply
format code, run an interpreter, etc.
:::


###  Parts of a Build System

Simple build systems
only require a `.sublime-build` file.
More advanced build systems
may optionally consist of up to three parts:

* a `.sublime-build` file (configuration data in JSON format);
* optionally, a custom Sublime Text command (Python code) driving the build process;
* optionally, an external executable file (script or binary file).


### `.sublime-build` Files

A `.sublime-build` file
contains configuration data
as a JSON object
and specifies
switches, options and environmental data.
Each `.sublime-build` file
is normally associated
with a specific scope
corresponding to a file type
(for example, `source.python`).

The file name represents
the name of the build system
and will be displayed
whenever you can select a build system.


#####  Example

```javascript
{
    "cmd": ["python", "-u", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.python"
}
```


#####  The Sublime Text Command Used in A Build System

When you run
the default build task in Sublime Text
(=`Ctrl+B`),
a Sublime Text command receives
the configuration data
specified in the `.sublime-build` file.
This command then *builds* the files.
Often, it calls
an external program.
By default, the command
used in build systems is `exec`,
but it can be overridden.


####  Overriding the Default Command for Build Systems

By default, build systems use
the `exec` command implemented by `{Packages}/Default/exec.py`.
This command simply forwards configuration data
to an external program
and runs it asynchronously.

Using the `target` option
in a `.build-system` file,
it's possible to override
the `exec` command.
See [Target Command Arguments][] for details.

[Target Command Arguments]: ./configuration#uild-arbitrary-options

#####  Calling External Programs

A build system may call
an external program
to process files.
The external program may be
a custom shell script,
a standard utility like `make` or `tidy`, etc.
Usually, the external program
receives paths to files or directories,
along with switches and options
that configure its behavior.

::: tip Note
Build systems can but don't need to
call external programs---a build system
could be implemented entirely
as a Sublime Text command.
:::

## Configuration
###  Overview

The build system framework in Sublime Text
tries to be flexible enough to accommodate
a large number of build scenarios.

Should the default configuration options
fall short for your needs,
you can implement your own build system
mechanism in two main ways:

- as a custom `target` command
  (still using the default build system framework)
- as an entirely new plugin
  (skipping the build system framework)


###  Meta Options in Build Systems

This is a list of standard options
that all build systems understand.
These options are used internally
by Sublime Text.
The `target` command does not
receive any of these options.

.. _bs-target-option:

`target` *(optional)*
    A Sublime Text `WindowCommand`.
    Defaults to `exec` (:file:`Packages/Default/exec.py`).
    This command receives
    all the :ref:`target command arguments <build-arbitrary-options>` specified
    in the `.sublime-build` file (as `**kwargs`).

    Used to override the default build system command.
    Note that
    if you choose
    to override the default command
    for build systems,
    you can add any number of extra options
    to the `.sublime-build` file.

`selector` *(optional)*
    Used when **Tools | Build System | Automatic**
    is set to `true`.
    Sublime Text uses this scope selector
    to find the appropriate build system
    for the active view.

`windows`, `osx` and `linux` *(optional)*
    Used to selectively apply options by OS.
    OS-specific values override defaults.
    Each of the listed items
    accepts a dictionary of options.

    See `Platform-specific Options`_.

`variants` *(optional)*
    A list of dictionaries of options.
    Variant names will appear in the Command Palette
    for easy access if the build system's selector
    matches for the active file.

    Using variants it's possible
    to specify multiple build system tasks
    in the same `.sublime-build` file.

    See Variants_.

`name` *(optional in standalone build systems; mandatory in project build systems)*
    **Only valid inside a variant or inside a project build system.**.

    Identifies a build system task.
    If the `name` is 'Run',
    the variant will show up
    under **Tools | Build System**.
    Sublime Text will automatically
    bind the 'Run' task to :kbd:`Ctrl+Shift+B`.

    See Variants_.


.. _build-arbitrary-options:

#####  Target Command Arguments

Thanks to the `target` setting,
which overrides the default `exec` command
with any other command of your choice,
a build system may contain
any number of custom arguments
that the new `target` command accepts.

See the :ref:`target<bs-target-option>` option.


Platform-specific Options
*************************

The `windows`, `osx` and `linux` elements
let you provide platform-specific data
in the build system.
Here's an example:

```json
{
    "cmd": ["ant"],
    "file_regex": "^ *\\[javac\\] (.+):([0-9]+):() (.*)$",
    "working_dir": "${project_path:${folder}}",
    "selector": "source.java",

    "windows": {
        "cmd": ["ant.bat"]
    }
}
```

In this case, `ant` will be executed
for every platform except Windows,
where ``ant.bat`` will be used instead.


#####  Variants

Here's a contrived example
of a build system with variants:

```json
{
    "selector": "source.python",
    "cmd": ["date"],

    "variants": [

        { "name": "List Python Files",
          "cmd": ["ls -l *.py"],
          "shell": true
        },

        { "name": "Word Count (current file)",
          "cmd": ["wc", "$file"]
        },

        { "name": "Run",
          "cmd": ["python", "-u", "$file"]
        }
    ]
}
```


Given these settings,
<kbd>Ctrl+B</kbd> would run the *date* command,
<kbd>Crtl+Shift+B</kbd> would run the Python interpreter
and the remaining variants would appear
in the [Command Palette][]
as `Build: {name}` whenever the build system was active.

[Command Palette]: ../guide/extensibility/commpand_palette

###  Capturing Build System Results

When build systems output text
to a results view,
it's possible to capture
*results data* in order to enable
result navigation.

::: tip Note
*Results* can also mean *errors*.
Often, build systems produce
error data.
:::

Set the following **view settings**
in a results view
if you want to enable results navigation:

`result_file_regex`
    A Perl-style regular expression
    to capture up to four fields of error information
    from a results view, namely:
    *filename*, *line number*, *column number* and *error message*.
    Use groups in the pattern
    to capture this information.
    The *filename* field and
    the *line number* field are required.

`result_line_regex`
    If `result_file_regex` doesn't match
    but `result_line_regex` exists
    and does match on the current line,
    walk backwards through the buffer
    until a line matching `result_file_regex` is found,
    and use the two matches
    to determine the file and line to go to.

`result_base_dir`
    Used to find files where results occur.

When result data is captured,
you can navigate to results
in your project's files with <kbd>F4</kbd> and <kbd>Shift+F4</kbd>.
If available, the captured *error message*
will be displayed in the status bar.


.. _build-system-variables:

###  Build System Variables

Build systems expand the following variables
in `.sublime-build` files:

| Variable             | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| `$file_path`         | The directory of the current file, e.g., *C:\\Files*.               |
| `$file`              | The full path to the current file, e.g., *C:\\Files\\Chapter1.txt*. |
| `$file_name`         | The name portion of the current file, e.g., *Chapter1.txt*.         |
| `$file_extension`    | The extension portion of the current file, e.g., *txt*.             |
| `$file_base_name`    | The name-only portion of the current file, e.g., *Document*.        |
| `$folder`            | The path to the first folder opened in the current project.         |
| `$project`           | The full path to the current project file.                          |
| `$project_path`      | The directory of the current project file.                          |
| `$project_name`      | The name portion of the current project file.                       |
| `$project_extension` | The extension portion of the current project file.                  |
| `$project_base_name` | The name-only portion of the current project file.                  |
| `$packages`          | The full path to the *Packages* folder.                             |


::: tip Note
Expansion is currently applied only
to the following keys in the :file:`.sublime-build` file:
`cmd`, `shell_cmd`, and `working_dir`.
:::


#####  Placeholders for Variables

Features found in snippets
can be used with these variables.
For example::

    ${project_name:Default}

This will emit the name of the current project
if there is one, otherwise `Default`.

```
${file/\.php/\.txt/}
```

This will emit
the full path of the current file,
replacing *.php* with *.txt*.

::: tip See Also
[Snippets](../extensibility/snippets)
: Documentation on snippet variables.
:::


###  Running Build Systems

Select the desired build system
from **Tools | Build System**,
and then select **Tools | Build**.
Alternatively, you can use
the command palette or
the following key bindings:


| Shortcut                | Description               |
| ----------------------- | ------------------------- |
| <kbd>Ctrl+B</kbd>       | Run default build task    |
| <kbd>F7</kbd>           | Run default build task    |
| <kbd>Ctrl+Shift+B</kbd> | Run ‘Run’ build task      |
| <kbd>Ctrl+Break</kbd>   | Cancel running build task |

See `Variants`_.

## `exec` Command Arguments

All the options that follow
are related to the `exec` command
(see also :ref:`Exec Command Reference <cmd-exec>`).
If you change the `target` command,
these options can no longer be relied on
(see [Target Command Arguments](#build-arbitrary-options) for details).

`cmd`
    Required if `shell_cmd` is empty.
    Overriden by `shell_cmd`.
    Array containing the command to run and its desired arguments. If you don't specify an absolute path, the external program will be searched in your **`PATH`**. Ultimately, `subprocess.Popen(cmd)` is called.
    On Windows, GUIs are supressed.

`shell_cmd`
Required if `cmd` is empty.

Overrides `cmd` if used.

A string that specifies
the command to be run
and its arguments.
Ultimately, `subprocess.Popen(shell_cmd, shell=True)` is called.

It should help in getting right
invocations involving complex uses
of quotation marks.

`working_dir`
Optional.

Directory to change
the current directory to
before running `cmd`.
The original current directory
is restored afterwards.

`encoding`
Optional.

Output encoding of `cmd`.
Must be a valid Python encoding.
Defaults to `UTF-8`.

`env`
Optional.

Dictionary of environment variables
to be merged with the current process'
before passing them to `cmd`.

Use this option, for example,
to add or modify environment variables
without modifying your system's settings.

Environmental variables
will be expanded.

`shell`
Optional.

If *true*, `cmd`
will be run through the shell
(`cmd.exe`, `bash`...).

If `shell_cmd` is used,
this option has no effect.

`path`
Optional.

**`PATH`** used
by the `cmd` subprocess.

Use this option
to add directories to **`PATH`**
without having to modify
your system's settings.

Environmental variables
will be expandend.

`file_regex`
Optional.

Sets the `result_file_regex`
for the results view.

See [Capturing Error Output][]
for details.

`line_regex`
Optional.

Sets the `result_line_regex`
for the results view.

See [Capturing Error Output][]
for details.

`syntax`
Optional.

If provided,
it will be used to colorize
the build system's output.

[Capturing Error Output]: #capturing-build-system-results

## Troubleshooting Build Systems

Build systems will look for executables
in your **`PATH`**.
Therefore, your **`PATH`**
variable must be correctly set.

On some operating systems,
the value of **`PATH`**
may vary between terminal windows
and graphical applications.
Thus, depending on
how you start Sublime Text,
the build system may or may not work.

To solve this issue,
make sure you set the **`PATH`**
so that graphical applications such as Sublime Text
can find it.
See the links below
for more information.

Alternatively, you can use the `path` option
in a `.sublime-build` file
to override the **`PATH`** used to locate
the executable specified in `cmd`.

::: tip See Also
[Managing Environment Variables in Windows](https://www.microsoft.com/en-US/search/result.aspx?q=environment+variable+path+windows&)
: Search Microsoft knowledge base for this topic.

[Setting Environment Variables in OSX](https://stackoverflow.com/q/135688/1670) 
: StackOverflow topic.
:::