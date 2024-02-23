import React from "react";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import tiktok from "../../assets/images/tiktok.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import cards from "../../assets/images/cards.svg";

import ITicketLogoSvg from "../../assets/icons/ITicketLogoSvg";
import "./index.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container-1200 footer__wrapper">
        <div className="footer__top">
          <div className="footer__section footer__logo">
            <ITicketLogoSvg />
            <div className="footer__support">
              <div>Support service</div>
              <div className="footer__phone">+994 12 424 24 24</div>
            </div>
          </div>
          <div className="footer__section">
            <div className="footer__title">Information</div>
            <ul className="footer__list">
              <li>FAQ</li>
              <li>Support</li>
              <li>Terms & Conditions</li>
              <li>E-ticket</li>
              <li>Ticket refund or change</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer__section">
            <div className="footer__title">iTicket</div>
            <ul className="footer__list">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>Venues</li>
              <li>Point of Sales</li>
              <li>Karabakh Revival Foundation</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="footer__section footer__security">
            <div className="footer__title">Security</div>
            <p>
              All payments are protected by 3D Secure from Visa, Visa Electron,
              Maestro & MasterCard
            </p>
            <div className="footer__image">
              <img src={cards} alt="" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            ITICKET® is a registered trademark of «ITICKET» LLC.
          </div>
          <div className="footer__links">
            <div className="footer__icon">
              <img src={facebook} alt="" />
            </div>
            <div className="footer__icon">
              <img src={instagram} alt="" />
            </div>
            <div className="footer__icon">
              <img src={tiktok} alt="" />
            </div>
            <div className="footer__icon">
              <img src={twitter} alt="" />
            </div>
            <div className="footer__icon">
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
