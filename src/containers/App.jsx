import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import createStore from '$redux/store';

import { TodoContainer } from '~/containers/TodoContainer';
import { GithubContainer } from '~/containers/GithubContainer';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TodoContainer />
      <GithubContainer />
    </PersistGate>
  </Provider>
);

export default hot(App);
