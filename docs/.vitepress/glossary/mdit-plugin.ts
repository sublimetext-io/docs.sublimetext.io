import markdownItRegexp from "markdown-it-regexp";
import { TERM_LINK_REGEX, replaceUnderscores } from './utils';

// This function was only used during a migration period.
// The syntax matched here is inferior to
// including the custom Term component directly.
export default function register(md) {
    md.use(markdownItRegexp(
      TERM_LINK_REGEX,
      (match: RegExpMatchArray) => {
        console.log(match);
        const term = match[1];
        if (match[2]) {
          const slot = replaceUnderscores(match[2]);
          return `<Term term="${term}">${slot}</Term>`;
        }
        return `<Term term="${term}" />`;
      },
  ));
}
