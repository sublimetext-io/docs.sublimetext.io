---
title: "Package Control: Renaming a package"
---

<!-- Originals: -->
<!-- https://packagecontrol.io/docs/renaming_a_package -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/renaming_a_package.html -->


# Renaming a package

Let's guide you through the process of renaming a package in the [default Package Control channel][pcc].

The goal is to update the main channel so that:

- your entry gets its new "name"
- is sorted alphabetically
- has its previous name in the array of "previous_names"

The "previous_names" will ensure Package Control
is able to move existing installations over to the new name smoothly.
Don't forget to update your documentation, menu, and command palette entries,
to also have the same new name.


## Review the new name

Read the [naming guidelines][naming] to make sure your new name will work.

[naming]: pc_submitting.html#_pick-a-name


## Fork the channel

1. Fork the [Package Control channel][pcc].
2. Clone your fork to your machine
3. Open it with Sublime Text


## Update the repository

1. Remove your package entry from its old location.
   It will be in one of the JSON files
   in the `repository` sub-folder.
2. Paste the package entry into the correct JSON file
   based on the new name.
   We keep package entries alphabetized
   to reduce conflicts when merging pull requests.
3. Update the "name" key with the new name.
4. Add a "previous_names" key to the top-level JSON structure for your package.
   "previous_names" needs to be an array of strings. 


### Example

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


## Submit a Pull Request

Now you're ready to commit and push your changes
and make a PR on the [Package Control Channel][pcc] repository.
Follow any guidelines there and make sure the tests pass!

Note that this is a community project
and people review PR's in their spare time: it might take a while.

[pcc]: https://github.com/wbond/package_control_channel
