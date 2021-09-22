import React, { useState, useEffect } from "react";
import "./Navbar.css";
import requests from "./request";

let Navbar = () => {
  let [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 200) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`Navbar ${show ? "Navbar-background" : ""}`}>
      <img
        className="Navbar__netflix"
        src={`${requests.imageBaseurl}/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`}
        alt="netflix"
      ></img>
      <img
        className="Navbar__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
        alt="avatar"
      ></img>
    </div>
  );
};

export default Navbar;
