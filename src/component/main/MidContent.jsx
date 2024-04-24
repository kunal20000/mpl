import React from "react";
import BannerImage from "../images/banner-imageMpl.webp";
import "./midContent.css";
import MobileImage from "../images/mobileqr.webp";
import ScannerImage from "../images/2snjib99_qr_code_e568c20ec7.webp";
import OpinioImage from "../images/opino_image.webp";
import RummyImage from "../images/Rummy_image.webp";
import PattiImage from "../images/Win_patti_image.webp";
import WidgetImage from "../images/widget_left_.webp";
import UpiImage from "../images/upi_.webp";
import AmazonPayImage from "../images/amazon_pay_.webp";
import PaytmImage from "../images/paytm.webp";
import BankImage from "../images/bank_transfer_.webp";
import AIgfImage from "../images/aigf_.webp";
import FicciImage from "../images/ficci_.webp";
import IamaiImage from "../images/IAMAI.webp";

const MidContent = () => {
  return (
    <div className="mid-container">
      <div className="mid-image">
        <img className="banner-image" src={BannerImage} alt="banner-image" />
      </div>
      <div className="scanner-container">
        <img className="mobile-img" src={MobileImage} alt="mobile-image" />
        <p>
          Scan Code to Download MPL <br /> App Now!
        </p>
        <img
          className="scanner-img"
          height="127px"
          width="127px"
          src={ScannerImage}
          alt="scanner-image"
        />
      </div>
      <div className="top-clash-container">
        <h1>Top Cash Games On MPL </h1>
        <div className="game-container">
          <div>
            <img src={OpinioImage} alt="opinio-image" />
            <p>Opinio</p>
          </div>
          <div>
            <img src={RummyImage} alt="rummy-image" />
            <p>Rummy</p>
          </div>
          <div>
            <img src={PattiImage} alt="patti-image" />
            <p>Win Patti</p>
          </div>
        </div>
      </div>
      <div className="widget-container">
        <img src={WidgetImage} alt="widget-image" />
      </div>
      <div className="withdraw-container">
        <h2>Withdraw Winnings Instantly</h2>
        <div className="pay-container">
          <div>
            <img width="64px" height="64px" src={UpiImage} alt="upi-image" />
            <p>UPI</p>
          </div>
          <div>
            <img src={AmazonPayImage} alt="amazon-pay-image" />
            <p>Amazon Pay</p>
          </div>
          <div>
            <img src={BankImage} alt="bank-image" />
            <p>Bank Transfer</p>
          </div>
          <div>
            <img src={PaytmImage} alt="paytm-image" />
            <p>Paytm</p>
          </div>
        </div>
      </div>
      <div className="withdraw-container">
        <h2>MPL is a Member of</h2>
        <div className="pay-container">
          <div>
            <img src={AIgfImage} alt="aigf-image" />
          </div>
          <div>
            <img src={FicciImage} alt="ficci-image" />
          </div>
          <div>
            <img src={IamaiImage} alt="iamai-image" />
          </div>
        </div>
      </div>
      <div className="real-money-para">
        <h2>Real Money and Cash Earning Games on MPL</h2>
        <p>
          Mobile Premier League (MPL) is one of the most popular and trusted
          mobile gaming platforms in India, offering 60+ games. It is available
          for free download across various categories, such as fantasy sports,
          card games, arcade games, puzzles, action games, and more. It is the
          most widely recognized gaming platform, boasting over 9 crore users
          engaged in real money games like Poker, Rummy, Ludo, Fantasy Cricket,
          Call Break, Win Patti Skill, and more, all on one platform!
        </p>
      </div>
      <div className="faq-container">
        <h2>FAQs</h2>

      </div>
    </div>
  );
};

export default MidContent;
