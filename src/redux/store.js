import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './user/reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['root'],
};
// const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(reducer);
// const persistor = persistStore(store);
// console.log(createStore);

const create = () => (
  {
    store,
  }
);
// const create = () => (
//   {
//     store,
//     persistor
//   }
// );

export default create;
