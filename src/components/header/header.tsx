import React from "react";
import "./header.scss";
import Hamburger from "../../components/hamburger/hamburger";
import anime from "animejs/lib/anime.es.js";

type Props = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  navClass: string;
  setNavClass: (navClass: string) => void;
};
const Header = ({ setNavClass, navClass, setNavOpen, navOpen }: Props) => {
  function animateOverlay() {
    if (!navOpen) {
      anime({
        targets: "header .overlay",
        translateX: [
          { value: -1000, duration: 0 },
          { value: 0, duration: 500 },
        ],
        easing: "easeInOutSine",
      });
      anime({
        targets: "header .overlay nav ul li",
        translateX: [
          { value: -1000, duration: 0 },
          { value: 100, duration: 500 },
          { value: 0, duration: 500 },
        ],
      });
    } else {
      anime({
        targets: "header .overlay",
        translateX: [
          { value: 0, duration: 0 },
          { value: -1000, duration: 500 },
        ],
        easing: "easeInOutSine",
      });
    }
  }
  return (
    <header className="header">
      <Hamburger
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        navClass={navClass}
        setNavClass={setNavClass}
        animateOverlay={animateOverlay}
      />
      <nav>
        <ul>
          <li>
            <a href="HEM">HEM</a>
          </li>
          <li>
            <a href="HEM">STUDERANDE</a>
          </li>
          <li>
            <a href="HEM">TILL TESTET</a>
          </li>

          <li>
            <a href="HEM">OM OSS</a>
          </li>
          <li>
            <a href="HEM">KONTAKTA OSS</a>
          </li>
        </ul>
      </nav>
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
    </header>
  );
};
export default Header;
