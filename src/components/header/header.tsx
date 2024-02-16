import { MouseEventHandler, useEffect, useState } from 'react';
import './header.scss';
import Hamburger from '../../components/hamburger/hamburger';
import anime from 'animejs/lib/anime.es.js';
import { useNavigate } from 'react-router-dom';

type Props = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  navClass: string;
  setNavClass: (navClass: string) => void;
};
const Header = ({ setNavClass, navClass, setNavOpen, navOpen }: Props) => {
  const [headerBackground, setHeaderBackground] = useState<string>('header');
  const [activeLink, setActiveLink] = useState<string>('/');
  const navigate = useNavigate();
  function animateOverlay() {
    if (!navOpen) {
      anime({
        targets: '.header .overlay',
        translateX: [
          { value: -1000, duration: 0 },
          { value: 0, duration: 500 },
        ],
        easing: 'easeInOutSine',
      });
      anime({
        targets: '.header .overlay nav ul li',
        translateX: [
          { value: -1000, duration: 0 },
          { value: 100, duration: 500 },
          { value: 0, duration: 500 },
        ],
      });
    } else {
      anime({
        targets: 'header .overlay',
        translateX: [
          { value: 0, duration: 0 },
          { value: -1000, duration: 500 },
        ],
        easing: 'easeInOutSine',
      });
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (navOpen) {
      setHeaderBackground('header background');
    } else if (window.scrollY > 100) {
      setHeaderBackground('header background');
    } else {
      setHeaderBackground('header');
    }
  }

  useEffect(() => {
    if (navOpen) setHeaderBackground('header background');
    else setHeaderBackground('header');
  }, [navOpen]);

    
  const noReload = (e: any, link: string) => {
      e.preventDefault();
      setActiveLink(link);
      navigate(link);
      animateOverlay();
      setNavOpen(false);
      setNavClass('nav-icon');

  };

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
            <a
              className={activeLink === '/' ? 'active' : ''}
              onClick={(e) => noReload(e, '/')}
              href='/'
            >
              HEM
            </a>
          </li>
          <li>
            <a
              className={activeLink === '/personer' ? 'active' : ''}
              onClick={(e) => noReload(e, '/personer')}
              href='/personer'
            >
              VÅRA STUDERANDE
            </a>
          </li>
          <li>
            <a
              className={activeLink === '/fragor/onboarding' ? 'active' : ''}
              onClick={(e) => noReload(e, '/fragor/onboarding')}
              href='/fragor/onboarding'
            >
              TILL TESTET
            </a>
          </li>
          <li>
            <a
              className={activeLink === '/utbildningar' ? 'active' : ''}
              onClick={(e) => noReload(e, '/utbildningar')}
              href='/utbildningar'
            >
              VÅRA UTBILDNINGAR
            </a>
          </li>
          <li>
            <a
              className={activeLink === '/om' ? 'active' : ''}
              onClick={(e) => noReload(e, '/om')}
              href='/om'
            >
              OM OSS
            </a>
          </li>
        </ul>
      </nav>
      <div className='overlay'>
        <nav>
          <ul>
            <li>
              <a
                className={activeLink === '/' ? 'active' : ''}
                onClick={(e) => noReload(e, '/')}
                href='/'
              >
                HEM
              </a>
            </li>
            <li>
              <a
                className={activeLink === '/personer' ? 'active' : ''}
                onClick={(e) => noReload(e, '/personer')}
                href='/personer'
              >
                VÅRA STUDERANDE
              </a>
            </li>
            <li>
              <a
                className={activeLink === '/fragor/onboarding' ? 'active' : ''}
                onClick={(e) => noReload(e, '/fragor/onboarding')}
                href='/fragor/onboarding'
              >
                TILL TESTET
              </a>
            </li>
            <li>
              <a
                className={activeLink === '/utbildningar' ? 'active' : ''}
                onClick={(e) => noReload(e, '/utbildningar')}
                href='/utbildningar'
              >
                VÅRA UTBILDNINGAR
              </a>
            </li>
            <li>
              <a
                className={activeLink === '/om' ? 'active' : ''}
                onClick={(e) => noReload(e, '/om')}
                href='/om'
              >
                OM OSS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
