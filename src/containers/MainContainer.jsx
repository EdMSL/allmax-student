import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ACTIONS from '../redux/user/actions';
import Timer from '../components/Timer';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.timerID = null;
  }

  componentDidMount() {
    const { changeTime } = this.props;

    this.timerId = setInterval(() => {
      changeTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { timer } = this.props;

    return (
      <Timer
        timer={timer.time}
      />
    );
  }
}

MainContainer.propTypes = {
  timer: PropTypes.object.isRequired,
  changeTime: PropTypes.func.isRequired,
};

const mapStateToProps = ({ timer, dates }) => ({ timer, dates });

const mapDispatchToProps = {
  changeTime: ACTIONS.changeTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
