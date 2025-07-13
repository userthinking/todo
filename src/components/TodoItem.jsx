import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const { updateTodo, toggleTodo, deleteTodo } = useTodo();

  const edit = () => {
    updateTodo(todo.id, { ...todo, title: editedTitle });
    setIsTodoEditable(false);
  };

  const toggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggle}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) edit();
          else setIsTodoEditable((prev) => !prev);
        }}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
