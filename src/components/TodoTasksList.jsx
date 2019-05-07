import React from 'react';

import { TodoTaskItem } from '~/components/TodoTaskItem';

const UnconnectedTasksList = ({ tasks, onChange, onClick }) => {
  const items = tasks.map((task) => {
    return (
      <TodoTaskItem
        id={task.id}
        key={task.id}
        description={task.description}
        completed={task.completed}
        onChange={onChange}
        onClick={onClick}
      />
    );
  });

  return (
    <ul className="tasks__list">
      {items}
    </ul>
  );
};

export const TodoTasksList = UnconnectedTasksList;
