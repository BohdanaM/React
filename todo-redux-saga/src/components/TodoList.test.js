import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import App from "../App";

test("should have the correct title", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const title = screen.getByText(/Todo List/i);
  expect(title).toBeInTheDocument();
});

test("should allow entering both letters and numbers in the input field", () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
  const inputField = screen.getByPlaceholderText(/Add a new task/i);

  fireEvent.change(inputField, { target: { value: "Buy milk 777" } });
  expect(inputField.value).toBe("Buy milk 777");

  fireEvent.change(inputField, { target: { value: "1234567" } });
  expect(inputField.value).toBe("1234567");
});

test('should not add a task when "Add" is clicked without input text', () => {
  render(
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );

  const inputField = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputField, { target: { value: "" } });

  fireEvent.click(addButton);

  const task = screen.queryByText(/Text/i);
  expect(task).not.toBeInTheDocument();
});

test('should add a task when "Add" is clicked with input', () => {
  render(
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
  const inputField = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputField, { target: { value: "Text" } });
  fireEvent.click(addButton);

  const task = screen.getByText(/Text/i);
  expect(task).toBeInTheDocument();
});

test('should clear all tasks when "Clear All" is clicked', () => {
  render(
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
  const inputField = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputField, { target: { value: "Text" } });
  fireEvent.click(addButton);

  const clearButton = screen.getByText(/Clear All/i);
  fireEvent.click(clearButton);

  const task = screen.queryByText(/Text/i);
  expect(task).not.toBeInTheDocument();
});
