---
title: "Package Control Client: Troubleshooting"
---

<!-- Originals: -->
<!-- https://packagecontrol.io/docs/troubleshooting -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/troubleshooting.html -->

# Troubleshooting


## There are no packages available for installation

This message is displayed whenever Package Control can not find any packages that are installable. The most common reason for this is an HTTP error in downloading package information from the default channel.

To help resolve the issue, follow these steps:

1.  Select the View _\>_ Show Console menu entry
2.  Look for any lines starting with Package Control:
3.  Try enabling the [debug log][6] for more information
4.  Ensure any proxy information is set in [the Package Control settings][7]
5.  If you have a proxy and it rewrites secure connections, add its CA cert as trusted:
    1.  Click the Preferences _\>_ Browse Packages… menu
    2.  Open the User folder
    3.  Create a file named Package Control.user-ca-bundle and paste in a PEM-formatted version of the certificate
6.  Make sure you have the latest version of Package Control installed: **3.3.0**
7.  If you are still having trouble, review the [open issues][8]. If you do not find a relevant issue, please open a new one, and be sure to include your debug log.

## Purging and Reinstalling

Many users run into issues with Package Control because they have an old, broken or pre-release version of Package Control that has become stuck. Since Package Control updates itself, a bug can prevent the automatic upgrade from working, leaving users orphaned on an old version.

The first step in debugging issues with Package Control is to purge any existing copies.

1.  Select the Preferences _\>_ Settings – User menu entry
2.  Remove "Package Control" from the "ignored\_packages" setting, if present
3.  Select the Preferences _\>_ Browse Packages… menu entry
4.  Delete the folder named Package Control
5.  Browse up a folder and then into Installed Packages
6.  Delete Package Control.sublime-package if it exists
7.  Reinstall Package Control using the [installation instructions][9]

## Enabling the Debug Log

If purging and reinstalling did not help resolve an issue, the next step is to enable the debug log. The debug log contains extensive information about what Package Control is doing behind the scenes, and can help to diagnose why it isn’t working properly.

1.  Click the Preferences menu
2.  Select Package Settings
3.  Choose Package Control
4.  Click Settings - User
5.  Add the setting "debug": true
6.  Save the settings file

Now when performing actions with Package Control, debug information will be printed to the Sublime Text console. The console can be opened by pressing ctrl_+_\` or using the View _\>_ Show Console menu entry.

## Windows Errors 12029 and 12057

On Windows, Package Control utilizes the WinINet C++ API for web requests. This allows Package Control to rely on your OS for auto-configuration of proxies and secure certificate validation.

Unfortunately there are a couple of common WinINet errors that users run into, including:

*   Connection refused (errno 12029) during HTTP write phase of downloading
*   Error checking for server certificate revocation (errno 12057) during HTTP write phase of downloading

Since WinINet is a system API, it is configured through Internet Explorer.

### Errno 12029

A number of users have reported success in resolving this issue by resetting the Internet Explorer advanced settings to their default values.

*   [![Open Internet Options](/img/ie_1_internet_options.png)][10]
*   [![Restore Advanced Settings](/img/ie_2_restore_advanced_settings.png)][11]

1.  Open Internet Explorer
2.  Click the gear icon
3.  Select _Internet Options_
4.  Change to the _Advanced_ tab
5.  Click the _Reset Advanced Settings_ button
6.  Scroll down to the _Security_ section of the options
7.  Verify that TLS 1.0, TLS 1.1 and TLS 1.2 are checked

### Errno 12057

Some users run into issues trying to check for SSL certificate revocation. This may have to do with a proxy server not properly proxying the requests for the certificate revocation list.

*   [![Open Internet Options](/img/ie_1_internet_options.png)][12]
*   [![Restore Advanced Settings](/img/ie_3_server_certificate_revocation.png)][13]

1.  Open Internet Explorer
2.  Click the gear icon
3.  Select _Internet Options_
4.  Change to the _Advanced_ tab
5.  Scroll down to the _Security_ section of the options
6.  Uncheck the option _Check for server certificate revocation\*_
7.  Restart your machine

This error indicates something on your machine is blocking the connection to the server. It could be any number of different things.

[1]: /docs
[2]: #There_are_no_packages_available_for_installation
[3]: #Purging_and_Reinstalling
[4]: #Enabling_the_Debug_Log
[5]: #Windows_Errors_12029_and_12057
[6]: #Enabling_the_Debug_Log
[7]: /docs/settings
[8]: https://github.com/wbond/package_control/issues?q=is%3Aopen
[9]: /installation
[10]: /img/ie_1_internet_options.png
[11]: /img/ie_2_restore_advanced_settings.png
[12]: /img/ie_1_internet_options.png
[13]: /img/ie_3_server_certificate_revocation.png
