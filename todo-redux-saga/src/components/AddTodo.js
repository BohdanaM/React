import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "../redux/todoSlice";
import "../App.css";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(
        addTodoRequest({ text: input, id: Date.now(), completed: false })
      );
      setInput("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      <input
        type="text"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
