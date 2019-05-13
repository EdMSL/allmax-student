import * as React from 'react';

import { Project } from '~/modules/github/reducer';

interface Props {
  name: Project['name'];
  html_url: Project['html_url'];
  stargazers_count: Project['stargazers_count'];
  watchers_count: Project['watchers_count'];
};

export const GithubProjectsItem: React.FunctionComponent<Props> = ({ name, html_url, stargazers_count, watchers_count }) => {
  console.log('render GithubItem');

  return (
    <li>
      <a
        href={html_url}
        target="_blank"
      >
        {name}
      </a>
      <p>Звезды: {stargazers_count}</p>
      <p>Наблюдатели: {watchers_count}</p>
    </li>
  );
};
