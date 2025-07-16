---
title: "Package Control: Renaming a package"
---

<!-- Originals: -->
<!-- https://packagecontrol.io/docs/renaming_a_package -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/renaming_a_package.html -->


# Renaming a package

The following guide will step you through the process of renaming a package you have submitted to Package Control.

In short, the goal is to update the main channel so that:

- your entry gets its new name
- is sorted alphabetically
- has its previous name in the array of `previous_names`

The `previous_names` will ensure Package Control is able to move existing installations over to the new name smoothly. Don't forget to update your documentation, menu, and command palette entries, to have the same new name.


## 1 Review the new name

Read the [naming guidelines][1] to make sure your new name will work.


## 2 Fork the channel

1.  Fork the [Package Control Channel][2].
2.  Clone your fork to your machine
3.  Open the package_control_channel/ folder with Sublime Text


## 3 Update the repository

1.  Remove your package entry from its old location. It will be in one of the JSON files in the repository sub-folder of package_control_channel.
2.  Paste the package entry into the correct JSON file based on the new name. We keep package entries alphabetized to reduce conflicts when merging pull requests.
3.  Update the name key with the new name.
4.  Add a previous_names key to the top-level JSON structure for your package. previous_names needs to be an array of strings. For example:

```json
    {
        "name": "AlignmentPlus",
        "previous_names": ["Alignment"],
        "details": "https://bitbucket.org/wbond/sublime_alignment",
        "releases": [
            {
                "sublime_text": "*",
                "tags": true
            }
        ]
    }
```


## 4 Submit a Pull Request

Now you're ready to push your changes and make a PR on the [Package Control Channel][2] repository. Follow any guidelines there and make sure the tests pass!

Note that this is a community project and people review PR's in their spare time: it might take a while.

[1]: https://github.com/wbond/package_control_channel#2-pick-a-name
[2]: https://github.com/wbond/package_control_channel
