---
title: Packages
---

## Overview

A package is a container for resources.

## Package Locations (and Abbreviations)

There are three locations
for storing packages
for different purposes.

- Packages can be **folders**
  under `{Data}/Packages` (short: `{Packages}`)
- or **zip archives**
  with the ``.sublime-package`` extension
  located under `{Data}/Installed Packages`
  (short: `{Installed Packages}`)
  or any of its subdirectories.
- Additionally,
  Sublime Text provides a set of default packages
  as **zip archives**
  in `{Application}/Packages` (short: `{Shipped Packages}`),
  where ``Application`` refers to the folder
  where the Sublime Text executable resides.

  This folder is not intended to be modified by the user.

::: tip Note
For simplicity, we will occasionally
refer to all these directories simply as `{Packages}`,
and to a package in any folder
(``.sublime-package`` or not)
as `{Packages}/PackageName`.
Consequently, a file inside a package
may also be referred to as `PackageName/a_file.extension`.
:::
# `.sublime-package` Packages

Packages distributed as `.sublime-package` zip archives should be
considered read-only containers of resources and never be modified
manually. Since they are usually updated as a whole, any manual changes
made to them will be lost in the process.

If you do want to modify files in these archives, see
`overriding-packages`.

# Interactions Between Packages with The Same Name

If two packages with the same name exist
in both `{Installed Packages}` and `{Shipped Packages}`,
the one in `{Installed Packages}` will be used
and the one in `{Shipped Packages}` will be ignored.

Any file in `{Packages}/{PackageName}` takes precedence
over an identically named file
in `{Installed Packages}/{PackageName}.sublime-package`
or `{Shipped Packages}/{PackageName}.sublime-package`.

See also `overriding-packages`.

## Package Contents

Typical resources found in packages include:

- build systems (`.sublime-build`)
- color schemes (`.tmTheme`)
- key maps (`.sublime-keymap`)
- macros (`.sublime-macro`)
- menus (`.sublime-menu`)
- metadata (`.tmPreferences`)
- mouse maps (`.sublime-mousemap`)
- plugins (`.py`)
- settings (`.sublime-settings`)
- snippets (`.sublime-snippet`)
- syntax definitions (`.tmLanguage`)
- themes (`.sublime-theme`)


Some packages may hold support files for other packages or for core
features. For example, the spell checker uses
REFERENCE {Installed Packages}/Language -
English.sublime-package as a data store for English dictionaries.

# Types of Packages

In this guide, we categorize packages for clarity when discussing this
topic, but Sublime Text doesn't use this terminology and you don't need
to learn it.

## Glossary

**shipped packages**
**default packages**
   A set of packages
   that Sublime Text ships with.
   Some of these packages are :term:`core packages`,
   while others enhance Sublime Text
   to support common programming languages out of the box.

   Examples: Default, Python, Java, C++, Markdown.

   Located in `{Shipped Packages}`.

**core packages**
   Sublime Text requires these packages
   in order to function properly.

   Complete list: Default, Theme - Default, Color Scheme - Default, Text,
   Language - English.

   They are part of the shipped packages and
   located in `{Shipped Packages}`.

**user packages**
   Installed or created by the user
   to extend Sublime Text's functionality.
   They are not part of Sublime Text,
   and are always contributed by users
   or third parties.

   Example: User.

   Located in `{Packages}`
   and `{Installed Packages}`.

**installed packages**
   A subtype of *user packages*.

   Installed packages are ``.sublime-package`` archives
   and usually maintained by a package manager.

   Located in `{Installed Packages}`.

   .. note::

      Due to the unfortunate name of this folder,
      talking about *installing*
      packages in Sublime Text
      is confusing.

      Sometimes, in this guide, by *installing* we mean
      'adding a user/third party package to Sublime Text'
      (in any form),
      and sometimes we use the term
      in its stricter sense of
      'copying a ``.sublime-package`` archive
      to `{Installed Packages}`'.

**override packages**
   A special type of *user packages*.

   Override packages serve the purpose of customizing packages
   that are distributed as ``.sublime-package`` files.
   They are effectively injected into the original package
   and do not stand-alone.

   See :ref:`overriding-packages` for details.

   Located in `{Packages}`.

Note that by *third party*
we also refer to users of other
editors, notably Textmate,
as Sublime Text and Textmate
share some types of resource files
that can be reused without modification.

# Managing Packages

## Installing Packages

::: tip Note
Regular users rarely need to know how to install packages by hand, as
automatic package managers are available.

The de facto package manager for Sublime Text is [Package Control](https://packagecontrol.io).
:::

Packages can be installed in two main ways:

  - by copying Sublime Text resources to a folder under
    :ref:{Packages}, or
  - by copying a `.sublime-package` file to
    :ref:{Installed Packages}.

## Disabling Packages

To temporarily disable packages, you can add them to the
`ignored_packages` list in your
:ref:{Packages}/User/Preferences.sublime-settings
file. Packages will be loaded or unloaded as needed when the settings
file is saved.

## Enabling Packages

To re-enable a package, remove the package's name from the
`ignored_packages` list in your
:ref:{Packages}/User/Preferences.sublime-settings
file.

## Removing Packages

If you installed a package with a package manager, remove it using the
method provided by the package manager.

If you installed a package manually, follow this procedure to safely
remove a package:

1.  `Disable <disabling-packages>` the package while Sublime Text is
    running.
2.  Close Sublime Text.
3.  Remove the package's resources from the disk.
4.  Remove the package's name from the `ignored_packages` list.

In addition to the resources
you have placed initially
in a `{Packages}` folder or in `{Installed Packages}`,
plugins may create configuration files
(such as ``.sublime-settings`` files)
or other files to store package-related data.
Frequently, you will find them in the *User* package.
Therefore, if you want to remove all traces of a package,
you will need to find and remove all the additional files
that it may have installed.

::: warning
Shipped packages are reinstated during every Sublime Text update, so you
can't delete them forever. If you want to stop using a shipped package,
`disable <disabling-packages>` it.
:::

.. _overriding-packages:

Customizing or Overriding Packages
==================================

Since packages in ``.sublime-package`` zip archives
:ref:`are read-only <.sublime-package>`,
you cannot modify them directly.
However, Sublime Text allows you
to create an :term:`override package <override packages>`
that will effectively inject files into the original archive
without modifying the archive itself.

To create an override package,
create a new folder under `{Packages}`
and name it after the ``.sublime-package`` file
you want to override, excluding the extension.
Any file you create in this package
will take precedence over any identically named file
in the original package.

Python plugins in override packages
are able to use relative imports
for accessing other modules in the corresponding ``.sublime-package`` file
as if they were part of it.

.. warning::

   Files in override packages override entire files.
   If the overriden file in the corresponding ``.sublime-package`` is updated,
   you will not be notified.

.. Generally, this only works on resources
   interpreted by Sublime Text directly.
   If there are other files which the package loads
   by means of a Python plugin,
   it depends on whether the code uses
   the ``sublime.load_resource`` API or not
   (which they should).


.. _merging-and-order-of-precedence:

Merging and Order of Precedence
===============================

Package precedence is important for merging certain resources,
for example, ``.sublime-keymap`` and ``.sublime-settings`` files,
and for loading plugins (``.py`` files).

If an :term:`override package <override packages>` exists
for a ``.sublime-package`` package,
it will be loaded at the same time as the ``.sublime-package`` archive.

Sublime Text loads packages in this order:

#. `{Packages}/Default`;
#. :term:`shipped packages` in lexicographical order;
#. :term:`installed packages` in lexicographical order;
#. all remaining :term:`user packages`,
   except for `{Packages}/User`,
   that did not override anything,
   in lexicographical order;
#. `{Packages}/User`


Reverting Sublime Text to Its Default Configuration
===================================================

Reverting Sublime Text to a fresh state
solves many problems
that appear to be bugs in Sublime Text
but are in fact caused by misbehaving
packages and plugins.

To revert Sublime Text to its default configuration
and remove all your settings and configurations,
delete the :ref:`data directory <data-directory>`
and restart the editor.
Keep in mind
that the ``Installed Packages`` folder will be deleted too,
so you'll lose all your installed packages.

Always make sure to back up your data
before taking an extreme measure like this one!
