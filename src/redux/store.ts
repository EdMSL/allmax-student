import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  reducers,
} from '~/redux/reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['todo', 'github'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const create = () => (
  {
    store,
    persistor
  }
);

export default create;
