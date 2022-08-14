import "./App.scss";
import { Link } from "react-router-dom";

const GameBoard = () => {
  return (
    <div className="game-board">
      <div>Game Board</div>
      <div className="board"></div>
      <nav>
        <Link to="/scoreoard">To Scoreboard</Link>
      </nav>
    </div>
  );
};

export default GameBoard;
