export default [
  {
    regex: /:([\w+]*):([\w+]*):/g,
    modifier: (match: RegExpMatchArray) => {
      console.log(match)
      const m1 = match[1].replace(/_/g, " ");
      const m2 = match[2].replace(/_/g, " ");
      return `<Term term="${m1}" show="${m2}"/>`;
    },
  },
  // Currently duplicating to fix a where bug.
  // Without this :installed_package:installed_packages: is not detect
  // http://localhost:5173/guide/extensibility/packages.html#merging-and-order-of-precedence
  {
    regex: /:([\w+]*):([\w+]*):/g,
    modifier: (match: RegExpMatchArray) => {
      const m1 = match[1].replace(/_/g, " ");
      const m2 = match[2].replace(/_/g, " ");
      return `<Term term="${m1}" show="${m2}"/>`;
    },
  },
  // Currently duplicating to fix a where bug.
  // Without this :override_package: is not detect
  // http://localhost:5173/guide/extensibility/packages.html#merging-and-order-of-precedence
  {
    regex: /:([\w+]*):/g,
    modifier: (match: RegExpMatchArray) => {
      const m1 = match[1].replace(/_/g, " ");
      return `<Term term="${m1}"/>`;
    },
  },
  {
    regex: /:([\w+]*):/g,
    modifier: (match: RegExpMatchArray) => {
      const m1 = match[1].replace(/_/g, " ");
      return `<Term term="${m1}"/>`;
    },
  },
];
