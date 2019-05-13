import * as React from 'react';
import {
  memo,
} from 'react';

import { GithubProjectsList } from '~/components/GithubProjectsList';

interface Props {
  isLoading: boolean;
  isHaveResaults: boolean;
  items: any[];
};

export const GithubProjectView: React.FunctionComponent<Props> = memo(({ isLoading, isHaveResaults, items }) => {
  console.log(isHaveResaults);
  const isProjectsLoaded = (isHaveResaults === false) ? <p>Поиск не осуществлен</p> :
    (isLoading) ? <p>Загрузка</p> :
    <GithubProjectsList items={items} />;

  return (
    <div>
      {isProjectsLoaded}
    </div>
  );
});
