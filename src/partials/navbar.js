import * as React from "react";
require("../styles/global.css");

const NavBar = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <nav className="nav">
        <ul className="container">
          <li>
            <a href="/careconn">Home</a>
          </li>
          <li>
            <a href="/careconn/services">Services</a>
          </li>
          <li>
            <a href="/careconn/locations">Locations</a>
          </li>
          <li>
            <a href="/careconn/faq">FAQ</a>
          </li>
        </ul>
      </nav>

      <div className="img-contain">
        <img src={require("../images/logo.png")} alt="care connection logo" />
      </div>
    </>
  );
};

export default NavBar;