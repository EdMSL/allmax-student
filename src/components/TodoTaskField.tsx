import * as React from 'react';

interface Props {
  taskText: string;
  onTaskFieldChange: (event: object) => void;
};

const UnconnectedTodoTaskField = ({ taskText, onTaskFieldChange } : Props) => (
  <input
    type="text"
    name="taskText"
    placeholder="Текст задачи"
    value={taskText}
    onChange={onTaskFieldChange}
  />
);

export const TodoTaskField = UnconnectedTodoTaskField;
