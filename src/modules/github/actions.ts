import * as Types from '~/modules/github/actionTypes';

export const changeProjectText = (name: string, projectText: string) => ({
  type: Types.CHANGE_PROJECT_TEXT,
  name,
  projectText,
});

export const findProject = () => ({
  type: Types.FIND_PROJECT,
});