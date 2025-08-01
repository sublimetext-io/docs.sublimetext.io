---
title: "Package Control Client: Usage"
---

<!-- Originals: -->
<!-- https://packagecontrol.io/docs/usage -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/usage.html -->


# Client package: Usage

Package Control is driven by the [Command Palette][cmnd]. All Package Control commands begin with "Package Control:", so start by typing "Package".

[cmnd]: command_palette.html#how-to-use-the-command-palette

The command palette will show a number of commands.

## Most-used commands

### Install Package

Show a list of all packages that are available for installation.
This will include all of the packages from the [default channel][channel],
plus any from [repositories][repos] you have added.

[channel]: https://github.com/wbond/package_control_channel
[repos]: repository.html


### Add Repository

Add a repository that is not included in the default channel.
A repository in this context can be either a package,
via a Git repository
hosted on GitHub, GitLab, and Bitbucket;
or a [repository JSON][repos] describing one or multiple packages.

Repositories added this way will also
be automatically updated.

To add a package,
enter the URL in the form `https://github.com/username/repo`.
Don’t include `.git` at the end.

To add a repository JSON,
enter the public URL of the file.

[repos]: repository.html


### Remove Package

This removes the package folder,
and the package name from the `installed_packages` list
in `Packages/User/Package Control.sublime-settings`.
The `installed_packages` list allows Package Control
to automatically install packages for you
if you copy your `Packages/User` folder to another machine.

By default Package Control checks for new versions on startup.
This check and the list of channels and repositories
are managed through the [Settings][settings].

[settings]: #package-control-settings


## Other Commands

Note that this list is not exhaustive.


### Add Channel

Adds another channel that lists repositories.
This is uncommon but allows users to create
a custom channel of repositories to share.


### Create Package File

For package developers.
This takes a package folder and generates a `.sublime-package` file
that can be uploaded onto the web
and referenced in the `packages.json` file for a repository.


### Disable Package

Disables a package,
which causes any Python scripts to be unloaded,
and other files such as `.sublime-keymap` files to be unloaded also.


### Discover Packages

Opens up a web browser to browse the Package Control website.


### Enable Package

Re-enables a package that has been disabled.


### Upgrade All Packages

This will upgrade _**all**_ packages,
including ones that were not installed via Package Control.
If you are developing a custom copy of a package,
you may not want to use this command.


### Upgrade Package

Show a list of packages that are available for upgrade
and let the user pick which they would like to update.


### Package Control Settings

Open the default settings file,
which can be used as a reference for changing the User setting,
and the user's settings for Package Control.
