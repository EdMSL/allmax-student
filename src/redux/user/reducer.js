import { combineReducers } from 'redux';
import timer from './timer-reducer';
import dates from './dates-reducer';

export default combineReducers({
  timer,
  dates
});

// import { createReducer } from 'reduxsauce';
// import Types from './constants';

// export const INITIAL_STATE = {
//   time: new Date().toLocaleString(),
//   dates: [],
// };

// export const changeTimer = (state = INITIAL_STATE, action) => {
//   return { ...state, time: new Date().toLocaleString() };
// };

// export const addDate = (state = INITIAL_STATE, action) => {
//   return { ...state, dates: state.dates.concat(action.date) };
// };

// export const HANDLERS = {
//   [Types.CHANGE_TIME]: changeTimer,
//   [Types.ADD_DATE]: addDate,
// };

// export default createReducer(INITIAL_STATE, HANDLERS);
