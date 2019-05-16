import * as React from 'react';

import { ITodoState } from '~/modules/todo/reducer';
const style = require('./style.scss');

interface Props {
  taskText: ITodoState['taskText'];
  onTaskFieldChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const TodoTaskField: React.FunctionComponent<Props> = ({ taskText, onTaskFieldChange }) => (
  <input
    className={style.field}
    type="text"
    name="taskText"
    placeholder="Текст задачи"
    value={taskText}
    onChange={onTaskFieldChange}
  />
);
