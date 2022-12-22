import "./home.scss";
import Hamburger from "../../components/hamburger/hamburger";
function Home() {
  return (
    <div className="wrapper">
      <header className="wrapper-header">
        <Hamburger />
        <h1 className="title-h1">
          Så du är nyfiken på att jobba som utvecklare?
        </h1>
      </header>
      <main className="home-main">
        <div className="home-main__content">
          <h2 className="title-h2">Vad är det som gör dig nyfiken?</h2>
          <p className="home-main__content__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quidem quas nesciunt. Quisquam, quae. Quisquam
            voluptas, quod, quia, voluptates quae voluptatibus quibusdam
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
