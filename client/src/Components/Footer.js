import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { RiTelegramFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";

const Footer = () => {
  return (
    <div className="footer">
      <h3>All rights reserved. 2021</h3>
      <br />
      <IconContext.Provider value={{ className: "social-icons", size: "3rem" }}>
        <div className="social-icon-box">
          <div className="social-icon-wrapper">
            <AiFillInstagram />
            <AiFillTwitterCircle />
            <RiTelegramFill />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Footer;
