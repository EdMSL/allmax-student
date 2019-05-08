import * as React from 'react';

interface Props {
  projectText: string,
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
