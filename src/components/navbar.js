import React, { useState } from "react";
import { ReactComponent as Menubtn } from "../Assets/bars-solid.svg";
import { ReactComponent as ClsMenubtn } from "../Assets/times-solid.svg";
import { ReactComponent as Saved } from "../Assets/icons/ribbon.svg";
import { ReactComponent as User } from "../Assets/icons/user.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [Menuvis, setMenuvis] = useState(false);
  const visclass = () => {
    if (Menuvis) {
      return "nav__wrapper active";
    } else {
      return "nav__wrapper ";
    }
  };
  return (
    <header className="site-header" style={{ marginBottom: "50px" }}>
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <a href="#" className="brand">
            Logo
          </a>
          <div className="search">
            <button className="search__toggle" aria-label="Open search">
              Search
            </button>
            <form className="search__form">
              <label className="sr-only" htmlFor="search">
                Search
              </label>
              <input type="search" id="search" placeholder="Axtar" />
            </form>
          </div>
        </div>
        <div className="site-header__end">
          <nav className="nav">
            <div
              onClick={() => {
                setMenuvis(!Menuvis);
              }}
            >
              {Menuvis ? (
                <ClsMenubtn
                  className="nav__toggle"
                  aria-expanded="false"
                  type="button"
                  aria-label="menu"
                />
              ) : (
                <Menubtn
                  className="nav__toggle"
                  aria-expanded="false"
                  type="button"
                  aria-label="menu"
                />
              )}
            </div>

            <ul className={visclass()}>
              <li className="nav__item active">
                <Link
                  onClick={() => {
                    setMenuvis(false);
                  }}
                  to="/"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    x={0}
                    y={0}
                    preserveAspectRatio="xMinYMin meet"
                    className="nav-icon"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22,9.45,12.85,3.26A1.52,1.52,0,0,0,12,3a1.49,1.49,0,0,0-.84.26L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h5V16h4v5h5a1,1,0,0,0,1-1V10.37l.94.63Z"
                      className="active-item"
                      style={{ fillOpacity: 1 }}
                    />
                    <path
                      d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z"
                      className="inactive-item"
                      style={{ fill: "currentColor" }}
                    />
                  </svg>
                  <span>Home</span>
                </Link>
              </li>

              <li className="nav__item active">
                <a href="#">
                  <Saved />
                  <span>Saved</span>
                </a>
              </li>
              <li className="nav__item active">
                <Link
                  to="profile"
                  onClick={() => {
                    setMenuvis(false);
                  }}
                >
                  <User />
                  <span>Profil</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
