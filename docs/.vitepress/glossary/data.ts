export interface GlossaryEntry {
  name?: string;
  text: string;
}

export type GlossaryData = Record<string, GlossaryEntry>;

function dedent(strings: Array<string>, ...args: any): string {

  function dedent_inner(str) {
    let size = null;
    return str.replace(/\n(\s+)/g, (m, m1) => {
      if (size == null) {
        size = m1.replace(/\t/g, "    ").length;
      }
      return "\n" + m1.slice(Math.min(m1.length, size));
    });
  }

  return dedent_inner(strings[0]);
}


const data = {
  buffer: {
    text: dedent `
      Data of a loaded file and additional metadata,
      associated with one or more views.
      The distinction between buffer and :view: is technical.
      Most of the time,
      both terms can be used interchangeably.
    `,
  },
  command_palette: {
    name: "Command Palette",
    text: dedent `
      A popup for quick access to various commands
      provided by Sublime Text's core or a :package:.
      Can be opened via ctrl/cmd+shift+p
      or the Tools menu.
    `,
  },
  view: {
    text: dedent `
      Graphical display of a buffer.
      Multiple views can show the same buffer.
    `,
  },
  plugin: {
    text: dedent `
      A feature implemented in Python,
      which can consist of a single command or multiple commands.
      It can be contained in one or many .py files.
    `,
  },
  panel: {
    text: dedent `
      An input/output widget,
      such as a search panel or output panel.
    `,
  },
  overlay: {
    text: dedent `
      An input widget of a special kind.
      For example, Goto Anything is an overlay.
    `,
  },
  package: {
    text: dedent `
      A group of resource files
      providing extended functionality,
      consisting of e.g.
      snippets, syntax definitions, or plugins.
      Can be a folder in the Packages folder
      or an archived .sublime-package file.
    `,
  },
  user_package: {
    name: "user package",
    text: dedent `
      A :package: installed or managed by the user.
    `,
  },
  shipped_package: {
    name: "shipped package",
    text: dedent `
      A :package: that is provided by Sublime Text on every installation.
    `,
  },
  core_package: {
    name: "core package",
    text: dedent `
      A :shipped_package:
      that provides core functionality for Sublime Text.
    `,
  },
  installed_package: {
    name: "installed package",
    text: dedent `
      A :user_package: inside the Installed Packages folder
      in the .sublime-package archive format.
    `,
  },
  override_package: {
    name: "override package",
    text: dedent `
      A special package
      that can override individual resource files
      of an :installed_package: or :shipped_package:.
    `,
  },
  file_type: {
    name: "file type",
    text: dedent `
      In the context of Sublime Text,
      a file type refers to the type of file
      as determined by the applicable .sublime-syntax syntax definition.
      However, this is an ambiguous term
      and in some instances it could also be used
      with the broader meaning it has in technical texts.
    `,
  },
  package_dev: {
    name: "PackageDev",
    text: dedent `
      An installable package that provides
      syntax highlighting, snippets, completions, and more
      for Sublime Text's resource files.
    `,
  },
  package_control: {
    name: "Package Control",
    text: dedent `
      The de-facto package manager for Sublime Text.
      <a href="https://packagecontrol.io/">https://packagecontrol.io/</a>
    `,
  },
  command: {
    text: dedent `
      A command is an action to be executed
      and can be referenced in many resource files.
      It may accept JSON-serializable arguments
      and can be defined in user plugins.
    `,
  },
  data_directory: {
    name: "Data directory",
    text: dedent `
      Core concept and storage for all of Sublime Text's resources.
      Refer to the introduction for details.
    `,
  },
  console: {
    text: dedent `
      Internal Sublime Text console for debug messages
      and plugin output. Open via <i>View → Show Console</i>.
    `,
  },
};

export default data;
