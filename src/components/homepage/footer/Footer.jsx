import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <img className="Footer-bg" src="./Blue1.png" />
      <div className="Footer-socials">
        <h2 className="socials">Follow us on Socials</h2>
        <div className="social2">
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
          <img src="./Ellipse3.png" alt="" />
        </div>
        <div className="social3">
          <img className="i-g" src="instagram3.png" alt="" />
          <img className="f-b" src="./facebook3.png" alt="" />
          <img className="t-w" src="twitter3.png" alt="" />
          <img className="y-b" src="youtube3.png" alt="" />
        </div>
        <div className="footer-mail">
          <h3 className="footer-mail1">Mail us on</h3>
          <p className="footer-mail2">Soccergistonline@gmail.com</p>
        </div>
        <div className="footer-inc">
          <img src="./circle.png" />
          <p>2023</p>
        </div>
      </div>
      <div className="footer-social">
        <h1 className="text-one">Quick Links</h1>
        <p className="footer-home-text-1">League Competitions</p>
        <p className="footer-home-text-2">European Competitions</p>
        <p className="footer-home-text-3">Kits Bazaar</p>
        <p className="footer-home-text-4">Polls</p>
      </div>
      <section className="Footer-trend1">
        <p className="Footer-trend1-use">Terms of Use</p>
        <p className="Footer-trend1-pri">Privacy Policies</p>
        <p className="Footer-trend1-us">Contact Us</p>
        <p className="Footer-trend1-play">Download Apps on Playstore</p>
      </section>
    </div>
  );
};

export default Footer;
