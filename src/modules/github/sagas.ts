import { call, put, takeLatest, delay } from 'redux-saga/effects';

import * as githubActions from '~/modules/github/actions';
import * as API from '~/modules/github/api';
import { API_GITHUB_DELAY_TIME } from '~/modules/github/constants';
import Types from '~/redux/actionTypes';
import { SagaIterator } from 'redux-saga';

function* findProjects({ projectText }: ReturnType<typeof githubActions.findProjects>): SagaIterator {
  try {
    yield delay(API_GITHUB_DELAY_TIME);
    yield put(githubActions.getProjects());

    const data = yield call(API.getProjectsData, projectText);
    console.log('object');

    yield put(githubActions.setProjects(data.items));
  } catch (error) {
    yield put(githubActions.getProjectsError());
  }
}

export function* githubProjectsSaga() {
  yield takeLatest(Types.FIND_PROJECTS, findProjects);
};
