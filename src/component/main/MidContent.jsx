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
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        <div className="expand-container">
          <Accordion style={{ backgroundColor: "#f4f3f4", color: "white" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "black", marginRight: "20px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin: 0, padding: 0, marginRight: "20px" }}
            >
              <h4
                style={{
                  color: "#230046",
                  textAlign: "center",
                  margin: "10px 20px 0px 20px",
                  fontWeight: "490",
                  padding: "0",
                  fontSize: "24px",
                }}
              >
                What Are money-earning games?
              </h4>
            </AccordionSummary>
            <AccordionDetails
              style={{ margin: 0, padding: 0, fontSize: "20px" }}
            >
              <p
                style={{
                  color: "#190a2899",
                  margin: "0px 0px 20px 20px",
                  padding: "0",
                }}
              >
                Real Money-earning games are those that you can play online and
                win cash. These online money games are easily accessible on
                mobile devices, tablets, and desktop computers. They are
                available in diverse formats, such as mobile applications and
                websites. Designed to be both engaging and entertaining, these
                games offer players a chance to win cash prizes.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="expand-container">
          <Accordion style={{ backgroundColor: "#f4f3f4", color: "white" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "black", marginRight: "20px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin: 0, padding: 0, marginRight: "20px" }}
            >
              <h4
                style={{
                  color: "#230046",
                  textAlign: "center",
                  margin: "10px 20px 10px 20px",
                  fontWeight: "490",
                  padding: "0",
                  fontSize: "24px",
                }}
              >
                Are all money-earning games free to play?
              </h4>
            </AccordionSummary>
            <AccordionDetails
              style={{ margin: 0, padding: 0, fontSize: "20px" }}
            >
              <p
                style={{
                  color: "#190a2899",
                  margin: "0px 0px 20px 20px",
                  padding: "0",
                }}
              >
                No, not all games at MPL are free. However, there are freeroll
                tournaments and several free-to-play games where you can win
                cash prizes. Some of the money-earning games require an entry
                fee. Always be on the lookout for app offers and tournaments on
                MPL.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="expand-container">
          <Accordion style={{ backgroundColor: "#f4f3f4", color: "white" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "black", marginRight: "20px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin: 0, padding: 0, marginRight: "20px" }}
            >
              <h4
                style={{
                  color: "#230046",
                  textAlign: "center",
                  margin: "10px 20px 10px 20px",
                  fontWeight: "490",
                  padding: "0",
                  fontSize: "24px",
                }}
              >
                Can I play real money games on my mobile device?
              </h4>
            </AccordionSummary>
            <AccordionDetails
              style={{ margin: 0, padding: 0, fontSize: "20px" }}
            >
              <p
                style={{
                  color: "#190a2899",
                  margin: "0px 0px 20px 20px",
                  padding: "0",
                }}
              >
                Yes. You can download the MPL app on your mobile to play real
                money games. Choose the game you want to play and win cash
                prizes!
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="expand-container">
          <Accordion style={{ backgroundColor: "#f4f3f4", color: "white" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "black", marginRight: "20px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin: 0, padding: 0, marginRight: "20px" }}
            >
              <h4
                style={{
                  color: "#230046",
                  textAlign: "center",
                  margin: "10px 20px 10px 20px",
                  fontWeight: "490",
                  padding: "0",
                  fontSize: "24px",
                }}
              >
                How can I differentiate between real cash games and free games?
              </h4>
            </AccordionSummary>
            <AccordionDetails
              style={{ margin: 0, padding: 0, fontSize: "20px" }}
            >
              <p
                style={{
                  color: "#190a2899",
                  margin: "0px 0px 20px 20px",
                  padding: "0",
                }}
              >
                Once you log on to the MPL app, there are categorizations that
                show which games are free and which games require an entry fee.
                You can play real cash games to earn real money. Note: some free
                games also offer a chance to win cash prizes on MPL.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="expand-container">
          <Accordion style={{ backgroundColor: "#f4f3f4", color: "white" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "black", marginRight: "20px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin: 0, padding: 0, marginRight: "20px" }}
            >
              <h4
                style={{
                  color: "#230046",
                  textAlign: "center",
                  margin: "10px 20px 10px 20px",
                  fontWeight: "490",
                  padding: "0",
                  fontSize: "24px",
                }}
              >
                How do I deposit money into my account for real cash games on
                MPL?
              </h4>
            </AccordionSummary>
            <AccordionDetails
              style={{ margin: 0, padding: 0, fontSize: "20px" }}
            >
              <p
                style={{
                  color: "#190a2899",
                  margin: "0px 0px 20px 20px",
                  padding: "0",
                }}
              >
                You can deposit money into your MPL wallet very easily. First,
                create an account on MPL and sign up. Next, go to your MPL
                wallet and tap on 'Add Cash' to deposit cash into your account
                through various methods like Paytm and UPI.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="expand-container">
          <Accordion style={{ backgroundColor: "#f4f3f4", color: "white" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "black", marginRight: "20px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin: 0, padding: 0, marginRight: "20px" }}
            >
              <h4
                style={{
                  color: "#230046",
                  textAlign: "center",
                  margin: "10px 20px 10px 20px",
                  fontWeight: "490",
                  padding: "0",
                  fontSize: "24px",
                }}
              >
                How do I withdraw my winnings from real cash games on MPL?
              </h4>
            </AccordionSummary>
            <AccordionDetails
              style={{ margin: 0, padding: 0, fontSize: "20px" }}
            >
              <p
                style={{
                  color: "#190a2899",
                  margin: "0px 0px 20px 20px",
                  padding: "0",
                }}
              >
                You can withdraw winnings of the real cash games from your MPL
                wallet instantly. Follow these steps to withdraw cash: Open the
                MPL app Go to the "Wallet" section Once you reach there, tap on
                the Withdraw icon There you go! Your cash has been withdrawn
                instantly and successfully
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="expand-container">
          <Accordion style={{ backgroundColor: "#f4f3f4", color: "white" }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "black", marginRight: "20px" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ margin: 0, padding: 0, marginRight: "20px" }}
            >
              <h4
                style={{
                  color: "#230046",
                  textAlign: "center",
                  margin: "10px 20px 10px 20px",
                  fontWeight: "490",
                  padding: "0",
                  fontSize: "24px",
                }}
              >
               Are there age restrictions for playing real cash games?
              </h4>
            </AccordionSummary>
            <AccordionDetails
              style={{ margin: 0, padding: 0, fontSize: "20px" }}
            >
              <p
                style={{
                  color: "#190a2899",
                  margin: "0px 0px 20px 20px",
                  padding: "0",
                }}
              >
               Yes. The player has to be at least 18 years of age to play real money games on MPL.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MidContent;
