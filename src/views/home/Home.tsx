import "./home.scss";
import Typewriter from "typewriter-effect";
import arrowDown from "../../assets/icons/arrowDown.svg";
import vscodecomputer from "../../assets/photos/vscodecomputer.webp";
import Loading from "../../components/loading/Loading";
import FormComponent from "../../components/formcomponent/formComponent";
import TestButton from "../../components/testbutton/testButton";
import anime from "animejs/lib/anime.es.js";
import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";

type Props = {
  activePersona: number;
  setActivePersona: (activePersona: number) => void;
};
function Home({ activePersona, setActivePersona }: Props) {
  const [isMobile, setIsMobile] = useState<boolean>();
  function checkMediaQuery() {
    // Check if the media query is true
    if (window.innerWidth > 768) {
      // Then log the following message to the console

      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  window.addEventListener("resize", checkMediaQuery);
  useEffect(() => {
    checkMediaQuery();
  }, []);

  const changePersona = (e: any) => {
    if (e.target.id === "btn1") {
      setActivePersona(0);
    } else if (e.target.id === "btn2") {
      setActivePersona(1);
    } else if (e.target.id === "btn3") {
      setActivePersona(2);
    } else if (e.target.id === "btn4") {
      setActivePersona(3);
    } else if (e.target.id === "btn5") {
      setActivePersona(4);
    }
  };
  // swiping animation between personas

  const buttonElements = (
    <ul className="galleryButtons">
      <input
        type="radio"
        name="radio-btn"
        className="gallery-btn"
        id="btn1"
        checked={activePersona === 0}
        onChange={(e) => {
          changePersona(e);
        }}
      />
      <input
        type="radio"
        name="radio-btn"
        checked={activePersona === 1}
        className="gallery-btn"
        id="btn2"
        onChange={(e) => {
          changePersona(e);
        }}
      />
      <input
        type="radio"
        name="radio-btn"
        checked={activePersona === 2}
        className="gallery-btn"
        id="btn3"
        onChange={(e) => {
          changePersona(e);
        }}
      />
      <input
        type="radio"
        name="radio-btn"
        className="gallery-btn"
        checked={activePersona === 3}
        id="btn4"
        onChange={(e) => {
          changePersona(e);
        }}
      />
      <input
        type="radio"
        name="radio-btn"
        className="gallery-btn"
        checked={activePersona === 4}
        onChange={(e) => {
          changePersona(e);
        }}
        id="btn5"
      />
    </ul>
  );

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipedLeft: () => swipeLeft(),
    onSwipedRight: () => swipeRight(),
    trackMouse: true,
  });

  //if window width is smaller than 820px
  const swipeRight = () => {
    if (isMobile) {
      anime({
        targets: ".card_content",
        keyframes: [
          { translateX: "200%", duration: 250 },
          { translateX: "0", duration: 250 },
        ],
        duration: 500,
        easing: "easeInOutQuad",
      });
      if (activePersona === 0) {
        setActivePersona(4);
      } else {
        setActivePersona(activePersona - 1);
      }
    }
  };
  const swipeLeft = () => {
    if (isMobile) {
      anime({
        targets: ".card_content",

        keyframes: [
          { translateX: "-200%", duration: 250 },
          { translateX: "0", duration: 250 },
        ],
        duration: 500,
        easing: "easeInOutQuad",
      });

      if (activePersona === 4) {
        setActivePersona(0);
      } else {
        setActivePersona(activePersona + 1);
      }
    }
  };

  return (
    <div className="home-wrapper">
      <Loading />
      <section className="hero-content">
        <h1 className="title-h1">
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("Är du nyfiken på att jobba inom IT-branschen?")
                .start();
            }}
          />
        </h1>
        <TestButton buttonText={"TILL TESTET"} />
        <section className="arrow-container">
          <p>Mer info om testet</p>
          <img src={arrowDown} alt="" className="arrowDown" />
        </section>
      </section>
      <main className="home-main">
        <div className="home-main__content">
          <section className="text-content">
            <h2 className="title-h2">Vad är det som testas?</h2>
            <p className="home-main__content__text">
              Vi har haft en dialog med våra studerande och utbildningsledare på
              våra utbildningar samt företrädare för IT-branschen. Resultatet av
              denna dialog har mynnat ut i detta test. Syftet med testet är att
              fungera som en slags digital studie- och yrkesvägledare för att du
              ska kunna känna dig trygg med ditt val av utbildning. Vi förstår
              att innehållet i våra utbildningar kan vara svårt att bedöma utan
              att vara verksam inom IT-branschen, och vill därför erbjuda dig
              detta test som en mer lättsmält väg för dig till att veta vad som
              är rätt för just dig.
            </p>
          </section>
          <section className="img-with-text">
            <img src={vscodecomputer} alt="" />
          </section>
        </div>
      </main>
      <section className="home-personas-wrapper">
        <div className="form_wrapper" {...handlers}>
          <FormComponent activePersona={activePersona} />
          {buttonElements}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
