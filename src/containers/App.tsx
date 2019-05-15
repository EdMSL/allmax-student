import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { createConfiguredStore, history } from '~/redux/store';

import { TodoContainer } from '~/containers/TodoContainer';
import { GithubContainer } from '~/containers/GithubContainer';

const { store, persistor } = createConfiguredStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <TodoContainer />
              <GithubContainer />
            </>
          )} />
        </Switch>
      </PersistGate>
    </ConnectedRouter>
  </Provider>
);

export default App;
