import React, { useState } from "react";
import { useTodoContext } from "../context/todocontext";

const Todoitem = ({ todo }) => {

  const [todoMessage, setTodoMessage] = useState(todo.todoTitle)

  const [isEditable, setIsEditable] = useState(false)

  const { todoCompleted, editTodo, deleteTodo } = useTodoContext()

  const editTodoButton = () => {
    setIsEditable(!isEditable)
    editTodo(todo.id, todoMessage)
    console.log("can edit this todo " + isEditable)
  }

  return (
    <div className='w-2xl h-17 border-b-2 border-b-blue-500 flex flex-row justify-around items-center '>
      <input type="checkbox" className='w-4 h-4 border-6 border-black m-1'
        checked={todo.completed}
        onChange={() => { todoCompleted(todo.id) }}
      />
      <input type="text" className={`border h-10 w-2xs m-1 ${todo.completed ? "line-through" : ""} ${isEditable ? "border-black/10 px-2" : "border-transparent focus:outline-none"}`
      } placeholder='add note'
        value={todoMessage || ""}
        onChange={(e) => {
          setTodoMessage(e.target.value)
        }}
        readOnly={!isEditable}
      />
      <button className='cursor-pointer'
        onClick={editTodoButton}
      >
        {isEditable ? <svg
          className="w-6 h-6 text-gray-700 cursor-pointer"
          viewBox="0 0 15 15"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H10.0858C10.4836 0 10.8651 0.158035 11.1464 0.43934L14.5607 3.85355C14.842 4.13486 15 4.51639 15 4.91421V13.5C15 14.3284 14.3284 15 13.5 15H11V11.5C11 10.6716 10.3284 10 9.5 10H5.5C4.67157 10 4 10.6716 4 11.5V15H1.5C0.671573 15 0 14.3284 0 13.5V1.5Z" />
          <path d="M5 15H10V11.5C10 11.2239 9.77614 11 9.5 11H5.5C5.22386 11 5 11.2239 5 11.5V15Z" />
        </svg> : <svg
          className="w-6 h-6 cursor-pointer"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21,22H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
            className="fill-cyan-500"
          />
          <path
            d="M20.71,3.29a2.93,2.93,0,0,0-2.2-.84,3.25,3.25,0,0,0-2.17,1L7.46,12.29a1.16,1.16,0,0,0-.25.43L6,16.72A1,1,0,0,0,7,18a.9.9,0,0,0,.28,0l4-1.17a1.16,1.16,0,0,0,.43-.25l8.87-8.88a3.25,3.25,0,0,0,1-2.17A2.91,2.91,0,0,0,20.71,3.29Z"
            className="fill-black"
          />
        </svg>
        }



      </button>
      <button className='cursor-pointer'
        onClick={() => { deleteTodo(todo.id) }}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 fill-black"
        >
          <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z" />
        </svg>

      </button>

    </div>

  )
}

export default Todoitem