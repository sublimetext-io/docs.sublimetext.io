---
title: "Package Control: channel.json"
---

<!-- Original: https://github.com/wbond/package_control/blob/master/example-channel.json -->


# Examples for the channel.json

The default [seed channel.json file][seed] lists registered repositories.
A [crawler][] compiles this to a channel
suitable for consumption by the [Package Control client][client]
running in Sublime Text. 
The crawler visits all listed repositories
and checks all packages in those repositories
for the latest releases and the current metadata.

This results in a compiled channel.json
with fully resolved package and library information in the
[libraries_cache][lc] and [packages_cache][pc] properties.
It is can be found in [the crawler release assets][asset]
and is publicly available at https://packages.sublimetext.io/channel.json.

[seed]: https://github.com/wbond/package_control_channel/blob/master/channel.json
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
`schema_version` is currently at [4.0.0][schema].

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
[schema]: https://github.com/wbond/package_control/blob/master/sublime-package.json#L109


### `repositories`

This array lists the repositories to be includes in the channel.
All repositories must be an HTTPS URL or a local or relative file path.

The following values are supported:

- an external `repository.json` URL
- a repository JSON file located relative to this one, via a relative path
- a `file:///` protocol URL
- a single Git repository URL
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
from multiple repositories in a single HTTP request,
allowing for significantly improved performance.

The first level keys are the repository JSON URLs
(in this example "https://packagecontrol.io/packages.json").

Each repository JSON has an array of packages with their fully expanded info.
This means that the "details" key must be expanded
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
(instead of "base" and "tags"):

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
