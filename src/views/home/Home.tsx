import "./home.scss";
import Typewriter from "typewriter-effect";
import arrowDown from "../../assets/icons/arrowDown.svg";
import vscodecomputer from "../../assets/photos/vscodecomputer.jpg";
import Loading from "../../components/loading/Loading";
import FormComponent from "../../components/formcomponent/formComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestButton from "../../components/testbutton/testButton";

type Props = {
  activePersona: number;
  setActivePersona: (activePersona: number) => void;
};
function Home({ activePersona, setActivePersona }: Props) {
  const navigate = useNavigate();
  function navToTest() {
    navigate("/fragor");
  }

  const [galleryBtnClass, setGalleryBtnClass] = useState<string>("gallery-btn");

  // recreate these useStates as 6 objects in an array

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
            <h4 className="title-h2">Vad är det som gör dig nyfiken?</h4>
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
        <div className="form_wrapper">
          <FormComponent activePersona={activePersona} />
        </div>

        <ul className="galleryButtons">
          <button
            className={galleryBtnClass}
            id="btn1"
            onClick={changePersona}
          ></button>
          <button
            className={galleryBtnClass}
            id="btn2"
            onClick={changePersona}
          ></button>
          <button
            className={galleryBtnClass}
            id="btn3"
            onClick={changePersona}
          ></button>
          <button
            className={galleryBtnClass}
            id="btn4"
            onClick={changePersona}
          ></button>
          <button
            className={galleryBtnClass}
            id="btn5"
            onClick={changePersona}
          ></button>
        </ul>
      </section>
    </div>
  );
}

export default Home;
