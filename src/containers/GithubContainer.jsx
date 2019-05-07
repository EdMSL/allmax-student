import React from 'react';

import { connect } from 'react-redux';

class UnconnectedGithubContainer extends React.PureComponent {
  render() {
    // const { counter } = this.props;
    console.log('render GithubContainer')
    return (
      <p>GitHub</p>
    );
  }
}

// const mapStateToProps = ({ todo: { counter } }) => ({ counter });

// export const GithubContainer = connect(mapStateToProps)(UnconnectedGithubContainer);

export const GithubContainer = UnconnectedGithubContainer;
