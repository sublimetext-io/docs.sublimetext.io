(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{380:function(e,t,o){"use strict";o.r(t);var n=o(7),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Projects group sets of files and folders\nto keep your work organized.\nThey support project-specific settings and build systems\nand you can quickly switch between them\nto continue working where you left off.")]),e._v(" "),t("p",[e._v("Adding folders to a project is necessary for\n"),t("RouterLink",{attrs:{to:"/guide/usage/file-management/navigation.html#goto-anything"}},[e._v("Goto Anything")]),e._v("\nand project-wide Goto Definition.")],1),e._v(" "),t("p",[e._v("There is always an active project,\neven if you haven't created or opened one.\nIn this situation,\nyou are working with an "),t("em",[e._v("anonymous project")]),e._v(",\nwhich has limited functionality.\nNew windows always use an anonymous project\nwhen they first open.")]),e._v(" "),t("p",[e._v("Project metadata is stored in JSON files\nwith a "),t("code",[e._v(".sublime-project")]),e._v(" extension.\nWherever there's a "),t("code",[e._v(".sublime-project")]),e._v(" file,\nyou will find an ancillary "),t("code",[e._v(".sublime-workspace")]),e._v(" file too.\nThe "),t("code",[e._v(".sublime-workspace")]),e._v(" file contains session data\nthat you "),t("em",[e._v("should")]),e._v(" never edit.\n(More on workspaces later.)")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("Generally speaking,\nit's fine to commit "),t("code",[e._v(".sublime-project")]),e._v(" files\nto a source code repository,\nbut always be mindful of what you store in them.")])]),e._v(" "),t("h2",{attrs:{id:"creating-a-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-project"}},[e._v("#")]),e._v(" Creating a Project")]),e._v(" "),t("p",[e._v("Start with an anonymous project\nby opening a new window\nor closing any active project\nwith the "),t("strong",[e._v("Project → Close Project")]),e._v(" menu.")]),e._v(" "),t("p",[e._v("You can add and remove folders to/from a project\nusing the "),t("strong",[e._v("Project")]),e._v(" menu\nor the side bar's context menu.\nIf you drag a folder onto a Sublime Text window,\nit will be added to the project too.")]),e._v(" "),t("p",[e._v("To save an anonymous project,\ngo to "),t("strong",[e._v("Project → Save Project As...")]),e._v(".")]),e._v(" "),t("p",[e._v("After the project is saved,\nyou can edit it by hand\nto adjust further options.")]),e._v(" "),t("h2",{attrs:{id:"opening-projects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opening-projects"}},[e._v("#")]),e._v(" Opening Projects")]),e._v(" "),t("p",[e._v("Using the main menu,\nyou can open or switch projects\nby selecting "),t("strong",[e._v("Projects → Open Recent")]),e._v(",\n"),t("strong",[e._v("Projects → Switch Project…")]),e._v("\nor "),t("strong",[e._v("Projects → Quick Switch Project…")]),e._v(".")]),e._v(" "),t("p",[e._v("When switching projects,\nSublime Text will close the current project\nand open the specified one in the same window,\nWhen opening a project,\nSublime Text will open a new window\nand open the selected project there.")]),e._v(" "),t("p",[e._v("Keyboard shortcuts related to projects:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Shortcut")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("Quick Switch Project…")])]),e._v(" "),t("td",[e._v("Ctrl + Alt + P")])])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The key binding was removed with build 3096 for Windows\nand must be added manually,\nif desired.\nIn order to do this,\nadd the following "),t("RouterLink",{attrs:{to:"/guide/customization/key_bindings.html"}},[e._v("key binding")]),e._v("\nto your user key bindings file:")],1)]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"keys"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ctrl+alt+p"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"prompt_select_workspace"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),e._v(" "),t("p",[e._v("Additionally,\nyou can open a project from the "),t("strong",[e._v("command line")]),e._v("\nby passing the "),t("code",[e._v(".sublime-project")]),e._v(" file as an argument\nto the "),t("code",[e._v("subl")]),e._v(" command line helper\nincluded with Sublime Text.")]),e._v(" "),t("h2",{attrs:{id:"advanced-configuration-for-project-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration-for-project-files"}},[e._v("#")]),e._v(" Advanced Configuration for Project Files")]),e._v(" "),t("p",[e._v("Along with more options for individual directories,\nprojects can have specific build systems or settings overrides.")]),e._v(" "),t("div",{staticClass:"custom-block seealso"},[t("p",{staticClass:"custom-block-title"},[e._v("See Also")]),t("dl",[t("dt",[t("RouterLink",{attrs:{to:"/reference/projects.html"}},[e._v("Projects - Reference")])],1),e._v(" "),t("dd",[e._v("Documentation on project file format and options.")])])]),t("h2",{attrs:{id:"settings-related-to-the-sidebar-and-projects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#settings-related-to-the-sidebar-and-projects"}},[e._v("#")]),e._v(" Settings Related to the Sidebar and Projects")]),e._v(" "),t("dl",[t("dt",[t("code",[e._v("binary_file_patterns")])]),e._v(" "),t("dd",[e._v("A list of wildcards.\nFiles matching these wildcards will show up in the side bar,\nbut will be excluded from Goto Anything\nand Find in Files.")])]),e._v(" "),t("h2",{attrs:{id:"workspaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workspaces"}},[e._v("#")]),e._v(" Workspaces")]),e._v(" "),t("p",[e._v("Workspaces hold session data\nassociated with a project,\nwhich includes information\nabout the opened files, pane layout,\nfind history and more.\nA project can have multiple workspaces.")]),e._v(" "),t("p",[e._v("A common use case for workspaces is\nto work on different features\n"),t("em",[e._v("within the same project")]),e._v(",\nwhere each feature requires\na different set of files to be open,\nand you want to switch between features quickly.\nIn this case you'll want to have\na second workspace available.\nWriting tests could be an example for this.")]),e._v(" "),t("p",[e._v("Workspaces behave very much like projects.\nTo create a new workspace,\nselect "),t("strong",[e._v("Project → New Workspace for Project")]),e._v(".\nTo save the active workspace,\nselect "),t("strong",[e._v("Project → Save Workspace As...")]),e._v(".")]),e._v(" "),t("p",[e._v("The workspace metadata is stored in JSON files\nwith the "),t("code",[e._v(".sublime-workspace")]),e._v(" extension,\nwhich you are not supposed to edit.")]),e._v(" "),t("p",[e._v("To switch between different workspaces,\nuse "),t("Key",{attrs:{k:"ctrl+alt+p"}}),e._v(",\nexactly as you do with projects.")],1),e._v(" "),t("p",[e._v("As with projects,\nyou can open a workspace\nfrom the "),t("strong",[e._v("command line")]),e._v("\nby passing the desired "),t("code",[e._v(".sublime-workspace")]),e._v(" file\nas an argument to the "),t("code",[e._v("subl")]),e._v(" command line helper\nincluded with Sublime Text.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Unlike "),t("code",[e._v(".sublime-project")]),e._v(" files,\n"),t("code",[e._v(".sublime-workspace")]),e._v(" files\nare not meant to be shared or edited manually.\n"),t("strong",[e._v("You should never commit")]),e._v(" "),t("code",[e._v(".sublime-workspace")]),e._v(" "),t("strong",[e._v("files\ninto a source code repository.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);