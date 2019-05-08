import Types from '~/redux/actionTypes';
import * as githubActions from '~/modules/github/actions';
import * as todoActions from '~/modules/todo/actions';

const changeCounter = () => ({
  type: Types.CHANGE_COUNTER,
});

const changeTaskText = (name: string, taskText: string) => ({
  type: Types.CHANGE_TASK_TEXT,
  name,
  taskText,
});

const addTask = () => ({
  type: Types.ADD_TASK,
});

const completeTask = (id: string) => ({
  type: Types.COMPLETE_TASK,
  id,
});

const deleteTask = (id: string) => ({
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
}

// export default {
//   ...githubActions,
//   ...todoActions,
// };
