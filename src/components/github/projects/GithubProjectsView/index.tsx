import * as React from 'react';
import {
  memo,
} from 'react';

import { GithubProjectsList } from '~/components/github/projects/GithubProjectsList';

import { IGithubState } from '~/modules/github/reducer';

interface Props {
  isLoading: IGithubState['isLoading'];
  isHaveResults: IGithubState['isHaveResults'];
  isError: IGithubState['isError'];
  items: IGithubState['items'];
};

export const GithubProjectView: React.FunctionComponent<Props> = memo(({
  isLoading,
  isHaveResults,
  isError,
  items,
}) => (
  <div>
    {
      !isHaveResults && <p>Поиск не осуществлен</p>
    }
    {
      isHaveResults && isLoading && <p>Загрузка</p>
    }
    {
      isHaveResults && isError && <p>Произошла ошибка, перезагрузите страницу</p>
    }
    {
      !isLoading && <GithubProjectsList items={items} />
    }
  </div>
));
