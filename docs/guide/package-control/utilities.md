---
title: "Package Control: Utilities for Packages"
---

<!-- https://packagecontrol.io/docs/messaging -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/messaging.html -->
<!-- https://github.com/wbond/package_control/blob/master/example-messages.json -->

# Package Control: Utilities for Packages

Package Control provides a few utilities
that package developers may use for better integration
of their Package.


## Messages

It is possible to show users a plain text message
when the package is installed,
and after upgrades to specific versions of the package.

This is controlled by a `messages.json` file in the root of the package.
See below for an example of the proper structure of the JSON.
Each value will be a file path that is relative to the package root.
Each key will either be the string "install" or a version number.

When a package is **installed**,
if the key "install" is present in the `messages.json` file,
the file at the specified path will be displayed to the user.

When a package is **upgraded**,
Package Control looks through each key in the `messages.json` file
and shows the content of the text file that is a value of any key
that is higher than the previous version of the package the user had installed.
Thus, if the user had version 1.1.0 installed,
the message files for 1.2.0 and 1.1.1 would be shown.
If the user had version 1.1.1 installed,
only the message file for version 1.2.0 would be shown.


### Example

```json
{
	"install": "messages/install.txt",
	"1.1.1": "messages/1.1.1.txt",
	"1.2.0": "messages/1.2.0.txt"
}
```


## Events

Package Control client exposes an API for package developers
to be able to more easily respond to events that affect their packages.
The events API is used in concert with
the Sublime Text package load/unload handlers.

The following events can be detected:

* After Install
* Before Upgrade
* After Upgrade
* Before Removal


### Sublime Text Load/Unload Handlers

The events API is a layer of extra information that allows code being run
in the Sublime Text `plugin_loaded()` and `plugin_unloaded()` handlers.
These handlers are automatically executed
whenever a package is installed/enabled or removed/disabled, respectively.

These are especially useful
since Package Control always disables and re-enables packages
when performing operations on them.
This ensures that Sublime Text does not parse partially extracted file contents
or retain a filesystem lock on files about to be written or removed.


### API

The events API is located in the `package_control.events` module.
Each of these functions returns either a string version number,
or `None` if the package is not in the state specified.

* `events.install("Package Name")` - package was just installed
* `events.pre_upgrade("Package Name")` - package is about to be upgraded
* `events.post_upgrade("Package Name")` - package was just upgraded
* `events.remove("Package Name")` - package is about to be removed


### Example Code

To use code like the following block, it should be located
in one of the `.py` files in the root of your package.

```py
import sys

package_name = 'My Package'

def plugin_loaded():
    from package_control import events

    if events.install(package_name):
        print('Installed %s!' % events.install(package_name))
    elif events.post_upgrade(package_name):
        print('Upgraded to %s!' % events.post_upgrade(package_name))


def plugin_unloaded():
    from package_control import events

    if events.pre_upgrade(package_name):
        print('Upgrading from %s!' % events.pre_upgrade(package_name))
    elif events.remove(package_name):
        print('Removing %s!' % events.remove(package_name))
```
