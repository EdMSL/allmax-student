import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider, ReactReduxContext } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { createConfiguredStore } from '~/redux/store';

import { TodoContainer } from '~/containers/TodoContainer';
import { GithubContainer } from '~/containers/GithubContainer';

const style = require('../styles/common.scss');

const { store, persistor, history } = createConfiguredStore();

const App = () => (
  <Provider store={store} context={ReactReduxContext} >
    <ConnectedRouter history={history} context={ReactReduxContext} >
      <PersistGate loading={null} persistor={persistor}>
        <div className={style.mainWrap}>
          <Link className={style.button} to="/todo">Список дел</Link>
          <Link className={style.button} to="/github">Поиск проектов на GitHub</Link>

          <Switch>
            <Route exact path="/todo" component={TodoContainer} />
            <Route exact path="/github" component={GithubContainer} />
          </Switch>
        </div>
      </PersistGate>
    </ConnectedRouter>
  </Provider>
);

export default hot(App);
