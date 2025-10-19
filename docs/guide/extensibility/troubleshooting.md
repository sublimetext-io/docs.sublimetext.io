## Troubleshooting

Because Sublime Text is so customizable, it is possible for 3rd-party Packages
and/or local customization to interfere with one another, or cause other problems.
You might see this, for example, as Python exceptions that don't make sense
in the Console Panel, or certain functionality isn't behaving as you expect.

### Safe Mode

As of Sublime Text 4, you can now launch Sublime Text in Safe Mode by using
this command from the command line to launch it.

    subl --safe-mode

![Safe Mode Announcement](./images/safe_mode_announcement.png)

When launched this way, Sublime Text uses an alternate
[Data Directory](../getting-started/basic-concepts.md#the-data-directory),
thus disabling all 3rd-party Packages and local customizations, as well as
internally not loading any previous sessions (i.e. from any `.sublime-workspace`
files).  This will help you to verify whether the behavior is, or is not,
coming from Sublime Text itself or one of its shipped Packages.

The alternate Data Directory used is:

* **Windows**: `%APPDATA%\Sublime Text (Safe Mode)\`
* **macOS**: `~/Library/Application Support/Sublime Text (Safe Mode)/`
* **Linux**: `~/.config/sublime-text-safe-mode/`

If the behavior is still being exhibited, it is most likely from a corrupted
shipped Package file and can be remedied by re-installing Sublime Text.

If the behavior disappears, then you know it was coming from somewhere in
the Data Directory.

A nice thing about Safe Mode is that you can install experimental
customizations or packages you think might have caused problems, and it will
not affect Sublime Text's ability to start and behave normally because:

- such packages will be installed in the alternate Data Directory, thus
  not impacting normal sessions, and
- each time Sublime Text starts in Safe Mode, it deletes any content in
  the Safe-Mode Data Directory, so it "doesn't hurt" if a package installed
  there did something it wasn't supposed to.

**Caution:**  don't store anything important in the Safe-Mode Data Directory!

### Diagnosing Trouble from the Data Directory

If you have reached the conclusion that the trouble you are experiencing has
come from the Data Directory (3rd-Party Packages and/or local customization),
you can discover the source of the problem by following these steps.  Knowing
*when* the problem started is also an asset, because the cause will most
likely have occurred just before the problem started.

- Close Sublime Text if it is running.
- Rename the [Data directory](../getting-started/basic-concepts.md#the-data-directory)
  to another name to keep it as a backup and reference about what
  Packages you installed and what customizations you made.
- Re-start Sublime Text.

When Sublime Text starts, it will create a fresh new Data Directory.

    Note:  In subsequent steps, it is recommended to keep the contents of the
    renamed (backup) of the problematic Data Directory unaltered for sake of
    preserving the evidence.  This is so that if your first attempt at isolating
    the problem isn't successful, you can repeat it (using smaller or different
    steps) as many times as needed until you have isolated the problem.

#### Diagnosis by Isolating Packages

Now you can re-install 3rd-Party Packages you had in place (and were working
correctly) well before the problem started.  Test to verify whether the
problem is occurring after this step.

- If the problem is *not occurring* at this point, you can continue to
  diagnose by re-adding each subsequent Package one by one, until the
  behavior returns, at which point you will know what Package to exclude
  or disable.

- On the other hand, if the problem ***is occurring***, you know the problem
  is somewhere in that group of Packages, and you can take steps to further
  isolate the source by reverting and repeating this step with only half of
  the Packages, and keep dividing the group until you have isolated the
  source.

#### Diagnosis by Isolating Customizations

If you have reached this point and the problem has not returned, now you
can add your own customizations back in, one at a time, until the problem
resurfaces.  If/when you encounter the problem again, you will know where
to investigate further to remedy, or, as the case may be, what *not* to do.

