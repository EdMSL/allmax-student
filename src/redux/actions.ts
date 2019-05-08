import * as githubActions from '~/modules/github/actions';
import * as todoActions from '~/modules/todo/actions';

export default {
  ...githubActions,
  ...todoActions,
};
