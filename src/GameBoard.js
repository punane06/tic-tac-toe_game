import "./App.scss";
import { Link } from "react-router-dom";
import Square from "./components/Square";
import PlayersResults from "./components/PlayersResults";
import { useContext, useEffect, useState } from "react";
import { calculateWinner } from "./helper";
import ScoreContext from "./components/ScoreContext";

const GameBoard = () => {
  const firstPlayer = localStorage.getItem("firstName");
  const secondPlayer = localStorage.getItem("secondName");
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState(firstPlayer);
  const winner = calculateWinner(board);
  const [oResults, setOResults] = useState(0);
  const [xResults, setXResults] = useState(0);

  const scoreContext = useContext(ScoreContext);

  useEffect(() => {
    if (winner === "O") {
      setOResults((o) => o + 1);
      scoreContext.addBoard(board);
    } else if (winner === "X") {
      setXResults((x) => x + 1);
      scoreContext.addBoard(board);
    }
  }, [winner]);

  console.log(scoreContext.boards);

  const onClick = (id) => {
    if (winner) {
      alert(
        `Game is ower, ${
          winner === "X" ? firstPlayer : secondPlayer
        } winn this game.`
      );
      return;
    }
    if (board[id] !== "") {
      alert("Already clicked!");
      return;
    }
    if (player === firstPlayer) {
      board[id] = "X";
      setPlayer(secondPlayer);
    } else {
      board[id] = "O";
      setPlayer(firstPlayer);
    }
    setBoard(board);
    console.log(board);
  };

  const gameRestart = () => {
    setPlayer(firstPlayer);
    setBoard(Array(9).fill(""));
  };

  return (
    <div className="game-board-container">
      <PlayersResults
        results={{ oResults, xResults }}
        player={player}
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      />
      {winner && (
        <div className={`winner ${winner === "X" ? "X" : "O"}`}>
          The winner is {winner === "X" ? firstPlayer : secondPlayer}!
        </div>
      )}
      {!winner && <div className="next">Next turn: {player}</div>}
      <div className="game-board">
        <div className="game-row">
          <Square
            value={board[0]}
            id={() => {
              onClick(0);
            }}
          />
          <Square
            value={board[1]}
            id={() => {
              onClick(1);
            }}
          />
          <Square
            value={board[2]}
            id={() => {
              onClick(2);
            }}
          />
        </div>
        <div className="game-row">
          <Square
            value={board[3]}
            id={() => {
              onClick(3);
            }}
          />
          <Square
            value={board[4]}
            id={() => {
              onClick(4);
            }}
          />
          <Square
            value={board[5]}
            id={() => {
              onClick(5);
            }}
          />
        </div>
        <div className="game-row">
          <Square
            value={board[6]}
            id={() => {
              onClick(6);
            }}
          />
          <Square
            value={board[7]}
            id={() => {
              onClick(7);
            }}
          />
          <Square
            value={board[8]}
            id={() => {
              onClick(8);
            }}
          />
        </div>
      </div>
      <button className="restart" onClick={gameRestart}>
        New Game
      </button>
      <button>
        <Link to="/scoreoard">To Scoreboard</Link>
      </button>
    </div>
  );
};

export default GameBoard;
