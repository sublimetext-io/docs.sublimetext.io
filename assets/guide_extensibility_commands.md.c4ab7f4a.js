import{_ as s,o,c as a,Q as n}from"./chunks/framework.0e8ae64e.js";const E=JSON.parse('{"title":"Commands","description":"","frontmatter":{"title":"Commands"},"headers":[],"relativePath":"guide/extensibility/commands.md","filePath":"guide/extensibility/commands.md","lastUpdated":1698584757000}'),e={name:"guide/extensibility/commands.md"},t=n(`<h1 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h1><p>Commands are ubiquitous in Sublime Text: key bindings, menu items and macros all work through the command system. They are found in other places too.</p><p>Some commands are implemented in the editor&#39;s core, but many of them are provided as Python plugins. Every command can be called from a Python plugin.</p><h2 id="command-dispatching" tabindex="-1">Command Dispatching <a class="header-anchor" href="#command-dispatching" aria-label="Permalink to &quot;Command Dispatching&quot;">​</a></h2><p>Normally, commands are bound to the application object, a window object or a view object. Window objects, however, will dispatch commands based on input focus, so you can issue a view command from a window object and the correct view instance will be found for you.</p><h2 id="anatomy-of-a-command" tabindex="-1">Anatomy of a Command <a class="header-anchor" href="#anatomy-of-a-command" aria-label="Permalink to &quot;Anatomy of a Command&quot;">​</a></h2><p>Commands have a name separated by underscores (snake_case) like <code>hot_exit</code>, and can take a dictionary of arguments whose keys must be strings and whose values must be JSON types. Here are a few examples of commands run from the Python console:</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">view.run_command(</span><span style="color:#9ECBFF;">&quot;goto_line&quot;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;line&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">view.run_command(</span><span style="color:#9ECBFF;">&#39;insert_snippet&#39;</span><span style="color:#E1E4E8;">, {</span><span style="color:#9ECBFF;">&quot;contents&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;$SELECTION&gt;&quot;</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">view.window().run_command(</span><span style="color:#9ECBFF;">&quot;prompt_select_project&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">view.run_command(</span><span style="color:#032F62;">&quot;goto_line&quot;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;line&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">view.run_command(</span><span style="color:#032F62;">&#39;insert_snippet&#39;</span><span style="color:#24292E;">, {</span><span style="color:#032F62;">&quot;contents&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;$SELECTION&gt;&quot;</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">view.window().run_command(</span><span style="color:#032F62;">&quot;prompt_select_project&quot;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="from-command-line-cli" tabindex="-1">From command line (CLI) <a class="header-anchor" href="#from-command-line-cli" aria-label="Permalink to &quot;From command line (CLI)&quot;">​</a></h2><p>Commands may be passed to Sublime Text directly from the command line of the operating system. Usage:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">subl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--command</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;show_overlay {&quot;overlay&quot;: &quot;command_palette&quot;, &quot;text&quot;: &quot;hello&quot;}&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># on Windows:</span></span>
<span class="line"><span style="color:#B392F0;">sublime-text.exe</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--command</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;show_overlay {</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">overlay</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">: </span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">command_palette</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">, </span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">text</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">: </span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">hello</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">}&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">subl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--command</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;show_overlay {&quot;overlay&quot;: &quot;command_palette&quot;, &quot;text&quot;: &quot;hello&quot;}&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># on Windows:</span></span>
<span class="line"><span style="color:#6F42C1;">sublime-text.exe</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--command</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;show_overlay {</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">overlay</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">: </span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">command_palette</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">, </span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">text</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">: </span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">hello</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">}&quot;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">See Also</p><p><a href="/reference/commands.html">Reference for commands</a></p></div>`,12),l=[t];function p(c,r,i,m,d,y){return o(),a("div",null,l)}const h=s(e,[["render",p]]);export{E as __pageData,h as default};
