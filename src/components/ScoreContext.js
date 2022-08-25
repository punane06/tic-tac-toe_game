import React, { useState } from "react";
const ScoreContext = React.createContext(null);

export const ScoreContextProvider = (props) => {
  const [boards, setBoards] = useState([]);

  // const getBoards = () => {
  //   return JSON.parse(localStorage.getItem('boards')) || []
  // };

  const addBoard = (newBoard) => {
    boards.push(newBoard);
    setBoards(boards.slice());
  };

  return (
    <ScoreContext.Provider value={{ boards: boards, addBoard: addBoard }}>
      {props.children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
