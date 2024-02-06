import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import ITicketLogoSvg from "../../assets/icons/ITicketLogoSvg";
import HeartSvg from "../../assets/icons/HeartSvg";
import MagnifyingGlassSvg from "../../assets/icons/MagnifyingGlassSvg";
import CartSvg from "../../assets/icons/CartSvg";
import ProfileSvg from "../../assets/icons/ProfileSvg";
import NavigationDotsSvg from "../../assets/icons/NavigationDotsSvg";

function Header() {
  const [isHome, setIsHome] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  return (
    <div className={`header${isHome ? "" : " header-color"}`}>
      <div className="header__container header__wrapper">
        <div className="header__logo">
          <Link to="/">
            <ITicketLogoSvg />
          </Link>
        </div>
        <ul className="header__nav">
          <li>
            <NavLink to="/events">All events</NavLink>
          </li>
          <li>
            <NavLink to="/events/concert">Concert</NavLink>
          </li>
          <li>
            <NavLink to="/events/theatre">Theatre</NavLink>
          </li>
          <li>Kids</li>
          <li>Hayal Kahvesi</li>
          <li>Sport</li>
          <li className="header__icons">
            <NavigationDotsSvg />
          </li>
        </ul>
        <div className="header__control">
          <div className="header__heart header__icons">
            <HeartSvg />
          </div>
          <div className="header__search header__icons">
            <MagnifyingGlassSvg />
          </div>
          <div className="header__cart header__icons">
            <CartSvg />
          </div>
          <div className="header__profile header__icons">
            <ProfileSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
