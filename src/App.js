import './App.css';
import  TodoList from './TodoList';
import { useState, useEffect } from 'react';

function App() {

  // create a variable that is an array of itial items
  const initialData = [
    'Wash the dishes',
    'Clean the car',
    'Go shopping'
  ]

  const [ todos, setTodos ] = useState(initialData);

  useEffect(() => {
    console.log(todos);
  },[todos])

  const addTodoFn = (e, currentTask) => {
    e.preventDefault();
    setTodos([...todos, currentTask]);
  }

  return (
    <div className={ `react-wrapper` }>
      <TodoList todos={todos} addTodo={addTodoFn} />
    </div>
  );

}

export default App;
