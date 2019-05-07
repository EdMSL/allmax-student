import React from 'react';

const UnconnectedTodoTaskField = ({ taskText, onChange }) => (
  <input
    type="text"
    name="taskText"
    placeholder="Текст задачи"
    value={taskText}
    onChange={onChange}
  />
);

export const TodoTaskField = UnconnectedTodoTaskField;
