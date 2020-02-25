import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";

const Navigation = props => {
  const [menuVisibility, setMenuVisibility] = React.useState(false);
  const [subMenuVisibility, setSubMenuVisibility] = React.useState(false);
  const toggleMenu = () => {
    setMenuVisibility(!menuVisibility);
  };
  const toggleSubMenu = () => {
    setSubMenuVisibility(!subMenuVisibility);
  };
  const hiddenMenuStyle = "hide-menu";
  const visibleMenuStyle = "show-menu";

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-brand">
          <img src={logo} alt="company logo" />
        </div>
        <div onClick={() => toggleMenu()} className="menu-icon">
          <svg
            className="hamburger-menu"
            height="32px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </div>
        <div
          className={`nav-menu ${
            menuVisibility ? visibleMenuStyle : hiddenMenuStyle
          }`}
        >
          <ul>
            <li>About</li>
            <li>Specials</li>
            <li
              onMouseOver={() => toggleSubMenu()}
              onMouseOut={() => toggleSubMenu()}
              onClick={() => toggleSubMenu()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#FFF"
                  fillRule="nonzero"
                  d="M8 8c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.65 0-8 1.35-8 4v2h16v-2c0-2.65-5.35-4-8-4z"
                />
              </svg>
              My Account
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="8"
                viewBox="0 0 16 8"
              >
                <path fill="#FFF" fillRule="nonzero" d="M0 0l8 8 8-8z" />
              </svg>
              <div
                className={`submenu ${
                  subMenuVisibility ? visibleMenuStyle : hiddenMenuStyle
                }`}
              >
                <ul>
                  <li>My published jokes</li>
                  <li>My saved jokes</li>
                  <li>Account Information</li>
                  <li>Publish new joke</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
