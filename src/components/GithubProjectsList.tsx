import * as React from 'react';
import {
  memo,
} from 'react';

import { GithubProjectsItem } from '~/components/GithubProjectsItem';

interface Project {
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
};

interface Props {
  items: Project[];
};

export const GithubProjectsList: React.FunctionComponent<Props> = memo(({ items }) => {
  console.log('render GithubList');

  const projects = items.map((item) => {
    return (
      <GithubProjectsItem
      name={item.name}
      html_url={item.html_url}
      stargazers_count={item.stargazers_count}
      watchers_count={item.watchers_count}
      />
    );
  });

  return (
    <ul>
      {projects}
    </ul>
  );
});
