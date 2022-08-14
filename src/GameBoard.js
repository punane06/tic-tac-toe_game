import "./App.scss";
import { Link } from "react-router-dom";
import Square from "./components/Square";

const GameBoard = () => {
  const value = "o";
  return (
    <div className="game-board-container">
      <div>Game Board</div>
      <div className="game-board">
        <div className="game-row">
          <Square value={value} />
          <Square value={value} />
          <Square value={value} />
        </div>
        <div className="game-row">
          <Square value={value} />
          <Square value={value} />
          <Square value={value} />
        </div>
        <div className="game-row">
          <Square value={value} />
          <Square value={value} />
          <Square value={value} />
        </div>
      </div>
      <nav>
        <Link to="/scoreoard">To Scoreboard</Link>
      </nav>
    </div>
  );
};

export default GameBoard;
