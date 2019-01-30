import React from 'react';
import './Todo.css';

const Todo = ({ onClick, completed, text }: { onClick: any, completed: boolean, text: string }) => (
  <li
    className={completed ? "Todo Todo_completed" : "Todo"}
    onClick={onClick}
  >
    {text}
  </li>
);

export default Todo;
