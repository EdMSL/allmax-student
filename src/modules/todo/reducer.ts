import { createReducer } from 'reduxsauce';

import * as ACTIONS from '~/modules/todo/actions';
import Types from '~/redux/actionTypes';

export interface ITask {
  id: string;
  description: string;
  completed: boolean;
}

export interface ITodoState {
  tasks: ITask[];
  taskText: string;
  counter: number;
}

export interface ActionHandler<T> {
  (state: ITodoState, payload: T extends (...args: any[]) => infer R ? R : any): ITodoState;
}

export const INITIAL_STATE: ITodoState = {
  tasks: [],
  taskText: '',
  counter: 0,
};

export const changeCounter: ActionHandler<typeof ACTIONS.changeCounter> = (state = INITIAL_STATE) => {
  return {
    ...state,
    counter: state.counter + 1,
  };
};

export const changeTaskText: ActionHandler<typeof ACTIONS.changeTaskText> = (state = INITIAL_STATE, { name, taskText}) => {
  return {
    ...state,
    [name]: taskText,
  };
};

export const addTask: ActionHandler<typeof ACTIONS.addTask> = (state = INITIAL_STATE) => {
  return {
    ...state,
    tasks: [
      ...state.tasks,
      {
        id: `task_${state.counter}`,
        description: state.taskText,
        completed: false,
      }
    ],
    counter: state.counter + 1,
    taskText: '',
  };
};

export const completeTask: ActionHandler<typeof ACTIONS.completeTask> = (state = INITIAL_STATE, { id }) => {
  return {
    ...state,
    tasks: state.tasks.map(task => (
      (task.id === id)
        ? { ...task, completed: !task.completed }
        : task
    ))
  };
};

export const deleteTask: ActionHandler<typeof ACTIONS.deleteTask> = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    tasks: state.tasks.filter(task => task.id !== action.id),
  };
};

export const HANDLERS = {
  [Types.CHANGE_COUNTER]: changeCounter,
  [Types.CHANGE_TASK_TEXT]: changeTaskText,
  [Types.ADD_TASK]: addTask,
  [Types.COMPLETE_TASK]: completeTask,
  [Types.DELETE_TASK]: deleteTask,
};

export default createReducer(INITIAL_STATE, HANDLERS);
