(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{369:function(e,a,t){"use strict";t.r(a);var s=t(7),i=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("A package is a container for resources.")]),e._v(" "),a("h2",{attrs:{id:"package-locations-and-abbreviations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-locations-and-abbreviations"}},[e._v("#")]),e._v(" Package Locations (and Abbreviations)")]),e._v(" "),a("p",[e._v("There are three locations\nfor storing packages\nfor different purposes.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Packages can be "),a("strong",[e._v("folders")]),e._v("\nunder "),a("code",[e._v("Data/Packages")]),e._v(" (short: "),a("code",[e._v("Packages")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("or "),a("strong",[e._v("zip archives")]),e._v("\nwith the "),a("code",[e._v(".sublime-package")]),e._v(" extension\nlocated under "),a("code",[e._v("Data/Installed Packages")]),e._v("\n(short: "),a("code",[e._v("Installed Packages")]),e._v(")\nor any of its subdirectories.")])]),e._v(" "),a("li",[a("p",[e._v("Additionally,\nSublime Text provides a set of default packages\nas "),a("strong",[e._v("zip archives")]),e._v("\nin "),a("code",[e._v("Application/Packages")]),e._v(" (short: "),a("code",[e._v("Shipped Packages")]),e._v("),\nwhere "),a("em",[e._v("Application")]),e._v(" refers to the folder\nwhere the Sublime Text executable resides.")]),e._v(" "),a("p",[e._v("This folder is not intended to be modified by the user.")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("For simplicity, we will occasionally\nrefer to all these directories simply as "),a("code",[e._v("Packages")]),e._v(",\nand to a package in any folder\n("),a("code",[e._v(".sublime-package")]),e._v(" or not)\nas "),a("code",[e._v("Packages/PackageName")]),e._v(".\nConsequently, a file inside a package\nmay also be referred to as "),a("code",[e._v("PackageName/a_file.extension")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"sublime-package-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sublime-package-packages"}},[e._v("#")]),e._v(" "),a("code",[e._v(".sublime-package")]),e._v(" Packages")]),e._v(" "),a("p",[e._v("Packages distributed as "),a("code",[e._v(".sublime-package")]),e._v(" zip archives should be\nconsidered read-only containers of resources and never be modified\nmanually. Since they are usually updated as a whole, any manual changes\nmade to them will be lost in the process.")]),e._v(" "),a("p",[e._v("If you do want to modify files in these archives, see\n"),a("code",[e._v("overriding-packages")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"interactions-between-packages-with-the-same-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactions-between-packages-with-the-same-name"}},[e._v("#")]),e._v(" Interactions Between Packages with the Same Name")]),e._v(" "),a("p",[e._v("If two packages with the same name exist\nin both "),a("code",[e._v("Installed Packages")]),e._v(" and "),a("code",[e._v("Shipped Packages")]),e._v(",\nthe one in "),a("code",[e._v("Installed Packages")]),e._v(" will be used\nand the one in "),a("code",[e._v("Shipped Packages")]),e._v(" will be ignored.")]),e._v(" "),a("p",[e._v("Any file in "),a("code",[e._v("Packages/PackageName")]),e._v(" takes precedence\nover an identically named file\nin "),a("code",[e._v("Installed Packages/PackageName.sublime-package")]),e._v("\nor "),a("code",[e._v("Shipped Packages/PackageName.sublime-package")]),e._v(".")]),e._v(" "),a("p",[e._v("See also "),a("code",[e._v("overriding-packages")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"package-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-contents"}},[e._v("#")]),e._v(" Package Contents")]),e._v(" "),a("p",[e._v("Typical resources found in packages include:")]),e._v(" "),a("ul",[a("li",[e._v("build systems ("),a("code",[e._v(".sublime-build")]),e._v(")")]),e._v(" "),a("li",[e._v("color schemes ("),a("code",[e._v(".sublime-color-scheme")]),e._v(", "),a("code",[e._v(".tmTheme")]),e._v(")")]),e._v(" "),a("li",[e._v("key maps ("),a("code",[e._v(".sublime-keymap")]),e._v(")")]),e._v(" "),a("li",[e._v("macros ("),a("code",[e._v(".sublime-macro")]),e._v(")")]),e._v(" "),a("li",[e._v("menus ("),a("code",[e._v(".sublime-menu")]),e._v(")")]),e._v(" "),a("li",[e._v("metadata ("),a("code",[e._v(".tmPreferences")]),e._v(")")]),e._v(" "),a("li",[e._v("mouse maps ("),a("code",[e._v(".sublime-mousemap")]),e._v(")")]),e._v(" "),a("li",[e._v("plugins ("),a("code",[e._v(".py")]),e._v(")")]),e._v(" "),a("li",[e._v("settings ("),a("code",[e._v(".sublime-settings")]),e._v(")")]),e._v(" "),a("li",[e._v("snippets ("),a("code",[e._v(".sublime-snippet")]),e._v(")")]),e._v(" "),a("li",[e._v("syntax definitions ("),a("code",[e._v(".sublime-syntax")]),e._v(", "),a("code",[e._v(".tmLanguage")]),e._v(")")]),e._v(" "),a("li",[e._v("themes ("),a("code",[e._v(".sublime-theme")]),e._v(")")])]),e._v(" "),a("p",[e._v("Some packages may hold support files\nfor other packages or for core features.\nFor example, the spell checker\nuses "),a("code",[e._v("Installed Packages/Language - English.sublime-package")]),e._v("\nas a data store for English dictionaries.")]),e._v(" "),a("h2",{attrs:{id:"package-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-types"}},[e._v("#")]),e._v(" Package Types")]),e._v(" "),a("p",[e._v("In this guide, we categorize packages\nfor clarity when discussing this topic,\nbut Sublime Text doesn't use this terminology\nand you don't need to learn it.")]),e._v(" "),a("dl",[a("dt",[a("strong",[e._v("shipped packages")]),e._v(" or "),a("strong",[e._v("default packages")])]),e._v(" "),a("dd",[a("p",[e._v("A set of packages\nthat Sublime Text ships with.\nSome of these packages are "),a("em",[e._v("core packages")]),e._v(",\nwhile others enhance Sublime Text\nto support common programming languages out of the box.")]),e._v(" "),a("p",[e._v("Examples: Default, Python, Java, C++, Markdown.")]),e._v(" "),a("p",[e._v("Located in "),a("code",[e._v("Shipped Packages")]),e._v(".")])]),e._v(" "),a("dt",[a("strong",[e._v("core packages")])]),e._v(" "),a("dd",[a("p",[e._v("Sublime Text requires these packages\nin order to function properly.")]),e._v(" "),a("p",[e._v("Complete list: Default, Theme - Default, Color Scheme - Default, Text, Language - English.")]),e._v(" "),a("p",[e._v("They are part of the shipped packages and\nlocated in "),a("code",[e._v("Shipped Packages")]),e._v(".")])]),e._v(" "),a("dt",[a("strong",[e._v("user packages")])]),e._v(" "),a("dd",[a("p",[e._v("Installed or created by the user\nto extend Sublime Text's functionality.\nThey are not part of Sublime Text,\nand are always contributed by users\nor third parties.")]),e._v(" "),a("p",[e._v("Example: User.")]),e._v(" "),a("p",[e._v("Located in "),a("code",[e._v("Packages")]),e._v("\nand "),a("code",[e._v("Installed Packages")]),e._v(".")])]),e._v(" "),a("dt",[a("strong",[e._v("installed packages")])]),e._v(" "),a("dd",[a("p",[e._v("A subtype of "),a("em",[e._v("user packages")]),e._v(".")]),e._v(" "),a("p",[e._v("Installed packages are "),a("code",[e._v(".sublime-package")]),e._v(" archives\nand usually maintained by a package manager.")]),e._v(" "),a("p",[e._v("Located in "),a("code",[e._v("Installed Packages")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Due to the unfortunate name of this folder,\ntalking about "),a("em",[e._v("installing")]),e._v("\npackages in Sublime Text\nis confusing.")]),e._v(" "),a("p",[e._v("Sometimes, in this guide, by "),a("em",[e._v("installing")]),e._v(' we mean\n"adding a user/third party package to Sublime Text"\n(in any form),\nand sometimes we use the term\nin its stricter sense of\n"copying a '),a("code",[e._v(".sublime-package")]),e._v(" archive\nto "),a("code",[e._v("Installed Packages")]),e._v('".')])])]),e._v(" "),a("dt",[a("strong",[e._v("override packages")])]),e._v(" "),a("dd",[a("p",[e._v("A special type of "),a("em",[e._v("user packages")]),e._v(".")]),e._v(" "),a("p",[e._v("Override packages serve the purpose of customizing packages\nthat are distributed as "),a("code",[e._v(".sublime-package")]),e._v(" files.\nThey are effectively injected into the original package\nand do not stand-alone.")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"#customizing-or-overriding-packages"}},[e._v("Customizing or Overriding Packages")]),e._v(" for details.")]),e._v(" "),a("p",[e._v("Located in "),a("code",[e._v("Packages")]),e._v(".")])])]),e._v(" "),a("p",[e._v("Note that by "),a("em",[e._v("third party")]),e._v("\nwe also refer to users of other\neditors, notably Textmate,\nas Sublime Text and Textmate\nshare some types of resource files\nthat can be reused without modification.")]),e._v(" "),a("h2",{attrs:{id:"managing-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managing-packages"}},[e._v("#")]),e._v(" Managing Packages")]),e._v(" "),a("h3",{attrs:{id:"installing-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-packages"}},[e._v("#")]),e._v(" Installing Packages")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Regular users rarely need to know\nhow to install packages by hand,\nas automatic package managers are available.")]),e._v(" "),a("p",[e._v("The de facto package manager for Sublime Text\nis "),a("a",{attrs:{href:"https://packagecontrol.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Package Control"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Packages can be installed in two main ways:")]),e._v(" "),a("ul",[a("li",[e._v("by copying Sublime Text resources\nto a folder under "),a("code",[e._v("Packages")]),e._v(", or")]),e._v(" "),a("li",[e._v("by copying a "),a("code",[e._v(".sublime-package")]),e._v(" file\nto "),a("code",[e._v("Installed Packages")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"disabling-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-packages"}},[e._v("#")]),e._v(" Disabling Packages")]),e._v(" "),a("p",[e._v("To temporarily disable packages,\nyou can add them to the "),a("code",[e._v("ignored_packages")]),e._v(" list\nin your "),a("code",[e._v("Packages/User/Preferences.sublime-settings")]),e._v(" file.\nPackages will be loaded or unloaded as needed\nwhen the settings file is saved.")]),e._v(" "),a("h3",{attrs:{id:"enabling-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-packages"}},[e._v("#")]),e._v(" Enabling Packages")]),e._v(" "),a("p",[e._v("To re-enable a package,\nremove the package's name from the "),a("code",[e._v("ignored_packages")]),e._v(" list\nin your "),a("code",[e._v("Packages/User/Preferences.sublime-settings")]),e._v(" file.")]),e._v(" "),a("h3",{attrs:{id:"removing-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-packages"}},[e._v("#")]),e._v(" Removing Packages")]),e._v(" "),a("p",[e._v("If you installed a package with a package manager,\nremove it using the method provided by the package manager.")]),e._v(" "),a("p",[e._v("If you installed a package manually,\nfollow this procedure to safely remove a package:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#disabling-packages"}},[e._v("Disable")]),e._v(" the package\nwhile Sublime Text is running.")]),e._v(" "),a("li",[e._v("Close Sublime Text.")]),e._v(" "),a("li",[e._v("Remove the package's resources from the disk.")]),e._v(" "),a("li",[e._v("Remove the package's name from the "),a("code",[e._v("ignored_packages")]),e._v(" list.")])]),e._v(" "),a("p",[e._v("In addition to the resources\nyou have placed initially\nin a "),a("code",[e._v("Packages")]),e._v(" folder or in "),a("code",[e._v("Installed Packages")]),e._v(",\nplugins may create configuration files\n(such as "),a("code",[e._v(".sublime-settings")]),e._v(" files)\nor other files to store package-related data.\nFrequently, you will find them in the "),a("em",[e._v("User")]),e._v(" package.\nTherefore, if you want to remove all traces of a package,\nyou will need to find and remove all the additional files\nthat it may have installed.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Shipped packages are reinstated\nduring every Sublime Text update,\nso you can't delete them forever.\nIf you want to stop using a shipped package,\n"),a("a",{attrs:{href:"#disabling-packages"}},[e._v("disable")]),e._v(" it.")])]),e._v(" "),a("h2",{attrs:{id:"customizing-or-overriding-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-or-overriding-packages"}},[e._v("#")]),e._v(" Customizing or Overriding Packages")]),e._v(" "),a("p",[e._v("Since packages in "),a("code",[e._v(".sublime-package")]),e._v(" zip archives\n"),a("a",{attrs:{href:"#sublime-package-packages"}},[e._v("are read-only")]),e._v(",\nyou cannot modify them directly.\nHowever, Sublime Text allows you\nto create an "),a("Term",{attrs:{term:"override_package"}}),e._v("\nthat will effectively inject files into the original archive\nwithout modifying the archive itself.")],1),e._v(" "),a("p",[e._v("To create an override package,\ncreate a new folder under "),a("code",[e._v("Packages")]),e._v("\nand name it after the "),a("code",[e._v(".sublime-package")]),e._v(" file\nyou want to override, excluding the extension.\nAny file you create in this package\nwill take precedence over any identically named file\nin the original package.")]),e._v(" "),a("p",[e._v("Python plugins in override packages\nare able to use relative imports\nfor accessing other modules in the corresponding "),a("code",[e._v(".sublime-package")]),e._v(" file\nas if they were part of it.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Files in override packages override entire files.\nIf the overridden file in the corresponding "),a("code",[e._v(".sublime-package")]),e._v(" is updated,\nyou will not be notified.")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/OdatNurd/OverrideAudit",target:"_blank",rel:"noopener noreferrer"}},[e._v("OverrideAudit"),a("OutboundLink")],1),e._v(" package provides monitoring of override files\nand will notify you\nwhen the file it overrides has been updated.")])]),e._v(" "),a("h2",{attrs:{id:"merging-and-order-of-precedence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merging-and-order-of-precedence"}},[e._v("#")]),e._v(" Merging and Order of Precedence")]),e._v(" "),a("p",[e._v("Package precedence is important for merging certain resources,\nfor example, "),a("code",[e._v(".sublime-keymap")]),e._v(" and "),a("code",[e._v(".sublime-settings")]),e._v(" files,\nand for loading plugins ("),a("code",[e._v(".py")]),e._v(" files).")]),e._v(" "),a("p",[e._v("If an "),a("Term",{attrs:{term:"override_package"}}),e._v(" exists\nfor a "),a("code",[e._v(".sublime-package")]),e._v(" package,\nit will be loaded at the same time as the "),a("code",[e._v(".sublime-package")]),e._v(" archive.")],1),e._v(" "),a("p",[e._v("Sublime Text loads packages in this order:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("Packages/Default")]),e._v(";")]),e._v(" "),a("li",[a("Term",{attrs:{term:"shipped_package",show:"shipped_packages"}}),e._v(" in lexicographical order;")],1),e._v(" "),a("li",[a("Term",{attrs:{term:"installed_package",show:"installed_packages"}}),e._v(" in lexicographical order;")],1),e._v(" "),a("li",[e._v("all remaining "),a("Term",{attrs:{term:"user_package",show:"user_packages"}}),e._v(",\nexcept for "),a("code",[e._v("Packages/User")]),e._v(",\nthat did not override anything,\nin lexicographical order;")],1),e._v(" "),a("li",[a("code",[e._v("Packages/User")])])]),e._v(" "),a("h2",{attrs:{id:"reverting-sublime-text-to-its-default-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverting-sublime-text-to-its-default-configuration"}},[e._v("#")]),e._v(" Reverting Sublime Text to Its Default Configuration")]),e._v(" "),a("p",[e._v("Reverting Sublime Text to a fresh state\nsolves many problems\nthat appear to be bugs in Sublime Text\nbut are in fact caused by misbehaving\npackages and plugins.")]),e._v(" "),a("p",[e._v("To revert Sublime Text to its default configuration\nand remove all your settings and configurations,\ndelete the "),a("RouterLink",{attrs:{to:"/guide/getting-started/basic-concepts.html#the-data-directory"}},[e._v("Data directory")]),e._v("\nand restart the editor.\nKeep in mind\nthat the "),a("code",[e._v("Installed Packages")]),e._v(" folder will be deleted too,\nso you'll lose all your installed packages.")],1),e._v(" "),a("p",[e._v("Always make sure to back up your data\nbefore taking an extreme measure like this one!")])])}),[],!1,null,null,null);a.default=i.exports}}]);