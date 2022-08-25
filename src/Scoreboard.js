import "./App.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "./helper";
import ScoreContext from "./components/ScoreContext";

const Scoreboard = () => {
  const scoreboardData = useContext(GameContext);
  const scoreContext = useContext(ScoreContext);
  console.log(`test ${scoreboardData}`);
  return (
    <div className="scoreboard">
      Game Scoreboard
      <div>{scoreboardData}</div>
      <div>
        {scoreContext.boards.map((board) => (
          <div>{board}</div>
        ))}
      </div>
      <nav>
        <Link to="/gameboard">To game</Link>
      </nav>
    </div>
  );
};

export default Scoreboard;
