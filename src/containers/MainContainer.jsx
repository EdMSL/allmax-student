import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ACTIONS from '~/redux/user/actions';
import Timer from '~/components/Timer';

class UnconnectedMainContainer extends React.Component {
  timerID = null;

  componentDidMount() {
    const { changeTime } = this.props;

    this.timerId = setInterval(() => {
      changeTime();
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate MainContainer');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { time } = this.props;

    console.log('render mainContainer');

    return (
      <Timer
        timer={time}
      />
    );
  }
}

UnconnectedMainContainer.propTypes = {
  time: PropTypes.string.isRequired,
  changeTime: PropTypes.func.isRequired,
};

const mapStateToProps = ({ timer: { time }, dates }) => ({ time, dates });

const mapDispatchToProps = {
  changeTime: ACTIONS.changeTime,
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(UnconnectedMainContainer);
