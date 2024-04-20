import React from "react";
import "./navbar.css";
import mplLogo from "../images/mpl-logo.png";
import LanguageLogo from '../asset/language_logo.svg';
import HelpImage from '../images/help_icon.webp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-image">
        <img className="mpl-image" src={mplLogo} alt="mpl-image" />

         <ul className="game-container-list">
          <li>MPL Games <KeyboardArrowDownIcon/> </li>
          <li>About</li>
          <li>Blogs</li>
          <li>FAQs</li>
          <li><img width="20px" height="20px" src={HelpImage} alt="help-image"/> Help</li>
          <li><img src={LanguageLogo} alt="language-logo"/>Language</li>
         </ul>
      </div>
    </div>
  );
};

export default Navbar;
