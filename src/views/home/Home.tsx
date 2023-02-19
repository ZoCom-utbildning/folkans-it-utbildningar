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
};
function Home({
  activePersona,
  buttonElements,
  handlers,
  interviewData,
  questions,
}: Props) {
  //if window width is smaller than 820px

  // TODO: Decide size for blob, remove border on button?
  
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
              .typeString(
                "Ta testet för att se vad som passar dig bäst!"
                )
                
                .start();
              }}
          />
        </h1>
        {/* <div className="buttonWrapper"> */}
          <TestButton buttonText={"TILL TESTET"} />
        {/* </div> */}
        <section
          className="arrow-container"
          onClick={() => window.scrollTo({ top: 780, behavior: "smooth" })}
        >
          <p>Mer info om testet</p>
          <img src={arrowDown} alt="" className="arrowDown" />
        </section>
        <Blob xPos={2} yPos={1.5} radius={4} opacity={0.7} /> 
      </section>
      <main className="home-main">
        <div className="home-main__content">
          <section className="text-content">
            <h2 className="title-h2">Vad är det som testas?</h2>
            <p className="home-main__content__text">
              Vi har haft en dialog med våra studenter och utbildningsledare på
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
