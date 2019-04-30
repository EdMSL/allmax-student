// import { createReducer } from 'reduxsauce';
import Types from './constants';

export const INITIAL_STATE = { time: new Date().toLocaleString() };

// export const changeTimer = (state = INITIAL_STATE, action) => {
//   return { ...state, time: new Date() };
// };

// export const HANDLERS = {
//   [Types.CHANGE_TIME]: changeTimer,
// };

// export default createReducer(INITIAL_STATE, HANDLERS);

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CHANGE_TIME:
      return {
        ...state,
        time: new Date().toLocaleString(),
      };
    default:
      return state;
  }
};

export default reducer;
