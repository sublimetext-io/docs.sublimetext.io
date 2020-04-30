---
title: Installation
---

Make sure to read the [conditions for use](https://www.sublimetext.com/buy)
on the official site.
**Sublime Text is not free**.
However,
you may evaluate it without a license.

Download links for all supported platforms
can be found on the [Download][] page.

The process of installing Sublime Text
is different for each platform.

[Download]: https://www.sublimetext.com/3


## 32 or 64 bits?

**64 bit versions should be preferred.**
Only use a 32-bit version
if you are having problems with the 64-bit version
or you are running a 32-bit operating system.
Note that some features,
such as [Git Integration][]
are only available in the 64-bit version.

[Git Integration]: https://www.sublimetext.com/docs/git_integration.html

### macOS

There is only one version
of Sublime Text for macOS.


### Windows

You should be able to run
the 64-bit version
if you are using a modern and supported version Windows
(read: anything older than Windows XP).


### Linux

Run the following command
in your terminal
to check your operating system's type.
`x86_64` means you are on a 64-bit system.

```bash
$ uname -m
x86_64
```

## Portable or Not Portable?

Sublime Text comes in two flavors (for Windows specifically):

- normal
- portable.

Most users should be better served by a normal installation.
Use the portable version only if you know you need it.

**Normal installations** separate data
between two folders:
the installation folder proper,
and the *data directory*
(user-specific directory for data;
explained later in this guide).
Normal installations
also integrate Sublime Text
with the File Explorer.

**Portable installations** keep all files
needed by Sublime Text
in a single folder.
This folder can be moved around
and the editor will still work.


## How to Install

### macOS and Windows

1. Download the installer.
2. Double click on the installer and follow the provided steps.

### Linux

The recommended way is to
use the [official Linux repositories][repositories]
for commonly used Linux distributions
and follow the corresponding steps
to install Sublime Text using your system's package manager.

If there is no repository for your system,
you can look for a Sublime Text entry
on your distro's repository.

[repositories]: https://www.sublimetext.com/docs/3/linux_repositories.html


#### Manual Installation

The following sequence of Bash commands can be used
to install Sublime Text manually.
Replace `3211` with the latest build available
(or any older build number).

```bash
cd ~
wget https://download.sublimetext.com/sublime_text_3_build_3211_x64.tar.bz2
tar vxjf sublime_text_3_build_*_x64.tar.bz2
# Move the uncompressed files to an appropriate location.
sudo mv sublime_text_3 /opt/sublime_text
# Create a symbolic link to use at the command line.
sudo ln -s /opt/sublime_text_3/sublime_text /usr/local/bin/subl
# Create a symbolic link for the desktop entry.
sudo ln -s /opt/sublime_text_3/sublime_text.desktop /usr/share/applications/sublime_text.desktop
```

## How to Install the Portable Version

::: tip
The portable version is activated
whenever a `Data/` folder exists in the installation folder,
i.e. the folder you extracted the portable archive to.
:::

### Windows

1. Download the compressed archive with the portable version.
2. Unzip it to a folder of your choice.

You will find the `sublime_text.exe` executable inside that folder.

### Linux

The steps are similar
to the [manual installation](#manual-installation) steps above.

1. Download the tarball.
2. Unzip it to a folder of your choice.
3. Create a `Data/` folder inside that folder.

You will find the `sublime_text` executable inside that folder.

### macOS

1. Download `.dmg` file.
2. Open `.dmg` file.
3. Drag the Sublime Text 3 bundle into the *Applications* folder

To create a `symbolic link` to use at the command line,
issue the following command at the terminal:

```bash
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

<!-- TODO check this by someone with a mac -->


## Release Channels

Sublime Text currently has two release *channels*:

* [Stable](https://www.sublimetext.com/3)
* [Dev](https://www.sublimetext.com/3dev)

**Stable releases** are better tested 
and more reliable for everyday use.
**The majority of users should only use stable releases.**

The *dev* channel is more unstable.
Dev builds may contain bugs and not work reliably.
They are updated more often than beta releases.
**Dev builds are only available to registered users.**


## Older Versions

In the event you want to downgrade your Sublime Text,
you can access binaries for any previously released version
by replacing the build number in the download URL.
For example, to retrieve the Windows release for Sublime Text 3.0,
grab the latest download URL provided and replace it with the one from the Sublime Text 3.0 release.

- 3.2.2 (*Build 3211*):
  [https://download.sublimetext.com/Sublime%20Text%20Build%20**3211**%20x64%20Setup.exe](https://download.sublimetext.com/Sublime%20Text%20Build%203211%20x64%20Setup.exe)
- 3.0 (*Build 3143*):
  [https://download.sublimetext.com/Sublime%20Text%20Build%20**3143**%20x64%20Setup.exe](https://download.sublimetext.com/Sublime%20Text%20Build%203143%20x64%20Setup.exe)

Although discouraged,
Sublime Text 2 can be found [on its old download page][st2].
Because it is unsupported,
you will need to figure out on your own
how to install it.

[st2]: https://www.sublimetext.com/2
