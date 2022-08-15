const PlayersResults = ({ results, player }) => {
  const { xResults, oResults } = results;
  return (
    <div className="results">
      <div className={`results x-results ${player}`}>X - {xResults}</div>
      <div className={`results o-results ${!player}`}>O - {oResults}</div>
    </div>
  );
};
export default PlayersResults;
