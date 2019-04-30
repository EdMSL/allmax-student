import { combineReducers } from 'redux';
import timer from '$redux/user/timer-reducer';
import dates from '$redux/user/dates-reducer';

export default combineReducers({
  timer,
  dates
});
