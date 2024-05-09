import React from "react";
import "./footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-main">
        <div className="footer-container-top">
          <div className="foot">
            <div className="inner-footer">
              <h6>Fantasy game</h6>
              <li>Fantasy Cricket</li>
              <li>Fantasy Football</li>
            </div>
            <div className="inner-footer">
              <h6>Card games</h6>
              <li>Rummy</li>
              <li>Poker</li>
              <li>Call Break</li>
              <li>Win Patti</li>
            </div>
          </div>
          <div className="foot">
            <div className="inner-footer">
              <h6>Puzzle Games</h6>
              <li>Speed Chess</li>
            </div>
            <div className="inner-footer">
              <h6>Arcade Games</h6>
              <li>Fruit Chop</li>
              <li>Fruit Dart</li>
            </div>
          </div>
          <div className="foot">
            <div className="inner-footer">
              <h6>Casusal game</h6>
              <li>Carrom</li>
              <li>Ludo</li>
              <li>Ludo win</li>
              <li>Ludo Dice</li>
              <li>Snakes & Ladders</li>
              <li>Opinio</li>
            </div>
          </div>
          <div className="foot">
            <div className="inner-footer-headings">
              <h6>FAQ</h6>
              <h6>Blog</h6>
              <h6>Refer and Earn</h6>
              <h6>Bug Bounty</h6>
            </div>
            <div className="assets-footer">
              <FacebookRoundedIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © - Galactus Funware Technology Private Limited | All
            rights reserved
          </p>
          <p>Privacy Policy | MPL Fairplay | Terms & Condition</p>
        </div>
      </div>
      <div className="disclaimer">
        <h6>disclaimer</h6>
        <i>This game may be habit-forming or financially risky.</i> 
        <p>
          Play Responsibly. Galactus Funware is the owner of, and reserves all
          rights to the assets, content, services, information, and products and
          graphics in the website except any third party content.
          <p />
          <p></p>Galactus Funware refuses to acknowledge or represent about the
          accuracy or completeness or reliability or adequacy of the website's
          third party content. These content, materials, information, services,
          and products in this website, including text, graphics, and links, are
          provided "AS IS" and without warranties of any kind, whether expressed
          or implied.
        </p>
      
        <p>
          *MPL is the biggest gaming app in India based on the number of unity
          games, special tournaments and formats. MPL is available only to
          people above 18 years of age. MPL is available in all states where
          permissible by extant law. Consequently, users located in some states
          may not be able to access our App or its contests. For an updated list
          of such states, please download the App
        </p>
      </div>
    </div>
  );
};

export default Footer;
