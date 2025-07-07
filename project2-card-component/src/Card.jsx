import pic from "./assets/bro-code.jpg";
import Button from "./Button/Button.jsx";

function Card() {
  const h2Style = {
    fontSize: "1.5rem",
    margin: "10px 8px",
    fontFamily: "sans-serif, roboto, arial",
    color: "#333",
  };

  const pStyle = {
    fontSize: "1rem",
    color: "#555",
    margin: "0 0 16px",
  };

  return (
    <div className="card">
      <img src={pic} alt="Bro Code Pic" />
      <h2 style={h2Style}>React by Bro Code</h2>
      <p>Learn React from the ground up with Bro Code.</p>
      <Button />
    </div>
  );
}

export default Card;
