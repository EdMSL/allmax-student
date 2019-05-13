import * as React from 'react';
import {
  memo,
} from 'react';

import { GithubProjectsList } from '~/components/GithubProjectsList';

import { IGithubState } from '~/modules/github/reducer';

interface Props {
  isLoading: IGithubState['isLoading'];
  isHaveResaults: IGithubState['isHaveResaults'];
  items: IGithubState['items'];
};

export const GithubProjectView: React.FunctionComponent<Props> = memo(({ isLoading, isHaveResaults, items }) => {
  const isProjectsLoaded = (isHaveResaults === false) ? <p>Поиск не осуществлен</p> :
    (isLoading) ? <p>Загрузка</p> :
    <GithubProjectsList items={items} />;

  return (
    <div>
      {isProjectsLoaded}
    </div>
  );
});
