import * as React from 'react';

import { ITask } from '~/modules/todo/reducer';

const style = require('./style.scss');

interface Props {
  id: ITask['id'];
  description: ITask['description'];
  completed: ITask['completed'];
  onChange: (id: ITask['id']) => void;
  onClick: (id: ITask['id']) => void;
}

export const TodoTaskItem: React.FunctionComponent<Props> = ({ id, description, completed, onChange, onClick }) => {

  return (
    <li className={style.item}>
      <input
        className="visuallyHidden"
        type="checkbox"
        name={id}
        id={id}
        checked={completed}
        onChange={() => onChange(id)}
      />
      <label
        className={style.label}
        htmlFor={id}>
        {description}
      </label>
      <button
        className={style.delButton}
        type="button"
        onClick={() => onClick(id)}
      >
        <span className="visuallyHidden">
          Удалить
        </span>
      </button>
    </li>
  );
};
