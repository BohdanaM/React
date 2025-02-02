import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const validationSchema = Yup.object().shape({
    task: Yup.string().min(5, "Minimum 5 symbols").required("Required field"),
  });

  return (
    <div className="todo-container">
      <h2>TODO List</h2>
      <Formik
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setTodos([...todos, values.task]);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="task" placeholder="Add task" />
            <ErrorMessage name="task" component="div" className="error" />
            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
