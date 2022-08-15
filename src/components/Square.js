import "../App.scss";

const Square = ({ value, id }) => {
  const style = value ? `square ${value}` : "square";

  if (value === "") {
    return (
      <div className={style} onClick={id}>
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
