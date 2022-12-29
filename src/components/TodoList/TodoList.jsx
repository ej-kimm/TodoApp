import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: '공부하기', status: 'active' },
    { id: '124', text: '밥먹기', status: 'active' },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input type="checkbox" />
            {item.text}
            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== item.id))}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
