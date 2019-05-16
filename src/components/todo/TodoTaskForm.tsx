import * as React from 'react';

import { connect } from 'react-redux';

import { TodoTaskField } from '~/components/todo/taskField/TodoTaskField';

import ACTIONS from '~/redux/actions';
import { ITodoState } from '~/modules/todo/reducer';

interface Props {
  taskText: ITodoState['taskText'];
  changeTaskText: typeof ACTIONS.changeTaskText;
  onSubmit: React.FormEventHandler;
}

class UnconnectedTodoTaskForm extends React.Component<Props> {
  onTaskFieldChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    const { changeTaskText } = this.props;

    changeTaskText(name, value);
  };

  render() {
    const { taskText, onSubmit } = this.props;

    return (
      <form
        onSubmit={onSubmit}
      >
        <TodoTaskField
          taskText={taskText}
          onTaskFieldChange={this.onTaskFieldChange}
        />
        <button type="submit">
          Создать задачу
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ todo: { taskText } }) => ({ taskText });

const mapDispatchToProps = {
  changeTaskText: ACTIONS.changeTaskText,
};

export const TodoTaskForm = connect(mapStateToProps, mapDispatchToProps)(UnconnectedTodoTaskForm);
