import './App.css';
import { TaskForm } from './components/taskForm.jsx';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('')

  function agregarTarea() {

    if(text.length === 0 || title.length === 0) return;

    const task = {
      "title": title,
      "description": text
    }

    setTaskList( prevTask => {
      return prevTask.concat([task])
    });

    console.log(taskList)

    setText("");
    setTitle("");

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
    </>
  );
}

export default App;
