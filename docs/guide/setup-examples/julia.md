---
title: How to use Sublime for Julia development
---

Adapted from https://github.com/PetrKryslUCSD/HowToUseJuliaWithSublimeText3
This guide was written by a Windows user, that uses the Windows Subsystem for Linux to run Julia.

When working with Julia, I like having my source code on the left and a terminal running Julia REPL on the right.
This setup will allow you to have the terminal inside Sublime
and to have commands that send code under your cursor to the REPL for evaluation.

## Installation

### Install Julia syntax highlighting

Install the [Julia](https://github.com/JuliaEditorSupport/Julia-sublime) package.
Bring up the **Command Palette**, and type in a few letters of **Package Control: Install Package**.
When it comes up, select it.
Loading the registry will take a couple of seconds, and then we get window where we can type in `Julia`.
A button named **Julia** (with the subtitle "Julia syntax highlighting for Sublime Text 2/3") will come up highlighted.
Click on it, and the package will be installed.
At this point one should be able to open a Julia source file and get it highlighted based upon the syntax of Julia.

### Install the Terminus and SendCode packages

As before use **Package Control** to install the terminal emulation package [Terminus](https://github.com/randy3k/Terminus),
and the package to enable communication between a source window and the terminal, [SendCode](https://github.com/randy3k/SendCode).

## Customization

The key bindings file and the other customization files for the user live in the folder for user settings. In my case that is `C:\Users\PetrKrysl\AppData\Roaming\Sublime Text 3\Packages\User`. For brevity I will call this folder `USER`.
You can find yours through the Command Palette: `Browse Packages`.


### Key bindings

Here are the key-bindings that I'm using 
The key bindings may seem Baroque, but I use voice recognition which means I say a command, which sends these keys. (The point is to avoid typing these contortions on the keyboard.)
Don't hesitate to adapt those key-bindings to something simpler.

From the menu, select **Preferences/Key bindings**. This will open a new window with
the file`Default (Windows).sublime-keymap`, shown in the window on the right.
I put in there my personal preferences for key bindings.


```json
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
    // This is to make the "go to anything" key available in the Terminus view
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

### Customization of the Terminus package

In the file
`USER\Terminus.sublime-settings` I customize the Linux shell of the Windows Subsystem for Linux, which in my case is Ubuntu 18.04.
I also set it to be the default shell to be started by Terminus:

```json
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
        },
        {
            "name": "Ubuntu 18.04 Login Shell",
            "cmd": "C:\\Program Files\\WindowsApps\\CanonicalGroupLimited.UbuntuonWindows_1804.2019.521.0_x64__79rhkp1fndgsc\\ubuntu.exe",
            "env": {},
            "enable": true,
            "default": false,
            "platforms": ["windows"]
        }
    ],
}
```

### Customization of the SendCode package

I make sure Julia code is sent to a **Terminus** terminal. Select **Preferences/Package Settings/SendCode/Settings**. Paste the below code into this file.

```json
{
    "prog": "terminus",

    "julia" : {
        "prog": "terminus",
        "bracketed_paste_mode": false
    }

}
```
There also needs to be a file `Packages\SendCode\support\Julia - Source File.sublime-build` with the command to "build" a Julia file by running it in the REPL.
```
{
    "target": "send_code_build",
    "cmd": "include(\"${file_name}\");",
    "selector": "source.julia"
}
```

### Command to start Julia REPL

In order to be able to open a Julia REPL from a Julia source file currently opened in the editor,
I define the following command binding in the file `USER\Default.sublime-commands`:
```json
[
    {
        "caption": "Terminus: Open Julia Stable",
        "command": "terminus_open",
        "args"   : {//"shell_cmd": "%LOCALAPPDATA%/Programs/Julia/Julia-1.4.1/bin/julia.exe",
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

Note that the above assumes that the Julia executable, `julia`, is in the default location specified by the installer. Note that  we can have multiple  commands for different versions of Julia. So in the Command Palette either choose the command **Terminus: Open Julia 1.3** or the command **Terminus: Open Julia Nightly**. Note the magic incantation to allow for a space in the Julia-development path: the quoting `"%LOCALAPPDATA%\\Programs\\\"Julia 1.5.0-DEV\"\\bin\\julia.exe"` is needed to make it work.

Also, it is possible to set the environment variable directing the use of threading, `JULIA_NUM_THREADS`. Extending this to other environment variables is likely to be successful as well.

Finally, the editor gives focus to the top-most file in the group 1. This is useful when two columns or two rows are used for the layout. Opening Julia with the cursor in a source file then places the REPL in the other view.

### Snippets

The **Julia** mode package comes with predefined snippets (check out the [github site](https://github.com/JuliaEditorSupport/Julia-sublime)). I have defined some of my own, such as this one
to speed up the specification of a doc string (file `docstring.sublime-snippet`):
```
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
The current selection of snippets is part of this repository in the `snippets` folder.

## Usage

### Open terminal

Bring up the **Command Palette**, start typing in `Terminus`. Select **Terminus: List Shells**, and from the list that appears choose the shell you wish to start. Note that then you can select whether to start the shell in a panel at the bottom or in a separate view.

Julia may be started in the resulting terminal in the usual way. The terminals that I have checked out (`cmd` and the WSL Ubuntu shell) work as expected.

### Open a source file and then run Julia from the source file

Open a Julia source file, and in the **Command Palette**, start typing in `Terminus`. Select **Terminus: Open Julia**. This will open the default terminal on the user's platform (`cmd` on Windows, but see also the note about the Git bash below), and run Julia in the directory that contains the open file.

### Evaluating code

Select some Julia code and press `ctrl+enter`. The code will be pasted into the **Terminus** window and evaluated in Julia (assuming Julia was started in that **Terminus** window).
This also works for evaluating a line of code: place the cursor on a line and type `ctrl+enter`.

#### Running Julia files
In a currently opened Julia source file,
press `ctrl+b` (which is a key binding for the menu action **Tools/Build**).
The current file will be evaluated in a Julia-running **Terminus** window with an `include()`.

### Asking for help in the REPL

There is a key binding to send code to the REPL to invoke the help mode on the selection using the `send_code` command (see the key bindings above).

## Zeal

Zeal is an open-source browser of off-line documentation.
There is a Sublime package that allows you to jump to Zeal documentation for the symbol under cursor.
Zeal can also be used with other languages than Julia.
Zeal can be downloaded from
[https://zealdocs.org/download.html](https://zealdocs.org/download.html).
The documentation for Julia needs to be downloaded within the Zeal documentation browser:
in the menu "Tools" choose "Docsets".

From **Package Control** install [Zeal for Sublime Text 2/3](https://packagecontrol.io/packages/Zeal).

The Zeal executable needs to be revealed to the editor. Also, Zeal
needs to be made aware of the language of the documentation request:
```json
{
  /**
   Zeal executable path. The instructions below require zeal
   to be located very precisely by its full path!?
   */
  "zeal_command": "C:\\Program Files\\Zeal\\zeal.exe",
  "mapping_sort" : true,

  // Language mapping.
  "language_mapping": {
    "Python": {"lang": "python", "zeal_lang": "python"},
    "Julia": {"lang": "julia", "zeal_lang": "julia"}
  }
}
```

Zeal can be brought up by pressing `F1` or through the Command Palette.


## Starts Julia from Git Bash 

I really can't stand the default "shell" (CMD) in which Julia starts on
Windows. The interaction with the shell is quite unsatisfactory then: most of the Windows commands and all of the UNIX
commands don't work as one would expect. What I prefer instead is [Git Bash]
(https://git-scm.com/downloads). One can get that to run Julia by starting
Sublime Text  from a bat file. I create such a file with the line
``` cmd /C
start "" "%PROGRAMFILES%\\Git\\bin\\sh.exe" --login -i -c "exec
\"C:\Users\PetrKrysl\Documents\Productivity\PortableSublimeText\sublime_text.exe\""
```
where my portable Sublime Text executable is invoked from within the Git
shell.

In order to get an executable file with the Sublime Text icon, I create a
shortcut (for instance to be placed on the desktop), and I give it the icon
which is part of this repository.

Alternatively, start the Git Bash terminal, and run the `subl` executable of
your portable Sublime Text. When a terminal is opened inside the running
editor, it runs the Git Bash. In particular, when Julia is started in the
editor, its shell mode drops you to the Bash. Perfect!


## Credits

Thanks to Petr Krysl, Paul Soderlind, @mbauman.
[Original source](https://github.com/PetrKryslUCSD/HowToUseJuliaWithSublimeText3).
