import React, { createContext, useState, useContext, useId } from 'react';
import './App.css';

// Array de objetos de traducciones
const transArray = [
  {
    lang: 'English',
    translations: {
      title: '✍ To-Do List ✍',
      placeholder: 'Write a task',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      toggleLang: 'Toggle Language',
      titleTasks: 'Tasks'
    }
  },
  {
    lang: 'Español',
    translations: {
      title: '✍ Lista de Tareas ✍',
      placeholder: 'Escribe una tarea',
      add: 'Agregar',
      edit: 'Editar',
      delete: 'Eliminar',
      save: 'Guardar',
      toggleLang: 'Cambiar Idioma',
      titleTasks: 'Tareas'
    }
  }
];

// Contexto para idioma
const LangContext = createContext();

// Proveedor del contexto de idioma
function LangProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para manejar el índice

  // Función para alternar entre idiomas
  function toggleLang() {
    setCurrentIndex(currentIndex === 0 ? 1 : 0);
  }

  return (
    <LangContext.Provider
      value={{
        currentLang: transArray[currentIndex].lang,
        translations: transArray[currentIndex].translations,
        toggleLang
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    <>
      <LangProvider>
        <ToDoApp />
      </LangProvider>
    </>
  );
}

// Componente para la lista de tareas
function ToDoApp() {
  const { translations, toggleLang } = useContext(LangContext); // Usamos el contexto para obtener las traducciones actuales
  const [tasks, setTasks] = useState([]); // Estado de las tareas
  const [newTask, setNewTask] = useState(''); // Estado para la nueva tarea
  const uniqueId = useId(); // Hook para generar un ID único

  // Función para agregar una nueva tarea
  const addTask = () => {
    if (newTask.trim() === '') return; // Evita agregar tareas vacías
    setTasks([...tasks, { id: `${uniqueId}-${tasks.length}`, text: newTask, editing: false }]); // Agrega la nueva tarea
    setNewTask(''); // Limpia el campo de entrada
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Función para activar el modo de edición
  const editTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, editing: true } : task
    );
    setTasks(updatedTasks);
  };

  // Función para guardar los cambios de una tarea
  const saveTask = (id, newText) => {
    if (newText.trim() === '') return;
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText, editing: false } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="main-section">
      <button className="toggle-lang-button" onClick={toggleLang}>
        {translations.toggleLang}
      </button>

      <h1>{translations.title}</h1>

      <input
        className="todo-input"
        type="text"
        placeholder={translations.placeholder}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="todo-button" onClick={addTask}>
        {translations.add}
      </button>

      <ul className="task-list">
        <p className='title-task'> ✎ {translations.titleTasks}: </p>
        {tasks.map((task, id) => (
          <li key={task.id} className="task-item">
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
        ))}
      </ul>
    </div>
  );
}

export default App;
