import React from 'react';
import BannerImage from '../images/banner-imageMpl.webp';
import './midContent.css';
import MobileImage from '../images/mobileqr.webp';
import ScannerImage from '../images/2snjib99_qr_code_e568c20ec7.webp';


const MidContent = () => {
  return (
    <div className='mid-container'>
      <div className="mid-image">
        <img  className='banner-image' src={BannerImage} alt="banner-image" />
      </div>
      <div className='scanner-container'>
        <img className='mobile-img' src={MobileImage} alt="mobile-image" />
        <p>Scan Code to Download MPL <br /> App Now!</p>
        <img className='scanner-img' height="127px" width="127px" src={ScannerImage} alt="scanner-image" />
      </div>
      <div className="top-clash-container">
        <h1>Top Cash Games On MPL </h1>
      </div>
    </div>
  );
}

export default MidContent;
