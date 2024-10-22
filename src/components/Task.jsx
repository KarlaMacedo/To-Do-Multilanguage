import React, { useContext } from 'react';
import { LangContext } from '../provider/languajes';

export function Task({ task, deleteTask, editTask, saveTask }) {
  const { translations } = useContext(LangContext);

  return (
    <li className="task-item">
      {task.editing ? (
        <>
          <input
            type="text"
            defaultValue={task.text}
            onChange={(e) => (task.text = e.target.value)}
            className="task-text"
          />
          <button className="save-button" onClick={() => saveTask(task.id, task.text)}>
            {translations.save}
          </button>
        </>
      ) : (
        <>
          <span className="task-text">• {task.text}</span>
          <button className="edit-button" onClick={() => editTask(task.id)}>
            {translations.edit}
          </button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>
            {translations.delete}
          </button>
        </>
      )}
    </li>
  );
}
