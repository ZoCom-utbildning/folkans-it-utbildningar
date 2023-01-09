import React from "react";
import "./header.scss";
import Hamburger from "../../components/hamburger/hamburger";

type Props = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  navClass: string;
  setNavClass: (navClass: string) => void;
};
const Header = ({ setNavClass, navClass, setNavOpen, navOpen }: Props) => {
  return (
    <header className="header">
      {navOpen ? (
        <div className="overlay">
          <nav>
            <ul>
              <li>
                <a href="#">HEM</a>
              </li>
              <li>
                <a href="#">STUDERANDE</a>
              </li>
              <li>
                <a href="#">TILL TESTET</a>
              </li>
              <li>
                <a href="#">OM OSS</a>
              </li>
              <li>
                <a href="#">KONTAKT</a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
};
export default Header;
