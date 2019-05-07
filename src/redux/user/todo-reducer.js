import { createReducer } from 'reduxsauce';
import Types from '~/redux/user/constants';

export const INITIAL_STATE = {
  tasks: [],
  taskText: '',
  counter: 0,
};

export const changeCounter = (state = INITIAL_STATE, action) => {
  return { ...state, counter: state.counter + 1 };
};

export const changeTaskText = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    [action.name]: action.taskText,
  };
};

export const addTask = (state = INITIAL_STATE, action) => {
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
    tasks: state.tasks.map((task) => {
      const currentTask = task;

      if (task.id === action.id) {
        currentTask.completed = !task.completed;
      }

      return currentTask;
    })
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
