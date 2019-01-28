import React from 'react';
import Todo from './Todo';

interface ITodo {
  id: number;
  completed: boolean;
  text: string;
};

const TodoList = ({ todos, onTodoClick }: { todos: Array<ITodo>; onTodoClick: (id: number) => any }) => (
  <ul>
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
