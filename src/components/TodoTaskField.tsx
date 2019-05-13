import * as React from 'react';

import { ITodoState } from '~/modules/todo/reducer';

interface Props {
  taskText: ITodoState['taskText'];
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
