import { use, useEffect, useState } from 'react'
import {TodoContextProvider} from './Context'
import './App.css'
import TodoForm from './components'
import TodoItem from './components/todoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>setTodos((prevtodos)=>[...prevtodos,{id: Date.now(),...todo}])

  const todoUpdate = (id,todo)=>setTodos((prevTodos)=>prevTodos.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo))

  const todoDelete = (id)=>setTodos((prevTodos)=>prevTodos.filter((prevTodo)=>prevTodo.id !== id))

  const toggleCompleted = (id)=>setTodos((prevTodos)=>prevTodos.map((prevTodo)=>prevTodo.id === id ?{...prevTodo,completed :!prevTodo.completed} : prevTodo ))

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos.length>0 && todos){
      setTodos(todos)
    }

  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])



  return (
    <TodoContextProvider value={{todos,addTodo,todoUpdate,todoDelete, toggleCompleted}}> 
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo)=>(
            <div key={todo.id} className='w-full'>
            <TodoItem todo={todo}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    </TodoContextProvider>
  )
}

export default App
