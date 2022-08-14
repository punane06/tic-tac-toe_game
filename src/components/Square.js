import "../App.scss";

const Square = ({ value, onClick }) => {
  const style = value ? `square ${value}` : "square";

  if (value === "") {
    return (
      <div className={style} onClick={onClick}>
        <div>{value}</div>
      </div>
    );
  } else {
    return (
      <div className={`${style} clicked`}>
        <div>{value}</div>
      </div>
    );
  }
};

export default Square;
