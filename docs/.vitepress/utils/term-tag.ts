const TERM_LINK_REGEX = /:([\w+]*):(?:([\w+]*):)?/g;

/**
 * Accept a string and replace all references to linked terms with appropriate <a> tags
 */
export const renderTermLinksToHTML = (term: string, termList: Record<string, string>): string => {
  const termKey = replaceUnderscoresWithSpaces(term);
  let value = termList[termKey] ?? '';

  value = value.replace(TERM_LINK_REGEX, (_, g1, g2) =>
    getTermTag(termList[replaceUnderscoresWithSpaces(g1)], g2 || g1)
  );

  return value;
};

/**
 * Generate an anchor tag for a term.
 */
const getTermTag = (definition: string, showText: string): string => {
  const termFound = !!definition;
  definition = termFound ? removeTermLink(definition) : 'Term not found in the glossary';
  const classes = termFound ? '' : ' term-not-found';

  return `<a title="${definition}" class="term${classes}">${replaceUnderscoresWithSpaces(showText)}</a>`;
};


/**
 * Extract the displayed text from a term link definition.
 * Example: `:house:houses:` → `houses`
 */
export function removeTermLink(term: string): string {
  return term.replace(TERM_LINK_REGEX, (_, g1) => g1);
}

/**
 * Replace underscores with spaces in a string.
 */
function replaceUnderscoresWithSpaces(str: string): string {
  return str.replace(/_/g, ' ');
}
