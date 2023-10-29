---
title: Input Handlers
---

# Input Handlers

![Arithmetic command using an input handler](./images/arithmetic.png)

Input handlers are a mechanism
to query a user for one or multiple input parameters
via the Command Palette.
They replace the older method of input and quick panels
(`Window.show_input_panel` and `Window.show_quick_panel`)
for a unified user experience in a single component.

Input Handlers have been added in build 3154
and were first available on the stable channel in version 3.1.

## Examples

The following commands provided by Sublime Text's `Default` package
use input handlers
(command names are for the Command Palette):

| Command name | File | Description |
|:-|:-|:-|
| *Arithmetic* | `Default/arithmetic.py` | Evaluates a given Python expression (usually numeric). |
| *View Package File* | `Default/ui.py` | Provides a list of all resource files inside the Packages folder to open. |
| *Rename File* | `Default/rename.py` | Queries the user for a new file name for the active view. |

You can use the above *View Package File* command
to view the source code of these files.


## Input Handler Kinds

There are currently two types of input handlers:

1. text input handlers accepting arbitrary text input,
1. list input handlers providing a list of options for the user to choose from.

Text input handlers always forward the entered text to the command,
while list input handlers can handle any JSON-serializable value,
accompanied by a caption for their respective list entry.


## Implementing an Input Handler

Because input handlers are using a rather generic interface,
adding one to your command
may require careful thinking
and may not be the most intuitive process.

We will implement an example input handler
and explain more gears you can tweak
for advanced configuration.

::: warning Important
To use an input handler for a command,
**the command must have an entry in the [Command Palette][]**.
This is easy to forget,
so make sure to remember!

[Command Palette]: ../command_palette.md
:::

Let's start with a very simple command
that inserts the given text into the view.
The following two files
can be placed in any package folder,
including "User".

`simple_plugin.py`:
``` py
import sublime_plugin


class SimpleCommand(sublime_plugin.TextCommand):
    def run(self, edit, text):
        for region in self.view.sel():
            self.view.replace(edit, region, text)
```

`Simple.sublime-commands`:
``` json
[
    { "caption": "Simple Command", "command": "simple" },
]
```


### The `*Command.input` Method

When implementing a command,
it receives keyed arguments to its `run` method.
When a parameter in the signature provides no default value,
it can only be called if arguments are provided for all such parameters.
Calling a command with too few arguments will fail
and cause an exception to be printed to the console.

```
>>> window.run_command("simple")
Traceback (most recent call last):
  File "/opt/sublime_text/Lib/python38/sublime_plugin.py", line 1270, in run_
    return self.run()
TypeError: run() missing 1 required positional argument: 'text'
```

In a situation like this,
a command may implement [the `input` method][api-TextCommand]
and return an input handler instance
that provides Sublime Text
with the necessary information
to display an input handler.

``` py {9-10}
import sublime_plugin


class SimpleCommand(sublime_plugin.TextCommand):
    def run(self, edit, text):
        for region in self.view.sel():
            self.view.replace(edit, region, text)

    def input(self, args):
        return MyTextInputHandler()
```

The `input` function takes an `args` parameter
that is a dict of all currently known arguments to the command.
Since we know that our only required argument (`text`)
is missing at this point,
we won't use the parameter.

We haven't defined `MyTextInputHandler` yet,
so let's do that.


### Subclassing `TextInputHandler`

To create a simple input handler for text,
we create a subclass of [`sublime_plugin.TextInputHandler`][api-TextInputHandler].
In our subclass,
we can override specific methods.
For the most basic functionality,
we need `name`.
Additionally, for convenience,
we define `placeholder`.

``` py
class MyTextInputHandler(sublime_plugin.TextInputHandler):
    def name(self):
        return "text"

    def placeholder(self):
        return "Text to insert"
```

And that's it.
Here is what it looks like:

<video controls src="./images/simple_input_handler.mp4" />

::: tip
Of course, you can still call the command like before
from a key binding or via the console.
When all required arguments are provided,
the input handler will be skipped
and the command run immediately.
:::


### Rendering a Preview

The `preview` method is called
for every modification of the entered text
and allows to show a small preview
below the Command Palette.
The preview can either be pure text
or can use [minihtml][]
for a markup-enabled format.

[minihtml]: https://www.sublimetext.com/docs/minihtml.html

The following snippet extends our input handler from earlier
to show the amount of characters that will be inserted:

``` py
class MyTextInputHandler(sublime_plugin.TextInputHandler):
    def name(self):
        return "text"

    def placeholder(self):
        return "Text to insert"

    def preview(self, text):
        return "Characters: {}".format(len(text))
```

There are additional methods that can be overriden.
These are described [in the documentation][api-TextInputHandler].


### Using Dynamic Data

You may have noticed that our `MyTextInputHandler` class
is entirely separate from our `SampleCommand`.
In the event that we want the input handler
to depend on some dynamic data,
such as the current view's selection,
we will have to provide such values
to the input handler's constructor.

The following snippet passes the text command's `View` instance
to the input handler's constructor.
The constructor itself stores the instance
in an instance attribute
and later accesses it from `preview`.

``` py {10,14-15,25}
import sublime_plugin


class SimpleCommand(sublime_plugin.TextCommand):
    def run(self, edit, text):
        for region in self.view.sel():
            self.view.replace(edit, region, text)

    def input(self, args):
        return MyTextInputHandler(self.view)


class MyTextInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, view):
        self.view = view

    def name(self):
        return "text"

    def placeholder(self):
        return "Text to insert"

    def preview(self, text):
        return ("Selections: {}, Characters: {}"
                .format(len(self.view.sel()), len(text)))
```

<video controls src="./images/simple_input_handler_preview.mp4" />


## Providing a List Of Options With `ListInputHandler`

Instead of free form input,
you can provide the user
with a list of values
that they can choose from.
This is done by sublassing `sublime_plugin.ListInputHandler`
and providing an `list_items` method
that returns a list of values to choose from.
This list can either be a list of strings
or a list of tuples,
where the first element indicates the text to be shown
and the second element the value to insert as the command's argument.

Following is a small example command
that offers a list of [named HTML entities][]
using the built-in [`html.entities`][] module:

[named HTML entities]: https://html.spec.whatwg.org/multipage/syntax.html#character-references
[`html.entities`]: https://docs.python.org/3/library/html.entities.html


```py {16-17}
from html.entities import html5

import sublime_plugin


class InsertHtmlEntityCommand(sublime_plugin.TextCommand):
    def run(self, edit, entity):
        for region in self.view.sel():
            self.view.replace(edit, region, "&" + entity)

    def input(self, args):
        return EntityInputHandler()


class EntityInputHandler(sublime_plugin.ListInputHandler):
    def list_items(self):
        return sorted(html5.keys())

    def preview(self, value):
        return "Character: {}".format(html5.get(value))
```

::: tip
Notice how we don't implement `name` here,
because Sublime Text can automatically infer
the input handler's target argument name
from the class name,
using the same logic as for command names
but stripping "InputHandler" instead.
:::

::: warning Reminder
Remember that you need to make the above command
available to the Command Palette
by specifying it in a `.sublime-commands` file.

``` json
[
  { "caption": "Insert Html Entity", "command": "insert_html_entity" },
]
```
:::

Here is what it looks like in action:

<video controls src="./images/list_input_handler.mp4" />


## Implementing Multiple Input Handlers

When a command requires multiple arguments
that the user must provide,
things change a bit.
Notably, you know must add logic inside `input`
that returns the appropriate input handler
based on which arguments are still missing.
The order in which these are returned matters,
because input handlers that received input
remain visible in the Command Palette
to visualize the current input step
in a breadcrumbs style.
And finally, the input handlers' `description` methods will be used
to render text for these breadcrumbs.
(Since the default behavior is to show the inserted value,
this is used only rarely.)

Let's write a command that multiplies two operands.

``` py
import sublime_plugin


class MultiplyCommand(sublime_plugin.TextCommand):
    def run(self, edit, operand1, operand2):
        result = float(operand1) * float(operand2)
        for region in self.view.sel():
            self.view.replace(edit, region, str(result))

    def input(self, args):
        for name in ['operand1', 'operand2']:
            if name not in args:
                return NumberInputHandler(name)


class NumberInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, name):
        self._name = name

    def name(self):
        return self._name

    def placeholder(self):
        return "Number"

    def validate(self, text):
        try:
            float(text)
        except ValueError:
            return False
        else:
            return True
```

::: tip
In this command, we only used a single input handler class for two parameters
by returning an instance variable in the `name` function.
:::

<video controls src="./images/multiply_input.mp4" />

The command works as it advertises.
It asks for two numbers when invoked from the command palette consecutively.
However, it does not show a breadcrumb for the first operand
after we confirmed it.
This is because the `input` command is re-run after the first argument,
since we need two arguments,
and information about the previous input handler is lost.

::: tip
Having problems running this command?
Did you add a `.sublime-commands` entry for it?
:::


### The `next_input` Method

To show the before-mentioned breadcrumb,
the first input handler needs to know
what input handler should be the next
and return it in a `next_input` method.

You could do so in a static way,
but let's try a dynamic approach.
Remember that you don't need to ask
for the second argument
if it was already provided.


``` py {10-14,19,27-29}
import sublime_plugin


class MultiplyCommand(sublime_plugin.TextCommand):
    def run(self, edit, operand1, operand2):
        result = float(operand1) * float(operand2)
        for region in self.view.sel():
            self.view.replace(edit, region, str(result))

    def input(self, args):
        names = [name for name in ['operand1', 'operand2']
                 if name not in args]
        if names:
            return MultiNumberInputHandler(names)


class MultiNumberInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, names):
        self._name, *self.next_names = names

    def name(self):
        return self._name

    def placeholder(self):
        return "Number"

    def next_input(self, args):
        if self.next_names:
            return MultiNumberInputHandler(self.next_names)

    def validate(self, text):
        try:
            float(text)
        except ValueError:
            return False
        else:
            return True
```

In this command,
we collect all the arguments we need from the first call
and change `NumberInputHandler` to `MultiNumberInputHandler`
that accepts a list of argument names to query.
The destructuring assignment in line 19
splits the list into a "first" and "rest",
so that the rest of the required arguments can be returned
in the `next_input` method.

Let's see how it looks when invoked:

<video controls src="./images/multiply_next_input.mp4" />

::: tip
Both `NumberInputHandler` and `MultiNumberInputHandler`
implement a `validate` method that returns a boolean
if the passed text can be parsed into a floating point number.
The effect is that for non-numeric text the input is rejected
and nothing happens when pressing <Key k="enter" />.
Try for yourself!
:::


## Code Archive

The final code examples presented on this page
[have been uploaded to a Gist][gist].
You can download a [zipball][] of it
and extract it into a local package of your choice
to experiment with them.

[gist]: https://gist.github.com/FichteFoll/f850a62323c461ef7c54eb2cf623b033
[zipball]: https://gist.github.com/FichteFoll/f850a62323c461ef7c54eb2cf623b033/archive/master.zip


## Invoking Commands With Input Handlers

When invoking a command with an input handler
and without all required arguments
from a plugin or key binding,
it is advised to use the `show_overlay` command.
Commands invoked that way
will have their `input` method called
before ST attempts to call `run`,
resulting in more predictable behavior.
Otherwise, Sublime Text will try to run the command as normally
(running its `run` method)
and only check the command's `input` method
if the call failed because of insufficient arguments.

**Examples**:

``` py
view.run_command(
    'show_overlay',
    {'overlay': 'command_palette', 'command': 'multiply', 'args': {'operand1': 12}},
)
```

``` json
{
    "command": "show_overlay",
    "args": {
        "overlay": "command_palette",
        "command": "multiply",
        "args": {"operand1": 12}
    },
}
```

## Caveats

- As mentioned countless times already,
  there must be an entry for the Command Palette
  to be able to use input handlers.

- A command's `input` method may be called multiple times
  until the user can access it.

- `is_visible` and `is_enabled` cannot decide their return value
  based on the given arguments
  when an input handler is involved.
  ([#3249](https://github.com/sublimehq/sublime_text/issues/3249))


[api-TextCommand]: https://www.sublimetext.com/docs/api_reference.html#sublime_plugin.TextCommand
[api-TextInputHandler]: https://www.sublimetext.com/docs/api_reference.html#sublime_plugin.TextInputHandler
