import * as React from 'react';
import {
  PureComponent,
} from 'react';
import { connect } from 'react-redux';

import { TodoTaskForm } from '~/components/TodoTaskForm';
import { TodoTasksList } from '~/components/TodoTasksList';

import ACTIONS from '~/redux/actions';

interface Props {
  taskText: string,
  tasks: any[],
  addTask: typeof ACTIONS.addTask,
  completeTask: typeof ACTIONS.completeTask,
  deleteTask: typeof ACTIONS.deleteTask,
}

class UnconnectedTodoContainer extends PureComponent<Props> {
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

    console.log('render TodoContainer');

    return (
      <div>
        <TodoTaskForm onSubmit={this.onSubmit} />
        <TodoTasksList tasks={tasks} onTaskCheckboxlChange={this.onTaskCheckboxlChange} onDeleteTaskButtonClick={this.onDeleteTaskButtonClick} />
      </div>
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