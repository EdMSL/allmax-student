import * as Types from '~/modules/github/actionTypes';

export const changeProjectText = (name: string, projectText: string) => ({
  type: Types.CHANGE_PROJECT_TEXT,
  name,
  projectText,
});

export const findProjectRequest = () => ({
  type: Types.FIND_PROJECT_REQUEST,
});

export const findProjectOk = (items) => ({
  type: Types.FIND_PROJECT_OK,
  items,
});

export const findProjectFail = () => ({
  type: Types.FIND_PROJECT_FAIL,
});