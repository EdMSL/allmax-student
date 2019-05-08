import * as githubActionTypes from '~/modules/github/actionTypes';
import * as todoActionTypes from '~/modules/todo/actionTypes';

export default {
  ...todoActionTypes,
  ...githubActionTypes,
};
