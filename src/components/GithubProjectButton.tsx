import * as React from 'react';
import {
  memo,
} from 'react';

export const GithubProjectButton = memo(() => {
  console.log('render GitButton');

  return (
    <button
      type="submit"
    >
      Найти
    </button>
  );
});
