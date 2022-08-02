import './App.css';
import  TodoList from './TodoList';
import { useState } from 'react';

function App() {

  // const initialData = [
  //   'Wash the dishes',
  //   'Clean the car',
  //   'Go shopping'
  // ]

  const [ darkMode, setDarkMode ] = useState(false);
  const [ textIsShowing, setTextIsShowing ] = useState(false);


  const changeMultipleThings = () => {
    setDarkMode(!darkMode);
    setTextIsShowing(!textIsShowing);
  }

  
  // const [ todos, setTodos ] = useState(initialData);

  // const addTodo = () => {
  //   setTodos(...todos, 'Another list item');
  // }

  return (
    <div className={ `react-wrapper ${darkMode && 'dark-mode'}` }>
      { textIsShowing === true ? <p>This text has been toggled using state</p> : ''  }
      <button onClick={changeMultipleThings}>Change to Dark Mode</button>
      {/* <TodoList todos={todos} /> */}
    </div>
  );

}

export default App;
