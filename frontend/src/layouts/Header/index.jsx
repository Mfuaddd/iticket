import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import ITicketLogoSvg from "../../assets/icons/ITicketLogoSvg";
import NavigationDotsSvg from "../../assets/icons/NavigationDotsSvg";
import HeartSvg from "../../assets/icons/HeartSvg";
import ProfileSvg from "../../assets/icons/ProfileSvg";
import CartSvg from "../../assets/icons/CartSvg";
import MagnifyingGlassSvg from "../../assets/icons/MagnifyingGlassSvg";

function Header() {
  const [isHome, setIsHome] = useState(null);
  const [apiData, setApiData] = useState([]);
  const location = useLocation();

  const getApiData = async () => {
    const res = await fetch(`http://localhost:3000/`);
    const data = await res.json();
    setApiData(data);
  };

  useEffect(() => {
    getApiData();
    setIsHome(location.pathname === "/");
  }, [location]);

  return (
    <div className={`header${isHome ? " header-home" : ""}`}>
      <div className="container-1400 header__wrapper">
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
          <li>
            <NavLink to="/events/kids">Kids</NavLink>
          </li>
          <li>
            <NavLink to="/events/hayalkahvesi">Hayal Kahvesi</NavLink>
          </li>
          <li>
            <NavLink to="/events/sport">Sport</NavLink>
          </li>
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
