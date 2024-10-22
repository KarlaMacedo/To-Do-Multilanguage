import React, { useState, useContext, useId } from 'react';
import { Task } from './Task';
import { LangContext } from '../provider/languajes';
import { Footer } from './Footer';

export function TaskList() {
  const { translations } = useContext(LangContext);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const uniqueId = useId();

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: `${uniqueId}-${tasks.length}`, text: newTask, editing: false }]);
    setNewTask('');
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const editTask = (id) => setTasks(
    tasks.map((task) => task.id === id ? { ...task, editing: true } : task)
  );

  const saveTask = (id, newText) => {
    if (newText.trim() === '') return;
    setTasks(tasks.map((task) => task.id === id ? { ...task, text: newText, editing: false } : task));
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
