(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{372:function(t,e,s){"use strict";s.r(e);var a=s(7),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Whether you are coding or writing the next vampire best-seller, you're\nlikely to need certain short fragments of text again and again. Use\nsnippets to save yourself tedious typing. Snippets are smart templates\nthat will insert text for you and adapt it to their context.")]),t._v(" "),e("p",[t._v("To create a new snippet, select "),e("strong",[t._v("Tools | Developer | New Snippet...")]),t._v("\nSublime Text will present you with a skeleton for it.")]),t._v(" "),e("p",[t._v("Snippets can be stored under any package's folder, but to keep it simple\nwhile you're learning, you can save them to your "),e("code",[t._v("Packages/User")]),t._v(" folder.")]),t._v(" "),e("h2",{attrs:{id:"snippets-file-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snippets-file-format"}},[t._v("#")]),t._v(" Snippets File Format")]),t._v(" "),e("p",[t._v("Snippets typically live in a Sublime Text package. They are simplified\nXML files with the extension "),e("code",[t._v(".sublime-snippet")]),t._v(". For instance, you could\nhave a "),e("code",[t._v("greeting.sublime-snippet")]),t._v(" inside an "),e("em",[t._v("Email")]),t._v(" package.")]),t._v(" "),e("p",[t._v("The structure of a typical snippet is as follows (including the default\nhints Sublime Text inserts for your convenience):")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("snippet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token cdata"}},[t._v("<![CDATA[Type your snippet here]]>")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Optional: Tab trigger to activate the snippet --\x3e")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tabTrigger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xyzzy"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tabTrigger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Optional: Scope the tab trigger will be active in --\x3e")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("source.python"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Optional: Description to show in the menu --\x3e")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("My Fancy Snippet"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("snippet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("snippet")]),t._v(" element contains all the information Sublime Text needs in\norder to know "),e("em",[t._v("what")]),t._v(" to insert, "),e("em",[t._v("whether")]),t._v(" to insert and "),e("em",[t._v("when")]),t._v(". Let's\nlook at each of these parts in turn.")]),t._v(" "),e("dl",[e("dt",[e("code",[t._v("content")])]),t._v(" "),e("dd",[e("p",[t._v("The actual snippet. Snippets can range from simple to fairly complex\ntemplates. We'll look at examples of both later.")]),t._v(" "),e("p",[t._v("Keep the following in mind when writing your own snippets:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("If you want to get a literal "),e("code",[t._v("$")]),t._v(", you have to escape it like\nthis: "),e("code",[t._v("\\$")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("When writing a snippet that contains indentation, always use\ntabs. When the snippet is inserted, the tabs will be\ntransformed into spaces if the option\n"),e("code",[t._v("translate_tabs_to_spaces")]),t._v(" is "),e("code",[t._v("true")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("content")]),t._v(" must be included in a "),e("code",[t._v("<![CDATA[…]]>")]),t._v(" section.\nSnippets won't work if you don't do this!")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("code",[t._v("content")]),t._v(" of your snippet must not contain "),e("code",[t._v("]]>")]),t._v(" because\nthis string of characters will prematurely close the\n"),e("code",[t._v("<![CDATA[…]]>")]),t._v(" section, resulting in an XML error. To work\naround this pitfall, you can insert an undefined variable into\nthe string like this: "),e("code",[t._v("]]$NOT_DEFINED>")]),t._v(". This modified string\npasses through the XML parser without closing the content\nelement's "),e("code",[t._v("<![CDATA[…]]>")]),t._v(" section, but Sublime Text will\nreplace "),e("code",[t._v("$NOT_DEFINED")]),t._v(" with an empty string before inserting\nthe snippet into your file. In other words, "),e("code",[t._v("]]$NOT_DEFINED>")]),t._v("\nin your snippet file "),e("code",[t._v("content")]),t._v(" will be written as "),e("code",[t._v("]]>")]),t._v(" when\nyou trigger the snippet.")])])])]),t._v(" "),e("dt",[e("code",[t._v("tabTrigger")])]),t._v(" "),e("dd",[e("p",[t._v("Defines the sequence of keys that must be pressed to insert this snippet.\nAfter typing this sequence, the snippet will kick in as soon as you hit\nthe "),e("Key",{attrs:{k:"tab"}}),t._v(" key.")],1)]),t._v(" "),e("dt",[e("code",[t._v("scope")])]),t._v(" "),e("dd",[e("p",[t._v("Scope selector determining the context where the snippet will be active.\nSee "),e("RouterLink",{attrs:{to:"/guide/extensibility/syntaxdefs.html#scopes"}},[t._v("Scopes")]),t._v(" for more information.")],1)]),t._v(" "),e("dt",[e("code",[t._v("description")])]),t._v(" "),e("dd",[e("p",[t._v("Used when showing the snippet in the Snippets menu. If not present, Sublime\nText defaults to the file name of the snippet.")])])]),t._v(" "),e("p",[t._v("With this information, you can start writing your own snippets as described in\nthe next sections.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("In the interest of brevity, we're only including the "),e("code",[t._v("content")]),t._v("\nelement's text in examples unless otherwise noted.")])]),t._v(" "),e("h2",{attrs:{id:"snippet-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snippet-features"}},[t._v("#")]),t._v(" Snippet Features")]),t._v(" "),e("h3",{attrs:{id:"environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[t._v("#")]),t._v(" Environment Variables")]),t._v(" "),e("p",[t._v("Snippets have access to contextual information in the form of\nenvironment variables. The values of the variables listed below are set\nautomatically by Sublime Text.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("$PARAM1 .. $PARAMn")])]),t._v(" "),e("td",[t._v("Arguments passed to the "),e("code",[t._v("insert_snippet")]),t._v(" command. (Not covered here.)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$SELECTION")])]),t._v(" "),e("td",[t._v("The text that was selected when the snippet was triggered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_CURRENT_LINE")])]),t._v(" "),e("td",[t._v("Content of the cursor's line when the snippet was triggered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_CURRENT_WORD")])]),t._v(" "),e("td",[t._v("Word under the cursor when the snippet was triggered.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_DIRECTORY")])]),t._v(" "),e("td",[t._v("Directory name of the file being edited. (since 3154)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_FILENAME")])]),t._v(" "),e("td",[t._v("Name of the file being edited, including extension.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_FILEPATH")])]),t._v(" "),e("td",[t._v("Path to the file being edited.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_FULLNAME")])]),t._v(" "),e("td",[t._v("User's user name.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_LINE_INDEX")])]),t._v(" "),e("td",[t._v("Column where the snippet is being inserted, 0 based.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_LINE_NUMBER")])]),t._v(" "),e("td",[t._v("Row where the snippet is being inserted, 1 based.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_SELECTED_TEXT")])]),t._v(" "),e("td",[t._v("An alias for "),e("strong",[t._v("$SELECTION")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_SCOPE")])]),t._v(" "),e("td",[t._v("The scope of the beginning of each selected region. (since 3154)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_SOFT_TABS")])]),t._v(" "),e("td",[e("code",[t._v("YES")]),t._v(" if "),e("code",[t._v("translate_tabs_to_spaces")]),t._v(" is true, otherwise "),e("code",[t._v("NO")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("$TM_TAB_SIZE")])]),t._v(" "),e("td",[t._v("Spaces per-tab (controlled by the "),e("code",[t._v("tab_size")]),t._v(" option).")])])])]),t._v(" "),e("p",[t._v("Let's see a simple example of a snippet using variables:")]),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nUSER NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TM_FULLNAME")]),t._v("\nFILE NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TM_FILENAME")]),t._v("\n TAB SIZE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TM_TAB_SIZE")]),t._v("\nSOFT TABS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TM_SOFT_TABS")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Output:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nUSER NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          guillermo\nFILE NAME"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          test"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("txt\n TAB SIZE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nSOFT TABS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("          YES\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])]),e("h3",{attrs:{id:"fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields"}},[t._v("#")]),t._v(" Fields")]),t._v(" "),e("p",[t._v("With the help of field markers, you can cycle through positions within the\nsnippet by pressing the "),e("Key",{attrs:{k:"tab"}}),t._v(" key. Fields are used to walk you through the\ncustomization of a snippet after it's been inserted.")],1),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[t._v("First Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\nSecond Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("\nAddress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("\n")])])]),e("p",[t._v("In the example above, the cursor will jump to "),e("code",[t._v("$1")]),t._v(" if you press "),e("Key",{attrs:{k:"tab"}}),t._v("\nonce. If you press "),e("Key",{attrs:{k:"tab"}}),t._v(" a second time, it will advance to "),e("code",[t._v("$2")]),t._v(", etc. You\ncan also move backwards in the series with "),e("Key",{attrs:{k:"shift+tab"}}),t._v(". If you press\n"),e("Key",{attrs:{k:"tab"}}),t._v(" after the highest tab stop, Sublime Text will place the cursor at the\nend of the snippet's content so that you can resume normal editing.")],1),t._v(" "),e("p",[t._v("If you want to control where the exit point should be, use the "),e("code",[t._v("$0")]),t._v(" mark. By\ndefault, this is the end of the snippet.")]),t._v(" "),e("p",[t._v("You can break out of the field cycle any time by pressing "),e("Key",{attrs:{k:"escape"}}),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"mirrored-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mirrored-fields"}},[t._v("#")]),t._v(" Mirrored Fields")]),t._v(" "),e("p",[t._v("Identical field markers mirror each other: when you edit the first one, the rest\nwill be populated in real time with the same value.")]),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[t._v("First Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\nSecond Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("\nAddress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("\nUser name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n")])])]),e("p",[t._v('In this example, "User name" will be filled out with the same value as "First\nName".')]),t._v(" "),e("h3",{attrs:{id:"placeholders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#placeholders"}},[t._v("#")]),t._v(" Placeholders")]),t._v(" "),e("p",[t._v("By expanding the field syntax a little bit, you can define default\nvalues for a field. Placeholders are useful whenever there's a general\ncase for your snippet, but you still want to keep it customizable.")]),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[t._v("First Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Guillermo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nSecond Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("López"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nAddress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Main Street "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nUser name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n")])])]),e("p",[t._v("Variables can be used as placeholders:")]),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[t._v("First Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Guillermo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nSecond Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("López"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nAddress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Main Street "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nUser name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TM_FULLNAME")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("And you can nest placeholders within other placeholders too:")]),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[t._v("Test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Nested "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Placeholder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"substitutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#substitutions"}},[t._v("#")]),t._v(" Substitutions")]),t._v(" "),e("p",[t._v("In addition to the place holder syntax, tab stops can specify more\ncomplex operations with substitutions. Use substitutions to dynamically\ngenerate text based on a mirrored tab stop. Of course, the tab stop you\nwant to use as variable has to be mirrored somewhere else in the\nsnippet.")]),t._v(" "),e("p",[t._v("The substitution syntax has the following syntaxes:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("${var_name/regex/format_string/}")])]),t._v(" "),e("li",[e("code",[t._v("${var_name/regex/format_string/options}")])])]),t._v(" "),e("dl",[e("dt",[e("strong",[t._v("var_name")])]),t._v(" "),e("dd",[e("p",[t._v("The variable name: "),e("code",[t._v("1")]),t._v(", "),e("code",[t._v("2")]),t._v("… or an environment variable such as "),e("code",[t._v("TM_FILENAME")]),t._v(" or "),e("code",[t._v("SELECTION")]),t._v(".")])]),t._v(" "),e("dt",[e("strong",[t._v("regex")])]),t._v(" "),e("dd",[e("p",[t._v("Perl-style regular expression: See the "),e("a",{attrs:{href:"https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boost library documentation for\nregular expressions"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("dt",[e("strong",[t._v("format_string")])]),t._v(" "),e("dd",[e("p",[t._v("See the "),e("a",{attrs:{href:"https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/format/boost_format_syntax.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boost library documentation for format strings"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("dt",[e("strong",[t._v("options")])]),t._v(" "),e("dd",[e("p",[t._v("Optional. May be any of the following:")]),t._v(" "),e("dl",[e("dt",[e("strong",[t._v("i")])]),t._v(" "),e("dd",[t._v("Case-insensitive regex.")]),t._v(" "),e("dt",[e("strong",[t._v("g")])]),t._v(" "),e("dd",[t._v("Replace all occurrences of "),e("code",[t._v("regex")]),t._v(".")]),t._v(" "),e("dt",[e("strong",[t._v("m")])]),t._v(" "),e("dd",[t._v("Don't ignore newlines in the string.")])])])]),t._v(" "),e("p",[t._v("With substitutions you can, for instance, underline text effortlessly:")]),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[t._v("\n      Original"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Hey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Joe"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nTransformation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/=/g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Output:")]),t._v("\n\n      Original"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Hey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Joe"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nTransformation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])]),e("p",[t._v("Another more complex example can translate snail_case to Tile Case With Spaces.\nBasically, it combines two separate expressions and replaces into one.\nIt also illustrates that replaces may occur before the actual tabstop.")]),t._v(" "),e("pre",{staticClass:"language-perl line-numbers"},[e("code",[t._v("\nTransformation: ${1/^(\\w)|(?:_(\\w))/(?1\\u$1:)(?2 \\u$2:)/g}\n      Original: ${1:text_in_snail_case}\n\n# Output:\n\nTransformation: Text In Snail Case\n      Original: text_in_snail_case\n")]),t._v("\n")]),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[t._v("Transformation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token filehandle symbol"}},[t._v("_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?1\\u$1:)(?2 \\u$2:)/g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      Original"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("text_in_snail_case"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Output:")]),t._v("\n\nTransformation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Text In Snail Case\n      Original"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" text_in_snail_case\n")])])]),e("p",[t._v("You can also use environment variables with substitutions:")]),t._v(" "),e("div",{staticClass:"language-perl extra-class"},[e("pre",{pre:!0,attrs:{class:"language-perl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# In file MyModule.js:")]),t._v("\n\nTransformation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("TM_FILENAME"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("w"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("js"),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\1/g")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Output:")]),t._v("\n\nTransformation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MyModule\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);