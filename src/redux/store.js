import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from '$redux/user/reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['timer'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const create = () => (
  {
    store,
    persistor
  }
);

export default create;
