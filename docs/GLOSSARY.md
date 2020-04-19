---
terms:
  buffer: >
    Data of a loaded file and additional metadata,
    associated with one or more views.
    The distinction between buffer and :view: is technical.
    Most of the time,
    both terms can be used interchangeably.

  view: Graphical display of a buffer. Multiple views can show the same buffer.

  plugin: >
    A feature implemented in Python,
    which can consist of a single command or multiple commands.
    It can be contained in one or many .py files.

  panel: >
    An input/output widget,
    such as a search panel or output panel.

  overlay: >
    An input widget of a special kind.
    For example, Goto Anything is an overlay.

  package: >
    A group of resource files
    providing extended functionality,
    consisting of e.g.
    snippets, syntax definitions, or plugins.
    Can be a folder in the Packages folder
    or an archived .sublime-package file.

  user package: >
    A :package: installed or managed by the user.

  shipped package: >
    A :package: that is provided by Sublime Text on every installation.

  core package: >
    A :shipped_package:
    that provides core functionality for Sublime Text.

  installed package: >
    A :user_package: inside the Installed Packages folder
    in the .sublime-package archive format.

  override package: >
    A special package
    that can override individual resource files
    of an :installed_package: or :shipped_package:.

  file type: >
    In the context of Sublime Text,
    a file type refers to the type of file
    as determined by the applicable .sublime-syntax syntax definition.
    However, this is an ambiguous term
    and in some instances it could also be used
    with the broader meaning it has in technical texts.

  PackageDev: >
    An installable package that provides
    syntax highlighting, snippets, completions, and more
    for Sublime Text's resource files.

  Package Control: >
    The de-facto package manager for Sublime Text. <a href="https://packagecontrol.io/">https://packagecontrol.io/</a>
---

<Glossary :terms="$frontmatter.terms" />
