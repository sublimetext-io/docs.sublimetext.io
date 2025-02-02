export const TERM_LINK_REGEX = /:([\w+]+):(?:([\w+]+):)?/g;

/**
 * Replace underscores with spaces in a string.
 */
export function replaceUnderscores(str: string): string {
  return str.replace(/_/g, ' ');
}

/**
 * Simplify the on-hover text of a term definition link.
 */
export function simplifyTermTitle(text: string): string {
  return text
    .replace(TERM_LINK_REGEX, (_, g1) => g1)
    .replace(/<.*?>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Create the title text of a term link.
 */
export function buildTermTitle(entry: GlossaryEntry | undefined): string {
  return entry ? simplifyTermTitle(entry.text) : "Term definition not found";
}
