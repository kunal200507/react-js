import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todoitem from './componets/Todoitem'
import {TodoContextProvider } from './context/todocontext'
import Addtodo from './componets/Addtodo'
// import Header f rom './componets/Header'

function App() {
  const [todos,setTodos] = useState([])
  console.log(todos)

  const addTodo = (todo)=>setTodos((oldTodos)=>[...oldTodos,todo])

  const todoCompleted = (id)=>setTodos((oldTodos)=>oldTodos.map((oldTodo)=>oldTodo.id === id ? {...oldTodo,completed:!oldTodo.completed} : oldTodo ))

  const editTodo = (id,newMessage)=>setTodos((oldTodos)=>oldTodos.map((oldTodo)=>oldTodo.id===id?{...oldTodo,todoMsg:newMessage} :oldTodo ))

  const deleteTodo = (id) => setTodos((oldTodos)=>oldTodos.filter((oldTodo)=>!(oldTodo.id===id)))

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos.length>0 && todos){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoContextProvider value={{todos, addTodo, todoCompleted, editTodo, deleteTodo }}>
      <div className='w-full h-screen bg-white flex flex-col justify-start items-center '>
        {
          todos.map((todo)=>(
            <div key={todo.id} >
            <Todoitem todo={todo}/>
            </div>
          ))
        }
        <Addtodo/>
        {/* <div className="w-full h-28 bg-blue-600"></div> */}
      </div>
    </TodoContextProvider>
  )
}

export default App
