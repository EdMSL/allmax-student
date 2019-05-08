import Types from '~/redux/user/constants';

const changeCounter = () => ({
  type: Types.CHANGE_COUNTER,
});

const changeTaskText = (name, taskText) => ({
  type: Types.CHANGE_TASK_TEXT,
  name,
  taskText,
});

const addTask = () => ({
  type: Types.ADD_TASK,
});

const completeTask = id => ({
  type: Types.COMPLETE_TASK,
  id,
});

const deleteTask = id => ({
  type: Types.DELETE_TASK,
  id,
});

const changeProjectText = (name: string, projectText: string) => ({
  type: Types.CHANGE_PROJECT_TEXT,
  name,
  projectText,
});

const findProject = () => ({
  type: Types.FIND_PROJECT,
});

export {
  changeCounter,
  changeTaskText,
  addTask,
  completeTask,
  deleteTask,
  changeProjectText,
  findProject,
};
