import React, { useState, useEffect } from "react";

const EmojiVoting = () => {
  const [emojis, setEmojis] = useState([
    { emoji: "😊", votes: 0 },
    { emoji: "😂", votes: 0 },
    { emoji: "😍", votes: 0 },
    { emoji: "😢", votes: 0 },
    { emoji: "😡", votes: 0 },
  ]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const savedEmojis = JSON.parse(localStorage.getItem("emojiVotes"));
    if (savedEmojis) {
      setEmojis(savedEmojis);
    }
  }, []);

  const handleVote = (index) => {
    const updatedEmojis = [...emojis];
    updatedEmojis[index].votes += 1;
    setEmojis(updatedEmojis);
    localStorage.setItem("emojiVotes", JSON.stringify(updatedEmojis));
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleClearResults = () => {
    localStorage.removeItem("emojiVotes");
    setEmojis(emojis.map((emoji) => ({ ...emoji, votes: 0 })));
    setShowResults(false);
  };

  const getWinningEmoji = () => {
    const maxVotes = Math.max(...emojis.map((emoji) => emoji.votes));
    const allVotesZero = emojis.every((emoji) => emoji.votes === 0);

    if (allVotesZero) {
      return "No votes yet";
    }

    return emojis.find((emoji) => emoji.votes === maxVotes)?.emoji;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Vote for Your Favorite Emoji!</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "20px",
        }}
      >
        {emojis.map((emoji, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <span
              style={{ fontSize: "50px", cursor: "pointer" }}
              onClick={() => handleVote(index)}
            >
              {emoji.emoji}
            </span>
            <p>Votes: {emoji.votes}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={handleShowResults}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          Show Results
        </button>
        <button
          onClick={handleClearResults}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          Clear Results
        </button>
      </div>
      {showResults && (
        <div style={{ marginTop: "20px" }}>
          <h2>Winning Emoji: {getWinningEmoji()}</h2>
        </div>
      )}
    </div>
  );
};

export default EmojiVoting;
