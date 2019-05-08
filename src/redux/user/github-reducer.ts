import { createReducer } from 'reduxsauce';
import Types from '~/redux/user/constants';

export interface IGithubState {
  // projectText
  [x: string]: any,
}

export const INITIAL_STATE: IGithubState = {
  projectText: '',
  html_url: '',
  name: '',
  stargazers_count: null,
  watchers_count: null,
};

export const changeProjectText = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    [action.name]: action.projectText,
  };
};

export const findProject = (state = INITIAL_STATE, action) => {
  return {
    ...state,
  };
};

export const HANDLERS = {
  [Types.CHANGE_PROJECT_TEXT]: changeProjectText,
  [Types.FIND_PROJECT]: findProject,
};

export default createReducer(INITIAL_STATE, HANDLERS);
