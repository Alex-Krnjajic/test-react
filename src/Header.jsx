import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const headerStyle = {
    background: "tomato",
    padding: "10px",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <header style={headerStyle}>
      <h1>To-Do List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}
