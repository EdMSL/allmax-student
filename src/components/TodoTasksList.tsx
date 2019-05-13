import * as React from 'react';
import {
  memo,
} from 'react';

import { ITodoState } from '~/modules/todo/reducer';

import { TodoTaskItem } from '~/components/TodoTaskItem';

interface Props {
  tasks: ITodoState['tasks'];
  onTaskCheckboxlChange: (event: any) => void;
  onDeleteTaskButtonClick: (event: any) => void;
};

export const TodoTasksList: React.FunctionComponent<Props> = memo(({ tasks, onTaskCheckboxlChange, onDeleteTaskButtonClick }) => {
  console.log('render List');
  const items = tasks.map((task) => {
    return (
      <TodoTaskItem
        id={task.id}
        key={task.id}
        description={task.description}
        completed={task.completed}
        onChange={onTaskCheckboxlChange}
        onClick={onDeleteTaskButtonClick}
      />
    );
  });

  return (
    <ul className="tasks__list">
      {items}
    </ul>
  );
});
