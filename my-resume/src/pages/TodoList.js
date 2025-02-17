import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoRequest,
  removeTodoRequest,
  toggleTodoRequest,
  editTodoRequest,
  clearTodosRequest,
} from "../redux/todoSlice";
import {
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(
        addTodoRequest({ text: input, id: Date.now(), completed: false })
      );
      setInput("");
    }
  };

  const handleEditTodo = (id, text) => {
    setEditMode(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTodoRequest({ id, text: editText }));
    setEditMode(null);
    setEditText("");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 4, p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        To Do List
      </Typography>
      <form
        onSubmit={handleAddTodo}
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>

      {todos.length === 0 ? (
        <Typography align="center" color="textSecondary">
          No tasks available. Please add a task.
        </Typography>
      ) : (
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "#f9f9f9",
                mb: 1,
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodoRequest(todo.id))}
              />
              {editMode === todo.id ? (
                <TextField
                  variant="outlined"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <ListItemText
                  primary={todo.text}
                  sx={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                />
              )}
              {editMode === todo.id ? (
                <Button color="primary" onClick={() => handleSaveEdit(todo.id)}>
                  Save
                </Button>
              ) : (
                <Button
                  color="secondary"
                  onClick={() => handleEditTodo(todo.id, todo.text)}
                >
                  Edit
                </Button>
              )}
              <Button
                color="error"
                onClick={() => dispatch(removeTodoRequest(todo.id))}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
      {todos.length > 0 && (
        <Button
          fullWidth
          variant="contained"
          color="success"
          onClick={() => dispatch(clearTodosRequest())}
          sx={{ mt: 2 }}
        >
          Clear All
        </Button>
      )}
    </Container>
  );
};

export default TodoList;
