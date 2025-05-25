---
title: Packages
---

# Packages

A package is a container for resources.

## Package Locations (and Abbreviations)

There are three locations
for storing packages
for different purposes.

- Packages can be **folders**
  under `Data/Packages` (short: `Packages`)
- or **zip archives**
  with the ``.sublime-package`` extension
  located under `Data/Installed Packages`
  (short: `Installed Packages`)
  or any of its subdirectories.
- Additionally,
  Sublime Text provides a set of default packages
  as **zip archives**
  in `Application/Packages` (short: `Shipped Packages`),
  where *Application* refers to the folder
  where the Sublime Text executable resides.

  This folder is not intended to be modified by the user.

::: tip Note
For simplicity, we will occasionally
refer to all these directories simply as `Packages`,
and to a package in any folder
(`.sublime-package` or not)
as `Packages/PackageName`.
Consequently, a file inside a package
may also be referred to as `PackageName/a_file.extension`.
:::


### `.sublime-package` Packages

Packages distributed as `.sublime-package` zip archives should be
considered read-only containers of resources and never be modified
manually. Since they are usually updated as a whole, any manual changes
made to them will be lost in the process.

If you do want to modify files in these archives, see
`overriding-packages`.

### Interactions Between Packages with the Same Name

If two packages with the same name exist
in both `Installed Packages` and `Shipped Packages`,
the one in `Installed Packages` will be used
and the one in `Shipped Packages` will be ignored.

Any file in `Packages/PackageName` takes precedence
over an identically named file
in `Installed Packages/PackageName.sublime-package`
or `Shipped Packages/PackageName.sublime-package`.

See also `overriding-packages`.

## Package Contents

Typical resources found in packages include:

- build systems (`.sublime-build`)
- color schemes (`.sublime-color-scheme`, `.tmTheme`)
- key maps (`.sublime-keymap`)
- macros (`.sublime-macro`)
- menus (`.sublime-menu`)
- commands (`.sublime-commands`)
- metadata (`.tmPreferences`)
- mouse maps (`.sublime-mousemap`)
- plugins (`.py`)
- settings (`.sublime-settings`)
- completions (`.sublime-completions`)
- snippets (`.sublime-snippet`)
- syntax definitions (`.sublime-syntax`, `.tmLanguage`)
- themes (`.sublime-theme`)

Some packages may hold support files
for other packages or for core features.
For example, the spell checker
uses `Installed Packages/Language - English.sublime-package`
as a data store for English dictionaries.

## Package Types

In this guide, we categorize packages
for clarity when discussing this topic,
but Sublime Text doesn't use this terminology
and you don't need to learn it.


**shipped packages** or **default packages**
: A set of packages
  that Sublime Text ships with.
  Some of these packages are *core packages*,
  while others enhance Sublime Text
  to support common programming languages out of the box.

  Examples: Default, Python, Java, C++, Markdown, reStructuredText.

  Located in `Shipped Packages`.

**core packages**
: Sublime Text requires these packages
  in order to function properly.

  Complete list: Default, Theme - Default, Color Scheme - Default, Text, Language - English.

  They are part of the shipped packages and
  located in `Shipped Packages`.

**user packages**
: Installed or created by the user
  to extend Sublime Text's functionality.
  They are not part of Sublime Text,
  and are always contributed by users
  or third parties.

  Example: User.

  Located in `Packages`
  and `Installed Packages`.

**installed packages**
: A subtype of *user packages*.

  Installed packages are `.sublime-package` archives
  and usually maintained by a package manager.

  Located in `Installed Packages`.

  ::: tip Note
  Due to the unfortunate name of this folder,
  talking about *installing*
  packages in Sublime Text
  is confusing.

  Sometimes, in this guide, by *installing* we mean
  "adding a user/third party package to Sublime Text"
  (in any form),
  and sometimes we use the term
  in its stricter sense of
  "copying a `.sublime-package` archive
  to `Installed Packages`".
  :::

**override packages**
: A special type of *user packages*.

  Override packages serve the purpose of customizing packages
  that are distributed as ``.sublime-package`` files.
  They are effectively injected into the original package
  and do not stand-alone.

  See [Customizing or Overriding Packages][overriding] for details.

  Located in `Packages`.

Note that by *third party*
we also refer to users of other
editors, notably Textmate,
as Sublime Text and Textmate
share some types of resource files
that can be reused without modification.


## Managing Packages

### Installing Packages

::: tip Note
Regular users rarely need to know
how to install packages by hand,
as automatic package managers are available.

The de facto package manager for Sublime Text
is [Package Control](https://packagecontrol.io).
:::

Packages can be installed in two main ways:

- by copying Sublime Text resources
  to a folder under `Packages`, or
- by copying a `.sublime-package` file
  to `Installed Packages`.


### Disabling Packages

To temporarily disable packages,
you can add them to the `ignored_packages` list
in your `Packages/User/Preferences.sublime-settings` file.
Packages will be loaded or unloaded as needed
when the settings file is saved.


### Enabling Packages

To re-enable a package,
remove the package's name from the `ignored_packages` list
in your `Packages/User/Preferences.sublime-settings` file.


### Removing Packages

If you installed a package with a package manager,
remove it using the method provided by the package manager.

If you installed a package manually,
follow this procedure to safely remove a package:

1. [Disable](#disabling-packages) the package
   while Sublime Text is running.
1. Close Sublime Text.
1. Remove the package's resources from the disk.
1. Remove the package's name from the `ignored_packages` list.

In addition to the resources
you have placed initially
in a `Packages` folder or in `Installed Packages`,
plugins may create configuration files
(such as `.sublime-settings` files)
or other files to store package-related data.
Frequently, you will find them in the *User* package.
Therefore, if you want to remove all traces of a package,
you will need to find and remove all the additional files
that it may have installed.

::: warning
Shipped packages are reinstated
during every Sublime Text update,
so you can't delete them forever.
If you want to stop using a shipped package,
[disable](#disabling-packages) it.
:::


## Customizing or Overriding Packages
[overriding]: #customizing-or-overriding-packages

Since packages in `.sublime-package` zip archives
[are read-only](#sublime-package-packages),
you cannot modify them directly.
However, Sublime Text allows you
to create an <Term term="override_package" />:
that will effectively inject files into the original archive
without modifying the archive itself.

To create an override package,
create a new folder under `Packages`
and name it after the `.sublime-package` file
you want to override, excluding the extension.

Any file you create in this package directory
will literally replace any identically named
(and identically path-ed) file
in the original package.  Sublime Text literally
ignores the same-named file in the original
Package file.  (This is unlike the effect of placing
files in the `User` Package where Sublime Text tries
to "merge" them into existing data when they contain
JSON data structures.)

Python plugins in override packages
are able to use relative imports
for accessing other modules in the corresponding `.sublime-package` file
as if they were part of it.

::: warning
  Files in override packages override entire files.
  If the overridden file in the corresponding `.sublime-package` is updated,
  you will not be notified.

  The [OverrideAudit][] package provides monitoring of override files
  and will notify you
  when the file it overrides has been updated.

  [OverrideAudit]: https://github.com/OdatNurd/OverrideAudit
:::


## Merging and Order of Precedence

Package precedence is important for merging certain resources,
for example, `.sublime-keymap` and `.sublime-settings` files,
and for loading plugins (`.py` files).

If an <Term term="override_package" /> exists
for a `.sublime-package` package,
it will be loaded at the same time as the `.sublime-package` archive.

Sublime Text loads packages in this order:

1. `Packages/Default`;
1. <Term term="shipped_package">shipped packages</Term> in lexicographical order;
1. <Term term="installed_package">installed packages</Term> in lexicographical order;
1. all remaining <Term term="user_package">user packages</Term>,
   except for `Packages/User`,
   that did not override anything,
   in lexicographical order;
1. `Packages/User`


## Troubleshooting

Because Sublime Text is so customizable, it is possible for 3rd-party Packages
and/or local customization to interfere with one another, or cause other problems.
You might see this, for example, seeing Python exceptions that don't make sense
in the Console Panel, or certain functionality isn't behaving as you expect.

### Safe Mode

As of Sublime Text 4, you can now launch Sublime Text in Safe Mode by using

    subl --safe-mode

from the command line to launch it.  When launched this way, Sublime Text uses an
alternate [Data Directory](../getting-started/basic-concepts.md#the-data-directory),
thus disabling all 3rd-party Packages and local customizations, as well as
internally not loading any previous sessions (i.e. from any `.sublime-workspace`
files).  This will help you to verify whether the behavior is, or is not,
coming from Sublime Text itself, or one of its shipped Packages.

If the behavior is still being exhibited, it is most likely from a corrupted
shipped Package file and can be remedied by re-installing Sublime Text.

If the behavior disappears, then you know it was coming from somewhere in
the Data Directory.

Caution:  each time Sublime Text is started this way, it wipes out any contents
of that directory if it already exists, so don't store anything important there.

See https://www.sublimetext.com/docs/safe_mode.html for more details.

### Diagnosing Trouble from the Data Directory

If you have reached the conclusion that the trouble you are experiencing has
come from the Data Directory (3rd-Party Packages and/or local customization),
you can discover the source of the problem by following these steps.  Note
that knowing *when* the problem started is also an asset, because the cause
will most likely have occurred just before the problem started.

- Close Sublime Text if it is running.
- Rename the [Data directory](../getting-started/basic-concepts.md#the-data-directory)
  to another name to keep it as a backup and reference about what
  Packages you installed and what customizations you made.
- Re-start Sublime Text.

When Sublime Text starts, it will create a fresh new Data Directory.

#### Diagnosis by Isolating Packages

    Note:  In subsequent steps, it is recommended to keep the contents of the
    renamed (backup) of the problematic Data Directory unaltered for sake of
    preserving the evidence.  This is so that if your first attempt at isolating
    the problem isn't successful, you can repeat it (using smaller or different
    steps) as many times as needed until you have isolated the problem.

Now you can re-install 3rd-Party Packages you had in place (and were working
correctly) well before the problem started.  Test to verify whether the
problem is occurring after this step.

- If the problem is *not occurring* at this point, you can continue to
  diagnose by re-adding each subsequent Package one by one, until the
  behavior returns, at which point you will know what to exclude.

- On the other hand, if the problem ***is occurring***, you know the problem
  is somewhere in that group of Packages, and you can take steps to further
  isolate the source by reverting and repeating this step with only half of
  the Packages, and keep dividing the group until you have isolated the
  source.

#### Diagnosis by Isolating Customizations

If you have reached this point and the problem has not returned, now you
can add your own customizations in, one at a time, until the problem
resurfaces.  If/when you encounter the problem again, you will know where
to investigate further to remedy.

