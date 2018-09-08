import React from "react";
import "./Portrait.css";

const Portrait = props => (
  <div className="portrait">
    <div onClick={() => props.shuffleImages(props.id)} className="record">
        <div className="img-container">
            <img alt={props.name} src={process.env.PUBLIC_URL + props.image} style={{width: "200px", marginTop: "15px"}}/>
        </div>
    </div>
  </div>
);

export default Portrait;
