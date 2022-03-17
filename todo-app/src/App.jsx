import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')


  const addTodo = () => {
    if (!newTodo.trim()) return
    setTodos([newTodo].concat(todos))

    setNewTodo('')
  }

  const handlKeyPress = e => {
    if (e.key === "Enter") addTodo()

  }
  const handleCompleted = () => {
    // todos.filter(todos => )
  }
  const handleActive = () => { }
  const itemsLeft = todos.length

  return (
    <div>
      <h1 className='header'>Todos</h1>


      <main className='main'>
        <input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          onKeyPress={handlKeyPress}
        />
        <div className="todos">

          {todos.map((todo, todoIndex) => <p key={`todo_${todoIndex}`}>{todo}</p>)}
        </div>
        <div className='menu-bar'>

          {todos.length > 0 ? <span>{itemsLeft}items left</span> : <span>items left</span>}
          <div className='allnothers'>
            <button className='all'>All</button>
            <button className='active'>Active</button>
            <button className='completed'>completed</button>
          </div>
          <span>Clear completed</span>
        </div>
      </main>

    </div>
  )
}

export default App

