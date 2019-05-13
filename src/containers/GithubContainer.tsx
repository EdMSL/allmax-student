import * as React from 'react';

import { connect } from 'react-redux';

import { GithubSearchForm } from '~/components/GithubSearchForm';

import ACTIONS from '~/redux/actions';

interface Props {
  projectText: string;
  changeProjectText: typeof ACTIONS.changeProjectText;
  findProject: typeof ACTIONS.findProject;
}

class UnconnectedGithubContainer extends React.PureComponent<Props> {
  onProjectFieldChange = (event) => {
    const { name, value } = event.target;
    const { changeProjectText } = this.props;

    changeProjectText(name, value);
  };

  onProjectFormSubmit = () => {
    const { findProject } = this.props;

    findProject();
  };

  render() {
    const { projectText } = this.props;

    console.log(projectText);
    console.log('render GithubContainer');
    return (
      <div>
        <p>Поиск проектов на GitHub</p>
        <GithubSearchForm
          projectText={projectText}
          onProjectFieldChange={this.onProjectFieldChange}
          onSubmit={this.onProjectFormSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ github: { projectText } }) => ({ projectText });

const mapDispatchToProps = {
  changeProjectText: ACTIONS.changeProjectText,
  findProject: ACTIONS.findProject,
};

export const GithubContainer = connect(mapStateToProps, mapDispatchToProps)(UnconnectedGithubContainer);
