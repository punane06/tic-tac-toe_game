import "../App.scss";

const Square = ({ value, onClick }) => {
  const style = value ? `square ${value}` : "square";
  return (
    <div className={style} onClick={onClick}>
      <div>{value}</div>
    </div>
  );
};

export default Square;
