import * as React from 'react';

interface Props {
  id: string,
  description: string,
  completed: boolean,
  onChange: (id: string)=> void,
  onClick: (id: string)=> void,
};

export const TodoTaskItem: React.FunctionComponent<Props> = ({ id, description, completed, onChange, onClick }) => {
  console.log('render Item');
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
