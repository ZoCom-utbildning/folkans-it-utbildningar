import "./hamburger.scss";

type Props = {
  navOpen: boolean;
  setNavOpen: (navOpen: boolean) => void;
  navClass: string;
  setNavClass: (navClass: string) => void;
  animateOverlay: () => void;
  setMobileHeader: (mobileHeader: string) => void;
};

const Hamburger = ({
  setNavClass,
  navClass,
  setNavOpen,
  navOpen,
  animateOverlay,
  setMobileHeader,
}: Props) => {
  const toggleNav = () => {
    // om navOpen är false när funktionen körs
    if (!navOpen) {
      // sätter burgaren till ett kryss
      setNavClass("nav-icon open");
      // nav nu öppen, sätter navOpen till true
      setNavOpen(true);
      setMobileHeader("");
    } else {
      // annars betyder det att användaren vill stänga menyn,
      // tar bort klasser för öppen och ändrar tillbaka till hamburgaren
      animateOverlay();
      setNavOpen(false);
      setNavClass("nav-icon");
      setMobileHeader("mobile-header");
    }
  };

  return (
    <div className="burger-icon">
      <div
        className={navClass}
        onClick={() => {
          toggleNav();
          animateOverlay();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
