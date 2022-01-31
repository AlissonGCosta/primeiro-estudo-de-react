import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasks from './components/Tasks';
import './app.css'
import AddTask from './components/AddTask';

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

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks,{
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTask)
  }
  
  return(
  <>
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks} />
    </div>
        
  </>
  );
};

export default App;