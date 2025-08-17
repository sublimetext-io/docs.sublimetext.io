---
title: "Package Control: Troubleshooting"
---

<!-- Originals: -->
<!-- https://packagecontrol.io/docs/troubleshooting -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/troubleshooting.html -->

# Package Control: Troubleshooting


## There are no packages available for installation

This message is displayed whenever Package Control can not find
any packages that are installable.
The most common reason for this is an HTTP error
in downloading package information from the default channel.

To help resolve the issue, follow these steps:

1. Select the *View → Show Console* menu entry
2. Look for any lines starting with "Package Control:"
3. Try enabling the [debug log][debug] for more information
4. Ensure any proxy information, if needed,
   is set in the Package Control settings.
5. If you have a proxy and it rewrites secure connections,
   add its CA cert as trusted:
    - Click the *Preferences → Browse Packages…* menu.
    - Open the User folder.
    - Create a file named `Package Control.user-ca-bundle`
      and paste in a PEM-formatted version of the certificate.
6. Make sure you have the latest version of Package Control installed.
7. If you are still having trouble,
   review the [open issues][issues].
   If you do not find a relevant issue, please open a new one,
   and be sure to include your debug log.

[debug]: #Enabling_the_Debug_Log
[issues]: https://github.com/wbond/package_control/issues?q=is%3Aopen

## Package Control not working on macOS

In some cases, Package Control cannot load external libraries on macOS
and will become unable to update itself to a version with a fix.
Please refer to this issue and its solution:
[package_control#1612][#1612]

[#1612]: https://github.com/wbond/package_control/issues/1612


## Purging and Reinstalling

Many users run into issues with Package Control because they have an old,
broken or pre-release version of Package Control that has become stuck.
Since Package Control updates itself,
a bug can prevent the automatic upgrade from working,
leaving users orphaned on an old version.

The first step in debugging issues with Package Control
is to purge any existing copies.

1. Select the *Preferences → Settings – User* menu entry.
2. Remove "Package Control" from the `ignored_packages` setting, if present.
3. Select the *Preferences → Browse Packages…* menu entry.
4. Delete the folder named Package Control.
5. Browse up a folder and then into Installed Packages.
6. Delete `Package Control.sublime-package` if it exists.
7. Reinstall Package Control.


## Enabling the Debug Log

If purging and reinstalling did not help resolve an issue,
the next step is to enable the debug log.
The debug log contains extensive information
about what Package Control is doing behind the scenes,
and can help to diagnose why it isn’t working properly.

1. Click the Preferences menu.
2. Select Package Settings.
3. Choose Package Control.
4. Click Settings.
5. Add the setting `"debug": true`.
6. Save the settings file.

Now when performing actions with Package Control,
debug information will be printed to the Sublime Text console.
The console can be opened by pressing
<Key k="ctrl+`"/> or using the *View → Show Console* menu entry.
