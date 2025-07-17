---
title: "Package Control Client: Events"
---


<!-- https://packagecontrol.io/docs/events -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/events.html -->

# Client package: Events

Package Control client exposes an API for package developers
to be able to more easily respond to events that affect their packages.
The events API is used in concert with
the Sublime Text package load/unload handlers.

The following events can be detected:

*   After Install
*   Before Upgrade
*   After Upgrade
*   Before Removal

## Sublime Text Load/Unload Handlers

The events API is a layer of extra information that allows code being run
in the Sublime Text `plugin_loaded()` and `plugin_unloaded()` handlers.
These handlers are automatically executed
whenever a package is installed/enabled or removed/disabled, respectively.

These are especially useful
since Package Control always disables and re-enables packages
when performing operations on them.
This ensures that Sublime Text does not parse partially extracted file contents
or retain a filesystem lock on files about to be written or removed.

## API

The events API is located in the `package_control.events` module.
Each of these functions returns either a string version number,
or None if the package is not in the state specified.

* `events.install("Package Name")` - package was just installed
* `events.pre_upgrade("Package Name")` - package is about to be upgraded
* `events.post_upgrade("Package Name")` - package was just upgraded
* `events.remove("Package Name")` - package is about to be removed

## Example Code

The following code should be located
in one of the .py files in the root of your package.

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
