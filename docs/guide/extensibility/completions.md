---
title: Completions
---

In the spirit of IDEs,
Sublime Text suggests completions
that aggregate code or content while writing
by catching everything that you have written,
like variable names.

There are however several ways
to extend the list of completions
(for example, depending on the current syntax).

This topic deals with
how completions are used and
where they come from.


## How to Use Completions

There are two methods for using completions.
Even though, when screening them,
the priority given to completions always stays the same,
the two methods produce different results.

Completions can be inserted in two ways:

- through the completions list (<Key k="ctrl+space" />), or
- by pressing <Key k="tab" />.


### The Completions List

To use the completions list:

1. Press <Key k="ctrl+space" /> or just type something.
1. Optionally, press <Key k="ctrl+space" /> again
   to select the next entry
   or use *up* and *down* arrow keys.
1. Press <Key k="enter" /> or <Key k="tab" /> to validate selection
   (depending on the `auto_complete_commit_on_tab` setting).
1. Optionally, press <Key k="tab" /> repeatedly
   to insert the next available completion.

::: tip Note
If the completions list was opened explicitly,
the current selection
in the completions list
can also be validated
with any punctuation sign
that isn't itself bound to a snippet (e.g. `.`).
:::

When the list of completion candidates
can be narrowed down to one unambiguous choice
given the current prefix,
this one completion will be validated automatically
the moment you trigger the completion list.


#### Hints

Additionally,
you may see a trigger hint
on the right side of a completion's trigger
in the completions list.
This can be used as a preview
of the completion's content.

![image](./images/completions_hint.png)

The above is in fact a snippet
and expands to
`$arrayName = array('' => , );`.


### Triggers and Contents

Completions not sourced from the text in the current file
may provide a trigger
that is different
to the content they will insert if selected.
This is commonly used for function completions
where the content also includes
the function's signature.

For example,
completing `array_map` from the PHP completions
will result in `array_map({callback}, {arr1})`:

![image](./images/completions_contents.gif)

You may notice in the animation
that the cursor automatically selected `callback`.
This is because completions support
the same features as snippets
with fields and placeholders.
For more details,
refer to [Snippet Features](./snippets.md#snippet-features).


### Completions with multiple cursors

Sublime Text can also handle completions with multiple cursors
but will only open the completion list
when all cursors share the same text
between the current cursor positions
and the last word separator character
(e.g. `.`  or a line break).

Working example (`|` represents one cursor):

    l|
    some text with l|
    l| and.l|

Not working example:

    l|
    some text with la|
    l| andl|

Selections are essentially ignored,
only the position of the cursor matters.
Thus, `e|[-some selection] example`,
with `|` as the cursor and `[...]` as the current selection,
completes to `example|[-some selection] example`.


### <Key k="tab" />-Completed Completions

If you want to be able to tab-complete completions,
the setting `tab_completion` must be set to `true` (default).
Snippet tab-completion is unaffected by this setting:
They will always be completed
according to their tab trigger.

With `tab_completion` enabled,
completion of items is always automatic.
This means, unlike the case of the completions list,
that Sublime Text will always make the decision for you.
The rules for selecting the best completion
are the same as described above,
but in case of ambiguity,
Sublime Text will insert the item it deems most suitable.
You can press the <Key k="tab" /> key multiple times
to walk through other available options.


#### Inserting a Literal tab Character

When `tab_completion` is enabled,
you can press <Key k="shift+tab" />
to insert a literal tab character.


## Sources for Completions and their Priorities

These are the sources for completions
the user can control,
in the order they are prioritized:

1. [Snippets](./snippets.md)
2. API-injected completions via `on_query_completions`
3. [Completions files](/reference/completions.md)

Additionally,
the following completions
are folded into the final list:

4.  Words in the buffer


Snippets will always win
when the current prefix
matches their tab trigger *exactly*.
For the rest of the completion sources,
a fuzzy match is performed.
Furthermore,
snippets always lose in a fuzzy match.

When a list of completions is shown,
snippets will still be listed alongside the other items,
even if the prefix only partially matches
the snippets' tab triggers.

::: tip Note
Completions sourced from words in the buffer
can be suppressed explicitly
from an `on_query_completions` event hook.
:::


## Auto Completion Triggers and Selector

Sublime Text provides two settings
for users and package authors
to tweak their auto completion behavior.
Both settings work independently of each other
and either of them can
trigger the auto-completion popup.

- `auto_complete_selector` expects a scope selector
  that when matched causes the auto-completion popup
  to open for any non-punctuation character,
  i.e. for identifiers.
  The default configuration disables this
  for syntaxes with a focus on plain text, comments and strings.

  Before 4070,
  the selector was applied to the position *after* the just-typed character.

- `auto_complete_triggers` expects a list of mappings
  that may specify `characters`
  that should trigger the auto-completion popup
  and/or a scope `selector`.
  If both are provided,
  both are required to match.

  Additionally, a `rhs_empty` boolean may be provided
  that states whether the right-hand side of the caret
  must be empty or a whitespace character.
  It defaults to `false`.

Package authors may be interested
in configuring triggers and/or the selector
in a syntax-specific settings file.
