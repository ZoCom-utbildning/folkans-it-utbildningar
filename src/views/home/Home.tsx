import "./home.scss";
import Typewriter from "typewriter-effect";
import arrowDown from "../../assets/icons/arrowDown.svg";
import vscodecomputer from "../../assets/photos/vscodecomputer.jpg";
import Loading from "../../components/loading/Loading";
import FormComponent from "../../components/formcomponent/formComponent";
import TestButton from "../../components/testbutton/testButton";
import anime from "animejs/lib/anime.es.js";
import { useSwipeable } from "react-swipeable";

type Props = {
  activePersona: number;
  setActivePersona: (activePersona: number) => void;
};
function Home({ activePersona, setActivePersona }: Props) {
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
  const swipeRight = () => {
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
  };
  const swipeLeft = () => {
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
            <h2 className="title-h2">Vad är det som gör dig nyfiken?</h2>
            <p className="home-main__content__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            </p>
            <p>
              Ugh ennui tacos everyday carry skateboard synth af sartorial
              unicorn try-hard godard you probably haven't heard of them art
              party. Trust fund live-edge banh mi, listicle seitan bicycle
              rights coloring book try-hard austin meh tumeric. Subway tile
              health goth portland shoreditch. Subway tile VHS messenger bag
              pop-up poke single-origin coffee.
            </p>
            <p>
              Ugh ennui tacos everyday carry skateboard synth af sartorial
              unicorn try-hard godard you probably haven't heard of them art
              party. Trust fund live-edge banh mi, listicle seitan bicycle
              rights coloring book try-hard austin meh tumeric. Subway tile
              health goth portland shoreditch. Subway tile VHS messenger bag
              pop-up poke single-origin coffee.
            </p>
            <p>
              Ugh ennui tacos everyday carry skateboard synth af sartorial
              unicorn try-hard godard you probably haven't heard of them art
              party. Trust fund live-edge banh mi, listicle seitan bicycle
              rights coloring book try-hard austin meh tumeric. Subway tile
              health goth portland shoreditch. Subway tile VHS messenger bag
              pop-up poke single-origin coffee.
            </p>
            <p>
              Ugh ennui tacos everyday carry skateboard synth af sartorial
              unicorn try-hard godard you probably haven't heard of them art
              party. Trust fund live-edge banh mi, listicle seitan bicycle
              rights coloring book try-hard austin meh tumeric. Subway tile
              health goth portland shoreditch. Subway tile VHS messenger bag
              pop-up poke single-origin coffee.
            </p>
          </section>
          <section className="img-with-text">
            <img src={vscodecomputer} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            </p>
          </section>
        </div>
      </main>
      <section className="home-personas-wrapper">
        <div className="form_wrapper" {...handlers}>
          <FormComponent activePersona={activePersona} />
        </div>
        {buttonElements}
      </section>
    </div>
  );
}

export default Home;
