import * as React from 'react';

import { IProject } from '~/modules/github/reducer';

const style = require('./style.scss');

interface Props extends IProject {}

export const GithubProjectsItem: React.FunctionComponent<Props> = ({
  id,
  name,
  html_url,
  stargazers_count,
  watchers_count,
}) => {
  return (
    <li
      className={style.item}
      id={id}
    >
      <a
        className={style.itemLink}
        href={html_url}
        target="_blank"
      >
        {name}
      </a>
      <p className={style.itemText}>Звезды: {stargazers_count}</p>
      <p className={style.itemText}>Наблюдатели: {watchers_count}</p>
    </li>
  );
};
