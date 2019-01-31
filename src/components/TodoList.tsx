import React from 'react';
import Todo from './Todo';
import { cn } from '@bem-react/classname';
import './TodoList.css';

interface ITodo {
  id: number;
  completed: boolean;
  text: string;
};

const listCn = cn('TodoList');

const TodoList = ({ todos, onTodoClick }: { todos: Array<ITodo>; onTodoClick: (id: number) => any }) => (
  <ul className={listCn()}>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
