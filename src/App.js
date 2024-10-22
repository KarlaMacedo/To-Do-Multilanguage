import React from 'react';
import './App.css';
import { TaskList } from './components/TaskList';
import { ToggleLangButton } from './components/ToggleLangButton';
import { LangProvider } from './provider/languajes';

function App() {
  return (
    <LangProvider>
      <div className="main-section">
        <ToggleLangButton />
        <TaskList />
      </div>
    </LangProvider>
  );
}

export default App;
