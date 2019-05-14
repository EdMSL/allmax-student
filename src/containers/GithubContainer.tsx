import * as React from 'react';

import { connect } from 'react-redux';

import { GithubSearchForm } from '~/components/github/search/GithubSearchForm';
import { GithubProjectView } from '~/components/github/projects/GithubProjectsView';

import ACTIONS from '~/redux/actions';
import { IGithubState } from '~/modules/github/reducer';

interface Props {
  projectText: IGithubState['projectText'];
  isLoading: IGithubState['isLoading'];
  isHaveResults: IGithubState['isHaveResults'];
  isError: IGithubState['isError'];
  items: IGithubState['items'];
  changeProjectText: typeof ACTIONS.changeProjectText;
  findProjects: typeof ACTIONS.findProjects;
}

class UnconnectedGithubContainer extends React.PureComponent<Props> {
  onProjectFieldChange = (event) => {
    const { name, value } = event.target;
    const { changeProjectText } = this.props;

    changeProjectText(name, value);
  };

  onProjectFormSubmit = (event) => {
    const { projectText, findProjects } = this.props;

    event.preventDefault();

    if (projectText.trim() === '') {
      return;
    }

    findProjects(projectText);
  };

  render() {
    const { projectText, isLoading, isHaveResults, isError, items } = this.props;

    return (
      <div>
        <p>Поиск проектов на GitHub</p>
        <GithubSearchForm
          projectText={projectText}
          onProjectFieldChange={this.onProjectFieldChange}
          onSubmit={this.onProjectFormSubmit}
        />
        <GithubProjectView
          isLoading={isLoading}
          isHaveResults={isHaveResults}
          isError={isError}
          items={items}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ github: { projectText, isLoading, isHaveResults, isError, items } }) => ({ projectText, isLoading, isHaveResults, isError, items});

const mapDispatchToProps = {
  changeProjectText: ACTIONS.changeProjectText,
  findProjects: ACTIONS.findProjects,
};

export const GithubContainer = connect(mapStateToProps, mapDispatchToProps)(UnconnectedGithubContainer);
