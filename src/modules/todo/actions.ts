import * as Types from '~/modules/todo/actionTypes';

export const changeCounter = () => ({
  type: Types.CHANGE_COUNTER,
});

export const changeTaskText = (name: string, taskText: string) => ({
  type: Types.CHANGE_TASK_TEXT,
  name,
  taskText,
});

export const addTask = () => ({
  type: Types.ADD_TASK,
});

export const completeTask = (id: string) => ({
  type: Types.COMPLETE_TASK,
  id,
});

export const deleteTask = (id: string) => ({
  type: Types.DELETE_TASK,
  id,
});