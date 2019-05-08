import * as React from 'react';

import { connect } from 'react-redux';

import { TodoTaskField } from '~/components/TodoTaskField';
import { TodoTaskButton } from '~/components/TodoTaskButton';

import ACTIONS from '~/redux/actions';

// interface Props {
//   changeTaskText: () => void;
//   taskText: string;
//   someNumber: number;
//   optionalVar?: number | string | any;
// }

// interface SameFunction<P> {
//   (arg: P): P;
// }

// const mmm: SameFunction<number> = arg => String(arg);

// export interface IUser {
//   id: string,
//   name: string,
//   age: number,
// }

// interface Props {
//   user: IUser,
//   users: IUser[],
// }

// interface Props extends Readonly<{
//   id: number,
//   name: string,
// }>

// const result = <ForcedType>externalFunction(data); or externalFunction(data) as ForcedType;

interface Props {
  changeTaskText: (name: string, value: string) => object,
  onSubmit: (event: object) => void,
  taskText: string,
}

class UnconnectedTodoTaskForm extends React.Component<Props> {
  onTaskFieldChange = (event: any) => {
    const { name, value } = event.target;
    const { changeTaskText } = this.props;

    changeTaskText(name, value);
  };

  render() {
    const { taskText, onSubmit } = this.props;

    console.log('render Form');

    return (
      <form
        onSubmit={onSubmit}
      >
        <TodoTaskField taskText={taskText} onTaskFieldChange={this.onTaskFieldChange} />
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
