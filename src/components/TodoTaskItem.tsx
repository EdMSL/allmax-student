import * as React from 'react';

import { Task } from '~/modules/todo/reducer';

interface Props {
  id: Task['id'];
  description: Task['description'];
  completed: Task['completed'];
  onChange: (id: Task['id'])=> void;
  onClick: (id: Task['id'])=> void;
};

export const TodoTaskItem: React.FunctionComponent<Props> = ({ id, description, completed, onChange, onClick }) => {
  
  return (
    <li>
      <input
        type="checkbox"
        name={`task_${id}`}
        id={id}
        checked={completed}
        onChange={() => onChange(id)}
      />
      <label htmlFor={id}>
        {description}
      </label>
      <button
        type="button"
        onClick={() => onClick(id)}
      >
        Удалить
      </button>
    </li>
  );
};
