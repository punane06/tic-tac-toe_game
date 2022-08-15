import "./App.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Game = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  // const [playersNames, setPlayersNames] = useState([]);

  const handle = (e) => {
    let firstName = "";
    window.localStorage.setItem("firstName", JSON.stringify(firstName));
  };

  return (
    <div className="game">
      <h1>
        Welcome to <span>Tic-Tac-Toe</span> game
      </h1>
      <form>
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
      {/* <button onClick={() => setPlayersNames()}>Submitt names</button> */}
      <button onClick={() => handle}>
        <Link to="/gameboard">Start the game</Link>
      </button>
      {/* <div>{playersNames}</div> */}
    </div>
  );
};

export default Game;
