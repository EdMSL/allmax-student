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

export interface ActionHandler<T, state> {
  (state: state, payload: T extends (...args: any[]) => infer R ? R : any): state;
}

export const INITIAL_STATE: ITodoState = {
  tasks: [],
  taskText: '',
  counter: 0,
};

export const changeCounter = (state = INITIAL_STATE) => {
  return {
    ...state,
    counter: state.counter + 1,
  };
};

export const changeTaskText: ActionHandler<typeof ACTIONS.changeTaskText, ITodoState> = (state = INITIAL_STATE, { name, taskText}) => {
  return {
    ...state,
    [name]: taskText,
  };
};

export const addTask = (state = INITIAL_STATE) => {
  return {
    ...state,
    tasks: state.tasks.concat([{
      id: `task_${state.counter}`,
      description: state.taskText,
      completed: false,
    }]),
    counter: state.counter + 1,
    taskText: '',
  };
};

export const completeTask = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    tasks: state.tasks.map(task => (
      (task.id === action.id)
        ? { ...task, completed: !task.completed }
        : task
    ))
  };
};

export const deleteTask = (state = INITIAL_STATE, action) => {
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
