---
title: "Package Control: channel.json"
---

<!-- Original: https://github.com/wbond/package_control/blob/master/example-channel.json -->

# channel.json

## Examples

The default [seed `channel.json` file][seed] lists registered repositories.
A [crawler][] compiles this to a channel
suitable for consumption by the [Package Control client][client]
running in Sublime Text.
The crawler visits all listed repositories
and checks all packages in those repositories
for the latest releases and the current metadata.

This results in a *compiled* `channel.json`
with fully resolved package and library information in the
[`libraries_cache`][lc] and [`packages_cache`][pc] properties.
It can be found in [the crawler release assets][asset],
which is publicly available at https://packages.sublimetext.io/channel.json.

[seed]: https://github.com/sublimehq/package_control_channel/blob/master/channel.json
[crawler]: https://github.com/packagecontrol/thecrawl/tree/main
[client]: https://packages.sublimetext.io/packages/Package%20Control/
[lc]: #libraries-cache
[pc]: #packages-cache
[asset]: https://github.com/packagecontrol/thecrawl/releases/tag/the-channel


## Properties

- `$schema`
- `schema_version`
- `repositories`
- `packages_cache`
- `libraries_cache`

`$schema` is used by [LSP][lsp] and [LSP-json][lspjson]
to provide linting and completions.

`schema_version` denotes the version of the file format.
The latest schema version is [4.0.0][schema].

```json
{
    "$schema": "sublime://packagecontrol.io/schemas/channel",
    "schema_version": "4.0.0",
    "repositories": [],
    "packages_cache": {},
    "libraries_cache": {}
}
```

[lsp]: https://packages.sublimetext.io/packages/LSP/
[lspjson]: https://packages.sublimetext.io/packages/LSP-json/
[schema]: https://github.com/sublimehq/package_control/blob/master/sublime-package.json


### `repositories`

This array lists the repositories to be included in the channel.
All entries must point to a remote (`https://`) or a local (`file://`) location
that can be resolved to a repository.

The following values are supported:

- a HTTPS URL to a `repository.json` file
- a `file:///` protocol URL for a local `repository.json` file
- a relative path to the current resource
- a URL to a supported git hosting platform,
  currently GitHub, GitLab, and BitBucket
  (this is mostly useful for users adding a single package repository
  in their Sublime installation)
- a GitHub user or organization
  (possible, but not recommended)

```json
{
	"$schema": "sublime://packagecontrol.io/schemas/channel",
	"schema_version": "4.0.0",
	"repositories": [
		"https://packagecontrol.io/packages.json",
		"./local/repository.json",
		"file:///absolute/path/to/repository.json",
		"https://github.com/buymeasoda/soda-theme",
		"https://github.com/SublimeText"
	],
}
```


### `packages_cache`

The `packages_cache` is technically optional,
but allows the channel to cache and deliver package data
from multiple repositories in a single HTTP request
to significantly improve performance.

The first-level keys are the repository JSON URLs
(in this example "https://packagecontrol.io/packages.json").

Each repository JSON has an array of packages with their fully expanded info.
This means that any `details` key must be expanded
into the various keys it provides.

```json
{
	"packages_cache": {
		"https://packagecontrol.io/packages.json": [
			{
				"name": "Alignment",
				"description": "Multi-line and multiple selection alignment plugin",
				"author": "wbond",
				"homepage": "http://wbond.net/sublime_packages/alignment",
				"releases": [
					{
						"version": "2.0.0",
						"date": "2011-09-18 20:12:41",
						"url": "https://packagecontrol.io/Alignment.sublime-package",
						"sublime_text": "*"
					}
				]
			}
		]
	}
}
```


### `libraries_cache`

The `libraries_cache` is just like `packages_cache`,
but for libraries.
Like with packages, library info must be fully resolved,
which for packages means releases must have the following properties
(instead of `base` and `tags`):

- `url`
- `version`
- `sublime_text`
- `platforms`

```json
{
	"libraries_cache": {
		"https://packagecontrol.io/packages.json": [
			{
				"name": "bz2",
				"description": "Python bz2 module",
				"author": "wbond",
				"homepage": "https://github.com/wbond/package_control",
				"issues": "https://github.com/wbond/package_control/issues",
				"releases": [
					{
						"version": "1.0.0",
						"date": "2011-09-18 20:12:41",
						"url": "https://codeload.github.com/codexns/sublime-bz2/zip/1.0.0",
						"sublime_text": "*",
						"platforms": ["*"],
						"python_versions": ["3.3", "3.8"]
					}
				]
			}
		]
	}
}
```
