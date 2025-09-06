import { createContext, useContext } from "react";


export const todoContext = createContext({
    todos:[
        {
            id:1,
            todoTitle : "",
            completed: false,
        },
    ],
    addTodo : (todo)=>{},
    deleteTodo: (id)=>{},
    saveTodo : (id)=>{},
    editTodo : (id,newMessage)=>{},
    todoCompleted : (id) =>{},
});

export const useTodoContext = ()=>{
    return useContext(todoContext)
}

export const TodoContextProvider = todoContext.Provider
