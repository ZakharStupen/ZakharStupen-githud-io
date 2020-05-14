import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem.js'
import todosDate from './todosData.js'

function App() {
  const todoItems = todosData.map(item =>{
    return(
          <ToDoItem
          description={item.description}
          completed={item.completed}
          />

      )
  })
  return (
    <div className="App">
        <ToDoItem/>

    </div>
  );
}

export default App;
