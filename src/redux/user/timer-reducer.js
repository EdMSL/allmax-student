import { createReducer } from 'reduxsauce';
import Types from './constants';

export const INITIAL_STATE = {
  time: new Date().toLocaleString(),
};

export const changeTimer = (state = INITIAL_STATE, action) => {
  return { ...state, time: new Date().toLocaleString() };
};

export const HANDLERS = {
  [Types.CHANGE_TIME]: changeTimer,
};

export default createReducer(INITIAL_STATE, HANDLERS);
