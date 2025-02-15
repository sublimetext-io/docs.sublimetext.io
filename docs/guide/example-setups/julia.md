# How to use Sublime for Julia

::: tip Note
This guide was written by a Windows user,
that uses the Windows Subsystem for Linux to run Julia.

Adapted from https://github.com/PetrKryslUCSD/HowToUseJuliaWithSublimeText3.
:::

This guide will help you have
source code on the left
and a terminal running Julia REPL on the right.
The terminal will be running inside Sublime
and you will have commands
that send code under your cursor
or the whole file
to the REPL.

## Installation

### Install Julia syntax highlighting

Install the [Julia][] package,
using <Term term=package_control />.
(See [Installing Packages][] for more details.)
At this point you should be able to open a Julia source file
and get it highlighted based upon the syntax of Julia.

[Julia]: https://packagecontrol.io/packages/Julia
[Installing Packages]: /guide/extensibility/packages.md#installing-packages

### Install the Terminus and SendCode packages

As before,
use <Term term=package_control /> to install
the terminal emulation package [Terminus][],
and the package to enable communication between a source window
and the terminal, [SendCode][].

[Terminus]: https://github.com/randy3k/Terminus
[SendCode]: https://github.com/randy3k/SendCode

## Customization

### Key bindings

The following [key bindings][] will help you getting started.
Those key-bindings are made for Windows / Linux,
and have been chosen to avoid conflicts.
Don't hesitate to adapt those key-bindings to something simpler.

[key bindings]: /guide/customization/key_bindings.md

From the <Term term=command_palette />, select **Preferences: Key bindings**.
This will open a new window with the file `Default (Windows).sublime-keymap`,
shown in the window on the right.
Insert the key bindindings below into it:

<details>

<summary>User/Default (Windows).sublime-keymap</summary>

```jsonc
[
    // This key binding gives me access to code evaluation. A current line,
    // or a selection is passed to the terminal for evaluation
    // (the command belongs to the SendCode package).
    {
        "keys": ["ctrl+keypad_enter"], "command": "send_code",
        "context": [
            { "key": "selector", "operator": "equal", "operand": "source" }
        ]
    },
    // Send code to change the working folder to that holding the current Julia file
    {
        "keys": ["ctrl+shift+x", "ctrl+f"], "command": "send_code",
        "args": {"cmd": "cd(\"$file_path\")"},
        "context": [
            { "key": "selector", "operator": "equal", "operand": "source.julia" }
        ]
    },
    // Send code to display help information.
    {
        "keys": ["ctrl+shift+x", "ctrl+h"], "command": "send_code",
        "args": {"cmd": "REPL.@repl $selection"},
        "context": [
            { "key": "selector", "operator": "equal", "operand": "source.julia" }
        ]
    },
    // Send code to display help information.
    {
        "keys": ["ctrl+shift+x", "ctrl+alt+h"], "command": "send_code",
        "args": {"cmd": "?$selection"},
        "context": [
            { "key": "selector", "operator": "equal", "operand": "source.julia" }
        ]
    },

    // By default in Terminus the ctrl key sends escape code to the terminal.
    // This can be disturbing if you're use to ctrl+c/ctrl+v for copy/paste
    // To make the copy and paste keys work in the Terminus window
    // (otherwise they are ctrl+shift+c, ctrl+shift+v)
    // This is not needed on MacOS.
    { "keys": ["ctrl+c"], "command": "terminus_copy",
        "context": [
            { "key": "terminus_view" },
            { "key": "terminus_view.natural_keyboard" },
            { "key": "selection_empty", "operator": "equal", "operand": false, "match_all": true }
        ]
    },
    { "keys": ["ctrl+v"], "command": "terminus_paste",
        "context": [
            { "key": "terminus_view" },
            { "key": "terminus_view.natural_keyboard" }
        ]
    },
    // Same thing with the "go to anything".
    {
        "keys": ["ctrl+p"],
        "command": "show_overlay",
        "args": {"overlay": "goto", "show_files": true},
        "context": [
            { "key": "terminus_view" },
        ]
    },
]
```

</details>

### Customization of the Terminus package

In the file `User/Terminus.sublime-settings`,
customize your favorite shell.
In this guide,
we use the Ubuntu 18.04 Login Shell
of the Windows Subsystem for Linux.
Set it to be the default shell to be started by Terminus:


<details>

<summary>User/Terminus.sublime-settings</summary>

```jsonc
{
    // a list of available shells to execute
    // the shell marked as "default" will be the default shell
    "shell_configs": [
        {
            "name": "Command Prompt",
            "cmd": "bash.exe",
            "env": {},
            "enable": true,
            "default": true,
            "platforms": ["windows"]
        },
        {
            "name": "Ubuntu 18.04 Login Shell",
            "cmd": "C:\\Program Files\\WindowsApps\\CanonicalGroupLimited.UbuntuonWindows_1804.2019.521.0_x64__79rhkp1fndgsc\\ubuntu.exe",
            "env": {},
            "enable": true,
            "default": false,
            "platforms": ["windows"]
        },
        {
            "name": "Bash",
            "cmd": ["bash", "-i", "-l"],
            "env": {},
            "enable": true,
            "default": false,
            "platforms": ["linux", "osx"]
        },
        {
            "name": "Zsh",
            "cmd": ["zsh", "-i", "-l"],
            "env": {},
            "enable": true,
            "default": false,
            "platforms": ["linux", "osx"]
        }
    ],
}
```

</details>

### Customization of the SendCode package

I make sure Julia code is sent to a **Terminus** terminal.
Select *Preferences → Package Settings → SendCode → Settings*.
Paste the below config into this file.

```json
{
    "prog": "terminus",

    "julia" : {
        "prog": "terminus",
        "bracketed_paste_mode": false
    }

}
```

There also needs to be a file
`Packages\SendCode\support\Julia - Source File.sublime-build`
with the command to "build" a Julia file by running it in the REPL.
```
{
    "target": "send_code_build",
    "cmd": "include(\"${file_name}\");",
    "selector": "source.julia"
}
```

### Command to start Julia REPL

In order to be able to open a Julia REPL
from a Julia source file opened in the editor,
I define the following <Term term=command_palette /> bindings:


<details>

<summary>User/Default.sublime-commands</summary>

```jsonc
[
    {
        "caption": "Terminus: Open Julia Stable",
        "command": "terminus_open",
        "args"   : {
            "shell_cmd": "%LOCALAPPDATA%\\Programs\\Julia\\Julia-1.4.1\\bin\\julia.exe",
            "cwd": "${file_path:${folder}}",
            "title": "Julia REPL",
            "pre_window_hooks": [
                ["focus_group", {"group": 1}]
            ],
            "env": {"JULIA_NUM_THREADS":"4"},
        }
    },
    {
        "caption": "Terminus: Open Julia Nightly",
        "command": "terminus_open",
        "args"   : {
            "shell_cmd": "%LOCALAPPDATA%\\Programs\\\"Julia 1.5.0-DEV\"\\bin\\julia.exe",
            "cwd": "${file_path:${folder}}",
            "title": "Julia Nightly REPL",
            "pre_window_hooks": [
                ["focus_group", {"group": 1}]
            ],
            "env": {"JULIA_NUM_THREADS":"1"},
        }
    }
]
```

</details>

Don't forget to update the `julia` path to where it was actually installed.
We will now have multiple commands for different versions of Julia.
So in the Command Palette either choose **Terminus: Open Julia Stable**
or **Terminus: Open Julia Nightly**.
Note the magic incantation to allow for a space in the Julia-development path:
the quoting `"%LOCALAPPDATA%\\Programs\\\"Julia 1.5.0-DEV\"\\bin\\julia.exe"`
is needed to make it work.

It is possible to set environment variables like `JULIA_NUM_THREADS` here.

Finally, the editor gives focus to the top-most file in the group 1.
This is useful when two columns or two rows are used for the layout.
Opening Julia with the cursor in a source file
then places the REPL in the other view.

### Snippets

The [Julia][] package comes with predefined [snippets][].
I have defined some of my own, such as this one
to speed up the specification of a doc string (file `docstring.sublime-snippet`):

```xml
<snippet>
    <content><![CDATA[
"""
    ${1:bar(x[, y])}

${0:Compute}
"""
]]></content>
    <tabTrigger>docs</tabTrigger>
    <scope>source.julia</scope>
</snippet>
```

The snippets go into one file per snippet, which I put in `USER\snippets`.
You can find more snippets on [Petr Github][].

[snippets]: /guide/extensibility/snippets.md
[Petr Github]: https://github.com/PetrKryslUCSD/HowToUseJuliaWithSublimeText3/tree/master/snippets


## Usage

### Open terminal

Bring up the <Term term=command_palette />
and type `Terminus`.
Select **Terminus: List Shells**
and from the list that appears,
choose the shell you wish to start.
Note that you can select
whether to start the shell
in a panel at the bottom
or in a separate view.

Julia may be started in the resulting terminal in the usual way.
The terminals that I have checked out (`cmd` and the WSL Ubuntu shell)
work as expected.

### Open a source file and then run Julia from the source file

Open a Julia source file
and in the <Term term=command_palette />
type `Terminus`.
Select **Terminus: Open Julia**.
This will open the default terminal on the user's platform
(`cmd` on Windows, but see also the note about the Git bash below),
and run Julia in the directory that contains the open file.

### Evaluating code

Select some Julia code and press <Key k="ctrl+enter" />.
The code will be pasted into the **Terminus** window
and evaluated in Julia (assuming Julia was started in that **Terminus** window).
This also works for evaluating a line of code:
place the cursor on a line and type <Key k="ctrl+enter" />.

#### Running Julia files

In a opened Julia source file, press <Key k="ctrl+b" />
(which is the key binding for **Tools → Build**).
The current file will be evaluated in a Julia-running Terminus window
with an `include()`.

### Asking for help in the REPL

From a Julia source file, press <Key k="ctrl+shift+x, ctrl+h" /> to ask the Julia
REPL to display help about the current selection.

## Zeal

[Zeal][] is an open-source browser of offline documentation.
It is a Windows and Linux alternative for the macOS-exclusive [Dash][].
There is a Sublime package that allows you to jump to Zeal documentation
for the symbol under cursor.
Zeal can also be used with other languages than Julia.
The documentation for Julia needs to be downloaded within the Zeal documentation browser:
in the menu "Tools" choose "Docsets".

Via <Term term=package_control />, install the [Zeal package][].

The Zeal executable needs to be revealed to the editor.
Also, Zeal needs to be made aware
of the language of the documentation request.
Add the following to your `User/Zeal.sublime-settings` file:

```jsonc
{
  /**
   Zeal executable path.
   On Windows, this must be the full path.
   */
  "zeal_command": "C:\\Program Files\\Zeal\\zeal.exe",

  // Make Zeal aware of the Julia docsets.
  "docsets_user": [
    { "name": "Julia" },
  ],
}
```

Zeal can be brought up by pressing <Key k=f1 />
or through the <Term term=command_palette />.

[Zeal]: https://zealdocs.org/download.html
[Dash]: https://kapeli.com/dash
[Zeal package]: https://packagecontrol.io/packages/Zeal

## Start Julia from Git Bash

I really can't stand the default "shell" (CMD)
in which Julia starts on Windows.
The interaction with the shell is quite unsatisfactory then:
most of the Windows commands and all of the UNIX commands
don't work as one would expect.
What I prefer instead is [Git Bash](https://git-scm.com/downloads).
One can get that to run Julia by starting Sublime Text from a bat file.
I create such a file with the line:

```batch
cmd /C
start "" "%PROGRAMFILES%\\Git\\bin\\sh.exe" --login -i -c "exec \"C:\Users\PetrKrysl\Documents\Productivity\PortableSublimeText\sublime_text.exe\""
```

where my portable Sublime Text executable is invoked from within the Git shell.

In order to get an executable file with the Sublime Text icon,
I create a shortcut (for instance to be placed on the desktop),
and I give it the [ST icon][].

Alternatively, start the Git Bash terminal,
and run the `subl` executable of your portable Sublime Text.
When a terminal is opened inside the running editor, it runs the Git Bash.
In particular, when Julia is started in the editor,
its shell mode drops you to the Bash. Perfect!

[ST icon]: https://github.com/PetrKryslUCSD/HowToUseJuliaWithSublimeText3/blob/master/sublime-text.ico

## Credits

Thanks to [Petr Krysl][], [Paul Söderlind][], [@mbauman][].

[Original source](https://github.com/PetrKryslUCSD/HowToUseJuliaWithSublimeText3).

[Petr Krysl]: https://github.com/PetrKryslUCSD
[Paul Söderlind]: https://github.com/PaulSoderlind
[@mbauman]: https://github.com/mbauman
