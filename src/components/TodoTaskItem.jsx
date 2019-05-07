import React from 'react';

const UnconnectedTodoTaskItem = ({ id, description, completed, onChange, onClick }) => {
  console.log('render Item');
  return (
    <li>
      <input
        type="checkbox"
        name={`task_${id}`}
        id={id}
        checked={completed}
        onChange={() => onChange(id)}
        // onChange={() => onChange(id)}
      />
      <label htmlFor={id}>
        {description}
      </label>
      <button
        type="button"
        onClick={() => onClick(id)}
        // onClick={() => onClick(id)}
      >
        Удалить
      </button>
    </li>
  );
};

export const TodoTaskItem = UnconnectedTodoTaskItem;
