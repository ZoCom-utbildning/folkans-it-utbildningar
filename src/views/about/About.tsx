import Footer from "../../components/footer/Footer";
import "./about.scss";

function About() {
  return (
    <>
      <div className="aboutView">
        <main>
          <h1>Folkuniversitetet hjärta ZoCom</h1>
          <p className="ingress">
            Folkuniversitet och ZoCom bedriver tillsammans it-utbildningar inom
            yrkeshögskola. Den här webbsidan har designats och byggts av oss
            studenter, som studerar dessa utbildningar.
          </p>
          <p>
            Denna sida är skapad under vår LIA period och för närmare kontakt så
            hittar ni oss här:
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default About;
