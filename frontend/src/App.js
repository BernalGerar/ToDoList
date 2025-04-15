import './App.css';
import { TaskForm } from './components/taskForm.jsx';
import { TaskList } from './components/taskList.jsx';
import { useState } from 'react';
import { createTask, editTask, deleteTask } from './utils/api.js';


function App() {
  const [taskList, setTaskList] = useState([]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [taskId, setTaskId] = useState('');

  async function agregarTarea() {

    if(text.length === 0 || title.length === 0) return;

    if(taskId.length === 0) {
      
      const dataTask = await createTask(title, text)

      dataTask && ( setTaskList( prevTask => {
        return prevTask.concat([ dataTask ])
      } ) );

      console.log(taskList);
    }else {

      editTask(taskId, title, text, false)
      
      setTaskList(prevTask => prevTask.map( task => 
        task.id === taskId 
          ? {...task, ...{title: title, description: text, completed: false}}
          : task
      ))

      setTaskId("")
    }

    //console.log(taskList)
    setText("");
    setTitle("");

  }

  const actualizar = (id, title, des, state) => {
    if(state === undefined) {
      setTitle(title);
      setText(des);
      setTaskId(id);
    }else {

      editTask(id, title, des, state);

      setTaskList(prevTask => prevTask.map( task => 
        task.id === id 
          ? {...task, ...{completed: state}}
          : task
      ));

    }

  }

  const eliminar = (id) => {

    deleteTask(id);

    setTaskList(prevTask => prevTask.filter( task =>
      task.id !== id
    ));

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
        onChange={actualizar}
        onEdit={actualizar}
        onDelete={eliminar}
      />
    </>
  );
}

export default App;
