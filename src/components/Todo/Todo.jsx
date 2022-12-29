import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, text, status } = todo;
  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
}
