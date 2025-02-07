import React, { useState } from "react";
import "../App.css";

const StarWarsInfo = () => {
  const [character, setCharacter] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacter = async () => {
    if (!input) return;

    setLoading(true);
    setError(null);
    setCharacter(null);

    try {
      const response = await fetch(
        `https://swapi.py4e.com/api/people/${input}/`
      );
      if (!response.ok) throw new Error("Character not found");

      const data = await response.json();
      setCharacter(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
        <button onClick={fetchCharacter} className="button">
          Get info
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {character && (
        <pre className="result">{JSON.stringify(character, null, 2)}</pre>
      )}

      <button onClick={() => setCharacter(null)} className="clear-button">
        Clear
      </button>
    </div>
  );
};

export default StarWarsInfo;
