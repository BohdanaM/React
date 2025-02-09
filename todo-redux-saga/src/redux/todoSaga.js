import { call, put, takeEvery } from "redux-saga/effects";
import {
  addTodo,
  addTodoRequest,
  loadTodosRequest,
  setTodos,
  removeTodo,
  removeTodoRequest,
  toggleTodo,
  toggleTodoRequest,
  editTodo,
  editTodoRequest,
  clearTodos,
  clearTodosRequest,
  setLoading,
  setError,
} from "./todoSlice";

const fetchTodos = () =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(JSON.parse(localStorage.getItem("todos") || "[]")),
      500
    )
  );

const saveTodos = (todos) =>
  new Promise((resolve) =>
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
      resolve();
    }, 500)
  );

function* loadTodosSaga() {
  yield put(setLoading(true));
  try {
    const todos = yield call(fetchTodos);
    yield put(setTodos(todos));
  } catch (error) {
    yield put(setError("Failed to load todos"));
  }
  yield put(setLoading(false));
}

function* addTodoSaga(action) {
  try {
    yield put(addTodo(action.payload));
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.push(action.payload);
    yield call(saveTodos, todos);
  } catch (error) {
    yield put(setError("Failed to add todo"));
  }
}

function* removeTodoSaga(action) {
  try {
    yield put(removeTodo(action.payload));
    const todos = JSON.parse(localStorage.getItem("todos") || "[]").filter(
      (todo) => todo.id !== action.payload
    );
    yield call(saveTodos, todos);
  } catch (error) {
    yield put(setError("Failed to remove todo"));
  }
}

function* toggleTodoSaga(action) {
  try {
    yield put(toggleTodo(action.payload));
    const todos = JSON.parse(localStorage.getItem("todos") || "[]").map(
      (todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
    );
    yield call(saveTodos, todos);
  } catch (error) {
    yield put(setError("Failed to toggle todo"));
  }
}

function* editTodoSaga(action) {
  try {
    yield put(editTodo(action.payload));
    const todos = JSON.parse(localStorage.getItem("todos") || "[]").map(
      (todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
    );
    yield call(saveTodos, todos);
  } catch (error) {
    yield put(setError("Failed to edit todo"));
  }
}

function* clearTodosSaga() {
  try {
    yield put(clearTodos());
    yield call(saveTodos, []);
  } catch (error) {
    yield put(setError("Failed to clear todos"));
  }
}

export function* watchTodos() {
  yield takeEvery(loadTodosRequest.type, loadTodosSaga);
  yield takeEvery(addTodoRequest.type, addTodoSaga);
  yield takeEvery(removeTodoRequest.type, removeTodoSaga);
  yield takeEvery(toggleTodoRequest.type, toggleTodoSaga);
  yield takeEvery(editTodoRequest.type, editTodoSaga);
  yield takeEvery(clearTodosRequest.type, clearTodosSaga);
}
