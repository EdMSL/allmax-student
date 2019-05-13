import * as React from 'react';
import {
  memo,
} from 'react';

interface Props {
  isLoading: boolean;
  isHaveResaults: null | boolean;
  items: any[];
  // htmlUrl: string;
  // name: string;
  // stargazerCount: number;
  // watchersCount: number;
};

const renderProjectView = () => (
  <>
    <p>Project</p>
  </>
);

export const GithubProjectView: React.FunctionComponent<Props> = memo(({ isLoading, isHaveResaults, items }) => {
  const isProjectsLoaded = (isHaveResaults === null) ? <p>Поиск не осуществлен</p> :
    (isLoading) ? <p>Загрузка</p> :
    renderProjectView();

  return (
    <div>
      {isProjectsLoaded}
    </div>
  );
});
