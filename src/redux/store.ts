import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  createRootReducer,
} from '~/redux/reducers';
import { githubProjectsSaga } from '~/modules/github/sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['github'],
};

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
)

const persistor = persistStore(store);

sagaMiddleware.run(githubProjectsSaga);

const create = () => (
  {
    store,
    persistor,
    history
  }
);

export const createConfiguredStore = create;
