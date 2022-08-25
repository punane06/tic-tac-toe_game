const PlayersResults = ({ results, player, firstPlayer, secondPlayer }) => {
  const { xResults, oResults } = results;

  return (
    <div className="results">
      <div className={`results x-results ${player}`}>
        {firstPlayer} - {xResults}
      </div>
      <div className={`results o-results ${!player}`}>
        {secondPlayer} - {oResults}
      </div>
    </div>
  );
};
export default PlayersResults;
