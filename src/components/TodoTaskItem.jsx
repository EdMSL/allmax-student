import React from 'react';

const UnconnectedTodoTaskItem = ({ id, description, completed, onChange, onClick }) => (
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

export const TodoTaskItem = UnconnectedTodoTaskItem;
