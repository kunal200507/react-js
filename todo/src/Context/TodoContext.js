import { useContext,createContext } from "react";

export const todoContext = createContext({
    todos: [
    {
        id:1,
        todoTitle: "todo msg",
        completed:false
    }],
    addTodo : (todo)=>{},
    todoUpdate : (id,todoTitle)=>{},
    todoDelete : (id)=>{},
    toggleCompleted : (id)=>{},
})

export const useTodoContext = ()=>{
    return useContext(todoContext)
}

export const TodoContextProvider = todoContext.Provider