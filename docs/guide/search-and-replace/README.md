---
title: Overview
---

Sublime Text features
two main types of search:

- [Search - Single File](./single.md)
- [Search - Multiple File](./multiple.md)

Both support **regular expressions**,
a powerful tool for searching and replacing text.

## Regular Expressions

Regular Expressions find complex *patterns* in text.
To take full advantage
of the search and replace facilities in Sublime Text,
you should at least learn
the basics of regular expressions.
In this guide
we won't explain how to use regular expressions.

The term *regular expression*
is usually shortened to *regexp* or *regex*.

This is how a regex might look:

```regex
(?:Sw|P)i(?:tch|s{2})\s(?:it\s)?of{2}!
```

To use regular expressions in Sublime Text,
you first need to activate them in
the various search panels.
Otherwise, search terms will be interpreted literally.

![Search and Replace](../images/search-and-replace-regex-sample.png)

Sublime Text uses the
Perl Compatible Regular Expressions (PCRE) engine
from the Boost library.


::: tip See Also
[Boost library documentation for regular expressions](https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html)
: Documentation on regular expressions.

[Boost library documentation for format strings](https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/format/perl_format.html)
: Documentation on format strings.
  Note that Sublime Text additionally interprets `\\{n}` as `${n}`.
:::
