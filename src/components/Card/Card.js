import React from "react";
import img from "./frame.jpg";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    style={{
        backgroundImage: "url("+ img +")"
    }}
  >
    {props.data ? <div><h1 style={{color: "black", marginTop: "120px"}}>You win.</h1></div> : 
        <div><h1 style={{color: "black", marginTop: "100px"}}>Sorry, you lost.<br/> Try again.</h1></div>}
  </div>
);

export default Card;