import React from "react";
import "./Featuredkits.css";

const Featuredkits = ({
  image1,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) => {
  return (
    <>
      <div>
        <div className="jersey-card">
          <img className="liverpool-card-img" src={image1} />
          <div className="jersey-year">
            <h1 className="jersey-year-2">{text2}</h1>
          </div>
          <div className="price">
            <h1 className="price-2">{text3}</h1>
          </div>
          <div className="sizes">
            <p className="sizes-2">{text4}</p>
            <div className="small">
              <p className="diff-sizes">{text5}</p>
              <p className="diff-sizes">{text6}</p>
              <p className="diff-sizes">{text7}</p>
              <p className="diff-sizes">{text8}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featuredkits;
