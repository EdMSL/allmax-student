import * as React from 'react';
import {
  memo,
} from 'react';
import { GithubSearchField } from '~/components/GithubSearchField';
import { GithubProjectButton } from '~/components/GithubProjectButton';

interface Props {
  projectText: string;
  onProjectFieldChange: (event: object) => void;
  onSubmit: (event: object) => void;
};

export const GithubSearchForm: React.FunctionComponent<Props> = memo(({
  projectText,
  onProjectFieldChange,
  onSubmit,
}) => {
  console.log('render GitForm');

  return (
    <form
      onSubmit={onSubmit}
    >
      <GithubSearchField projectText={projectText} onChange={onProjectFieldChange} />
      <GithubProjectButton />
    </form>
  );
});
