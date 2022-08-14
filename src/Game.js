import "./App.scss";
import { Link } from "react-router-dom";

const Game = () => {
  return (
    <div className="game">
      <h1>Welcome to Tic-Tac-Toe game</h1>
      <div>Players names input + button to start game</div>
      <nav>
        <Link to="/gameboard">To game</Link>
      </nav>
    </div>
  );
};

export default Game;
