import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <h1>Try it now!</h1>
        <div className="input-group">
          <input type="text" placeholder="https://swapi.dev/api/people/1/" />
          <button>request</button>
        </div>
        <p className="hint">
          Need a hint? try <code>people/1</code> or <code>planets/3</code> or <code>starships/9</code>
        </p>
      </div>
    </div>
  );
}

export default App;
