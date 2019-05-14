import * as Types from '~/modules/github/actionTypes';

export const changeProjectText = (name: string, projectText: string) => ({
  type: Types.CHANGE_PROJECT_TEXT,
  name,
  projectText,
});

export const getProjects = () => ({
  type: Types.FIND_PROJECT_REQUEST,
});

export const setProjects = (items) => ({
  type: Types.FIND_PROJECT_OK,
  items,
});

export const getProjectsError = () => ({
  type: Types.FIND_PROJECT_FAIL,
});

export const findProjects = (projectText) => ({
  type: Types.FIND_PROJECT_FETCH,
  projectText,
});