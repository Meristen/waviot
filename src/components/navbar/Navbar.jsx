import "./navbar.scss";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="navbar">
      <div className="wrapper">
        <div className="navbar__container ">
          <Link className="navbar__logo" onClick={() => setShowNav(false)}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="navbar__links">
            <ul className={`${showNav ? "show" : ""}`}>
              <Link to={`/company`} onClick={() => setShowNav(false)}>
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
              <Link to={`/support`} onClick={() => setShowNav(false)}>
                Поддержка
              </Link>
              <Link to={`contact`} onClick={() => setShowNav(false)}>
                Контакты
              </Link>
            </ul>

            {/* <div className="navbar__contact">
              <div className="navbar__message">
                <IoMail />
                <span>
                  <a href="mailto:sales@m2m.kg">sales@m2m.kg </a>
                </span>
              </div>
              <div className="navbar__phone">
                <FaPhoneAlt />
                <span>+996 704 60 10 05</span>
              </div>
            </div> */}

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
