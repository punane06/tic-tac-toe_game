import "../App.scss";

const Square = ({ value }) => {
  return (
    <div
      className="square"
      // onClick={pickSquare}
    >
      <div>{value}</div>
    </div>
  );
};

export default Square;
