import "./App.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "./helper";

const Scoreboard = () => {
  const scoreboardData = useContext(GameContext);
  console.log(`test ${scoreboardData}`);
  return (
    <div className="scoreboard">
      Game Scoreboard
      <div>{scoreboardData}</div>
      <nav>
        <Link to="/gameboard">To game</Link>
      </nav>
    </div>
  );
};

export default Scoreboard;
