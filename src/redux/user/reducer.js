import { createReducer } from 'reduxsauce';
import Types from './actions';

// the initial state of this reducer
export const INITIAL_STATE = { error: false, goodies: null };

// the eagle has landed
export const success = (state = INITIAL_STATE, action) => {
  return { ...state, error: false, goodies: action.goodies }
};

// uh oh
export const failure = (state = INITIAL_STATE, action) => {
  return { ...state, error: true, goodies: null }
};

// map our action types to our reducer functions
export const HANDLERS = {
  [Types.GOODS_SUCCESS]: success,
  [Types.GOODS_FAILURE]: failure
};

export default createReducer(INITIAL_STATE, HANDLERS);
