import{_ as e,o as a,c as i,Q as o}from"./chunks/framework.7cebd429.js";const m=JSON.parse('{"title":"Packages","description":"","frontmatter":{"title":"Packages"},"headers":[],"relativePath":"guide/extensibility/packages.md","filePath":"guide/extensibility/packages.md","lastUpdated":1698610674000}'),t={name:"guide/extensibility/packages.md"},s=o('<h1 id="packages" tabindex="-1">Packages <a class="header-anchor" href="#packages" aria-label="Permalink to &quot;Packages&quot;">​</a></h1><p>A package is a container for resources.</p><h2 id="package-locations-and-abbreviations" tabindex="-1">Package Locations (and Abbreviations) <a class="header-anchor" href="#package-locations-and-abbreviations" aria-label="Permalink to &quot;Package Locations (and Abbreviations)&quot;">​</a></h2><p>There are three locations for storing packages for different purposes.</p><ul><li><p>Packages can be <strong>folders</strong> under <code>Data/Packages</code> (short: <code>Packages</code>)</p></li><li><p>or <strong>zip archives</strong> with the <code>.sublime-package</code> extension located under <code>Data/Installed Packages</code> (short: <code>Installed Packages</code>) or any of its subdirectories.</p></li><li><p>Additionally, Sublime Text provides a set of default packages as <strong>zip archives</strong> in <code>Application/Packages</code> (short: <code>Shipped Packages</code>), where <em>Application</em> refers to the folder where the Sublime Text executable resides.</p><p>This folder is not intended to be modified by the user.</p></li></ul><div class="tip custom-block"><p class="custom-block-title">Note</p><p>For simplicity, we will occasionally refer to all these directories simply as <code>Packages</code>, and to a package in any folder (<code>.sublime-package</code> or not) as <code>Packages/PackageName</code>. Consequently, a file inside a package may also be referred to as <code>PackageName/a_file.extension</code>.</p></div><h3 id="sublime-package-packages" tabindex="-1"><code>.sublime-package</code> Packages <a class="header-anchor" href="#sublime-package-packages" aria-label="Permalink to &quot;`.sublime-package` Packages&quot;">​</a></h3><p>Packages distributed as <code>.sublime-package</code> zip archives should be considered read-only containers of resources and never be modified manually. Since they are usually updated as a whole, any manual changes made to them will be lost in the process.</p><p>If you do want to modify files in these archives, see <code>overriding-packages</code>.</p><h3 id="interactions-between-packages-with-the-same-name" tabindex="-1">Interactions Between Packages with the Same Name <a class="header-anchor" href="#interactions-between-packages-with-the-same-name" aria-label="Permalink to &quot;Interactions Between Packages with the Same Name&quot;">​</a></h3><p>If two packages with the same name exist in both <code>Installed Packages</code> and <code>Shipped Packages</code>, the one in <code>Installed Packages</code> will be used and the one in <code>Shipped Packages</code> will be ignored.</p><p>Any file in <code>Packages/PackageName</code> takes precedence over an identically named file in <code>Installed Packages/PackageName.sublime-package</code> or <code>Shipped Packages/PackageName.sublime-package</code>.</p><p>See also <code>overriding-packages</code>.</p><h2 id="package-contents" tabindex="-1">Package Contents <a class="header-anchor" href="#package-contents" aria-label="Permalink to &quot;Package Contents&quot;">​</a></h2><p>Typical resources found in packages include:</p><ul><li>build systems (<code>.sublime-build</code>)</li><li>color schemes (<code>.sublime-color-scheme</code>, <code>.tmTheme</code>)</li><li>key maps (<code>.sublime-keymap</code>)</li><li>macros (<code>.sublime-macro</code>)</li><li>menus (<code>.sublime-menu</code>)</li><li>metadata (<code>.tmPreferences</code>)</li><li>mouse maps (<code>.sublime-mousemap</code>)</li><li>plugins (<code>.py</code>)</li><li>settings (<code>.sublime-settings</code>)</li><li>snippets (<code>.sublime-snippet</code>)</li><li>syntax definitions (<code>.sublime-syntax</code>, <code>.tmLanguage</code>)</li><li>themes (<code>.sublime-theme</code>)</li></ul><p>Some packages may hold support files for other packages or for core features. For example, the spell checker uses <code>Installed Packages/Language - English.sublime-package</code> as a data store for English dictionaries.</p><h2 id="package-types" tabindex="-1">Package Types <a class="header-anchor" href="#package-types" aria-label="Permalink to &quot;Package Types&quot;">​</a></h2><p>In this guide, we categorize packages for clarity when discussing this topic, but Sublime Text doesn&#39;t use this terminology and you don&#39;t need to learn it.</p><p><strong>shipped packages</strong> or <strong>default packages</strong> : A set of packages that Sublime Text ships with. Some of these packages are <em>core packages</em>, while others enhance Sublime Text to support common programming languages out of the box.</p><p>Examples: Default, Python, Java, C++, Markdown.</p><p>Located in <code>Shipped Packages</code>.</p><p><strong>core packages</strong> : Sublime Text requires these packages in order to function properly.</p><p>Complete list: Default, Theme - Default, Color Scheme - Default, Text, Language - English.</p><p>They are part of the shipped packages and located in <code>Shipped Packages</code>.</p><p><strong>user packages</strong> : Installed or created by the user to extend Sublime Text&#39;s functionality. They are not part of Sublime Text, and are always contributed by users or third parties.</p><p>Example: User.</p><p>Located in <code>Packages</code> and <code>Installed Packages</code>.</p><p><strong>installed packages</strong> : A subtype of <em>user packages</em>.</p><p>Installed packages are <code>.sublime-package</code> archives and usually maintained by a package manager.</p><p>Located in <code>Installed Packages</code>.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Due to the unfortunate name of this folder, talking about <em>installing</em> packages in Sublime Text is confusing.</p><p>Sometimes, in this guide, by <em>installing</em> we mean &quot;adding a user/third party package to Sublime Text&quot; (in any form), and sometimes we use the term in its stricter sense of &quot;copying a <code>.sublime-package</code> archive to <code>Installed Packages</code>&quot;.</p></div><p><strong>override packages</strong> : A special type of <em>user packages</em>.</p><p>Override packages serve the purpose of customizing packages that are distributed as <code>.sublime-package</code> files. They are effectively injected into the original package and do not stand-alone.</p><p>See <a href="#customizing-or-overriding-packages">Customizing or Overriding Packages</a> for details.</p><p>Located in <code>Packages</code>.</p><p>Note that by <em>third party</em> we also refer to users of other editors, notably Textmate, as Sublime Text and Textmate share some types of resource files that can be reused without modification.</p><h2 id="managing-packages" tabindex="-1">Managing Packages <a class="header-anchor" href="#managing-packages" aria-label="Permalink to &quot;Managing Packages&quot;">​</a></h2><h3 id="installing-packages" tabindex="-1">Installing Packages <a class="header-anchor" href="#installing-packages" aria-label="Permalink to &quot;Installing Packages&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Regular users rarely need to know how to install packages by hand, as automatic package managers are available.</p><p>The de facto package manager for Sublime Text is <a href="https://packagecontrol.io" target="_blank" rel="noreferrer">Package Control</a>.</p></div><p>Packages can be installed in two main ways:</p><ul><li>by copying Sublime Text resources to a folder under <code>Packages</code>, or</li><li>by copying a <code>.sublime-package</code> file to <code>Installed Packages</code>.</li></ul><h3 id="disabling-packages" tabindex="-1">Disabling Packages <a class="header-anchor" href="#disabling-packages" aria-label="Permalink to &quot;Disabling Packages&quot;">​</a></h3><p>To temporarily disable packages, you can add them to the <code>ignored_packages</code> list in your <code>Packages/User/Preferences.sublime-settings</code> file. Packages will be loaded or unloaded as needed when the settings file is saved.</p><h3 id="enabling-packages" tabindex="-1">Enabling Packages <a class="header-anchor" href="#enabling-packages" aria-label="Permalink to &quot;Enabling Packages&quot;">​</a></h3><p>To re-enable a package, remove the package&#39;s name from the <code>ignored_packages</code> list in your <code>Packages/User/Preferences.sublime-settings</code> file.</p><h3 id="removing-packages" tabindex="-1">Removing Packages <a class="header-anchor" href="#removing-packages" aria-label="Permalink to &quot;Removing Packages&quot;">​</a></h3><p>If you installed a package with a package manager, remove it using the method provided by the package manager.</p><p>If you installed a package manually, follow this procedure to safely remove a package:</p><ol><li><a href="#disabling-packages">Disable</a> the package while Sublime Text is running.</li><li>Close Sublime Text.</li><li>Remove the package&#39;s resources from the disk.</li><li>Remove the package&#39;s name from the <code>ignored_packages</code> list.</li></ol><p>In addition to the resources you have placed initially in a <code>Packages</code> folder or in <code>Installed Packages</code>, plugins may create configuration files (such as <code>.sublime-settings</code> files) or other files to store package-related data. Frequently, you will find them in the <em>User</em> package. Therefore, if you want to remove all traces of a package, you will need to find and remove all the additional files that it may have installed.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Shipped packages are reinstated during every Sublime Text update, so you can&#39;t delete them forever. If you want to stop using a shipped package, <a href="#disabling-packages">disable</a> it.</p></div><h2 id="customizing-or-overriding-packages" tabindex="-1">Customizing or Overriding Packages <a class="header-anchor" href="#customizing-or-overriding-packages" aria-label="Permalink to &quot;Customizing or Overriding Packages&quot;">​</a></h2><p>Since packages in <code>.sublime-package</code> zip archives <a href="#sublime-package-packages">are read-only</a>, you cannot modify them directly. However, Sublime Text allows you to create an :override_package: that will effectively inject files into the original archive without modifying the archive itself.</p><p>To create an override package, create a new folder under <code>Packages</code> and name it after the <code>.sublime-package</code> file you want to override, excluding the extension. Any file you create in this package will take precedence over any identically named file in the original package.</p><p>Python plugins in override packages are able to use relative imports for accessing other modules in the corresponding <code>.sublime-package</code> file as if they were part of it.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Files in override packages override entire files. If the overridden file in the corresponding <code>.sublime-package</code> is updated, you will not be notified.</p><p>The <a href="https://github.com/OdatNurd/OverrideAudit" target="_blank" rel="noreferrer">OverrideAudit</a> package provides monitoring of override files and will notify you when the file it overrides has been updated.</p></div><h2 id="merging-and-order-of-precedence" tabindex="-1">Merging and Order of Precedence <a class="header-anchor" href="#merging-and-order-of-precedence" aria-label="Permalink to &quot;Merging and Order of Precedence&quot;">​</a></h2><p>Package precedence is important for merging certain resources, for example, <code>.sublime-keymap</code> and <code>.sublime-settings</code> files, and for loading plugins (<code>.py</code> files).</p><p>If an :override_package: exists for a <code>.sublime-package</code> package, it will be loaded at the same time as the <code>.sublime-package</code> archive.</p><p>Sublime Text loads packages in this order:</p><ol><li><code>Packages/Default</code>;</li><li>:shipped_package:shipped_packages: in lexicographical order;</li><li>:installed_package:installed_packages: in lexicographical order;</li><li>all remaining :user_package:user_packages:, except for <code>Packages/User</code>, that did not override anything, in lexicographical order;</li><li><code>Packages/User</code></li></ol><h2 id="reverting-sublime-text-to-its-default-configuration" tabindex="-1">Reverting Sublime Text to Its Default Configuration <a class="header-anchor" href="#reverting-sublime-text-to-its-default-configuration" aria-label="Permalink to &quot;Reverting Sublime Text to Its Default Configuration&quot;">​</a></h2><p>Reverting Sublime Text to a fresh state solves many problems that appear to be bugs in Sublime Text but are in fact caused by misbehaving packages and plugins.</p><p>To revert Sublime Text to its default configuration and remove all your settings and configurations, delete the <a href="./../getting-started/basic-concepts.html#the-data-directory">Data directory</a> and restart the editor. Keep in mind that the <code>Installed Packages</code> folder will be deleted too, so you&#39;ll lose all your installed packages.</p><p>Always make sure to back up your data before taking an extreme measure like this one!</p>',66),c=[s];function r(n,l,d,p,g,u){return a(),i("div",null,c)}const k=e(t,[["render",r]]);export{m as __pageData,k as default};