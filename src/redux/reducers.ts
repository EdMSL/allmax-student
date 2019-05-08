import { combineReducers } from 'redux';
import todo from '~/redux/user/todo-reducer';
import github from '~/redux/user/github-reducer';

export const reducers = combineReducers({
  todo,
  github,
});
