# How to use Sublime for TypeScript

Sublime Text 4 ships with built-in TypeScript syntax support[^1].
The syntax definition is of higher quality
than other third-party syntax definitions
and is thus preferred
over the other options for ST3 listed [below](#options-for-sublime-text-3).

This built-in TypeScript package primarily provides syntax highlighting
and is accompanied by the Sublime Text core features,
such as [completions](../extensibility/completions.html)
and [“Go to Definition”](https://www.sublimetext.com/docs/indexing.html).

### LSP

If you are looking for
inline documentation via on-hover popups,
type hints,
advanced auto-complete,
and refactoring tools,
you'll want to install the [LSP][]
and [LSP-typescript][] packages.

LSP (Language Server Protocol) is
the [same underlying technology](https://langserver.org) used in VSCode
and other editors with rich TypeScript support.
The [Sublime LSP project](https://lsp.sublimetext.io/)
offers similar support
for [many different languages](https://lsp.sublimetext.io/language_servers/).

### ESLint

If you are using LSP,
install [LSP-eslint][]
for general linting behaviors.

Alternatively,
you can get ESLint support
by combining the [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)
and [SublineLinter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint) packages.

### Options for Sublime Text 3

* The [TypeScript Syntax][] package can be used
  for basic syntax support in ST3.
* [LSP-typescript][]
  is also compatible with ST3.
* [Microsoft's TypeScript package][ms-TypeScript] package
  is an alternative that includes both syntax support and LSP behavior.
  Note that it does not play well with ST4.


[LSP]: https://packagecontrol.io/packages/LSP
[LSP-typescript]: https://packagecontrol.io/packages/LSP-typescript
[LSP-eslint]: https://packagecontrol.io/packages/LSP-eslint
[TypeScript Syntax]: https://packagecontrol.io/packages/TypeScript%20Syntax
[ms-TypeScript]: https://packagecontrol.io/packages/TypeScript

[^1]: [Sublime Text 4 release announcement](https://www.sublimetext.com/blog/articles/sublime-text-4)
