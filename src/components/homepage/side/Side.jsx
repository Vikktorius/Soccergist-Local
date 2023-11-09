import React from "react";
import "./Side.css";

const Side = ({
  word,
  img,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  word1,
  image,
  word2,
  word3,
  word4,
  word5,
  word6,
  word7,
  word8,
  word9,
}) => {
  return (
    <div className="side-cards">
      <h3 className="txt1">{word}</h3>
      <img className="imag1" src={img} />
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
      <img src={img5} />
      <img src={img6} />
      <div className="side-text">
        <p className="side-text2">
          <img className="twitter-image" src={image} />
          {word1}
        </p>
        <p className="side-text2">{word2}</p>
        <p className="side-text2">{word3}</p>
        <p className="side-text2">{word4}</p>
        <p className="side-text2">{word5}</p>
        <p className="side-text2">{word6}</p>
        <p className="side-text2">{word7}</p>
        <p className="side-text2">{word8}</p>
        <p className="side-text2">{word9}</p>
      </div>
    </div>
  );
};

export default Side;
