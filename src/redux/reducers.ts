import { combineReducers } from 'redux';
import todo from '~/modules/todo/reducer';
import github from '~/modules/github/reducer';

export const reducers = combineReducers({
  todo,
  github,
});
