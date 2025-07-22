---
title: "Package Control: repository.json"
---

<!-- Original: -->
<!-- https://github.com/wbond/package_control/blob/master/example-repository.json -->


# Examples for the repository.json

The default repository.json is managed in the package_control_channel repo:
https://github.com/wbond/package_control_channel/blob/master/repository.json


## Properties

- `$schema`
- `schema_version`
- `packages`
- `libraries`
- `includes`

`$schema` is used by [LSP][lsp] and [LSP-json][lspjson]
to provide linting and completions.
"schema_version" is currently at 3.0.0.

```json
{
    "$schema": "sublime://packagecontrol.io/schemas/repository",
    "schema_version": "3.0.0",
    "packages": [],
    "libraries": [],
    "includes": []
}
```

[lsp]: https://packages.sublimetext.io/packages/LSP/
[lspjson]: https://packages.sublimetext.io/packages/LSP-json/


## `includes`

If you want to split your repository up into multiple smaller files
for the sake of organization,
the "includes" key allows you to enter URL paths
that will be combined together.
These URLs these can be relative or absolute.
This is also how the default repository is managed.

All repositories must be an HTTPS URL, or a local file path.

The following values are supported:

- an external repository.json URL
- a repository located relative to this one, via a relative path
- a `file:///` protocol URL

```json
{
	"includes": [
		"./repository/0-9.json",
		"./repository/a.json",
		"file:///absolute/path/to/repository.json",
		"https://packagecontrol.io/repository/b.json"
	]
}
```


## `packages`

The only required properties for each package are:

- `details`
- `releases`

The `details` field is a GitHub, BitBucket or GitLab repository URL (HTTPS).
Properties of the package will be retrieved from that automatically,
but can also be explicitly set here:

- `name` —
  if the package name is different from the git repository name
- `author` (either a string or an array of strings) —
  if it is different from the GitHub username owning the repository
- `description` —
  if it should be different from the GitHub repository description
- `readme` —
  if different from each platform's default README URL
  - This URL should be to the raw source of the file, not the rendered webpage.
- `issues` —
  when using a different bug tracker from each platform's default issues page

Additional optional URLs can be provided,
which will be displayed on the Package Control website:

- `homepage` —
  if the project has a website other than its repository
- `donate` —
  for users to donate to the package maintainer
- `buy` —
  for commercial packages

When renaming a package, existing installations can be "redirected" using this property:

- `previous_names` — see also [renaming documentation][rename]

To help users find a package, they can be tagged with:

- `labels` — see also the [labels style guide][labels]

[rename]: pc_renaming.html
[labels]: pc_submitting.html#labels-style-guide


### Quick examples

This is all you need, with all the information pulled from the GitHub, Bitbucket or GitLab repository.

```json
{
	"packages": [		
		{
			"details": "https://github.com/wbond/sublime_alignment",
			"releases": [
				{
					"sublime_text": "*",
					"tags": true
				}
			]
		}
	]
}
```

This is more complete, and adds
a specific name, labels and homepage and donation links.

```json
{
	"packages": [
		{
			"name": "Solarized Color Scheme",
			"details": "https://github.com/braver/Solarized",
			"homepage": "https://ethanschoonover.com/solarized/",
			"donate": "https://paypal.me/koenlageveen",
			"labels": ["color scheme"],
			"releases": [
				{
					"sublime_text": ">=3000",
					"tags": true
				}
			]
		}
	]
}
```

You can find tons of examples in the default repository
at https://github.com/wbond/package_control_channel/tree/master/repository.


### Package metadata without `details`

Package metadata are resolved using `details`,
where each field can be overridden by explicitly set values.
If `details` is absent, each release must specify a `base` url.
In this and other aspects,
release based packages behave the same as tag based packages.

```json
{
	"packages": [
		{
			"name": "Package With Asset",
			"description": "A library with custom download assets",
			"author": "Jon Doe",
			"releases": [
				{
					"base": "https://github.com/SublimeText/PackageWithAsset",
					"asset": "Package.With.Asset-${version}-st${st_build}-${platform}.sublime-package",
					"platforms": ["windows-x64", "linux-x64", "osx-x64"],
					"sublime_text": ">=4107",
					"tags": "st4107-"
				}
			]
		},
		{
			"name": "My Package",
			"description": "A locally hosted Sublime Text package",
			"author": "John Doe",
			"issues": "https://company.com/software/issues",
			"releases": [
				{
					"platforms": ["windows-x64"],
					"version": "1.0.0",
					"url": "file:///c:/absolute/path/to/My Package.sublime-package"
				},
				{
					"platforms": ["linux-x64"],
					"version": "1.0.0",
					"url": "./path/relative/to/repository_json/My Package.sublime-package"
				}
			]
		}
	]
}
```


## releases

All packages must have one or more `releases`.
Releases reference tags named in accordance with [semver](https://semver.org).
The value for `tags` can be simply `true` or a string prefix.
The latter is specifically useful when targeting older versions of ST
with a specific range of tags.

Note that previously releases based on branches instead of tags was supported,
but this has been deprecated.


### sublime_text

A release MUST contain a "sublime_text" version selector.
Use `*` for all versions,
or "<3000", "3500-4000", etc.
to compare against specific build numbers of Sublime Text.
Valid selectors are:

- `<{build}`
- `<={build}`
- `>{build}`
- `>={build}`
- `{min_build} - {max_build}`

In the example below, the entry with "sublime_text": "<3000" will match tags like "st2-1.0.0", "st2-1.1.0".  
The release with "sublime_text": "3000 - 3999" will match tags like "st3-1.0.0", "st3-1.1.0".  
The release with "sublime_text": ">=4000" will match tags like "st4-1.0.0", "st4-1.1.0".


```json
{
	"details": "https://github.com/wbond/sublime_alignment",
	"releases": [
		{
			"sublime_text": "<3000",
			"tags": "st2-"
		},
		{
			"sublime_text": "3000 - 3999",
			"tags": "st3-"
		},
		{
			"sublime_text": ">=4000",
			"tags": "st4-"
		}
	]
}
```


### platforms

The `platforms` key allows specifying
what platform(s) the release is valid for.
Only the latest version for any given platform will be shown to the user.
It allows specifying a single platform, or a list of platforms.
Valid platform identifiers include:

- \*
- windows
- osx
- linux

An architecture suffix (`-x32`, `-x64`) is supported
but no longer relevant in today's world.

Note that this is an optional property:
if your releases supports all platforms you do not specify `"*"`,
but instead omit the property completely.

```json
{
	"details": "https://github.com/wbond/sublime_alignment",
	"releases": [
		{
			"platforms": ["osx", "linux"],
			"sublime_text": "*",
			"tags": "posix-"
		},
		{
			"platforms": "windows",
			"sublime_text": "*",
			"tags": "win32-"
		}
	]
}
```


### base

If for some reason one of the releases is from a different repository
than the top-level "details" key,
a "base" key may be specified in the release.
This repository will then be used for the matching tags.

```json
{
	"details": "https://github.com/wbond/sublime_alignment",
	"releases": [
		{
			"base": "https://github.com/wbond/sublime_alignment",
			"sublime_text": "<3000",
			"tags": true
		},
		{
			"sublime_text": ">=3000",
			"tags": true
		}
	]
}
```

### version, url, date

For manually created release zips files,
each individual "version" needs to be specified with
a "url" to the zip, and a "date".
Because this requires an update of the repository file for each release
it is not allowed in the default repository.

Versions needs to be numbered in accordance with [semver](https://semver.org). 

The URL needs to be a zip file containing the package.
It is permissible for the zip file to contain a single root folder
with any name.
All files will be extracted out of this single root folder.
This allows zip files from GitHub, GitLab and BitBucket to be used a sources.
The URL can be a relative path
from the location of the repository.json file that specifies it.

The date must be in the form "YYYY-MM-DD HH:MM:SS" and should be UTC.

```json
{
	"packages": [
		{
			"details": "https://github.com/wbond/sublime_alignment",
			"releases": [
				{
					"version": "2.0.0",
					"url": "https://codeload.github.com/wbond/sublime_alignment/zip/v2.0.0",
					"date": "2011-09-18 20:12:41",
					"sublime_text": "*"
				}
			]
		},
		{
			"details": "../alignment",
			"releases": [
				{
					"version": "2.0.0",
					"url": "./downloads/alignment-2.0.0.zip",
					"date": "2011-09-18 20:12:41",
					"sublime_text": "*"
				}
			]
		}
	]
}
```

### asset

If your package requires a build or compile step,
you might want to provide your releases via pre-compiled zip archives
or sublime-package files.
To do so, specify an "asset" key describing
the pattern of the name of the downloadable asset.

```json
{
	"name": "A File Icon",
	"details": "https://github.com/SublimeText/AFileIcon",
	"releases": [
		{
			"asset": "A File Icon.sublime-package"
		}
	]
}
```

If only a single asset is shipped per release,
globs can be used to fetch files of any name.
Supported globs:
 
- `*` — any number of characters
- `?` — single character placeholder

```json
{
	"name": "A File Icon",
	"details": "https://github.com/SublimeText/AFileIcon",
	"releases": [
		{
			"asset": "*.sublime-package"
		}
	]
}
```

Or `${version}`, `${st_build}` and `${platform}` can be used to match assets.
Note that "platforms" must explicitly list each supported platform,
for the platform variable to work.

- `${platform}` — a platform-arch string as given in "platforms" list.
  A separate explicit release is evaluated for each platform.
  If `"platforms": ['*']` is specified, the variable is set to "any".
- `${st_build}` — value of "sublime_text" stripped by leading operator:
  - `"*"` — any
  - `">=4107"` — 4107
  - `"<4107"` — 4107
  - `"4107 - 4126"` — 4107
- `${version}` — resolved semver without tag prefix: st4107-1.0.5 becomes 1.0.5

```json
{
	"packages": [
		{
			"details": "https://github.com/SublimeText/Less",
			"releases": [
				{
					"asset": "Less-${version}-st${st_build}.sublime-package",
					"sublime_text": "4107 - 4148"
				},
				{
					"asset": "Less-${version}-st${st_build}.sublime-package",
					"sublime_text": ">=4149"
				}
			]
		},
		{
			"details": "https://github.com/SublimeText/Less",
			"releases": [
				{
					"asset": "Less-*.*.*-st4107.sublime-package",
					"sublime_text": "4107 - 4148"
				},
				{
					"asset": "Less-*.*.*-st4149.sublime-package",
					"sublime_text": ">=4149"
				}
			]
		},
		{
			"details": "https://github.com/SublimeText/PackageWithAsset",
			"releases": [
				{
					"asset": "FileName-${platform}.sublime-package",
					"platforms": ["linux-arm64", "linux-x64", "osx-arm64", "osx-x64", "windows-x64"]
				}
			]
		},
	]
}
```

If names of download assets are not covered by the provided variable expansion,
an explicit release specification can be declared for each platform.

```json
{
	"details": "https://github.com/SublimeText/PackageWithAsset",
	"releases": [
		{
			"asset": "FileName-linux-aarch64.sublime-package",
			"platforms": ["linux-arm64"]
		},
		{
			"asset": "FileName-linux-amd64.sublime-package",
			"platforms": ["linux-x64"]
		},
		{
			"asset": "FileName-macosx-amd64.sublime-package",
			"platforms": ["osx-arm64"]
		},
		{
			"asset": "FileName-macosx-arm64.sublime-package",
			"platforms": ["osx-arm64"]
		},
		{
			"asset": "FileName-win-amd64.sublime-package",
			"platforms": ["windows-x64"]
		}
	]
}
```

## libraries

Note that the following documentation is not up to date
with latest developments in Sublime Text (ST) (e.g. the Python 3.8 plugin host)
or the Package Control 4.0 client package (PC4.0),
and is mostly included to document legacy use cases.

---

These are typically compiled Python extensions that are supplementary to,
or missing from Sublime Text.

Each library must have a name, description, author, issues URL,
and a list of releases.
Each release needs a version and url or base and tags keys.
The sublime_text, platforms and python_versions keys are optional
and default to `'*'`, `['*']` and `['3.3']` respectively.
If the URL is not over SSL,
there must be a sha256 key containing the sha256 hash of the package file.

```json
{
	"libraries": [
		{
			"name": "bz2",
			"description": "Python bz2 module",
			"author": "wbond",
			"issues": "https://github.com/codexns/sublime-bz2/issues",
			"releases": [
				{

					"base": "https://github.com/codexns/sublime-bz2",
					"tags": true
				},
				{
					"base": "https://github.com/codexns/sublime-bz2",
					"tags": true,
					"platforms": ["*"],
					"python_versions": ["3.3"],
					"sublime_text": "*"
				}
			]
		},
		{
			"name": "ssl-linux",
			"description": "Python _ssl module for Linux",
			"author": "wbond",
			"issues": "https://github.com/codexns/sublime-ssl-linux/issues",
			"releases": [
				{
					"version": "1.0.0",
					"url": "http://packagecontrol.io/ssl-linux.sublime-package",
					"platforms": ["linux"],
					"sha256": "d12a2ca2843b3c06a834652e9827a29f88872bb31bd64230775f3dbe12e0ebd4"
				}
			]
		}
	]
}
```

An example legacy python 3.3 dependency for ST2 on Windows,
provided as explicit download asset secured by sha256 hash
as being shipped via HTTP.
Note that ST2 is no longer supported by PC4.0.

```json
{
	"name": "ssl-windows",
	"description": "Python _ssl module for Sublime Text 2 on Windows",
	"author": "wbond",
	"issues": "https://github.com/codexns/sublime-ssl-windows/issues",
	"releases": [
		{

			"version": "1.0.0",
			"url": "http://packagecontrol.io/ssl-windows.sublime-package",
			"sublime_text": "<3000",
			"platforms": ["windows"],
			"sha256": "efe25e3bdf2e8f791d86327978aabe093c9597a6ceb8c2fb5438c1d810e02bea"
		}
	]
}
```

Libraries can point to standard WHEEL files.
An explicit platform-specific release key is needed for each download asset.

```json
{
	"name": "coverage",
	"author": "nedbatchelder",
	"description": "coverage.py - http://coverage.readthedocs.org/en/latest/",
	"homepage": "https://pypi.org/project/coverage/",
	"issues": "https://github.com/nedbat/coveragepy/issues",
	"releases": [
		{
			"platforms": ["windows-x64"],
			"python_versions": ["3.8"],
			"version": "7.3.2",
			"url": "https://files.pythonhosted.org/packages/9f/95/436887935a32fcead76c9f60b61f3fcd8940d4129bdbc50e2988e037a664/coverage-7.3.2-cp38-cp38-win_amd64.whl"
		},
		{
			"platforms": ["linux-x64"],
			"python_versions": ["3.8"],
			"version": "7.3.2",
			"url": "https://files.pythonhosted.org/packages/8d/1a/e4d0775502fae6ce2c2dd3692a66aff3b18e89757567e35680b9c63d89c5/coverage-7.3.2-cp38-cp38-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl"
		},
		{
			"platforms": ["osx-x64"],
			"python_versions": ["3.8"],
			"version": "7.3.2",
			"url": "https://files.pythonhosted.org/packages/a0/a6/9deeff0c49d865cd1c5ae5efc9442ff234f9b0e9d15cb4a9cda58ec255cc/coverage-7.3.2-cp38-cp38-macosx_10_9_x86_64.whl"
		},
		{
			"platforms": ["linux-x32"],
			"python_versions": ["3.3"],
			"version": "4.3.4",
			"url": "https://files.pythonhosted.org/packages/c1/cd/a35e25680822d400e2a32d1eddd017087a9cef78e3fd5dc29541d8051a58/coverage-4.3.4-cp33-cp33m-manylinux1_i686.whl"
		},
		{
			"platforms": ["linux-x64"],
			"python_versions": ["3.3"],
			"version": "4.3.4",
			"url": "https://files.pythonhosted.org/packages/8a/0f/5221822805edf3fc13e85c278de6451a5c08d0fd67e2c86e67e48b683a20/coverage-4.3.4-cp33-cp33m-manylinux1_x86_64.whl"
		},
		{
			"platforms": ["osx-x64"],
			"python_versions": ["3.3"],
			"version": "4.3.4",
			"url": "https://files.pythonhosted.org/packages/ac/dc/3e2d996c440a1a589f3323e806cf96d3c64650579483c3798ef2ea34b51a/coverage-4.3.4-cp33-cp33m-macosx_10_10_x86_64.whl"
		},
		{
			"platforms": ["windows-x32"],
			"python_versions": ["3.3"],
			"version": "4.2.0",
			"url": "https://files.pythonhosted.org/packages/a0/34/1185348cc5c541bbdf107438f0f0ea9df5d9a4233a974e9228b6ee815489/coverage-4.2-cp33-cp33m-win32.whl"
		},
		{
			"platforms": ["windows-x64"],
			"python_versions": ["3.3"],
			"version": "4.2.0",
			"url": "https://files.pythonhosted.org/packages/b1/55/02815cb8abb091033abb979ebde5122bb33b85c5987dede9ccd019033d19/coverage-4.2-cp33-cp33m-win_amd64.whl"
		}
	]
}
```

Latest wheel files can be fetched directly from PyPI,
using their official package URL,
even in a mix with releases in legacy dependency format.

```json
{
	"name": "coverage",
	"description": "coverage.py - http://coverage.readthedocs.org/en/latest/",
	"author": "wbond",
	"issues": "https://github.com/codexns/sublime-coverage/issues",
	"releases": [
		{
			"base": "https://github.com/codexns/sublime-coverage",
			"platforms": ["*"],
			"python_versions": ["3.3"],
			"tags": true
		},
		{
			"base": "https://pypi.org/project/coverage",
			"asset": "coverage-*-cp38-cp38-win_amd64.whl",
			"platforms": ["windows-x64"],
			"python_versions": ["3.8"]
		},
		{
			"base": "https://pypi.org/project/coverage",
			"asset": "coverage-*-cp38-cp38-manylinux_2_17_aarch64*.whl",
			"platforms": ["linux-arm64"],
			"python_versions": ["3.8"]
		},
		{
			"base": "https://pypi.org/project/coverage",
			"asset": "coverage-*-cp38-cp38-manylinux_2_5_x86_64*.whl",
			"platforms": ["linux-x64"],
			"python_versions": ["3.8"]
		},
		{
			"base": "https://pypi.org/project/coverage",
			"asset": "coverage-*-cp38-cp38-macosx_11_0_arm64.whl",
			"platforms": ["osx-arm64"],
			"python_versions": ["3.8"]
		},
		{	// fixed versions is specified by URL.
			"base": "https://pypi.org/project/coverage/7.0.3",
			"asset": "coverage-*-cp38-cp38-macosx_10_9_x86_64.whl",
			"platforms": ["osx-x64"],
			"python_versions": ["3.8"]
		}
	]
}
```

Legacy dependencies can use download assets
(see the previous topic around assets)
to ship platform specific archives.
Download size for dependencies can be reduced this way,
as only compatible binaries need to be downloaded.  
Note: Legacy dependency format is fully supported
also for ST4 and Python 3.8,
but it is recommended to ship dependencies as wheels.

```json
{
	"name": "typing",
	"description": "\"typing\" module as a Package Control dependency",
	"author": "FichteFoll",
	"issues": "https://github.com/packagecontrol/typing/issues",
	"releases": [
		{
			// Note: ST2 is no longer supported
			"base": "https://github.com/packagecontrol/typing",
			"asset": "typing-${version}-st2.zip",
			"sublime_text": "<3000"
		},
		{
			"base": "https://github.com/packagecontrol/typing",
			"asset": "typing-${version}-st3.zip",
			"sublime_text": ">=3000",
			"python_versions": ["3.3"]
		}
	]
}
```

Local and relative file paths are also supported.

```json
{
	"name": "My Library",
	"description": "A locally hosted python package",
	"author": "John Doe",
	"issues": "https://company.com/software/issues",
	"releases": [
		{
			"platforms": ["linux-x64"],
			"python_versions": ["3.8"],
			"version": "1.0.0",
			"url": "file:///absolute/path/to/my_librariy.whl"
		},
		{
			"platforms": ["windows-x64"],
			"python_versions": ["3.8"],
			"version": "1.0.0",
			"url": "./path/relative/to/repository_json/my_librariy.whl"
		}
	]
}
```
