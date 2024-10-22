import React, { createContext, useState } from 'react';

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
        titleTasks: 'Tasks',
        footerTasks: 'Number of tasks:',
        footer: 'Project'
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
        titleTasks: 'Tareas',
        footerTasks: 'Número de tareas:',
        footer: 'Proyecto'
      }
    }
  ];
  
  // Contexto para idioma
  export const LangContext = createContext();
  
  // Proveedor del contexto de idioma
  export function LangProvider({ children }) {
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