import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoRequest: (state, action) => {},
    loadTodosRequest: (state) => {},
    removeTodoRequest: (state, action) => {},
    toggleTodoRequest: (state, action) => {},
    editTodoRequest: (state, action) => {},
    clearTodosRequest: (state) => {},

    setTodos: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
      state.error = null;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    clearTodos: (state) => {
      state.todos = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addTodoRequest,
  loadTodosRequest,
  removeTodoRequest,
  toggleTodoRequest,
  editTodoRequest,
  clearTodosRequest,
  setTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearTodos,
  setLoading,
  setError,
} = todoSlice.actions;

export default todoSlice.reducer;
