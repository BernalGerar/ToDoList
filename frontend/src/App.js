import logo from './logo.svg';
import './App.css';
import { TaskForm } from './components/taskForm.jsx';

function App() {
  return (
    <TaskForm onSubmit={(task) => {console.log(task)}}/>
  );
}

export default App;
