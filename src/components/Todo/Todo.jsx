import React from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, text, status } = todo;
  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={`${styles.text} ${
                status === 'completed' && styles.completed
              }`}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrash />
        </button>
      </span>
    </li>
  );
}
