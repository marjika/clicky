import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href={"/"} style={{color: "antiquewhite"}}>
      Restart Game
    </a>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
            <div className="wins">Wins: {props.wins} </div>
        </li>
        <li className="nav-item">
            <div className="losses">Losses: {props.losses} </div>
        </li>
        <li className="nav-item">
            <div className="score">Current Score: {props.score}</div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;