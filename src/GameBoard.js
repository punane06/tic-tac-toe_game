import "./App.scss";
import { Link } from "react-router-dom";
import Square from "./components/Square";
import { useState } from "react";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");

  const onClick = (number) => {
    if (board[number] !== "") {
      alert("Already clicked!");
      return;
    }
    if (player === "X") {
      board[number] = "X";
      setPlayer("O");
    } else {
      board[number] = "O";
      setPlayer("X");
    }
    setBoard(board);
  };

  const gameRestart = () => {
    setPlayer("X");
    setBoard(Array(9).fill(""));
  };

  return (
    <div className="game-board-container">
      <div>Game Board</div>
      <div>Next turn: {player}</div>
      <div className="game-board">
        <div className="game-row">
          <Square
            value={board[0]}
            onClick={() => {
              onClick(0);
            }}
          />
          <Square
            value={board[1]}
            onClick={() => {
              onClick(1);
            }}
          />
          <Square
            value={board[2]}
            onClick={() => {
              onClick(2);
            }}
          />
        </div>
        <div className="game-row">
          <Square
            value={board[3]}
            onClick={() => {
              onClick(3);
            }}
          />
          <Square
            value={board[4]}
            onClick={() => {
              onClick(4);
            }}
          />
          <Square
            value={board[5]}
            onClick={() => {
              onClick(5);
            }}
          />
        </div>
        <div className="game-row">
          <Square
            value={board[6]}
            onClick={() => {
              onClick(6);
            }}
          />
          <Square
            value={board[7]}
            onClick={() => {
              onClick(7);
            }}
          />
          <Square
            value={board[8]}
            onClick={() => {
              onClick(8);
            }}
          />
        </div>
      </div>
      <button className="restart" onClick={gameRestart}>
        Restart Game
      </button>
      <nav>
        <Link to="/scoreoard">To Scoreboard</Link>
      </nav>
    </div>
  );
};

export default GameBoard;
