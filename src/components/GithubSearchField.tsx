import * as React from 'react';

import { IGithubState } from '~/modules/github/reducer';

interface Props {
  projectText: IGithubState['projectText'],
  onChange: (event: any) => void;
};

export const GithubSearchField: React.FunctionComponent<Props> = ({ projectText, onChange }) => (
  <input
    type="text"
    name="projectText"
    value={projectText}
    onChange={onChange}
  />
);
