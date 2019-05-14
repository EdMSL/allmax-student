import { call, put, takeLatest, delay } from 'redux-saga/effects';

import * as githubActions from '~/modules/github/actions';
import * as Api from '~/modules/github/api';
import { API_GITHUB_DELAY_TIME } from '~/modules/github/constants';
import Types from '~/redux/actionTypes';

function* fetchFindProjectAsync(action) {
  try {
    yield delay(API_GITHUB_DELAY_TIME);
    yield put(githubActions.getProjects());
    const data = yield call(Api.getProjectsData, action.projectText);
    yield put(githubActions.setProjects(data.items));
  } catch (error) {
    yield put(githubActions.getProjectsError());
  }
}

export function* githubProjectsSaga() {
  yield takeLatest(Types.FIND_PROJECT_FETCH, fetchFindProjectAsync);
};
