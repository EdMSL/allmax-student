import * as React from 'react';

import { connect } from 'react-redux';

import { GithubSearchForm } from '~/components/GithubSearchForm';
import { GithubProjectView } from '~/components/GithubProjectView';

import ACTIONS from '~/redux/actions';
import { IGithubState } from '~/modules/github/reducer';

interface Props {
  projectText: IGithubState['projectText'];
  isLoading: IGithubState['isLoading'];
  isHaveResaults: IGithubState['isHaveResaults'];
  items: IGithubState['items'];
  changeProjectText: typeof ACTIONS.changeProjectText;
  findProjectFetch: typeof ACTIONS.findProjectFetch;
}

class UnconnectedGithubContainer extends React.PureComponent<Props> {
  onProjectFieldChange = (event) => {
    const { name, value } = event.target;
    const { changeProjectText } = this.props;

    changeProjectText(name, value);
  };

  onProjectFormSubmit = (event) => {
    const { projectText, findProjectFetch } = this.props;

    event.preventDefault();

    if (projectText.trim() === '') {
      return;
    }

    findProjectFetch(projectText);
  };

  render() {
    const { projectText, isLoading, isHaveResaults, items } = this.props;

    console.log('render GithubContainer');
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
          isHaveResaults={isHaveResaults}
          items={items}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ github: { projectText, isLoading, isHaveResaults, items } }) => ({ projectText, isLoading, isHaveResaults, items});

const mapDispatchToProps = {
  changeProjectText: ACTIONS.changeProjectText,
  findProjectFetch: ACTIONS.findProjectFetch,
};

export const GithubContainer = connect(mapStateToProps, mapDispatchToProps)(UnconnectedGithubContainer);
