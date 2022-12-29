import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({ todo, onDelete }) {
  const { id, text, status } = todo;
  const handleDelete = () => onDelete(todo);

  return (
    <li key={id}>
      <input type="checkbox" />
      {text}
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
}
