import{_ as s,C as r,o as i,c as o,k as e,H as l,a as n,Q as a}from"./chunks/framework.7cebd429.js";const c="/assets/search-replace-multi-line.f2323c9b.png",h="/assets/search-filters.a8abd868.png",d="/assets/search-results-pattern.47dac7f7.png",u="/assets/search-regex-sample.2d1f8d7b.png",me=JSON.parse('{"title":"Search and Replace","description":"","frontmatter":{"title":"Search and Replace"},"headers":[],"relativePath":"guide/usage/search-and-replace.md","filePath":"guide/usage/search-and-replace.md","lastUpdated":1698610674000}'),p={name:"guide/usage/search-and-replace.md"},_=a('<h1 id="search-and-replace" tabindex="-1">Search and Replace <a class="header-anchor" href="#search-and-replace" aria-label="Permalink to &quot;Search and Replace&quot;">​</a></h1><p>Sublime Text features two main types of search:</p><ul><li><a href="#single-file">Single File</a></li><li><a href="#multiple-files">Multiple Files</a></li></ul><p>Both support <a href="#regular-expressions">regular expressions</a>, a powerful tool for searching and replacing text.</p><h2 id="single-file" tabindex="-1">Single File <a class="header-anchor" href="#single-file" aria-label="Permalink to &quot;Single File&quot;">​</a></h2><h3 id="searching" tabindex="-1">Searching <a class="header-anchor" href="#searching" aria-label="Permalink to &quot;Searching&quot;">​</a></h3><p>Keyboard shortcuts related to the search panel:</p>',7),g=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),m=e("td",null,[e("strong",null,"Open search panel")],-1),f=e("td",null,"Toggle regular expressions",-1),b=e("td",null,"Toggle case sensitivity",-1),x=e("td",null,"Toggle exact match",-1),k=e("td",null,"Find next",-1),S=e("td",null,"Find previous",-1),T=e("td",null,"Find all",-1),y=e("h3",{id:"incremental-search",tabindex:"-1"},[n("Incremental Search "),e("a",{class:"header-anchor",href:"#incremental-search","aria-label":'Permalink to "Incremental Search"'},"​")],-1),w=e("p",null,"Keyboard shortcuts related to the incremental search panel:",-1),P=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),v=e("td",null,[e("strong",null,"Open incremental search panel")],-1),R=e("td",null,"Toggle regular expressions",-1),q=e("td",null,"Toggle case sensitivity",-1),F=e("td",null,"Toggle exact match",-1),A=e("td",null,"Find next",-1),C=e("td",null,"Find previous",-1),I=e("td",null,"Find all",-1),D=e("h3",{id:"replacing-text",tabindex:"-1"},[n("Replacing Text "),e("a",{class:"header-anchor",href:"#replacing-text","aria-label":'Permalink to "Replacing Text"'},"​")],-1),N=e("p",null,"Keyboard shortcuts related to the replace panel:",-1),V=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),E=e("td",null,[e("strong",null,"Open replace panel")],-1),O=e("td",null,"Replace next",-1),B=e("td",null,"Replace all",-1),K=a('<h3 id="tips" tabindex="-1">Tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;Tips&quot;">​</a></h3><h4 id="other-ways-of-searching-in-files" tabindex="-1">Other Ways of Searching in Files <a class="header-anchor" href="#other-ways-of-searching-in-files" aria-label="Permalink to &quot;Other Ways of Searching in Files&quot;">​</a></h4><p><a href="./file-management/navigation.html#goto-anything">Goto Anything</a> provides the <code>#</code> operator to search in the filtered file.</p><h4 id="other-search-related-key-bindings" tabindex="-1">Other Search-Related Key Bindings <a class="header-anchor" href="#other-search-related-key-bindings" aria-label="Permalink to &quot;Other Search-Related Key Bindings&quot;">​</a></h4><p>These key bindings work when the search panel is hidden:</p>',5),M=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),$=e("td",null,"Search forward using most recent pattern",-1),W=e("td",null,"Search backwards using most recent pattern",-1),Y=e("td",null,"Select all matches using most recent pattern",-1),z=e("p",null,"You can also perform searches based on the current selection:",-1),U=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),G=e("td",null,"Search using current selection",-1),H=e("td",null,"Replace using current selection",-1),J=e("h3",{id:"multiline-search",tabindex:"-1"},[n("Multiline Search "),e("a",{class:"header-anchor",href:"#multiline-search","aria-label":'Permalink to "Multiline Search"'},"​")],-1),Q=a('<p><img src="'+c+'" alt="Mutiline Replace"></p><p>Note that search panels are resizable too.</p><h2 id="multiple-files" tabindex="-1">Multiple Files <a class="header-anchor" href="#multiple-files" aria-label="Permalink to &quot;Multiple Files&quot;">​</a></h2><h3 id="searching-1" tabindex="-1">Searching <a class="header-anchor" href="#searching-1" aria-label="Permalink to &quot;Searching&quot;">​</a></h3><p>Keyboard shortcuts related to Find in Files:</p>',5),j=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),L=e("td",null,[e("strong",null,"Open Find in Files")],-1),X=e("td",null,"Toggle regular expressions",-1),Z=e("td",null,"Toggle case sensitivity",-1),ee=e("td",null,"Toggle exact matches",-1),te=e("td",null,"Find next",-1),le=a('<h3 id="search-scope" tabindex="-1">Search Scope <a class="header-anchor" href="#search-scope" aria-label="Permalink to &quot;Search Scope&quot;">​</a></h3><p>The <strong>Where</strong> field in Find in Files limits the search scope. You can define scopes in several ways:</p><ul><li>Adding individual directories (Unix-style paths, even on Windows)</li><li>Adding/excluding files based on wildcards</li><li>Adding symbolic locations (<code>&lt;open folders&gt;</code>, <code>&lt;open files&gt;</code>...)</li></ul><p>It is also possible to combine these filters using commas; for example:</p><p><img src="'+h+'" alt="Search Patterns"></p><p>Press the <strong>...</strong> button in the search panel to display a menu containing scope options.</p><h3 id="results-format" tabindex="-1">Results Format <a class="header-anchor" href="#results-format" aria-label="Permalink to &quot;Results Format&quot;">​</a></h3><p>In the search panel, you can customize how results are displayed. These are the available options:</p><ul><li>Show in separate view</li><li>Show context</li></ul><p><img src="'+d+'" alt="Search Results"></p><h3 id="navigating-results" tabindex="-1">Navigating Results <a class="header-anchor" href="#navigating-results" aria-label="Permalink to &quot;Navigating Results&quot;">​</a></h3><p>If the search yields matches, you can move through the sequence using the following key bindings:</p>',12),ne=e("thead",null,[e("tr",null,[e("th",null,"Description"),e("th",null,"Shortcut")])],-1),ae=e("td",null,"Next match",-1),se=e("td",null,"Previous match",-1),re=e("td",null,"Open match",-1),ie=a('<p>You can also double-click on lines with a match.</p><h2 id="regular-expressions" tabindex="-1">Regular Expressions <a class="header-anchor" href="#regular-expressions" aria-label="Permalink to &quot;Regular Expressions&quot;">​</a></h2><p>Regular Expressions find complex <em>patterns</em> in text. To take full advantage of the search and replace facilities in Sublime Text, you should at least learn the basics of regular expressions. In this guide we won&#39;t explain how to use regular expressions.</p><p>The term <em>regular expression</em> is usually shortened to <em>regexp</em> or <em>regex</em>.</p><p>This is how a regex might look:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(?:Sw|P)i(?:tch|s{2})\\s(?:it\\s)?of{2}!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(?:Sw|P)i(?:tch|s{2})\\s(?:it\\s)?of{2}!</span></span></code></pre></div><p>To use regular expressions in Sublime Text, you first need to activate them in the various search panels. Otherwise, search terms will be interpreted literally.</p><p><img src="'+u+'" alt="Search and Replace"></p><p>Sublime Text uses the Perl Compatible Regular Expressions (PCRE) engine from the Boost library.</p><div class="info custom-block"><p class="custom-block-title">See Also</p><p><a href="https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html" target="_blank" rel="noreferrer">Boost library documentation for regular expressions</a> : Documentation on regular expressions.</p><p><a href="https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/format/perl_format.html" target="_blank" rel="noreferrer">Boost library documentation for format strings</a> : Documentation on format strings. Note that Sublime Text additionally interprets <code>\\\\{n}</code> as <code>${n}</code>.</p></div>',10);function oe(ce,he,de,ue,pe,_e){const t=r("Key");return i(),o("div",null,[_,e("table",null,[g,e("tbody",null,[e("tr",null,[m,e("td",null,[l(t,{k:"ctrl+f"})])]),e("tr",null,[f,e("td",null,[l(t,{k:"alt+r"})])]),e("tr",null,[b,e("td",null,[l(t,{k:"alt+c"})])]),e("tr",null,[x,e("td",null,[l(t,{k:"alt+w"})])]),e("tr",null,[k,e("td",null,[l(t,{k:"enter"})])]),e("tr",null,[S,e("td",null,[l(t,{k:"shift+enter"})])]),e("tr",null,[T,e("td",null,[l(t,{k:"alt+enter"})])])])]),y,w,e("table",null,[P,e("tbody",null,[e("tr",null,[v,e("td",null,[l(t,{k:"ctrl+i"})])]),e("tr",null,[R,e("td",null,[l(t,{k:"alt+r"})])]),e("tr",null,[q,e("td",null,[l(t,{k:"alt+c"})])]),e("tr",null,[F,e("td",null,[l(t,{k:"alt+w"})])]),e("tr",null,[A,e("td",null,[l(t,{k:"enter"})])]),e("tr",null,[C,e("td",null,[l(t,{k:"shift+enter"})])]),e("tr",null,[I,e("td",null,[l(t,{k:"alt+enter"})])])])]),e("p",null,[n("The only difference between this panel and the regular search panel lies in the behavior of the "),l(t,{k:"enter"}),n(" key. In incremental searches, it will select the next match in the file and dismiss the search panel for you. Choosing between this panel or the regular search panel is a matter of preference.")]),D,N,e("table",null,[V,e("tbody",null,[e("tr",null,[E,e("td",null,[l(t,{k:"ctrl+h"})])]),e("tr",null,[O,e("td",null,[l(t,{k:"ctrl+shift+h"})])]),e("tr",null,[B,e("td",null,[l(t,{k:"ctrl+alt+enter"})])])])]),K,e("table",null,[M,e("tbody",null,[e("tr",null,[$,e("td",null,[l(t,{k:"f3"})])]),e("tr",null,[W,e("td",null,[l(t,{k:"shift+f3"})])]),e("tr",null,[Y,e("td",null,[l(t,{k:"alt+f3"})])])])]),z,e("table",null,[U,e("tbody",null,[e("tr",null,[G,e("td",null,[l(t,{k:"ctrl+e"})])]),e("tr",null,[H,e("td",null,[l(t,{k:"ctrl+shift+e"})])])])]),J,e("p",null,[n("You can type in multiline search patterns into search panels. To enter newline characters, press "),l(t,{k:"ctrl+enter"}),n(".")]),Q,e("table",null,[j,e("tbody",null,[e("tr",null,[L,e("td",null,[l(t,{k:"ctrl+shift+f"})])]),e("tr",null,[X,e("td",null,[l(t,{k:"alt+r"})])]),e("tr",null,[Z,e("td",null,[l(t,{k:"alt+c"})])]),e("tr",null,[ee,e("td",null,[l(t,{k:"alt+w"})])]),e("tr",null,[te,e("td",null,[l(t,{k:"Enter"})])])])]),le,e("table",null,[ne,e("tbody",null,[e("tr",null,[ae,e("td",null,[l(t,{k:"f4"})])]),e("tr",null,[se,e("td",null,[l(t,{k:"shift+f4"})])]),e("tr",null,[re,e("td",null,[l(t,{k:"enter"})])])])]),ie])}const fe=s(p,[["render",oe]]);export{me as __pageData,fe as default};