import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodoRequest,
  toggleTodoRequest,
  editTodoRequest,
  clearTodosRequest,
} from "../redux/todoSlice";
import "../App.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodoRequest(todo.id))}
              className="todo-checkbox"
            />
            <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
              {todo.text}
            </span>
            <button
              className="edit-btn"
              onClick={() =>
                dispatch(editTodoRequest({ id: todo.id, text: "Updated Task" }))
              }
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => dispatch(removeTodoRequest(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        className="clear-btn"
        onClick={() => dispatch(clearTodosRequest())}
      >
        Clear All
      </button>
    </div>
  );
};

export default TodoList;
