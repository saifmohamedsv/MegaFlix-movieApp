import React, { useEffect, useState } from "react";
import navlogo from "../styles/megaflix.png";
import "../styles/Nav.scss";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={navlogo} className="nav__logo" alt="megaflix logo" />
      <p className="nav__title">MegaFlix</p>
    </div>
  );
}

export default Nav;
