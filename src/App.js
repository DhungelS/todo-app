import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { item: 'Take a jog', done: false, id: 1 },
    { item: 'Go to work', done: true, id: 2 },
    { item: 'Do homework', done: false, id: 3 },
  ]);

  // const completeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = true;
  //   setTodos(newTodos);
  // };

  const handleClickDone = (index) => {
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos[index].done = true;
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div style={{ display: 'flex' }}>
              <li
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              >
                {todo.item}
              </li>
              <button onClick={() => handleClickDone(index)}>Done</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
