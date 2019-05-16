import * as React from 'react';

import { IGithubState } from '~/modules/github/reducer';

const common = require('../../../../styles/common.scss');

interface Props {
  projectText: IGithubState['projectText'],
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const GithubSearchField: React.FunctionComponent<Props> = ({ projectText, onChange }) => (
  <input
    className={common.field}
    type="text"
    name="projectText"
    value={projectText}
    placeholder="Введите название проекта"
    onChange={onChange}
  />
);
