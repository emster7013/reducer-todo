import React from 'react';
import './App.css';
import ToDoList from '../src/ToDoComponents.js/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do☻</h1>
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
