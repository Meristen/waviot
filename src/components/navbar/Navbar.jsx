import "./navbar.scss";
import React, { useState } from "react";
import logo1 from "../../assets/pribor.jpg";
import logo2 from "../../assets/pribor1 (2).png";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="navbar">
      <div className="wrapper">
        <div className="navbar__container ">
          <Link
            to={`/`}
            className="navbar__logo"
            onClick={() => setShowNav(false)}
          >
            <img src={logo2} alt="logo" />
          </Link>
          <div className="navbar__links">
            <ul className={`${showNav ? "show" : ""}`}>
              <Link to={`/`} onClick={() => setShowNav(false)}>
                Компания
              </Link>
              <Link to={`/technology`} onClick={() => setShowNav(false)}>
                Технологии
              </Link>
              <Link to={`/solution`} onClick={() => setShowNav(false)}>
                Решения
              </Link>
              <Link to={`/equipment`} onClick={() => setShowNav(false)}>
                Оборудование
              </Link>
              <Link to={`contact`} onClick={() => setShowNav(false)}>
                Контакты
              </Link>
            </ul>
            <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
              {showNav ? <IoMdClose /> : <IoMenu />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
