import * as React from 'react';
import {
  memo,
} from 'react';

import { ITodoState, ITask } from '~/modules/todo/reducer';

import { TodoTaskItem } from '~/components/todo/TodoTaskItem';

interface Props {
  tasks: ITodoState['tasks'];
  onTaskCheckboxlChange: (id: ITask['id'])=> void;
  onDeleteTaskButtonClick: (id: ITask['id'])=> void;
};

export const TodoTasksList: React.FunctionComponent<Props> = memo(({ tasks, onTaskCheckboxlChange, onDeleteTaskButtonClick }) => {
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
