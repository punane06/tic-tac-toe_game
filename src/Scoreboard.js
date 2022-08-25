import "./App.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ScoreContext from "./components/ScoreContext";
import Square from "./components/Square";

const Scoreboard = () => {
  const scoreContext = useContext(ScoreContext);
  console.log(scoreContext.boards[1]);
  return (
    <div className="scoreboard">
      <div className="scoreboard-title">
        <h2>Game Scoreboard</h2>
        <button>
          <Link to="/gameboard">To game</Link>
        </button>
      </div>
      <div className="scoreboard-board-container">
        {scoreContext.boards.map((board, index) => (
          <div className="scoreboard-board">
            <div className="game-board">
              <div className="game-row">
                <Square value={board[0]} />
                <Square value={board[1]} />
                <Square value={board[2]} />
              </div>
              <div className="game-row">
                <Square value={board[3]} />
                <Square value={board[4]} />
                <Square value={board[5]} />
              </div>
              <div className="game-row">
                <Square value={board[6]} />
                <Square value={board[7]} />
                <Square value={board[8]} />
              </div>
            </div>
            <div></div>
            {/* <div key={index}>{board}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;
