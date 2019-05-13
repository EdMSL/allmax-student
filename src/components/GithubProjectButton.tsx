import * as React from 'react';
import {
  memo,
} from 'react';

export const GithubProjectButton: React.FunctionComponent = memo(() => {
  console.log('render GitButton');

  return (
    <button
      type="submit"
    >
      Найти
    </button>
  );
});
