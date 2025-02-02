---
title: How to use Sublime for TypeScript development
---

Sublime Text 4 [ships with built-in TypeScript syntax](https://www.sublimetext.com/blog/articles/sublime-text-4).

This built-in support includes highlighting plus core Sublime [completion](../extensibility/completions.html) and [“Go to Definition”](https://www.sublimetext.com/docs/indexing.html) behaviors.

### LSP

If you're looking for inline docs,
advanced autocomplete and refactor tools,
you’ll want to install the [`LSP`](https://packagecontrol.io/packages/LSP)
and [`LSP-typescript`](https://packagecontrol.io/packages/LSP-typescript) packages.


LSP (Language Server Protocol) is
the [same underlying technology](https://langserver.org) used in VSCode
and other clients with rich TypeScript support.
The [Sublime LSP project](https://lsp.sublimetext.io/)
offers similar support
for [many different languages](https://lsp.sublimetext.io/language_servers/).

### ESLint

If you’re using LSP,
add [`LSP-eslint`](https://packagecontrol.io/packages/LSP-eslint)
for general linting behaviors.

Alternatively,
you can get ESLint support
by combining the [`SublimeLinter`](https://packagecontrol.io/packages/SublimeLinter)
and [`SublineLinter-eslint`](https://packagecontrol.io/packages/SublimeLinter-eslint) packages.


### Options for Sublime Text 3

* The [`TypeScript Syntax`](https://packagecontrol.io/packages/TypeScript%20Syntax) package
  can be used for basic syntax support in ST3.
* [`LSP-typescript`](https://packagecontrol.io/packages/LSP-typescript)
  is also compatible with ST3.
* Microsoft’s [`TypeScript`](https://packagecontrol.io/packages/TypeScript) package [github](https://github.com/microsoft/TypeScript-Sublime-Plugin)
  is an alternative that includes both syntax support and LSP behaviors.
