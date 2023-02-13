import "./home.scss";
import Typewriter from "typewriter-effect";
import arrowDown from "../../assets/icons/arrowDown.svg";
import vscodecomputer from "../../assets/photos/vscodecomputer.webp";
import Loading from "../../components/loading/Loading";
import FormComponent from "../../components/formcomponent/formComponent";
import TestButton from "../../components/testbutton/testButton";

import { useSwipeable } from "react-swipeable";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";

type Props = {
  activePersona: number;
  buttonElements: JSX.Element;
  setIsMobile: (isMobile: boolean) => void;
  data: any;
  interviewData: any;
  handlers: ReturnType<typeof useSwipeable>;
};
function Home({
  activePersona,
  buttonElements,
  setIsMobile,
  handlers,
  interviewData,
}: Props) {
  function checkMediaQuery() {
    // Check if the media query is true
    if (window.innerWidth > 820) {
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

  //if window width is smaller than 820px

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
        <section
          className="arrow-container"
          onClick={() => window.scrollTo({ top: 850, behavior: "smooth" })}
        >
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
        <div {...handlers}>
          <FormComponent
            interviewData={interviewData}
            buttonElements={buttonElements}
            activePersona={activePersona}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
