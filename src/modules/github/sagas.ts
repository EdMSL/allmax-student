import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as githubActions from '~/modules/github/actions';
import Types from '~/redux/actionTypes';

const REQUEST_URL = `https://api.github.com/search/repositories?q=`;

export function* watchFindProjectFetch() {
  yield takeEvery(Types.FIND_PROJECT_FETCH, fetchFindProjectAsync);

  function* fetchFindProjectAsync(action) {
    try {
      yield put(githubActions.findProjectRequest());
      const data = yield call(() => {
        return fetch(`${REQUEST_URL}${action.projectText}`)
                .then(res => res.json())
        }
      );
      yield put(githubActions.findProjectOk(data.items));
    } catch (error) {
      yield put(githubActions.findProjectFail());
    }
  }
}
