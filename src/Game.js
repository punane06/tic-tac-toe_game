import "./App.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Game = () => {
  const [firstName, setFirstName] = useState("X");
  const [secondName, setSecondName] = useState("O");

  const handlePlayersSubmit = (e) => {
    e.preventDefault();
    setFirstName(firstName);
    setSecondName(secondName);
  };

  useEffect(() => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("secondName", secondName);
  });

  return (
    <div className="game">
      <h1>
        Welcome to <span>Tic-Tac-Toe</span> game
      </h1>
      <form onSubmit={handlePlayersSubmit}>
        <label name="first-name">
          First player name:
          <br />
          <input
            type="text"
            name="firstName"
            placeholder="First player name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <br />
        <label name="second-name">
          Second player name:
          <br />
          <input
            type="text"
            name="secondName"
            placeholder="Second player name"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          ></input>
        </label>
        <br />
      </form>
      <button type="submit" onClick={handlePlayersSubmit}>
        <Link to="/gameboard">Start the game</Link>
      </button>
    </div>
  );
};

export default Game;
