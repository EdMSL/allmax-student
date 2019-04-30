import { createReducer } from 'reduxsauce';
import Types from '$redux/user/constants';

export const INITIAL_STATE = {
  dates: [],
};

export const addDate = (state = INITIAL_STATE, action) => {
  return { ...state, dates: state.dates.concat(action.date) };
};

export const HANDLERS = {
  [Types.ADD_DATE]: addDate,
};

export default createReducer(INITIAL_STATE, HANDLERS);
