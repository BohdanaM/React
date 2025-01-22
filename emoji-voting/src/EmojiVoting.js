import React, { Component } from "react";

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { emoji: "😊", votes: 0 },
        { emoji: "😂", votes: 0 },
        { emoji: "😍", votes: 0 },
        { emoji: "😢", votes: 0 },
        { emoji: "😡", votes: 0 },
      ],
      showResults: false,
    };
  }

  componentDidMount() {
    const savedEmojis = JSON.parse(localStorage.getItem("emojiVotes"));
    if (savedEmojis) {
      this.setState({ emojis: savedEmojis });
    }
  }

  handleVote = (index) => {
    const updatedEmojis = [...this.state.emojis];
    updatedEmojis[index].votes += 1;
    this.setState({ emojis: updatedEmojis }, () => {
      localStorage.setItem("emojiVotes", JSON.stringify(updatedEmojis));
    });
  };

  handleShowResults = () => {
    this.setState({ showResults: true });
  };

  handleClearResults = () => {
    localStorage.removeItem("emojiVotes");
    this.setState({
      emojis: this.state.emojis.map((emoji) => ({ ...emoji, votes: 0 })),
      showResults: false,
    });
  };

  getWinningEmoji = () => {
    const maxVotes = Math.max(...this.state.emojis.map((emoji) => emoji.votes));
    const allVotesZero = this.state.emojis.every((emoji) => emoji.votes === 0);

    if (allVotesZero) {
      return "No votes yet";
    }

    return this.state.emojis.find((emoji) => emoji.votes === maxVotes)?.emoji;
  };

  render() {
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
          {this.state.emojis.map((emoji, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <span
                style={{ fontSize: "50px", cursor: "pointer" }}
                onClick={() => this.handleVote(index)}
              >
                {emoji.emoji}
              </span>
              <p>Votes: {emoji.votes}</p>
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={this.handleShowResults}
            style={{ margin: "10px", padding: "10px 20px" }}
          >
            Show Results
          </button>
          <button
            onClick={this.handleClearResults}
            style={{ margin: "10px", padding: "10px 20px" }}
          >
            Clear Results
          </button>
        </div>
        {this.state.showResults && (
          <div style={{ marginTop: "20px" }}>
            <h2>Winning Emoji: {this.getWinningEmoji()}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiVoting;
