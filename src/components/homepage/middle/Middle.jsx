import React from "react";
import "./Middle.css";

const Middle = ({
  image1,
  button1,
  button2,
  image4,
  image5,
  Header,
  text1,
  text2,
}) => {
  return (
    <div className="Middle-main-card">
      <img src={image1} className="main-img1" />
      <div className="card-details">
        <div className="btnz">
          <button className="btnz1">{button1}</button>
          <button className="btnz2">{button2}</button>
        </div>
        <h1 className="card-text1">{Header}</h1>
        <div className="commentz">
          <div className="commentz1">
            <img src={image4} />
            <p>{text1}</p>
          </div>
          <div className="commentz2">
            <img src={image5} />
            <p>{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
