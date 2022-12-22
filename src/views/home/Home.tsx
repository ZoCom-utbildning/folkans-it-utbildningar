import "./home.scss";
import Hamburger from "../../components/hamburger/hamburger";
import Typewriter from "typewriter-effect";
import { useState } from "react";
function Home() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navClass, setNavClass] = useState<string>("nav-icon");
  return (
    <div className="wrapper">
      <header className="wrapper-header">
        <Hamburger
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          navClass={navClass}
          setNavClass={setNavClass}
        />
        <h1 className="title-h1">
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("Så du är nyfiken på att jobba som utvecklare?")
                .start();
            }}
          />
        </h1>
      </header>
      <main className="home-main">
        <div className="home-main__content">
          <h4 className="title-h2">Vad är det som gör dig nyfiken?</h4>
          <p className="home-main__content__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
          </p>
          <p>
            Ugh ennui tacos everyday carry skateboard synth af sartorial unicorn
            try-hard godard you probably haven't heard of them art party. Trust
            fund live-edge banh mi, listicle seitan bicycle rights coloring book
            try-hard austin meh tumeric. Subway tile health goth portland
            shoreditch. Subway tile VHS messenger bag pop-up poke single-origin
            coffee.
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
