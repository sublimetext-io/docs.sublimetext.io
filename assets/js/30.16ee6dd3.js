(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{370:function(e,t,n){"use strict";n.r(t);var s=n(7),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block seealso"},[t("p",{staticClass:"custom-block-title"},[e._v("See Also")]),t("dl",[t("dt",[t("RouterLink",{attrs:{to:"/reference/python_api.html"}},[e._v("API Reference")])],1),e._v(" "),t("dd",[e._v("More information on the Python API.")]),e._v(" "),t("dt",[t("RouterLink",{attrs:{to:"/reference/plugins.html"}},[e._v("Plugins Reference")])],1),e._v(" "),t("dd",[e._v("More information about plugins.")])])]),t("p",[e._v("This section is intended for users with programming skills.")]),e._v(" "),t("p",[e._v("Sublime Text can be extended through Python plugins. Plugins build features by\nreusing existing commands or creating new ones. Plugins are a logical entity,\nrather than a physical one.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("In order to write plugins, you must be able to program in "),t("a",{attrs:{href:"https://www.python.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),t("OutboundLink")],1),e._v(".\nAt the time of this writing, Sublime Text uses Python 3.3.")]),e._v(" "),t("h2",{attrs:{id:"where-to-store-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-to-store-plugins"}},[e._v("#")]),e._v(" Where to Store Plugins")]),e._v(" "),t("p",[e._v("Sublime Text will look for plugins only in these places:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Installed Packages")]),e._v(" (only "),t("code",[e._v(".sublime-package")]),e._v(" files)")]),e._v(" "),t("li",[t("code",[e._v("Packages")])]),e._v(" "),t("li",[t("code",[e._v("Packages/<pkg_name>/")])])]),e._v(" "),t("p",[e._v("As a consequence, any plugin nested deeper in "),t("code",[e._v("Packages")]),e._v(" won't be loaded.")]),e._v(" "),t("p",[e._v("Keeping plugins directly under "),t("code",[e._v("Packages")]),e._v(" is discouraged. Sublime Text sorts\npackages in a predefined way before loading them, so if you save plugin files\ndirectly under "),t("code",[e._v("Packages")]),e._v(" you might get confusing results.")]),e._v(" "),t("h2",{attrs:{id:"your-first-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#your-first-plugin"}},[e._v("#")]),e._v(" Your First Plugin")]),e._v(" "),t("p",[e._v('Let\'s write a "Hello, World!" plugin for Sublime Text:')]),e._v(" "),t("ol",[t("li",[e._v("Select "),t("strong",[e._v("Tools | Developer | New Plugin...")]),e._v(" in the menu.")]),e._v(" "),t("li",[e._v("Save to "),t("code",[e._v("Packages/User/hello_world.py")]),e._v(".")])]),e._v(" "),t("p",[e._v("You've just written your first plugin! Let's put it to use:")]),e._v(" "),t("ol",[t("li",[e._v("Create a new buffer ("),t("Key",{attrs:{k:"ctrl+n"}}),e._v(").")],1),e._v(" "),t("li",[e._v("Open the Python console ("),t("Key",{attrs:{k:"ctrl+`"}}),e._v(").")],1),e._v(" "),t("li",[e._v("Type: "),t("code",[e._v('view.run_command("example")')]),e._v(" and press enter.")])]),e._v(" "),t("p",[e._v('You should see the text "Hello, World!" in the newly created buffer.')]),e._v(" "),t("h2",{attrs:{id:"analyzing-your-first-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#analyzing-your-first-plugin"}},[e._v("#")]),e._v(" Analyzing Your First Plugin")]),e._v(" "),t("p",[e._v("The plugin created in the previous section should look roughly like this:")]),e._v(" "),t("div",{staticClass:"language-py extra-class"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" sublime\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" sublime_plugin\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ExampleCommand")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("sublime_plugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("TextCommand"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" edit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("view"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("edit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello, World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("Both the "),t("code",[e._v("sublime")]),e._v(" and "),t("code",[e._v("sublime_plugin")]),e._v(" modules are provided by\nSublime Text; they are not part of the Python standard library.")]),e._v(" "),t("p",[e._v("As we mentioned earlier, plugins reuse or create "),t("em",[e._v("commands")]),e._v(". Commands are an\nessential building block in Sublime Text. They are simply Python classes\nthat can be called in similar ways from different Sublime Text facilities,\nlike the plugin API, menu files, macros, etc.")]),e._v(" "),t("p",[e._v("Sublime Text Commands derive from the "),t("code",[e._v("*Command")]),e._v(" classes defined in\n"),t("code",[e._v("sublime_plugin")]),e._v(" (more on this later).")]),e._v(" "),t("p",[e._v("The rest of the code in our example is concerned with particulars of\n"),t("code",[e._v("TextCommand")]),e._v(" or with the API. We'll discuss those topics in later sections.")]),e._v(" "),t("p",[e._v("Before moving on, though, we'll look at how we invoked the new command: first\nwe opened the Python console and then we issued a call to\n"),t("code",[e._v("view.run_command()")]),e._v(". This is a rather inconvenient way of calling commands,\nbut it's often useful when you're in the development phase of a plugin. For\nnow, keep in mind that your commands can be accessed through key bindings\nand by other means, just like other commands.")]),e._v(" "),t("h3",{attrs:{id:"conventions-for-command-names"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conventions-for-command-names"}},[e._v("#")]),e._v(" Conventions for Command Names")]),e._v(" "),t("p",[e._v("You may have noticed that our command is named "),t("code",[e._v("ExampleCommand")]),e._v(", but we\npassed the string "),t("code",[e._v("example")]),e._v(" to the API call instead. This is necessary\nbecause Sublime Text standardizes command names by stripping the "),t("code",[e._v("Command")]),e._v("\nsuffix, splitting subwords of "),t("code",[e._v("PhrasesLikeThis")]),e._v(" with underscores, and lower-casing it, like so:\n"),t("code",[e._v("phrases_like_this")]),e._v(".")]),e._v(" "),t("p",[e._v("New commands should follow the same naming pattern.")]),e._v(" "),t("h2",{attrs:{id:"types-of-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types-of-commands"}},[e._v("#")]),e._v(" Types of Commands")]),e._v(" "),t("p",[e._v("You can create the following types of commands:")]),e._v(" "),t("ul",[t("li",[e._v("Window commands ("),t("code",[e._v("sublime_plugin.WindowCommand")]),e._v(")")]),e._v(" "),t("li",[e._v("Text commands ("),t("code",[e._v("sublime_plugin.TextCommand")]),e._v(")")])]),e._v(" "),t("p",[e._v("When writing plugins, consider your goal and choose the appropriate type of\ncommands.")]),e._v(" "),t("h3",{attrs:{id:"shared-traits-of-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared-traits-of-commands"}},[e._v("#")]),e._v(" Shared Traits of Commands")]),e._v(" "),t("p",[e._v("All commands need to implement a "),t("code",[e._v(".run()")]),e._v(" method in order to work. Additionally,\nthey can receive an arbitrarily long number of keyword parameters.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" Parameters to commands must be valid JSON values due to how ST\nserializes them internally.")]),e._v(" "),t("h3",{attrs:{id:"window-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window-commands"}},[e._v("#")]),e._v(" Window Commands")]),e._v(" "),t("p",[e._v("Window commands operate at the window level. This doesn't mean that you can't\nmanipulate views from window commands, but rather that you don't need views in\norder for window commands to be available. For instance, the built-in command\n"),t("code",[e._v("new_file")]),e._v(" is defined as a "),t("code",[e._v("WindowCommand")]),e._v(" so it works even when no view\nis open. Requiring a view to exist in that case wouldn't make sense.")]),e._v(" "),t("p",[e._v("Window command instances have a "),t("code",[e._v(".window")]),e._v(" attribute to point to the window\ninstance that created them.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v(".run()")]),e._v(" method of a window command doesn't require any positional\nparameter.")]),e._v(" "),t("p",[e._v("Window commands are able to route text commands to their window's active view.")]),e._v(" "),t("h3",{attrs:{id:"text-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#text-commands"}},[e._v("#")]),e._v(" Text Commands")]),e._v(" "),t("p",[e._v("Text commands operate at the view level, so they require a view to exist\nin order to be available.")]),e._v(" "),t("p",[e._v("Text command instances have a "),t("code",[e._v(".view")]),e._v(" attribute pointing to the view instance\nthat created them.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v(".run()")]),e._v(" method of text commands requires an "),t("code",[e._v("edit")]),e._v(" instance as\nits first positional argument.")]),e._v(" "),t("h4",{attrs:{id:"text-commands-and-the-edit-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#text-commands-and-the-edit-object"}},[e._v("#")]),e._v(" Text Commands and the "),t("code",[e._v("edit")]),e._v(" Object")]),e._v(" "),t("p",[e._v("The edit object groups modifications to the view so that undo and macros work\nsensibly.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" Contrary to older versions, Sublime Text 3 doesn't allow programmatic\ncontrol over edit objects. The API is in charge of managing their life cycle.\nPlugin creators must ensure that all modifying operations occur inside the\n"),t("code",[e._v(".run")]),e._v(" method of new text commands. To call existing commands, you can use\n"),t("code",[e._v("view.run_command(<cmd_name>, <args>)")]),e._v(" or similar API calls.")]),e._v(" "),t("h3",{attrs:{id:"responding-to-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#responding-to-events"}},[e._v("#")]),e._v(" Responding to Events")]),e._v(" "),t("p",[e._v("Any command deriving from "),t("code",[e._v("EventListener")]),e._v(" will be able to respond to events.")]),e._v(" "),t("h3",{attrs:{id:"another-plugin-example-feeding-the-completions-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#another-plugin-example-feeding-the-completions-list"}},[e._v("#")]),e._v(" Another Plugin Example: Feeding the Completions List")]),e._v(" "),t("p",[e._v("Let's create a plugin that fetches data from Google's Autocomplete service and\nthen feeds it to the Sublime Text completions list. Please note that, as ideas\nfor plugins go, this a very bad one.")]),e._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" sublime\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" sublime_plugin\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" xml"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("etree "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" ElementTree "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" ET\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" urllib\n\nGOOGLE_AC "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('r"http://google.com/complete/search?output=toolbar&q=%s"')]),e._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("GoogleAutocomplete")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("sublime_plugin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("EventListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("on_query_completions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" view"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" prefix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" locations"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        elements "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" ET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("parse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n            urllib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("urlopen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GOOGLE_AC "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v(" prefix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("getroot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("findall"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./CompleteSuggestion/suggestion"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n        sugs "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("attrib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"data"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" x "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" elements"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" sugs\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("Make sure you don't keep this plugin around after trying it or it will\ninterfere with the autocompletion system.")])]),e._v(" "),t("h2",{attrs:{id:"learning-the-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learning-the-api"}},[e._v("#")]),e._v(" Learning the API")]),e._v(" "),t("p",[e._v("The API reference is documented at\n"),t("a",{attrs:{href:"https://www.sublimetext.com/docs/api_reference.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.sublimetext.com/docs/api_reference.html"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("To get acquainted with the Sublime Text API and the available commands,\nit may be helpful to read existing code and learn from it.")]),e._v(" "),t("p",[e._v("In particular, the "),t("code",[e._v("Packages/Default")]),e._v(" contains many examples of\nundocumented commands and API calls. Note that you will first have to extract\nits contents to a folder if you want to take a look at the code within -\n"),t("a",{attrs:{href:"https://packagecontrol.io/packages/PackageResourceViewer",target:"_blank",rel:"noopener noreferrer"}},[e._v("PackageResourceViewer"),t("OutboundLink")],1),e._v("\nhelps with this.")])])}),[],!1,null,null,null);t.default=a.exports}}]);