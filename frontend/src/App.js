import './App.css';
import { TaskForm } from './components/taskForm.jsx';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);

  function AgregarTarea(task) {

    setTaskList( prevTask => {
      return prevTask.concat([task])
    });

    //console.log(taskList)
  }

  return (
    <TaskForm onSubmit={AgregarTarea} />
  );
}

export default App;
