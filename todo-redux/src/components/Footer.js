import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <p>Total: {todos.length}</p>
    </div>
  );
};

export default Footer;
