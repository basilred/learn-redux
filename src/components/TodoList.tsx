import React from 'react';
import Todo from './Todo';
import './TodoList.css';

interface ITodo {
  id: number;
  completed: boolean;
  text: string;
};

const TodoList = ({ todos, onTodoClick }: { todos: Array<ITodo>; onTodoClick: (id: number) => any }) => (
  <ul className="TodoList">
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
