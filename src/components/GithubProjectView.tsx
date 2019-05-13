import * as React from 'react';
import {
  memo,
} from 'react';

import { GithubProjectsList } from '~/components/GithubProjectsList';

import { IGithubState } from '~/modules/github/reducer';

interface Props {
  isLoading: IGithubState['isLoading'];
  isHaveResaults: IGithubState['isHaveResaults'];
  isError: IGithubState['isError'];
  items: IGithubState['items'];
};

export const GithubProjectView: React.FunctionComponent<Props> = memo(({ isLoading, isHaveResaults, isError, items }) => {
  const isProjectsLoaded = (isHaveResaults === false) ? <p>Поиск не осуществлен</p> :
    (isLoading) ? <p>Загрузка</p> :
    (isError) ? <p>Произошла ошибка, перезагрузите страницу</p> :
    <GithubProjectsList items={items} />;

  return (
    <div>
      {isProjectsLoaded}
    </div>
  );
});
