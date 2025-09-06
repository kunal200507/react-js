import React, { useState } from "react";
import { useTodoContext } from "../context/todocontext";

const Addtodo = ()=>{

    const [todoMsg, setTodoMsg] = useState('')

    const {addTodo} = useTodoContext()

    const addClicked = ()=>{
      addTodo({id:Date.now(),todoTitle:todoMsg,completed: false})
      console.log(todoMsg)
      setTodoMsg("")
    }
    
    return(
        <div className='w-2xl h-17 flex flex-row justify-start items-center p-3 '>
          <button className='ml-3 cursor-pointer'
          onClick={addClicked}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-black "
            // title="Add a new note"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H3zm12 1a1 1 0 0 1 1-1h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1-1-1z"
              />
            </svg>
          </button>
          <input type="text" placeholder='add notes' className='h-10 w-xs m-1 border-b-2 border-black ml-4 focus:outline-none'
          value={todoMsg}
          onChange={(e)=>setTodoMsg(e.target.value)} 
          />
        </div>
    )
}

export default Addtodo