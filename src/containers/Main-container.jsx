import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeTime } from '../redux/user/actions';
import Timer from '../components/Timer';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.timerId = null;
  }

  componentDidMount() {
    const { changeTime: changeTimer } = this.props;

    this.timerId = setInterval(() => {
      changeTimer();
    }, 1000);
  }

  render() {
    const { time } = this.props;

    return (
      <Timer
        timer={time}
      />
    );
  }
}

MainContainer.propTypes = {
  time: PropTypes.string.isRequired,
  changeTime: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    time: state.time,
  }
);

const mapDispatchToProps = {
  changeTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
