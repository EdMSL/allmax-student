import { createReducer } from 'reduxsauce';
import Types from '~/redux/actionTypes';

export interface Project {
  id: string;
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
};

export interface IGithubState {
  projectText: string;
  isLoading: boolean;
  isHaveResaults: boolean;
  isError: boolean;
  items: Project[];
};

export const INITIAL_STATE: IGithubState = {
  projectText: '',
  isLoading: false,
  isHaveResaults: false,
  isError: false,
  items: [],
};

export const changeProjectText = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    [action.name]: action.projectText,
  };
};

export const findProjectRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isHaveResaults: true,
    isLoading: true,
  };
};

export const findProjectOk = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isHaveResaults: true,
    isLoading: false,
    isError: false,
    items: action.items,
    projectText: '',
  };
};
export const findProjectFail = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isHaveResaults: true,
    isLoading: false,
    isError: true,
  };
};

export const HANDLERS = {
  [Types.CHANGE_PROJECT_TEXT]: changeProjectText,
  [Types.FIND_PROJECT_REQUEST]: findProjectRequest,
  [Types.FIND_PROJECT_OK]: findProjectOk,
  [Types.FIND_PROJECT_FAIL]: findProjectFail,
};

export default createReducer(INITIAL_STATE, HANDLERS);
