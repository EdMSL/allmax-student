import React from 'react';
import { connect } from 'react-redux';

import { TodoTaskForm } from '~/components/TodoTaskForm';
import { TodoTasksList } from '~/components/TodoTasksList';

import * as ACTIONS from '~/redux/user/actions';

class UnconnectedTodoContainer extends React.PureComponent {
  onSubmit = (event) => {
    const { taskText, addTask } = this.props;

    event.preventDefault();

    if (taskText.trim() === '') {
      return;
    }

    addTask();
  }

  onTaskCheckboxlChange = (id) => {
    const { completeTask } = this.props;

    completeTask(id);
  }

  onDeleteTaskButtonClick = (id) => {
    const { deleteTask } = this.props;

    deleteTask(id);
  }

  render() {
    const { tasks } = this.props;

    return (
      <>
        <TodoTaskForm onSubmit={this.onSubmit} />
        <TodoTasksList tasks={tasks} onChange={this.onTaskCheckboxlChange} onClick={this.onDeleteTaskButtonClick} />
      </>
    );
  }
}

const mapStateToProps = ({ todo: { tasks, taskText } }) => ({ tasks, taskText });

const mapDispatchToProps = {
  addTask: ACTIONS.addTask,
  completeTask: ACTIONS.completeTask,
  deleteTask: ACTIONS.deleteTask,
};

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(UnconnectedTodoContainer);
