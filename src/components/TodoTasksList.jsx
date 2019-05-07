import React from 'react';

import { connect } from 'react-redux';
import { TodoTaskItem } from '~/components/TodoTaskItem';

import * as ACTIONS from '~/redux/user/actions';

const UnconnectedTasksList = ({ tasks, onTaskCheckboxlChange, onDeleteTaskButtonClick }) => {
  console.log('render List');
  const items = tasks.map((task) => {
    return (
      <TodoTaskItem
        id={task.id}
        key={task.id}
        description={task.description}
        completed={task.completed}
        onChange={onTaskCheckboxlChange}
        onClick={onDeleteTaskButtonClick}
      />
    );
  });

  return (
    <ul className="tasks__list">
      {items}
    </ul>
  );
};

// class UnconnectedTasksList extends React.Component {
//   onTaskCheckboxlChange = (id) => {
//     const { completeTask } = this.props;

//     completeTask(id);
//   }

//   onDeleteTaskButtonClick = (id) => {
//     const { deleteTask } = this.props;

//     deleteTask(id);
//   }

//   render() {
//     console.log('render List');
//     const { tasks } = this.props;

//     const items = tasks.map((task) => {
//       return (
//         <TodoTaskItem
//           id={task.id}
//           key={task.id}
//           description={task.description}
//           completed={task.completed}
//           onChange={this.onTaskCheckboxlChange}
//           onClick={this.onDeleteTaskButtonClick}
//         />
//       );
//     });

//     return (
//       <ul className="tasks__list">
//         {items}
//       </ul>
//     );
//   }
// }

// const mapStateToProps = ({ todo: { tasks } }) => ({ tasks });

// const mapDispatchToProps = {
//   addTask: ACTIONS.addTask,
//   completeTask: ACTIONS.completeTask,
//   deleteTask: ACTIONS.deleteTask,
// };

// export const TodoTasksList = connect(mapStateToProps, mapDispatchToProps)(UnconnectedTasksList);

export const TodoTasksList = React.memo(UnconnectedTasksList);
