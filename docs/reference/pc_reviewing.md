---
title: "Package Control: Reviewing a package"
---

<!-- Original: -->
<!-- https://github.com/wbond/package_control_channel/wiki#reviewing-a-package-addition -->


# How we review packages

The main things we guard for:

- Proper use of the formats supported in [repository.json](repo).
- Proper use of dependencies/libraries.
- Proper use of [messages][msg].
- Sensible use of shared resources like menus, keybindings.
- The maintainer being serious about actually maintaining the package.

The following sections contain various procedures
and things to look for in new or updated packages.

We don't typically test a package.
As long as the intentions are good,
the maintainer actively cooperates,
and the package "plays nice" in the ecosystem,
whether the package works well is their responsibility.

[msg]: pc_messages.html


## 2x2 week timeout

Once we start the review of a package,
the maintainer is expected to respond in a somewhat timely manner.

After two weeks without a response,
the maintainer is pinged in the PR
and the "stale" label is assigned.

After another two weeks without a response,
close the PR and assign the `timeout` label.

If the author does respond,
remove the `stale` label
and start over.

This procedure may not be repeated infinitely!
We expect authors to be serious about their package
and that they intend to maintain it.


## Squash all the things

When merging a PR use the "squash and merge" option.


## A new package

The [submission guide][submit] must be followed.
Additionally, we check for the following:


### The PR itself

* Check if the tests are passing.
  Make the PR author aware of any issues.
  There may be scenarios
  where the tests are incomplete,
  so always review the changes briefly yourself.

* The PR should contain no changes
  beyond the targeted package(s)
  (e.g. formatting the entire file).

* Branch-based versioning is deprecated.
  Tags must be used in all scenarios.

* Entries should only set the properties it needs,
  see the [repository.json] documentation for details.
 
* Search for similar packages.

* Confirm that the user who authors the pull request
  has push access to the repo he wants to add.
  For an organization,
  check if the user is part of that organization
  or check if he pushed commits to the repo.  
  If the user does not have access,
  verify that the repo's owner has given permission.

[submit]: pc_submitting.html


### The package

* A README is required,
  otherwise people won't know what the package does,
  and should be understandable for new users.
  It should probably also be in English,
  except where it obviously shouldn't.

* The only valid used cases for opting out of the archived package format,
  using the `.no-sublime-package` file,
  are:

  - The package executes binaries
    included in the package itself
    using the `subprocess` module.
  - The package runs scripts
    included in the package
    using an external application,
    such as `node`.
  - The plugin code loads binary Python modules.

* All commands should be discoverable
  via the **command palette**,
  usually in a Default.sublime-commands file.

* Commands in the **main menu**
  need to be in the correct section.
  New top level menus should not be created.

* Our [recommendations][recs] for keybindings and the context menu
  should be followed.

* Python plugins that use ST's API
  must be in the root folder of the repository.
  Otherwise Sublime Text will not find them.

* Packages are delivered in an archive format,
  so no files in it can be reached using `open`,
  or directly via file paths.

* The package name is relevant for opening settings files etc.
  If it differs from the repo name,
  ensure references in code are to the correct name.

* If a package does not define Python plugins,
  it is generally compatible with all OSes.

* If a package uses an online service, e.g. AI,
  it should be very clearly stated in the README,
  if and when any code might leave the user's machine.

* Optional deeper dives into the code:

  - For packages that can be easily installed and tested,
    ensure they don't impact performance,
    e.g. by doing a lot of work on keystrokes
    or when creating menu entries.
  - Verify that all (file) handles are closed.
    This is especially important with file locks on Windows.
  - Check if package satisfies
    its install requirements compatibility-wise.
    (Does the code work on all platforms?
    Does it perhaps work on more than specified?).  
    If the package is cross-platform,
    check if it hard-codes forward slashes for file paths
    or assumes this to be the case.
  - Check whether a package is bundling dependencies
    that are also available as Package Control dependencies.
  - Check for unnecessary usage of `sys.path`
    and suggest using relative imports if possible.


[recs]: pc_submitting.html#things-that-help-your-submission-get-approved-more-quickly


## A package change

At first, check the [pr itself](#the-pr-itself).
Then:

* For a **package rename**,
  (change of `name` attribute in package data),
  the old package name must be added to the `previous_names` key.

* For a **details URL change**,
  verify that either the package ownership did not actually change,
  or the change of ownership is confirmed by the previous owner.


## A new repository

This almost never happens and is usually not necessary:
private repositories don't need to be in Package Control,
and otherwise a strong case (like LSP or SublimeLinter) must be made.

If it does happen, some things to look out for:

* If the package(s) contained in the repository
  are hosted on a supported provider
  (github, bitbucket)
  and do(es) not require special bundling,
  suggest to add the package(s)
  to the PCC repo directly.
  This has the advantage of easy batch-updates of packages.

* As always, verify that the tests pass
  and review the changes briefly.

* If you are unsure about the validity
  of the external repository file,
  run it through the PackageRepositoryTools
  "Test Remote Repository" command.

* Check if the URLs specified 404.


## Similar packages

We try to keep duplicated packages at a minimum because of several reasons, mainly:

1. Users will have to choose between several packages that all achieve practically the same thing, usually without a clear indication which will be best for them.
2. Package authors or maintainers are also effectively doubling their work (of maintenance). This can be prevented by working together on the same package (either by collaborating or by proposing pull requests).
3. Having more contributors on one package increases it's long term life expectancy.
4. Some times packages stop being maintained. Replacing those with a new package for the same utility keeps package control fresh.

If one or more similar packages exist,
it's always recommended consolidate them and
enhance an existing packag.

When in doubt,
mention the author of a similar package
and ask for their judgment or willingness for cooperation.

When the packages' use cases are *different enough*,
or the authors are unable to come to come to an agreement,
you may merge the package anyway.


## Standard replies

Tip: add these replies to a clipboard manager of choice, e.g.
[ArsClip](http://www.joejoesoft.com/vcms/97/).

```md
You have to push a valid [semantic version](http://semver.org) [tag](http://git-scm.com/book/en/v2/Git-Basics-Tagging) (with optional leading `v`) to your repo.  
[Semantic versions](http://semver.org) consist of exactly three numeric parts.
Branch based releases are deprecated.
```

```md
Note that, by default, pre-release versions are not installed by Package Control. This has to be enabled in its settings before attempting to install your package. I suggest releasing an non-prerelease version.
```

```md
When renaming a package you have to add the old name to a `previous_names` array.
```

```md
You'll need to change `"branch": "master"` to `"tags": true` and use [tags](http://git-scm.com/book/en/v2/Git-Basics-Tagging) to create releases and push valid [**semantic version**](http://semver.org) tags to your repo. As mentioned [in the docs](https://packagecontrol.io/docs/submitting_a_package#Step_4), we no longer accepts branch-based releases for new packages.
```

```md
The tests don't pass: https://packagecontrol.io/docs/submitting_a_package#Step_7
```

```md
SublimeLinter plugins should be submitted to [their repository](https://github.com/SublimeLinter/package_control_channel).
```

```md
By convention, your package is providing "completions" and not "auto-completions", because those would be context-aware (e.g. local variables and/or type awareness). Please adjust the label.
```


[repo]: pc_repository.html
