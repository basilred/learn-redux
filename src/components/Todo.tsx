import React from 'react';
import { cn } from '@bem-react/classname';
import './Todo.css';

const todoCn = cn('Todo');

const Todo = ({ onClick, completed, text }: { onClick: any, completed: boolean, text: string }) => (
  <li
    className={completed ? todoCn({ completed: true }) : todoCn()}
    onClick={onClick}
  >
    {text}
  </li>
);

export default Todo;
