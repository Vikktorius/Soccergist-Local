import React from "react";
import "./AdditionalV.css";

const AdditionalV = ({
  Head,
  img1,
  img2,
  img3,
  bttn1,
  bttn2,
  img4,
  img5,
  Heading,
  para,
  txt1,
  txt2,
}) => {
  return (
    <div>
      <div className="Addition-card">
        <img src={img1} className="Addition-main-img" />
        <img src={img2} className="Addition-iconplay" />
        <img src={img3} className="Addition-btn" />
        <div className="Addition-card-details">
          <div className="Addtion-btns">
            <button className="Addition-btn1">{bttn1}</button>
            <button className="Addition-btn2">{bttn2}</button>
          </div>
          <h1 className="Addtion-card-text">{Heading}</h1>
          <div className="Addition-comments">
            <div className="Addition-comments1">
              <img src={img4} />
              <p>{txt1}</p>
            </div>
            <div className="Addition-comments2">
              <img src={img5} />
              <p>{txt2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalV;
