import * as React from 'react';

import { connect } from 'react-redux';

import { GithubSearchForm } from '~/components/GithubSearchForm';
import { GithubProjectView } from '~/components/GithubProjectView';

import ACTIONS from '~/redux/actions';

interface Props {
  projectText: string;
  isLoading: boolean;
  incomplete_results: null | boolean;
  items: any[];
  // html_url: string;
  // name: string;
  // stargazers_count: number;
  // watchers_count: number;
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
    const { projectText, isLoading, incomplete_results, items } = this.props;

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
          isHaveResaults={incomplete_results}
          items={items}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ github: { projectText, isLoading, incomplete_results, items } }) => ({ projectText, isLoading, incomplete_results, items});

const mapDispatchToProps = {
  changeProjectText: ACTIONS.changeProjectText,
  findProject: ACTIONS.findProject,
};

export const GithubContainer = connect(mapStateToProps, mapDispatchToProps)(UnconnectedGithubContainer);
