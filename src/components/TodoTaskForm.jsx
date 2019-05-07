import React from 'react';
import { connect } from 'react-redux';

import { TodoTaskField } from '~/components/TodoTaskField';
import { TodoTaskButton } from '~/components/TodoTaskButton';

import * as ACTIONS from '~/redux/user/actions';

class UnconnectedTodoTaskForm extends React.Component {
  onTaskFieldChange = (event) => {
    const { name, value } = event.target;
    const { changeTaskText } = this.props;

    changeTaskText(name, value);
  }

  render() {
    const { taskText, onSubmit } = this.props;

    console.log('render Form');

    return (
      <form
        onSubmit={onSubmit}
      >
        <TodoTaskField taskText={taskText} onChange={this.onTaskFieldChange} />
        <TodoTaskButton />
      </form>
    );
  }
}

const mapStateToProps = ({ todo: { taskText } }) => ({ taskText });

const mapDispatchToProps = {
  changeTaskText: ACTIONS.changeTaskText,
};

export const TodoTaskForm = connect(mapStateToProps, mapDispatchToProps)(UnconnectedTodoTaskForm);
