import React from 'react';

import { MainContainer } from '~/containers/MainContainer';
import { Books } from '~/containers/Books';

export class GeneralContainer extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log('componentDidUpdate GeneralContainer');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  onClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    const {
      state: {
        count,
      },
    } = this;

    console.log('render GeneralContainer');

    return (
      <>
        <MainContainer />
        <Books />
        <button type="button" onClick={this.onClick}>
          Click me
          {' '}
          {count}
        </button>
      </>
    );
  }
}
