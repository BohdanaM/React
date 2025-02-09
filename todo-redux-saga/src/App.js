import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodosRequest } from "./redux/todoSlice";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosRequest());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
