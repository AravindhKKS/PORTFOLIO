import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);

    return window.onscroll === null;
  };

  console.log(isScroll);
  return (
    <div className={isScroll ? "navbar scroll" : "navbar"}>
      <div className="container">
        <div className="left">
          <span>
            <b>A</b>ravinth.
          </span>
        </div>
        <div className="right">
          <div className="NavbarRight">
            {" "}
            <div className="NavbarRightText">
              {" "}
              <Link className="link" to="/">
                Home{" "}
              </Link>{" "}
            </div>{" "}
            <div className="NavbarRightText">
              {" "}
              <Link className="link" to="/about">
                About{" "}
              </Link>{" "}
            </div>{" "}
            <div className="NavbarRightText">
              {" "}
              <Link className="link" to="/course">
                Certificate{" "}
              </Link>{" "}
            </div>{" "}
            <div className="NavbarRightText">
              {" "}
              <Link className="link" to="/contact">
                Contact
              </Link>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
