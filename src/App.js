import { Route, Routes } from "react-router";
import "./App.scss";
import Game from "./Game";
import GameBoard from "./GameBoard";
import Scoreboard from "./Scoreboard";
import NotFound from "./NotFound";
import Square from "./components/Square";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/gameboard" element={<GameBoard />} />
        <Route path="/scoreoard" element={<Scoreboard />} />
        <Route path="/square" element={<Square />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
