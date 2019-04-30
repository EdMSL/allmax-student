import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../redux/store';

import MainContainer from './Main-container';

const { store } = createStore();
// const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

// const App = () => (
//   <Provider store={store}>
//     {/* <PersistGate loading={null} persistor={persistor}> */}
//       <p>Ready!</p>
//       <MainContainer />
//     {/* </PersistGate> */}
//   </Provider>
// );

export default App;
