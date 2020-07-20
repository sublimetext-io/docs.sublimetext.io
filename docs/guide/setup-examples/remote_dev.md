This steps should help working remotely with Sublime Text.
They are meant to be incremental, just setting up SFTP will go a long way.

# My workflow

I have all my code on my laptop (a Mac), edit locally and automatically push the files to my server (a Linux machine).
I never edit "tracked" files on the server directly.
I sometimes modify untracked files or config files on the server using `rmate` (see below).

# SSH config

Create a `~/.ssh/config` file, which allows reusing existing connection.
This mean that you will have to authenticate only once.

```
Host server
  Hostname SERVER_ADRESS
  User MY_USERNAME
  IdentityFile YOUR_KEY eg: ~/.ssh/id_rsa
  AddKeysToAgent yes
  UseKeychain yes
  ControlPath ~/.ssh/ssh-%r@%h:%p
  ControlMaster auto
  ServerAliveInterval 240
  Port 22
```

Check that it works by running "ssh server" in a terminal.
Then in a second one. The second terminal shouldn't ask for credentials. 
This will also allow Sublime to connect to your server without asking for credentials.

# SFTP setup

SFTP is a Sublime Text package that will allow you to keep in sync files on your laptop and on a server.

Install https://packagecontrol.io/packages/SFTP
Open your project in ST.
From command palette: `SFTP: Setup Server`
This will create a `sftp-config.json` at the root of your project. (You may want to add `sftp-config.json` to your [global gitignore](https://stackoverflow.com/a/7335487/3561471)).
I recommend having the same project folder names on your server and on your laptop and keeping all your projects in the same folder. This will make advanced steps easier.

Update the following keys:

```json
    // sftp, ftp or ftps
    "type": "sftp",

    "save_before_upload": true,
    "upload_on_save": true,

    "host": "server",
    "user": "USER",
    // Use full paths here, SFTP doesn't handle shortcuts like ~ or $HOME.
    "remote_path": "/home/USER/github/YOUR_PROJECT",
    "sftp_flags": ["-F", "/home/USER/.ssh/config"],
```

ssh to your server in a terminal.
Open a file from your project, save it. The status bar should show SFTP uploading the file to your server. You now have a working setup. SFTP will automatically upload files on save. But if you modify files out of Sublime (eg git checkout, git pull), you will need to upload the whole folder: `SFTP: Upload Folder`

Don't forget to buy an SFTP license if you find this setup useful. (I'm not affiliated in any way with SFTP plugin)


# Adding rsync

Uploading the whole folder is often a bit slow. Using `rsync` will be faster, it only pushes the changed files. SFTP should switch to use `rsync` at some point, but in the meantime, I use the following command.
`rsync --verbose -rd --del --exclude='.git/' --filter=':- .gitignore'  . "server:\~/github/YOUR_PROJECT" &`
Note that this command is _aggressive_: `--del` means that files on the server but not on your laptop will be deleted, unless they are in the `.gitignore`.
The `--del` flag is useful if you rename a file locally. ST will upload the new version but won't remove the old one. Having `rsync --del` running from time to time allows to clean up this.
Feel free to remove it if you have important files in your server project folder, that you don't want to risk to lose.

I added this to my `~/.zshrc`

```sh
function rsync_git() {
    if [[ ! -d $PWD/.git ]]; then
        echo "Current dir $PWD isn't a valid git dir. Please move to the root of a git dir."
        return;
    fi

    target=${1:-server:\~/github}
    repo=${2:-${PWD##*/}}
    # Async is important to not block git checkout
    echo "Async rsync of git repo $repo to $target/$repo ..."

    rsync --verbose -rd --del --exclude='.git/' --filter=':- .gitignore' \
        . "$target/$repo" &
}

export -f rsync_git
```

This allows me to run `rsync_git` when I'm at the root of my repo to upload the whole folder to my server.
Since I want to have the code on my server to be always a mirror of the code on my laptop, I added git hooks to automatically run `rsync_git` when I checkout a branch:

```sh
echo "source ~/.zshrc; rsync_git" > .git/post-checkout
```

Note that it still takes a few seconds to run so if you start a job on your server just after pulling you may end up running code from the old branch.


# rmate for editing

Running `rmate README.md` from your server will open the file on your laptop for editing.
This is great for editing files from your server that aren't part of your project.
I recommend closing the file in ST as soon as you're done editing, otherwise it's easy to end up with several tabs of ST editing the same remote file.

The install instructions can be found over on [RemoteSubl package website](https://github.com/randy3k/RemoteSubl#installation).
Mainly you need to install RemoteSubl package from PackageControl,
install `rmate` on your server, add `RemoteForward` line to your `~/.ssh/config`:

```
Host server
  ... # same as before
  RemoteForward 52698 localhost:52698
```

# Read long command output in Sublime

Sometimes I'm running command with a long output and I want to read them more comfortably in ST rather than in a terminal.

Here is the function I'm using:

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

Then I do: `python script.py --verbose | subl` from my server.
Note than I can also do `subl script.py`.
