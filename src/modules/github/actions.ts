import * as Types from '~/modules/github/actionTypes';

export const changeProjectText = (name: string, projectText: string) => ({
  type: Types.CHANGE_PROJECT_TEXT,
  name,
  projectText,
});

export const getProjects = () => ({
  type: Types.GET_PROJECTS,
});

export const setProjects = (items: any[]) => ({
  type: Types.SET_PROJECTS,
  items,
});

export const getProjectsError = () => ({
  type: Types.GET_PROJECTS_ERROR,
});

export const findProjects = (projectText: string) => ({
  type: Types.FIND_PROJECTS,
  projectText,
});

