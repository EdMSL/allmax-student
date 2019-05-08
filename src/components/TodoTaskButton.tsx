import * as React from 'react';
import {
  memo,
} from 'react';

export const TodoTaskButton: React.FunctionComponent = memo(() => {
  console.log('render Button');
  return (
    <button
      type="submit"
    >
      Создать задачу
    </button>
  );
});
