---
title: Installation
---

Make sure to read the [conditions for use](https://www.sublimetext.com/buy) on the official site. **Sublime Text is not free**.

The process of installing Sublime Text is different for each platform.

## 32 bits or 64 bits?  



### OS X
You can ignore this section:
there is only one version
of Sublime Text for OS X.


### Windows
You should be able to run
the 64-bit version
if you are using a modern version Windows.
If you are having trouble running the 64-bit version,
try the 32-bit version.


### Linux
Run this command
in your terminal
to check your operating system's type::

```bash
uname -m
```

## Windows
### Portable or Not Portable?

Sublime Text comes in two flavors for Windows:
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
with File Explorer.

**Portable installations** keep all files
needed by Sublime Text
in a single folder.
This folder can be moved around
and the editor will still work.


### How to Install the Normal Version of Sublime Text

1. Download the installer
2. Double click on the installer


### How to Install the Portable Version of Sublime Text

1. Download the compressed files
2. Unzip them to a folder of your choice

You will find the *sublime_text.exe* executable inside that folder.

## OS X

1. Download *.dmg* file
2. Open *.dmg* file
3. Drag the Sublime Text 3 bundle into the *Applications* folder

To create a `symbolic link` to use at the command line issue the following command at the terminal::

```bash
ln -s  "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```


## Linux

You can download the package and uncompress it manually. Alternatively, you can use the command line.


### Ubuntu

**For i386**

```bash
cd ~
wget http://c758482.r82.cf2.rackcdn.com/sublime-text_build-3083_i386.deb
```
**For x64**

```bash
cd ~
wget http://c758482.r82.cf2.rackcdn.com/sublime-text_build-3083_amd64.deb
```


### Other Linux Distributions

**For i386**

```bash
cd ~
wget http://c758482.r82.cf2.rackcdn.com/sublime_text_3_build_3083_x32.tar.bz2
tar vxjf sublime_text_3_build_3083_x32.tar.bz2
```

**For x64**

```bash
cd ~
wget http://c758482.r82.cf2.rackcdn.com/sublime_text_3_build_3083_x64.tar.bz2
tar vxjf sublime_text_3_build_3083_x64.tar.bz2
```

Now we should move the uncompressed files to an appropriate location.

```bash
sudo mv Sublime\ Text\ 3 /opt/
```


Lastly, we create a `symbolic link` to use at the command line.

```bash
sudo ln -s /opt/Sublime\ Text\ 3/sublime_text /usr/bin/sublime
```


In Ubuntu, if you also want to add Sublime Text to the Unity launcher, read on.

First we need to create a new file.

```bash
sudo sublime /usr/share/applications/sublime.desktop
```


Then copy the following into it.

```
[Desktop Entry]
Version=1.0
Name=Sublime Text 3
# Only KDE 4 seems to use GenericName, so we reuse the KDE strings.
# From Ubuntu's language-pack-kde-XX-base packages, version 9.04-20090413.
GenericName=Text Editor

Exec=sublime
Terminal=false
Icon=/opt/Sublime Text 3/Icon/48x48/sublime-text.png
Type=Application
Categories=TextEditor;IDE;Development
X-Ayatana-Desktop-Shortcuts=NewWindow

[NewWindow Shortcut Group]
Name=New Window
Exec=sublime -n
TargetEnvironment=Unity
```

If you've registered your copy of Sublime Text, but every time you open it you're asked to enter your license, you should try running this command.

```bash
sudo chown -R username:username /home/username/.config /sublime-text-3
```

Just replace `username` with your account's username. This should fix the permission error in the case that you opened up Sublime Text as root when you first entered the license.

## Release Channels

At the time of this writing, two major versions of Sublime Text exist: Sublime Text 2 and Sublime Text 3. Generally speaking, Sublime Text 3 is the better choice. Even though it's technically in beta, it's as stable as Sublime Text 2 and has more features.

Use Sublime Text 2 only if you have found issues running Sublime Text 3 or you depend on any package not available for Sublime Text 3.


### Getting Sublime Text 3

Sublime Text 3 currently has two release *channels*:

* [Stable](https://www.sublimetext.com/3)
* [Dev](https://www.sublimetext.com/3dev)

**Stable releases** are better tested and more reliable for everyday use than development builds. **The majority of users should only use stable releases.**

The *dev* channel is more unstable. Dev builds may contain bugs and not work reliably. They are updated more often than beta releases.

**Dev builds are only available to registered users.**

### Getting Sublime Text 2

We recommend Sublime Text 3, but if you have chosen to use Sublime Text 2 you can download it [here](https://www.sublimetext.com/2)