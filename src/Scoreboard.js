import "./App.scss";
import { Link } from "react-router-dom";

const Scoreboard = () => {
  return (
    <div className="scoreboard">
      Game Scoreboard
      <nav>
        <Link to="/gameboard">To game</Link>
      </nav>
    </div>
  );
};

export default Scoreboard;
