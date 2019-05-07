import React from 'react';

const UnconnectedTodoTaskButton = () => {
  console.log('render Button');
  return (
    <button
      type="submit"
    >
      Создать задачу
    </button>
  );
};

// export const TodoTaskButton = UnconnectedTodoTaskButton;

export const TodoTaskButton = React.memo(UnconnectedTodoTaskButton);
