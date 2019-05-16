import * as React from 'react';
import {
  memo,
} from 'react';
import { GithubSearchField } from '~/components/github/search/GithubSearchField';

import { IGithubState } from '~/modules/github/reducer';


interface Props {
  projectText: IGithubState['projectText'];
  onProjectFieldChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler;
};

export const GithubSearchForm: React.FunctionComponent<Props> = memo(({
  projectText,
  onProjectFieldChange,
  onSubmit,
}) => {
  return (
    <form
      className="form"
      onSubmit={onSubmit}
    >
      <GithubSearchField projectText={projectText} onChange={onProjectFieldChange} />
      <button
        className="button"
        type="submit">
        Найти
      </button>
    </form>
  );
});
