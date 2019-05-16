import * as React from 'react';
import { render } from 'react-dom';
import App from '~/containers/App';

require('./styles/main.scss');

render(<App />, document.getElementById('root'));
