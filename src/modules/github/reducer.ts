import { createReducer } from 'reduxsauce';
import Types from '~/redux/actionTypes';
import * as ACTIONS from '~/modules/github/actions';

export interface IProject {
  id: string;
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
};

export interface IGithubState {
  projectText: string;
  isLoading: boolean;
  isHaveResults: boolean;
  isError: boolean;
  items: IProject[];
};

export interface ActionHandler<T> {
  (state: IGithubState, payload: T extends (...args: any[]) => infer R ? R : any): IGithubState;
}

export const INITIAL_STATE: IGithubState = {
  projectText: '',
  isLoading: false,
  isHaveResults: false,
  isError: false,
  items: [],
};

export const changeProjectText = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    [action.name]: action.projectText,
  };
};

export const getProjects = (state = INITIAL_STATE) => {
  return {
    ...state,
    isHaveResults: true,
    isLoading: true,
  };
};

export const setProjects: ActionHandler<typeof ACTIONS.setProjects> = (state = INITIAL_STATE, { items }) => {
  return {
    ...state,
    isHaveResults: true,
    isLoading: false,
    isError: false,
    items: items,
    projectText: '',
  };
};
export const getProjectsError = (state = INITIAL_STATE) => {
  return {
    ...state,
    isHaveResults: true,
    isLoading: false,
    isError: true,
  };
};

export const HANDLERS = {
  [Types.CHANGE_PROJECT_TEXT]: changeProjectText,
  [Types.FIND_PROJECT_REQUEST]: getProjects,
  [Types.FIND_PROJECT_OK]: setProjects,
  [Types.FIND_PROJECT_FAIL]: getProjectsError,
};

export default createReducer(INITIAL_STATE, HANDLERS);
