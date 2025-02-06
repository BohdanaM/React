import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
