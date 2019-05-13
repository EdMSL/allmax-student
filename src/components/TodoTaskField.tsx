import * as React from 'react';

interface Props {
  taskText: string;
  onTaskFieldChange: (event: object) => void;
};

export const TodoTaskField: React.FunctionComponent<Props> = ({ taskText, onTaskFieldChange }) => (
  <input
    type="text"
    name="taskText"
    placeholder="Текст задачи"
    value={taskText}
    onChange={onTaskFieldChange}
  />
);
