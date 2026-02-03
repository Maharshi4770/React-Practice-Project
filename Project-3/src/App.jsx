import './App.css'
import Addtask from './components/Addtask';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const getInputHandler = (data) => {
    setTasks((prev)=>{
      return [...prev, data];
    })
  }
  

  return (
    <>
     <Addtask inputHandler={getInputHandler}/>
     <TaskList tasks={tasks}/>
    </>
  )
}

export default App
