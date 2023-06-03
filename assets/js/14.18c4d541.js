(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{316:function(e,t,o){e.exports=o.p+"assets/img/completions_hint.0c9a7c54.png"},317:function(e,t,o){e.exports=o.p+"assets/img/completions_contents.43b17b7f.gif"},367:function(e,t,o){"use strict";o.r(t);var s=o(7),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("In the spirit of IDEs,\nSublime Text suggests completions\nthat aggregate code or content while writing\nby catching everything that you have written,\nlike variable names.")]),e._v(" "),t("p",[e._v("There are however several ways\nto extend the list of completions\n(for example, depending on the current syntax).")]),e._v(" "),t("p",[e._v("This topic deals with\nhow completions are used and\nwhere they come from.")]),e._v(" "),t("h2",{attrs:{id:"how-to-use-completions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-completions"}},[e._v("#")]),e._v(" How to Use Completions")]),e._v(" "),t("p",[e._v("There are two methods for using completions.\nEven though, when screening them,\nthe priority given to completions always stays the same,\nthe two methods produce different results.")]),e._v(" "),t("p",[e._v("Completions can be inserted in two ways:")]),e._v(" "),t("ul",[t("li",[e._v("through the completions list ("),t("Key",{attrs:{k:"ctrl+space"}}),e._v("), or")],1),e._v(" "),t("li",[e._v("by pressing "),t("Key",{attrs:{k:"tab"}}),e._v(".")],1)]),e._v(" "),t("h3",{attrs:{id:"the-completions-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-completions-list"}},[e._v("#")]),e._v(" The Completions List")]),e._v(" "),t("p",[e._v("To use the completions list:")]),e._v(" "),t("ol",[t("li",[e._v("Press "),t("Key",{attrs:{k:"ctrl+space"}}),e._v(" or just type something.")],1),e._v(" "),t("li",[e._v("Optionally, press "),t("Key",{attrs:{k:"ctrl+space"}}),e._v(" again\nto select the next entry\nor use "),t("em",[e._v("up")]),e._v(" and "),t("em",[e._v("down")]),e._v(" arrow keys.")],1),e._v(" "),t("li",[e._v("Press "),t("Key",{attrs:{k:"enter"}}),e._v(" or "),t("Key",{attrs:{k:"tab"}}),e._v(" to validate selection\n(depending on the "),t("code",[e._v("auto_complete_commit_on_tab")]),e._v(" setting).")],1),e._v(" "),t("li",[e._v("Optionally, press "),t("Key",{attrs:{k:"tab"}}),e._v(" repeatedly\nto insert the next available completion.")],1)]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("If the completions list was opened explicitly,\nthe current selection\nin the completions list\ncan also be validated\nwith any punctuation sign\nthat isn't itself bound to a snippet (e.g. "),t("code",[e._v(".")]),e._v(").")])]),e._v(" "),t("p",[e._v("When the list of completion candidates\ncan be narrowed down to one unambiguous choice\ngiven the current prefix,\nthis one completion will be validated automatically\nthe moment you trigger the completion list.")]),e._v(" "),t("h4",{attrs:{id:"hints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hints"}},[e._v("#")]),e._v(" Hints")]),e._v(" "),t("p",[e._v("Additionally,\nyou may see a trigger hint\non the right side of a completion's trigger\nin the completions list.\nThis can be used as a preview\nof the completion's content.")]),e._v(" "),t("p",[t("img",{attrs:{src:o(316),alt:"image"}})]),e._v(" "),t("p",[e._v("The above is in fact a snippet\nand expands to\n"),t("code",[e._v("$arrayName = array('' => , );")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"triggers-and-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#triggers-and-contents"}},[e._v("#")]),e._v(" Triggers and Contents")]),e._v(" "),t("p",[e._v("Completions not sourced from the text in the current file\nmay provide a trigger\nthat is different\nto the content they will insert if selected.\nThis is commonly used for function completions\nwhere the content also includes\nthe function's signature.")]),e._v(" "),t("p",[e._v("For example,\ncompleting "),t("code",[e._v("array_map")]),e._v(" from the PHP completions\nwill result in "),t("code",[e._v("array_map({callback}, {arr1})")]),e._v(":")]),e._v(" "),t("p",[t("img",{attrs:{src:o(317),alt:"image"}})]),e._v(" "),t("p",[e._v("You may notice in the animation\nthat the cursor automatically selected "),t("code",[e._v("callback")]),e._v(".\nThis is because completions support\nthe same features as snippets\nwith fields and placeholders.\nFor more details,\nrefer to "),t("RouterLink",{attrs:{to:"/guide/extensibility/snippets.html#snippet-features"}},[e._v("Snippet Features")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"completions-with-multiple-cursors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#completions-with-multiple-cursors"}},[e._v("#")]),e._v(" Completions with multiple cursors")]),e._v(" "),t("p",[e._v("Sublime Text can also handle completions with multiple cursors\nbut will only open the completion list\nwhen all cursors share the same text\nbetween the current cursor positions\nand the last word separator character\n(e.g. "),t("code",[e._v(".")]),e._v("  or a line break).")]),e._v(" "),t("p",[e._v("Working example ("),t("code",[e._v("|")]),e._v(" represents one cursor):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("l|\nsome text with l|\nl| and.l|\n")])])]),t("p",[e._v("Not working example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("l|\nsome text with la|\nl| andl|\n")])])]),t("p",[e._v("Selections are essentially ignored,\nonly the position of the cursor matters.\nThus, "),t("code",[e._v("e|[-some selection] example")]),e._v(",\nwith "),t("code",[e._v("|")]),e._v(" as the cursor and "),t("code",[e._v("[...]")]),e._v(" as the current selection,\ncompletes to "),t("code",[e._v("example|[-some selection] example")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"completed-completions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#completed-completions"}},[e._v("#")]),e._v(" "),t("Key",{attrs:{k:"tab"}}),e._v("-Completed Completions")],1),e._v(" "),t("p",[e._v("If you want to be able to tab-complete completions,\nthe setting "),t("code",[e._v("tab_completion")]),e._v(" must be set to "),t("code",[e._v("true")]),e._v(" (default).\nSnippet tab-completion is unaffected by this setting:\nThey will always be completed\naccording to their tab trigger.")]),e._v(" "),t("p",[e._v("With "),t("code",[e._v("tab_completion")]),e._v(" enabled,\ncompletion of items is always automatic.\nThis means, unlike the case of the completions list,\nthat Sublime Text will always make the decision for you.\nThe rules for selecting the best completion\nare the same as described above,\nbut in case of ambiguity,\nSublime Text will insert the item it deems most suitable.\nYou can press the "),t("Key",{attrs:{k:"tab"}}),e._v(" key multiple times\nto walk through other available options.")],1),e._v(" "),t("h4",{attrs:{id:"inserting-a-literal-tab-character"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inserting-a-literal-tab-character"}},[e._v("#")]),e._v(" Inserting a Literal tab Character")]),e._v(" "),t("p",[e._v("When "),t("code",[e._v("tab_completion")]),e._v(" is enabled,\nyou can press "),t("Key",{attrs:{k:"shift+tab"}}),e._v("\nto insert a literal tab character.")],1),e._v(" "),t("h2",{attrs:{id:"sources-for-completions-and-their-priorities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sources-for-completions-and-their-priorities"}},[e._v("#")]),e._v(" Sources for Completions and their Priorities")]),e._v(" "),t("p",[e._v("These are the sources for completions\nthe user can control,\nin the order they are prioritized:")]),e._v(" "),t("ol",[t("li",[t("RouterLink",{attrs:{to:"/guide/extensibility/snippets.html"}},[e._v("Snippets")])],1),e._v(" "),t("li",[e._v("API-injected completions via "),t("code",[e._v("on_query_completions")])]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/reference/completions.html"}},[e._v("Completions files")])],1)]),e._v(" "),t("p",[e._v("Additionally,\nthe following completions\nare folded into the final list:")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Words in the buffer")])]),e._v(" "),t("p",[e._v("Snippets will always win\nwhen the current prefix\nmatches their tab trigger "),t("em",[e._v("exactly")]),e._v(".\nFor the rest of the completion sources,\na fuzzy match is performed.\nFurthermore,\nsnippets always lose in a fuzzy match.")]),e._v(" "),t("p",[e._v("When a list of completions is shown,\nsnippets will still be listed alongside the other items,\neven if the prefix only partially matches\nthe snippets' tab triggers.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("Completions sourced from words in the buffer\ncan be suppressed explicitly\nfrom an "),t("code",[e._v("on_query_completions")]),e._v(" event hook.")])]),e._v(" "),t("h2",{attrs:{id:"auto-completion-triggers-and-selector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-completion-triggers-and-selector"}},[e._v("#")]),e._v(" Auto Completion Triggers and Selector")]),e._v(" "),t("p",[e._v("Sublime Text provides two settings\nfor users and package authors\nto tweak their auto completion behavior.\nBoth settings work independently of each other\nand either of them can\ntrigger the auto-completion popup.")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("auto_complete_selector")]),e._v(" expects a scope selector\nthat when matched causes the auto-completion popup\nto open for any non-punctuation character,\ni.e. for identifiers.\nThe default configuration disables this\nfor syntaxes with a focus on plain text, comments and strings.")]),e._v(" "),t("p",[e._v("Before 4070,\nthe selector was applied to the position "),t("em",[e._v("after")]),e._v(" the just-typed character.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("auto_complete_triggers")]),e._v(" expects a list of mappings\nthat may specify "),t("code",[e._v("characters")]),e._v("\nthat should trigger the auto-completion popup\nand/or a scope "),t("code",[e._v("selector")]),e._v(".\nIf both are provided,\nboth are required to match.")]),e._v(" "),t("p",[e._v("Additionally, a "),t("code",[e._v("rhs_empty")]),e._v(" boolean may be provided\nthat states whether the right-hand side of the caret\nmust be empty or a whitespace character.\nIt defaults to "),t("code",[e._v("false")]),e._v(".")])])]),e._v(" "),t("p",[e._v("Package authors may be interested\nin configuring triggers and/or the selector\nin a syntax-specific settings file.")])])}),[],!1,null,null,null);t.default=n.exports}}]);