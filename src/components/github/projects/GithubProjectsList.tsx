import * as React from 'react';
import {
  memo,
} from 'react';

import { GithubProjectsItem } from '~/components/github/projects/GithubProjectsItem';

import { IGithubState } from '~/modules/github/reducer';

interface Props {
  items: IGithubState['items'];
};

export const GithubProjectsList: React.FunctionComponent<Props> = memo(({ items }) => {
  const projects = items.map((item) => {
    return (
      <GithubProjectsItem
      key={item.id}
      id={item.id}
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
