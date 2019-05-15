import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import todo from '~/modules/todo/reducer';
import github from '~/modules/github/reducer';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  todo,
  github,
});
