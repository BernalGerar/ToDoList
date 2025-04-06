import './App.css';
import { TaskForm } from './components/taskForm.jsx';
import { TaskList } from './components/taskList.jsx';
import { useState } from 'react';

const createTask = (title, des) => {
  return {
    title: title,
    description: des
  }
}

function App() {
  const [taskList, setTaskList] = useState([]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [taskId, setTaskId] = useState('');

  function agregarTarea() {

    if(text.length === 0 || title.length === 0) return;

    if(taskId.length === 0) {

      setTaskList( prevTask => {
        return prevTask.concat([ createTask(title, text) ])
      });

    }else {

      setTaskList(prevTask => prevTask.map( task => 
        taskList[ parseInt( taskId ) ] === task 
          ? {...task, ...{title: title, description: text}}
          : task
      ))

      setTaskId("")
    }

    //console.log(taskList)
    setText("");
    setTitle("");

  }

  const actualizar = (id, title, des) => {
    setTitle(title);
    setText(des);
    setTaskId(id);
  }

  const eliminar = (id, title, des) => {
    setTaskList(prevTask => prevTask.filter( (task, index) =>
      index !== parseInt(id)
    ))
  }

  return (
    <>
      <TaskForm
        handleSubmit={agregarTarea}
        onChangeDes={   (e) => { setText(e.target.value) }  }
        onChangeTitle={ (e) => { setTitle(e.target.value) } }
        title={title}
        text={text}
      />
      <TaskList 
        ListaTareas={taskList}
        onEdit={actualizar}
        onDelete={eliminar}
      />
    </>
  );
}

export default App;
