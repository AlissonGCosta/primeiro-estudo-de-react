import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import './app.css'
import AddTask from './components/AddTask';
import Task from './components/Task';
import Header from './components/header';

const App = () =>{
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programa',
      completed: false,
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map(task => {
      if (task.id === taskId) return{
        ... task, completed: !task.completed
      }

      return task;

    })

    setTasks(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks,{
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTask)
  }


  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter(task => task.id != taskId)

    setTasks(newTask)
  }
  
  return(
  <Router>
    <div className="container">
      <Header />
      <Route path="" exact render={() => (
        <>
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks}  
          handleTaskClick = {handleTaskClick} 
          handleTaskDeletion = {handleTaskDeletion}/>
        </>
      )} />
    </div>
        
  </ Router>
  );
};

export default App;