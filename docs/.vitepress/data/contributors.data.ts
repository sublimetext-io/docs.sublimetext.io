type Link = {
  icon: string;
  link: string;
};

type Contributor = {
  avatar: string;
  name: string;
  title: string;
  links: Link[];
};

type GithubContributor = {
  avatar_url: string;
  login: string;
  url: string;
};

export default {
  async load() {
    let page = 1;
    let hasNextPage = true;
    const allContributors: Contributor[] = [];

    while (hasNextPage) {
      const uri = `https://api.github.com/repos/sublimetext-io/docs.sublimetext.io/contributors?per_page=100&page=${page}`;

      const response = await fetch(uri);

      if (!response.ok) {
        return {
          contributors: [] as Contributor[]
        };
      }

      const res: GithubContributor[] = await response.json();

      if (res.length === 0) {
        hasNextPage = false;
      } else {
        const contributors: Contributor[] = res.map((contributor: GithubContributor) => ({
          avatar: contributor.avatar_url,
          name: contributor.login,
          title: 'Contributor',
          links: [
            { icon: 'github', link: contributor.url },
          ]
        }));

        allContributors.push(...contributors);
        page++;
      }
    }
    return {
      contributors: allContributors
    };
  }
}
