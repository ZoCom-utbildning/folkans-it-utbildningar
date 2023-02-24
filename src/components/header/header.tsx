import { MouseEventHandler, useState } from "react";
import "./header.scss";
import Hamburger from "../../components/hamburger/hamburger";
import anime from "animejs/lib/anime.es.js";
import { useNavigate } from 'react-router-dom';

type Props = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  navClass: string;
  setNavClass: (navClass: string) => void;
};
const Header = ({ setNavClass, navClass, setNavOpen, navOpen }: Props) => {
  const [headerBackground, setHeaderBackground] = useState<string>("header");
  const navigate = useNavigate();
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
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (window.scrollY > 5) {
      setHeaderBackground("header background");
    } else {
      setHeaderBackground("header");
    }
  }

  const noReload = (e: any) => {
    e.preventDefault();
    navigate('fragor/onboarding');
    animateOverlay();
    setNavOpen(false);
    setNavClass("nav-icon");
  }

  return (
    <header className={headerBackground}>
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
            <a href="/">HEM</a>
          </li>
          <li>
            <a href="/personer">VÅRA STUDERANDE</a>
          </li>
          <li>
            <a onClick={noReload} href="/fragor/onboarding">TILL TESTET</a>
          </li>
          <li>
            <a href="/utbildningar">VÅRA UTBILDNINGAR</a>
          </li>
          <li>
            <a href="/om">OM OSS</a>
          </li>
        </ul>
      </nav>
      <div className="overlay">
        <nav>
          <ul>
            <li>
              <a href="/">HEM</a>
            </li>
            <li>
              <a href="/personer">VÅRA STUDERANDE</a>
            </li>
            <li>
              <a onClick={noReload} href="/fragor/onboarding">TILL TESTET</a>
            </li>
            <li>
              <a href="/utbildningar">VÅRA UTBILDNINGAR</a>
            </li>
            <li>
              <a href="/om">OM OSS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
