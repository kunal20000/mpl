import React from "react";
import "./navbar.css";
import mplLogo from "../images/mpl-logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-image">
        <img className="mpl-image" src={mplLogo} alt="mpl-image" />

         <ul className="game-container-list">
          <li>MPL Games</li>
          <li>About</li>
          <li>Blogs</li>
          <li>FAQs</li>
          <li>Help</li>
          <li>Language</li>
         </ul>
      </div>
    </div>
  );
};

export default Navbar;
