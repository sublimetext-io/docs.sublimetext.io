---
title: Syntax Definition Tutorial
---

# Syntax Definitions

## Prerequisites

In order to follow this tutorial,
you will need to install [PackageDev][],
a package intended to ease the creation
of new syntax definitions for Sublime Text.
Follow the installation notes
in the "Getting Started" section of its ReadMe.

[packagedev]: https://github.com/SublimeText/PackageDev


## Your First Syntax Definition

By way of example, let's create a syntax definition for Sublime Text
snippets. We'll be styling the actual snippet content, not the whole
`.sublime-snippet` file.

::: tip Note
Since syntax definitions are primarily used to enable syntax highlighting,
we'll use the phrase *to style* to mean *to break down a source code file
into scopes*. Keep in mind, however, that colors are a different thing from
syntax definitions and that scopes have many more uses besides syntax
highlighting.
:::

Here are the elements we want to style in a snippet:

- Variables (`$PARAM1`, `$USER_NAME`\ ...)
- Simple fields (`$0`, `$1`\ ...)
- Complex fields with placeholders (`${1:Hello}`)
- Nested fields (`${1:Hello ${2:World}!}`)
- Escape sequences (`\$`, `\<`, …)
- Illegal sequences (`$`, `<`, `\`, …)

Here are the elements we don't want to style because they are too complex for
this example:

- Variable Substitution (`${1/Hello/Hi/g}`)

::: tip Note
Before continuing, make sure you've installed the
<Term term="package_dev" /> package as explained above.
:::


## Creating a New Syntax Definition

To create a new syntax definition, follow these steps:

1. Open the Command Palette and choose **New Syntax&hellip;**
1. Save the new file in your `Packages/User` folder
  as a `.sublime-syntax` file.

You now should see a file like this:

```yaml
%YAML 1.2
---
# See https://www.sublimetext.com/docs/syntax.html
file_extensions:
  - ec
scope: source.example-c
contexts:
  main:
# ...
```

Let's examine the key elements.

`scope`
: The topmost [scope][] for this syntax definition.
  It takes the form `source.<lang_name>` or `text.<lang_name>`.
  For programming languages, use `source`.
  For markup and everything else, use `text`.

`file_extensions`
: This is a list of file extensions (without the leading dot).
  When opening files of these types,
  Sublime Text will automatically activate this syntax definition for them.

`contexts`
: A container for contexts that contain your match patterns.
  You'll notice the `main` context
  from [How Syntax Definitions Work][syndef-work]
  and some other sample contexts we won't need.

[scope]: index.md#scopes
[syndef-work]: index.md#how-syntax-definitions-work

For our example, edit the template with the following information,
and throw away everything after `main:`.

```yaml
name: Sublime Snippet (Raw)
scope: source.ssraw
file_extensions:
  - ssraw

contexts:
  main:
```

::: tip Note
YAML is not a very strict format, but can cause headaches when you don't
know its conventions. It supports single and double quotes, but you may also
omit them as long as the content does not create another YAML literal.

<Term term="package_dev" /> syntax highlighting is very good
at demonstrating where strings will be correctly or incorrectly parsed.
When quotes are necessary, convention is to use single quotes.

The `---` and `...` are optional.
:::


## Creating some rules

If you don't remember [how syntax definition processing works][syndef-work]
at a general level,
you may want to read [a synopsis][syndef-work].

Values in the `contexts` dictionary can contain several types of element.
We'll look at some of them in the following sections.
If you want to learn more,
refer to [the official documentation][sublime-syntax].


### Matches

Matches take this form:

```yaml
- match: (?i:m)y \s+[Rr]egex
  scope: string.format
```

Sublime Text uses a custom engine called `sregex`
for regular expressions in syntax definitions
that uses [Oniguruma][]'s format.
There is a fallback to the Oniguruma engine
for features `sregex` doesn't support.
Several existing syntax definitions make use of
features supported by Oniguruma that aren't part of
PERL-style regular expressions, hence the requirement for the fallback.

[oniguruma]: https://github.com/kkos/oniguruma/blob/master/doc/RE

`match`
: A regular expression Sublime Text will use to find matches.

`scope`
: The name of the [scope][] that should be applied
  to any occurrences of `match`.

Let's go back to our example
and begin to add our rules for Sublime snippets.
We'll start with simple fields.
These could be matched with a regex like so:

```perl
\$[0-9]+
# or...
\$\d+
```

We can then build our pattern like this:
```yaml
# Tab stops like $1, $2...
- match: \$\d+
  scope: variable.language.ssraw
```

or even add a capture group to further scope the punctuation:
```yaml
# Tab stops like $1, $2...
- match: (\$)\d+
  scope: variable.language.ssraw
  captures:
    1: punctuation.definition.variable.begin.ssraw
```

Captures introduce complexity to your rule,
but they are pretty straightforward.
Notice how numbers refer to parenthesized groups left to right.
Of course, you can have as many capture groups as you want.

::: tip Note
As with usual regular expressions and substitutions, the capture group
`0` applies to the whole match.
:::

We choose `variable.language` because the `$1` is a variable,
but its value is set by the language itself,
not by an assignment or declaration.
The `punctuation...` scope lets color schemes carefully target
the punctuation if their designers want them to.


::: tip Choosing the Right Scope Name
Naming scopes isn't obvious sometimes.
Check the [naming conventions][] for guidance on scope names.
<Term term="package_dev" /> automatically provides completions
for scope names according to these conventions.
It is important to re-use the basic categories outlined there
if you want to achieve the highest compatibility
with existing [color schemes][].

Color schemes have hardcoded scope names in them. They could not
possibly include every scope name you can think of, so they target the
standard ones plus some rarer ones on occasion (like for CSS or
Markdown). This means that two color schemes using the same syntax
definition may render the text differently!
That's left to the color scheme, though.
Resist any temptation to use novel scopes
to select a specific color in your color scheme.
:::

[color schemes]: /guide/customization/color_schemes.md
[naming conventions]: https://www.sublimetext.com/docs/scope_naming.html

And we can add it to our syntax definition too:

```yaml
name: Sublime Snippet (Raw)
scope: source.ssraw
file_extensions:
  - ssraw

contexts:
  main:
    # Tab stops like $1, $2...
    - match: (\$)\d+
      scope: variable.language.ssraw
      captures:
        1: punctuation.definition.variable.begin.ssraw
```

::: tip Note
You should use two spaces for indent. This is the recommended indent for
YAML and lines up with lists like shown above.
:::

You have now created your first syntax definition.
Next, open a new file and
save it with the extension `.ssraw`.
The buffer's syntax name should switch
to "Sublime Snippet (Raw)" automatically,
and you should get syntax highlighting
if you type `$1` or any other simple snippet field.

Let's proceed to creating another rule for environment variables.

```yaml
# Variables like $PARAM1, $TM_SELECTION...
- match: (\$)[A-Za-z][A-Za-z0-9_]*
  scope: variable.language.ssraw
  captures:
    1: punctuation.definition.variable.begin.ssraw
```


### Push and Pop Rules

Up to now we've been using a simple rule.
Although we've seen how to dissect patterns into smaller components,
sometimes you'll want to target a larger portion of your source code
that is clearly delimited by start and end marks.

Literal strings enclosed by quotation marks or other delimiting constructs
are better dealt with by push and pop rules. This is a skeleton
for one of these rules that pushes an anonymous context:

```yaml
- match:
  scope:
  push:
    - match:
      scope:
      pop: 1
```

Well, at least in their simplest version.
Let's take a look at one that includes all available options:

``` yaml
- match:
  scope:
  push:
    - meta_scope:
    - meta_content_scope:
    - match:
      scope:
      pop: 1
# ...
```

Some elements may look familiar, but their combination might be
daunting. Let's inspect them individually.

`meta_scope`
: This sets the following scope name to
  *the whole context* and the match that pushed it,
  above any of that match's `scope` or `captures`.
  Optional.

`meta_content_scope`
: Unlike the `meta_scope`,
  this only applies a scope name to the portion of the context
  that does not include the pushing or popping matches.
  Optional.

outer `match`
: Regex for the opening mark for this scope.

inner `match`
: Regex for the end mark for this scope.

`pop`
: Notes a number of contexts to pop off of the stack.
  Multiple matches can have `pop` instructions.
  Optional.

We'll use this rule to style nested complex fields in snippets:

```yaml
- match: (\$)(\{)[0-9]+(:)
  captures:
    1: punctuation.definition.variable.begin.ssraw
    2: punctuation.section.interpolation.begin.ssraw
    3: punctuation.separator.ssraw
  push:
    - meta_scope: variable.language.complex.ssraw
    - meta_content_scope: string.unquoted.ssraw
    - match: \}
      scope: punctuation.section.interpolation.end.ssraw
      pop: 1
    - include: main
```

Although it is possible to push anonymous contexts,
best practice is to name them for ease of debugging.

Let's give this context a name:

```yaml
contexts:
  main:
    # ... (other rules) ...

    # Complex variables ${<NUMBER>: ... }
    - match: (\$)(\{)[0-9]+(:)
      captures:
        1: punctuation.definition.variable.begin.ssraw
        2: punctuation.section.interpolation.begin.ssraw
        3: punctuation.separator.ssraw
      push: complex_variable_body

  complex_variable_body:
    - meta_scope: variable.language.complex.ssraw
    - meta_content_scope: string.unquoted.ssraw
    - match: \}
      scope: punctuation.section.interpolation.end.ssraw
      pop: 1
    - include: main
```

This is the most complex pattern we'll see in this tutorial.

Notice that there are other matches and includes
that do not pop the context stack.
These will be matched until a `}` is encountered.
It even includes **the `main` context,**
which happily recurses if another `${\d` match is discovered!

Remember, [matched text is consumed][syndef-work].
It is consequently excluded from the next match attempt
and can't be matched again.
Make sure your additional matches **do not**
accidentally eat the popping match.

To finish off complex fields,
we've styled the placeholders as strings
with the `meta_content_scope` field.


### Final Touches

Lastly, let's style escape sequences and illegal sequences, and then we
can wrap up.

```yaml
# Sequences like \$, \> and \<
- match: \\[$<>]
  scope: constant.character.escape.ssraw

# Unescaped and unmatched magic characters
- match: '[$<>]'
  scope: invalid.illegal.ssraw
```

The only hard thing here is not forgetting that `[]` enclose arrays in
YAML and thus must be wrapped in quotes. Other than that, the rules are
pretty straightforward if you're familiar with regular expressions.

However, you must take care to place the second rule after any others
matching the `$` character, since otherwise it will be consumed and
result in every following expression not matching.

Also, even after adding these two additional rules, note that our
recursive begin-end rule from above continues to work as expected.

At long last, here's the final syntax definition:

```yaml
%YAML 1.2
---
# See https://www.sublimetext.com/docs/syntax.html
name: Sublime Snippet (Raw)
scope: source.ssraw
file_extensions:
  - ssraw

contexts:
  main:
    # Tab stops like $1, $2...
    - match: (\$)\d+
      scope: variable.language.ssraw
      captures:
        1: punctuation.definition.variable.begin.ssraw

    # Variables like $PARAM1, $TM_SELECTION...
    - match: (\$)[A-Za-z][A-Za-z0-9_]*
      scope: variable.language.ssraw
      captures:
        1: punctuation.definition.variable.begin.ssraw

    # Complex variables ${<NUMBER>: ... }
    - match: (\$)(\{)[0-9]+(:)
      captures:
        1: punctuation.definition.variable.begin.ssraw
        2: punctuation.section.interpolation.begin.ssraw
        3: punctuation.separator.ssraw
      push: complex_variable_body

    # Sequences like \$, \> and \<
    - match: \\[$<>]
      scope: constant.character.escape.ssraw

    # Unescaped and unmatched magic characters
    - match: '[$<>]'
      scope: invalid.illegal.ssraw

  complex_variable_body:
    - meta_scope: variable.language.complex.ssraw
    - meta_content_scope: string.unquoted.ssraw
    - match: \}
      scope: punctuation.section.interpolation.end.ssraw
      pop: 1
    - include: main
```

There are more available constructs and code reuse techniques,
but the above explanations should get you started with the
creation of syntax definitions.
