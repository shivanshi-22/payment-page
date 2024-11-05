import React from "react";
import "./PaymentPage.css"; 
import playerImage from './player.jpeg';

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <header className="header">
  <div className="logo-section">
    <img src="logo.png" alt="Athlete's Academy Logo" className="logo" />
    <span>Athlete's Academy</span>
  </div>
  <nav className="navbar">
    <a href="#home">Home</a>
    <a href="#category">Category</a>
    <a href="#blogs">Blogs</a>
    <a href="#wallet">Wallet</a>
    <a href="#search" className="search-icon">&#128269;</a>
  </nav>
</header>

      <div className="breadcrumb">
        <span>Wallet &gt; Coaching for Tennis</span>
      </div>

      <div className="main-content">
        <div className="player-info">
          <img src={playerImage} alt="Anika John" className="player-image" />
          <div className="player-details">
            <h3>Anika John</h3>
            <p>Tennis player</p>
            <p>Languages: English, Hindi</p>
            <p>Good team player for tennis and football</p>
          </div>
        </div>

        <div className="transaction-info">
  <h2>Transaction details</h2>
  <div className="transaction-details">
    <p>Amount: 1500</p>
    <p>Transaction ID: IOBA0123333</p>
    <p>Date: 07.02.2024</p>
  </div>

  <h2>Payment details</h2>
  <p>Choose one of the payment methods below:</p>
  <div className="payment-options">
    <button className="payment-btn google-pay">G Pay</button>
    <button className="payment-btn apple-pay">Apple Pay</button>
    <button className="payment-btn paypal">PayPal</button>
  </div>

  <div className="card-details">
    <label>Cardholder name</label>
    <input type="text" value="Anika John" readOnly />

    <label>Card number</label>
    <input type="text" value="9242 4312 1579 3476" readOnly />
  </div>
</div>

        </div>
      </div>
    
  );
};

export default PaymentPage;
