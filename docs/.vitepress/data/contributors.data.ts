import { defineLoader } from 'vitepress'

export interface Link {
  readonly icon: string;
  readonly link: string;
};

export interface Contributor {
  readonly avatar: string;
  readonly name: string;
  readonly title: string;
  readonly links: Link[];
};

export interface GithubContributor{
  readonly avatar_url: string;
  readonly login: string;
  readonly html_url: string;
};

export interface Data {
  readonly contributors: Contributor[];
}

// Map GitHub logins/account names to special titles.
const title_overrides = new Map();
title_overrides.set("FichteFoll", "Maintainer");
title_overrides.set("TerminalFi", "Maintainer");

declare const data: Data;
export { data }

export default defineLoader({
  async load(): Promise<Data> {
    let page = 1;
    let hasNextPage = true;
    const contributors: Contributor[] = [];

    while (hasNextPage) {
      const uri = `https://api.github.com/repos/sublimetext-io/docs.sublimetext.io/contributors?per_page=100&page=${page}`;

      const response = await fetch(uri);

      if (!response.ok) {
        break;
      }

      const res: GithubContributor[] = await response.json();

      if (res.length === 0) {
        hasNextPage = false;
      } else {
        const contributorsPage: Contributor[] = res.map(contributor => ({
          avatar: contributor.avatar_url,
          name: contributor.login,
          title: title_overrides.get(contributor.login) ?? 'Contributor',
          links: [
            { icon: 'github', link: contributor.html_url },
          ]
        }));

        contributors.push(...contributorsPage);
        page++;
      }
    }

    return {
      contributors,
    };
  }
})
