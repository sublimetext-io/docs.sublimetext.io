---
title: "Package Control: Channels and Repositories"
---

<!-- Originals: -->
<!-- https://packagecontrol.io/docs/channels_and_repositories -->
<!-- https://github.com/wbond/packagecontrol.io/blob/master/app/html/docs/channels_and_repositories.html -->


# Channels and Repositories

Channels contain a list of one or more repositories. Repositories contain a list of one or more packages.

Channels → Repositories → Packages.

The [`package_control_channel` Git repository][pcc]
collects lists of packages and various repositories
(like those for SublimeLinter or LSP plugin families).
This creates the primary public repository for Sublime Text packages.
Each Git repository is then crawled for additional metadata,
and this is all compiled into the public [`channel.json`][asset]. 

The Package Control client comes pre-installed with this channel.
(Well, currently it still comes with the old one:
https://packagecontrol.io/channel_v3.json).

[pcc]: https://github.com/wbond/package_control_channel
[asset]: https://github.com/packagecontrol/thecrawl/releases/tag/the-channel


## More about channels

Channels are JSON files hosted on a URL
that contains a list of repository URLs.
When a user requests to install a package,
their channels are queried for a list of repositories.  

See the [`channel.json` documentation][channel] for the format. 

[channel]: pc_channel.html


## More about repositories

Repositories are JSON files hosted on a URL that contain a list of packages.

See the [`repository.json` documentation][repo] for the format. 

The JSON structure allows for specifying platforms (Windows, macOS, Linux),
compatible versions of Sublime Text, labels, URLs and more.
Each package is typically a GitHub, GitLab or Bitbucket repo.

[repo]: pc_repository.html


## Managing your own package distribution

If you have packages that don't fit in the public channel, you can still use the Package Control client to distribute, discover and manage packages.

It is possible, although not very common,
to create a private channel to distribute packages.
It is usually easier to create a private _repository_ instead,
which the Package Control client can also use to find and update packages.
Even individual packages can be managed via the client,
which can be especially convenient for small teams
needing to manage a set of shared, proprietary, tools.

See the [client package usage documentation][usage] for more details.

[usage]: pc_client_usage.html

