import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(4,100px)",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/sdp/1">SDP</Link>
      <Link to="/srp">SRP</Link>
    </div>
  );
};

export default Header;
