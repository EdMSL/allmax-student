import * as React from 'react';

import { IProject } from '~/modules/github/reducer';

interface Props extends IProject{};

export const GithubProjectsItem: React.FunctionComponent<Props> = ({ id, name, html_url, stargazers_count, watchers_count }) => {
  return (
    <li
      id={id}
    >
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
