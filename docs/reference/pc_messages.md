---
title: "Package Control: Messages"
---

<!-- https://packagecontrol.io/docs/messaging -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/messaging.html -->
<!-- https://github.com/wbond/package_control/blob/master/example-messages.json -->


# Messages

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
Package Control looks through each key in the messages.json file
and shows the content of the text file that is a value of any key
that is higher than the previous version of the package the user had installed.
Thus if the user had version 1.1.0 installed,
the files for 1.2.0 and 1.1.1 would be shown.
If the user had version 1.1.1 installed,
only the messages for version 1.2.0 would be shown.


## Example

```json
{
	"install": "messages/install.txt",
	"1.1.1": "messages/1.1.1.txt",
	"1.2.0": "messages/1.2.0.txt"
}
```
