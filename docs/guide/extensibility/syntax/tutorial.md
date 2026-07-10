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
: The topmost scope for this syntax definition.
  It takes the form `source.<lang_name>` or `text.<lang_name>`.
  For programming languages, use `source`.
  For markup and everything else, use `text`.

`file_extensions`
: This is a list of file extensions (without the leading dot).
  When opening files of these types,
  Sublime Text will automatically activate this syntax definition for them.

`contexts`
: A container for your patterns.

For our example, edit the template with the following information:

```yaml
name: Sublime Snippet (Raw)
scope: source.ssraw
file_extensions:
  - ssraw

contexts:
  main:
# ...
```

::: tip Note
YAML is not a very strict format, but can cause headaches when you don't
know its conventions. It supports single and double quotes, but you may also
omit them as long as the content does not create another YAML literal. If
the conversion to Plist fails, take a look at the output panel for more
information on the error. We'll explain later how to convert a syntax
definition in YAML to Plist. This will also cover the first commented line
in the template.

The `---` and `...` are optional.
:::


## Analyzing Patterns

Values in the `contexts` dictionary can contain several types of element.
We'll look at some of them in the following sections.
If you want to learn more,
refer to [the official documentation][sublime-syntax].


### Matches

Matches take this form:

```yaml
- match: (?i:m)y \s+[Rr]egex
  scope: string.format
  comment: This comment is optional.
```

Sublime Text uses a custom engine for regular expressions
in syntax definitions,
with a fallback to [Oniguruma][]'s engine.
Several existing syntax definitions make use of
features supported by Oniguruma that aren't part of
PERL-style regular expressions, hence the requirement for the fallback.

[oniguruma]: https://github.com/kkos/oniguruma/blob/master/doc/RE

`match`
: A regular expression Sublime Text will use to find matches.

`scope`
: The name of the scope that should be applied to any occurrences of `match`.

`comment`
: An optional comment about this pattern.

Let's go back to our example. It looks like this,

``` yaml
name: Sublime Snippet (Raw)
scope: source.ssraw
file_extensions:
  - ssraw

contexts:
  main:
# ...
  double_quoted_string:
# ...
  line_comment:
# ...
```

but we can wipe everything after `main:`
to prepare for our own rules.
Then we can begin to add our rules for Sublime snippets.
Let's start with simple fields.
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
  scope: keyword.other.ssraw
```

::: tip Choosing the Right Scope Name
Naming scopes isn't obvious sometimes.
Check the [naming conventions][] for guidance on scope names.
<Term term="package_dev" /> automatically provides completions
for scope names according to these conventions.
It is important to re-use the basic categories outlined there
if you want to achieve the highest compatibility
with existing color schemes.

[naming conventions]: https://www.sublimetext.com/docs/scope_naming.html

Color schemes have hardcoded scope names in them. They could not
possibly include every scope name you can think of, so they target the
standard ones plus some rarer ones on occasion (like for CSS or
Markdown). This means that two color schemes using the same syntax
definition may render the text differently!

Bear in mind too that you should use the scope name that best suits your
needs or preferences. It'd be perfectly fine to assign a scope like
`constant.numeric` to anything other than a number if you have a good
reason to do so.
:::

And we can add it to our syntax definition too:

```yaml
name: Sublime Snippet (Raw)
scope: source.ssraw
file_extensions:
  - ssraw

contexts:
  main:
    # Tab stops like $1, $2...
    - match: \$\d+
      scope: keyword.other.ssraw
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
- match: \$[A-Za-z][A-Za-z0-9_]+
  scope: keyword.other.ssraw
```


### Fine Tuning Matches

You might have noticed, for instance,
that the entire text in `$PARAM1` is styled the same way.
Depending on your needs or your personal preferences,
you may want the `$` to stand out.
That's where `captures` come in.
Using captures, you can break a pattern down
into components to target them individually.

Let's rewrite one of our previous patterns to use `captures`:

```yaml
# Variables like $PARAM1, $TM_SELECTION...
- match: \$([A-Za-z][A-Za-z0-9_]+)
  scope: keyword.other.ssraw
  captures:
    1: constant.numeric.ssraw
```

Captures introduce complexity to your rule,
but they are pretty straightforward.
Notice how numbers refer to parenthesized groups left to right.
Of course, you can have as many capture groups as you want.

Arguably, you'd want the other scope to be visually consistent with this one.
Go ahead and change it too.

::: tip Note
As with usual regular expressions and substitutions, the capture group
`0` applies to the whole match.
:::


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
: Just like with simple captures,
  this sets the following scope name to
  the whole match.
  Optional.

`meta_content_scope`
: Unlike the `meta_scope`,
  this only applies a scope name to the enclosed text.
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
- match: '(\$)(\{)([0-9]+):'
  captures:
    1: keyword.other.ssraw
    3: constant.numeric.ssraw
  push:
    - meta_scope: variable.complex.ssraw
    - meta_content_scope: string.other.ssraw
    - match: \}
      pop: 1
    - include: main
    - match: .
      scope: support.other.ssraw
```

Although it is possible to push anonymous contexts,
best practice is to name them for ease of debugging.

Let's give this context a name:

```yaml
contexts:
  main:
    # ... (other rules) ...

    # Complex variables ${<NUMBER>: ... }
    - match: '(\$)(\{)([0-9]+):'
      captures:
        1: keyword.other.ssraw
        3: constant.numeric.ssraw
      push: complex_variable_body

  complex_variable_body:
    - meta_scope: variable.complex.ssraw
    - meta_content_scope: string.other.ssraw
    - match: \}
      pop: 1
    - include: main
    - match: .
      scope: support.other.ssraw
```

This is the most complex pattern we'll see in this tutorial.

Notice that there are other matches and includes
that do not pop the context stack.
These will be matched until a `}` is encountered.
It even includes **the `main` context,**
which happily recurses if another `${\d` match is discovered!

Remember, matched text is consumed;
thus, it is excluded from the next match attempt
and can't be matched again.
Make sure your additional matches do not
accidentally eat the popping match.

To finish off complex fields, we'll style placeholders as strings.
Since we've already matched all possible tokens inside a complex field,
we can safely tell
Sublime Text to give any remaining text (`.`) a literal string scope.
Note that this doesn't work if we made the pattern greedy (`.+`)
because this includes possible nested references.


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
    - match: \$\d+
      scope: keyword.other.ssraw

    # Variables like $PARAM1, $TM_SELECTION...
    - match: \$[A-Za-z][A-Za-z0-9_]+
      scope: keyword.other.ssraw

    # Complex variables ${<NUMBER>: ... }
    - match: '(\$)(\{)([0-9]+):'
      captures:
        1: keyword.other.ssraw
        3: constant.numeric.ssraw
      push: complex_variable_body

    # Sequences like \$, \> and \<
    - match: \\[$<>]
      scope: constant.character.escape.ssraw

    # Unescaped and unmatched magic characters
    - match: '[$<>]'
      scope: invalid.illegal.ssraw

  complex_variable_body:
    - meta_scope: variable.complex.ssraw
    - meta_content_scope: string.other.ssraw
    - match: \}
      pop: 1
    - include: main
    - match: .
      scope: support.other.ssraw
```

There are more available constructs and code reuse techniques,
but the above explanations should get you started with the
creation of syntax definitions.
