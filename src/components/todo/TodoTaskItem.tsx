import * as React from 'react';

import { ITask } from '~/modules/todo/reducer';

interface Props {
  id: ITask['id'];
  description: ITask['description'];
  completed: ITask['completed'];
  onChange: (id: ITask['id'])=> void;
  onClick: (id: ITask['id'])=> void;
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
