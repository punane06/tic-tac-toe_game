import "./App.scss";
import { Link } from "react-router-dom";
import Square from "./components/Square";
import { useState } from "react";

const GameBoard = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const onClick = (square) => {
    setBoard(
      board.map((value, id) => {
        if (id === square && value === "") {
          return player;
        }
        return value;
      })
    );
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
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
      <nav>
        <Link to="/scoreoard">To Scoreboard</Link>
      </nav>
    </div>
  );
};

export default GameBoard;
