---
title: "Package Control: Reviewing a package"
---

<!-- Original: -->
<!-- https://github.com/wbond/package_control_channel/wiki#reviewing-a-package-addition -->


# How we review packages

The main things we guard for:

- Proper use of the formats supported in [`repository.json`][repo].
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

[submit]: pc_submitting.html


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

* Entries should only set the properties they need.
  See the [`repository.json` documentation][repo] for details.
 
* Search for similar packages.

* Confirm that the user who authors the pull request
  has push access to the repo they want to add.
  For an organization,
  check if the user is part of that organization
  or check if they pushed commits to the repo.  
  If the user does not have access,
  verify that the repo's owner has given permission.


### The package

* A README is required
  and should be understandable for new users.
  Otherwise people won't know what the package does.
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
  usually in a `Default.sublime-commands` file.

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

At first, check the [PR itself](#the-pr-itself).
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
  (GitHub, GitLab, Bitbucket)
  and do(es) not require special bundling,
  suggest adding the package(s)
  to the PCC repo directly.
  This has the advantage of easy batch-updates of packages.

* As always, verify that the tests pass
  and review the changes briefly.

* If you are unsure about the validity
  of the external repository file,
  run it through the PackageRepositoryTools
  "Test Remote Repository" command.

* Check if the URLs specified 404.


## Dealing with similar packages

We try to keep duplicated packages at a minimum
because of several reasons, mainly:

- Users will have to choose between several packages
  that all achieve practically the same thing,
  usually without a clear indication which will be best for them.
- Package authors or maintainers will be effectively doubling their work
  (of maintenance).
  This can be prevented by working together on the same package
  (either by collaborating or by proposing pull requests).
- Having more contributors on one package
  increases its long term life expectancy.
- Sometimes packages stop being maintained.
  Replacing those with a new package for the same utility
  keeps Package Control fresh.

If one or more similar packages exist,
it's always recommended to consolidate them and
enhance an existing package.

When an existing package is replaced,
we always give the maintainer of the existing package
at least 2 weeks to object. See also [2x2 week timeout][2x2].

When in doubt,
mention the author of a similar package
and ask for their judgment or willingness for cooperation.

When the packages' use cases are *different enough*,
or the authors are unable to come to come to an agreement,
the new package can be added anyway.

[2x2]: #_2x2-week-timeout
[repo]: pc_repository.html
