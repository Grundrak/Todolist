import './App.css';
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  const handleCheckboxChange = (id) => {
    setToDos(toDos.map(todo => todo.id === id ? { ...todo, status: !todo.status } : todo));
  };

  const handleDeleteClick = (id) => {
    setToDos(toDos.filter(todo => todo.id !== id));
  };

  return (
<div className='app'>
  <h1>MY DO LIST</h1>
  <h2>Add What you need to do</h2>
  <div className="input">
    <input value={toDo}
      onChange={(e) => setToDo(e.target.value)}
      type="text"
      placeholder="Add item..." />
    <button onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])}>Add</button>
  </div>
  <div className="task-container">
    <div className="todos">
      {toDos.map((obj) => {
        return (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input onChange={() => handleCheckboxChange(obj.id)} checked={obj.status} type="checkbox" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <button onClick={() => handleDeleteClick(obj.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
    <div className="completed-tasks">
      {toDos.filter(todo => todo.status).map((obj) => (
        <div className="completed" key={obj.id}>
          <h2>Task completed: {obj.text}</h2>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}

export default App;