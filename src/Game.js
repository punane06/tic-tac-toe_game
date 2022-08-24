import "./App.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Game = () => {
  const [playersNames, setPlayersNames] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const handlePlayersSubmit = (e) => {
    e.preventDefault();
    let playerName = {
      firstName,
      secondName,
    };
    setPlayersNames([...playersNames, playerName]);
    setFirstName(firstName);
    setSecondName(secondName);
  };

  useEffect(() => {
    window.localStorage.setItem("playersNames", JSON.stringify(playersNames));
  }, [playersNames]);

  // useEffect(() => {
  //   localStorage.setItem("firstName", JSON.stringify(firstName));
  //   localStorage.setItem("secondName", JSON.stringify(secondName));
  // });

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
      <div>{firstName}</div>
      <div>{secondName}</div>
      {/* <button onClick={() => setPlayersNames()}>Submitt names</button> */}
      <button type="submit" onClick={handlePlayersSubmit}>
        <Link to="/gameboard">Start the game</Link>
      </button>
      <div>{playersNames.firstName}</div>
    </div>
  );
};

export default Game;
