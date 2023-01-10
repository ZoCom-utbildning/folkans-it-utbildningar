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
      <nav>
        <ul>
          <li>
            <a href="/">HEM</a>
          </li>
          <li>
            <a href="/personer">STUDERANDE</a>
          </li>
          <li>
            <a href="/fragor">TILL TESTET</a>
          </li>

          <li>
            <a href="/om">OM OSS</a>
          </li>
        </ul>
      </nav>
      {navOpen ? (
        <div className="overlay">
          <nav>
            <ul>
              <li>
                <a href="/">HEM</a>
              </li>
              <li>
                <a href="/personer">STUDERANDE</a>
              </li>
              <li>
                <a href="/fragor">TILL TESTET</a>
              </li>
              <li>
                <a href="/om">OM OSS</a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
};
export default Header;
