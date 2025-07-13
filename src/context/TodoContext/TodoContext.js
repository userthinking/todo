import { createContext } from "react";

const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleTodo: (id) => {}
})

export default TodoContext