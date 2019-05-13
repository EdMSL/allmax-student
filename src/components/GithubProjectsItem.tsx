import * as React from 'react';

interface Props {
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
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
