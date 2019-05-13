import { createReducer } from 'reduxsauce';
import Types from '~/redux/actionTypes';

export interface Project {
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
};

export interface IGithubState {
  projectText: string;
  isLoading: boolean;
  isHaveResaults: boolean;
  items: Project[];
};

export const INITIAL_STATE: IGithubState = {
  projectText: '',
  isLoading: false,
  isHaveResaults: false,
  items: [],
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
