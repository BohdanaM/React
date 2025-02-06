import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="app-container">
      <div className="counter-container">
        <h1 className="counter-title">Counter</h1>
        <div className="counter">
          <button
            className="decrement-btn"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span className="counter-value">{count}</span>
          <button
            className="increment-btn"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
