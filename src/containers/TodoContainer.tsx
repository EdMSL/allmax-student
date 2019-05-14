import * as React from 'react';
import {
  PureComponent,
} from 'react';
import { connect } from 'react-redux';

import { TodoTaskForm } from '~/components/todo/TodoTaskForm';
import { TodoTasksList } from '~/components/todo/TodoTasksList';

import ACTIONS from '~/redux/actions';
import { ITodoState } from '~/modules/todo/reducer';

interface Props {
  taskText: ITodoState['taskText'];
  tasks: ITodoState['tasks'];
  addTask: typeof ACTIONS.addTask;
  completeTask: typeof ACTIONS.completeTask;
  deleteTask: typeof ACTIONS.deleteTask;
}

class UnconnectedTodoContainer extends PureComponent<Props> {
  onSubmit: React.FormEventHandler<HTMLButtonElement> = (event) => {
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
      <div>
        <TodoTaskForm onSubmit={this.onSubmit} />
        <TodoTasksList
          tasks={tasks}
          onTaskCheckboxlChange={this.onTaskCheckboxlChange}
          onDeleteTaskButtonClick={this.onDeleteTaskButtonClick}
        />
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
