import { useContext } from "react";
import TodoContext from "./TodoContext";

const useTodo = () => {
    const todoContext = useContext(TodoContext)
    
    if (!todoContext) {
        throw new Error('useTodo must be used within a TodoProvider');
    }

    return todoContext
}

export default useTodo