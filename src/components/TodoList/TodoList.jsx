import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '공부하기', status: 'active' },
    { id: '124', text: '밥먹기', status: 'active' },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo todo={item} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
