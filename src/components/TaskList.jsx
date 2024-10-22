import React, { useState, useEffect, useContext, useId } from 'react';
import { Task } from './Task';
import { LangContext } from '../provider/languajes';
import { Footer } from './Footer';

export function TaskList() {
  const { translations } = useContext(LangContext);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  const uniqueId = useId();

  // Guardar tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTaskObj = { id: `${uniqueId}-${tasks.length}`, text: newTask, editing: false };
    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => task.id === id ? { ...task, editing: true } : task)
    );
  };

  const saveTask = (id, newText) => {
    if (newText.trim() === '') return;
    setTasks((prevTasks) =>
      prevTasks.map((task) => task.id === id ? { ...task, text: newText, editing: false } : task)
    );
  };

  return (
    <div className='container-TaskList'>
      <h1>{translations.title}</h1>

      <div className='container-input'>
        <input
          className='todo-input'
          type="text"
          placeholder={translations.placeholder}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className='todo-button' onClick={addTask}>
          {translations.add}
        </button>
      </div>

      <ul className="task-list">
        <p className='title-task'>✎ {translations.titleTasks}:</p>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} saveTask={saveTask} />
        ))}
      </ul>
      <Footer tasks={tasks} />
    </div>
  );
}
