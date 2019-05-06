import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import createStore from '$redux/store';
import MainContainer from '$containers/MainContainer';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainContainer />
    </PersistGate>
  </Provider>
);

export default App;
