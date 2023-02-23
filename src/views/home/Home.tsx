import "./home.scss";
import Typewriter from "typewriter-effect";
import arrowDown from "../../assets/icons/arrowDown.svg";
import vscodecomputer from "../../assets/photos/vscodecomputer.webp";
import Blob from "../../components/blob/Blob";
import FormComponent from "../../components/formcomponent/formComponent";
import TestButton from "../../components/testbutton/testButton";
import { Persona, Question } from "../../models/types";

import { useSwipeable } from "react-swipeable";

import Footer from "../../components/footer/Footer";

type Props = {
  activePersona: number;
  buttonElements: JSX.Element;
  data: Persona[];
  interviewData: JSX.Element[];
  handlers: ReturnType<typeof useSwipeable>;
  questions: Array<Question>;
  setActivePersona: (activePersona: number) => void;
};
function Home({
  activePersona,
  buttonElements,
  handlers,
  interviewData,
  questions,
  setActivePersona,
}: Props) {
  return (
    <div className="home-wrapper">
      <section className="hero-content">
        <h1 className="title-h1">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .changeDeleteSpeed(50)
                .typeString("Så du är nyfiken på att jobba inom IT-branschen?")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Ta testet för att se vad som passar dig bäst!")

                .start();
            }}
          />
        </h1>
        <TestButton buttonText={"TILL TESTET"} />
        <section
          className="arrow-container"
          onClick={() => window.scrollTo({ top: 780, behavior: "smooth" })}
        >
          <p>Mer info om testet</p>
          <img src={arrowDown} alt="" className="arrowDown" />
        </section>
        <Blob xPos={4} yPos={2} radius={4} opacity={0.3} />
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
            <TestButton buttonText={"Ta Testet"} />
          </section>
          <section className="img-with-text">
            <img src={vscodecomputer} alt="" />
          </section>
        </div>
      </main>
      <section className="home-personas-wrapper">
        <div {...handlers}>
          <FormComponent
            setActivePersona={setActivePersona}
            questions={questions}
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
