# How to use Sublime for remote development

This guide should help with working remotely with Sublime Text.
The steps are meant to be incremental,
but just setting up SFTP will go a long way.

This guide will help you if

- have all your code on your laptop,
- have SSH access to your server,
- want to edit your code locally in ST
  and automatically push the changes to the server, and
- sometimes edit untracked files or config files on the server.

Note that besides the [SSH config](#ssh-config),
the sections below are not dependent on each other.


## SSH config

Create a `~/.ssh/config` file,
which allows reusing existing connection.
This mean that you will have to authenticate only once.
In this example the server is simply named "my_server"

```
Host my_server
  Hostname SERVER_ADRESS
  User MY_USERNAME
  IdentityFile YOUR_KEY eg: ~/.ssh/id_rsa
  AddKeysToAgent yes
```

Check that it works by running `ssh my_server` in a terminal.
Then in a second one.
The second terminal should not ask for credentials.

This will also allow Sublime to connect to your server
without asking for credentials.

SFTP does not support two-factor authentication.
If your server requires it,
add the following lines to your SSH config
to allow Sublime to reuse a connection opened in the terminal.

```
  ControlPath ~/.ssh/ssh-%r@%h:%p
  ControlMaster auto
  ControlPersist 600
```


## SFTP

**SFTP** is a commercial Sublime Text package,
that will allow you to keep in sync files
on your laptop and on a server.

- Install [SFTP][] from Package Control
(See [Installing Packages][] for details)
- Open your project in ST.
- From command palette: **SFTP: Setup Server**

This will create a `sftp-config.json` at the root of your project.
(You may want to add `sftp-config.json` to your [global gitignore][].)
I recommend having the same project folder names
on your server and on your laptop
and keeping all your projects in the same folder.
This will make advanced steps easier.

Update the following keys:

```jsonc
    // sftp, ftp or ftps
    "type": "sftp",

    "save_before_upload": true,
    "upload_on_save": true,

    "host": "my_server",
    "user": "USER",
    // Use full paths here, SFTP does not handle shortcuts like ~ or $HOME.
    "remote_path": "/home/USER/github/YOUR_PROJECT",
    "sftp_flags": ["-F", "/home/USER/.ssh/config"],
```

1. ssh to your server in a terminal.
2. Open a file from your project, save it.
3. The status bar should show SFTP uploading the file to your server.

You now have a working setup.
SFTP will automatically upload files on save.
But if you modify files out of Sublime (e.g. `git checkout`, `git pull`),
you will need to upload the whole folder: `SFTP: Upload Folder`

[Installing Packages]: /guide/extensibility/packages.md#installing-packages
[SFTP]: https://packagecontrol.io/packages/SFTP
[global gitignore]: https://stackoverflow.com/a/7335487/3561471


## rsync

Uploading the whole folder is often a bit slow.
Using `rsync` will be faster
because it only transmits the changed files.
SFTP should switch to use `rsync` at some point,
but in the meantime,
you can use the following command:

```sh
rsync --verbose -rd --exclude='.git/' --filter=':- .gitignore'
```

Files ignored by `.gitignore` will not be transferred.
Note that this command is _safe_:
it will only add files and never remove files.
This can be an issue if you renamed a file locally
because `rsync` will keep a file with the old name on the server.
You can add the `--del` flag to automatically remove files on the remote
that do not exist locally.
But be careful to keep important build artifacts, logs, profile reports
in a dedicated folder present in your `.gitignore`.

Add this to your `~/.zshrc`.

```sh
function rsync_git() {
    if [[ ! -d $PWD/.git ]]; then
        echo "Current dir $PWD is not a valid git dir.
        Please move to the root of a git dir."
        return;
    fi

    target=${1:-server:\~/github}
    repo=${2:-${PWD##*/}}
    # Async is important to not block git checkout
    echo "Async rsync of git repo $repo to $target/$repo ..."

    rsync --verbose -rd --exclude='.git/' --filter=':- .gitignore' \
        . "$target/$repo" &
}

export -f rsync_git
```

With this you can run `rsync_git`
when you're at the root of the repository
to upload the whole folder to your server.

To keep the remote code always a mirror of the code on your laptop,
you want to automatically run `rsync_git` when you checkout a branch:

```sh
echo "#!/usr/bin/zsh\nsource ~/.zshrc; rsync_git" > .git/post-checkout
```

Note that it still takes a few seconds to run
so if you start a job on your server just after pulling,
you may end up running code from the old branch.


## rmate

Running `rmate README.md` from your server
will open the file on your laptop for editing.
This is great for editing files from your server
that are not part of your project.

The install instructions can be found over on [RemoteSubl][] package website.
Mainly you need to install RemoteSubl package from PackageControl,
install `rmate` on your server,
add `RemoteForward` line to your `~/.ssh/config`:

```
Host server
  ... # same as before
  RemoteForward 52698 localhost:52698
```

[RemoteSubl]: https://github.com/randy3k/RemoteSubl#installation


### Read long command output in Sublime

To read the output of some verbose command,
comfortably in ST rather than in a terminal,
you can use the following function:

```sh
function subl() {
    if (( $# > 0)); then
        $HOME/bin/rmate "$@"
        return;
    fi

    SUFFIX=${1:-.log}
    tmpfile=`mktemp --suffix $SUFFIX`
    echo "Stdout redirected to '$tmpfile'."
    cat - > $tmpfile
    echo "Opening '$tmpfile' on client."
    $HOME/bin/rmate $tmpfile
}
export -f subl
```

You can then run `python script.py --verbose | subl` from your server
and read the results from ST.
Note that the function can also be used as an alias to `rmate`:
`subl script.py`.
