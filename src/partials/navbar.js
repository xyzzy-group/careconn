import * as React from "react";
require("../styles/global.css");
const Secret = require('../secret');

const NavBar = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <nav className="nav">
        <div className="logo-small"><img className="img-file" src={require("../images/titlelogo.png")}></img></div>
        <ul className="container">
          <li>
            <a href={Secret("home")}>Home</a>
          </li>
          <li>
            <a href={Secret("services")}>Services</a>
          </li>
          <li>
            <a href={Secret("schedule")}>Schedule</a>
          </li>
          <li>
            <a href={Secret("locations")}>Locations</a>
          </li>
          <li>
            <a href={Secret("faq")}>FAQ</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;