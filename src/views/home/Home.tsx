import "./home.scss";
import Typewriter from "typewriter-effect";
import arrowDown from "../../assets/icons/arrowDown.svg";
import vscodecomputer from "../../assets/photos/vscodecomputer.jpg";
import Loading from "../../components/loading/Loading";
import Personas from "../../views/personas/Personas";
import FormComponent from "../../components/formcomponent/formComponent";
import TestButton from "../../components/testbutton/testButton";

function Home() {

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
        < TestButton buttonText={'TILL TESTET'}/>
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
          <FormComponent />
        </div>
        <div className="galleryButtons">
          <button className="galleryButton"></button>
          <button className="galleryButton"></button>
          <button className="galleryButton"></button>
          <button className="galleryButton"></button>
          <button className="galleryButton"></button>
        </div>
      </section>
    </div>
  );
}

export default Home;
