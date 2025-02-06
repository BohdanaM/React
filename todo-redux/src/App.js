import React from "react";
import AddTodo from "./components/Todo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <h1>To do</h1>
      <AddTodo />
      <Footer />
    </div>
  );
};

export default App;
