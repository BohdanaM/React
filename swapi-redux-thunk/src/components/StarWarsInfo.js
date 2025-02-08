import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiCharacter, clearCharacter } from "../redux/swapiSlice";
import "../App.css";

const StarWarsInfo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { character, loading, error } = useSelector((state) => state.swapi);

  const handleFetch = () => {
    if (input.trim()) {
      dispatch(fetchSwapiCharacter(input.trim()));
    }
  };

  return (
    <div className="container">
      <h1>SWAPI</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter character ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <button onClick={handleFetch} className="button">
          Get info
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {character && (
        <pre className="result">{JSON.stringify(character, null, 2)}</pre>
      )}

      <button
        onClick={() => dispatch(clearCharacter())}
        className="clear-button"
      >
        Clear
      </button>
    </div>
  );
};

export default StarWarsInfo;
