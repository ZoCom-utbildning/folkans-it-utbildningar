import "./about.scss";
import ZoComLogo from "../../assets/logos/zocom-white.png"
import FolkUniversitetetLogo from "../../assets/logos/fulogogbg.png"

function About() {
  return (
    <>
      <div className="aboutView">
        <main>
          <h1 className="about-title">Folkuniversitetet hjärta ZoCom</h1>
          <p className="about-text">
            Folkuniversitetet och ZoCom bedriver tillsammans IT-utbildningar inom yrkeshögskola. Folkuniversitetet är huvudman och ZoCom är leverantör av utbildare. Tillsammans har vi skapat de utbildningar du läser om på denna webb - från design av utbildningen till kursplaner, pedagogiskt upplägg och praktiskt genomförande.
            </p>
            <p className="about-text">
            Något som skänker oss extra stolthet är att den här webbsidan uteslutande har designats, byggts och uppdaterats av studerande från flera av våra utbildningar i samband med LIA hos ZoCom. Vi hoppas att du haft nytta av all information du hittat här och att du bestämt dig för att satsa på en karriär inom IT!
            </p>
           <p className="about-text">
            Utöver alla duktiga utvecklare som varit inblandade, har även arbetet stöttats upp av blivande IT-projektledare från Campus Varberg.
          </p>
          <p className="about-text">Nyfiken på att läsa mer om ZoCom och Folkuniversitetet? <br /> Ni hittar oss här:</p>
          <section className="about-logo-container">
            <a 
            className="about-logo-container__link"
            href="https://www.zocom.com/utbildning" 
            target="_blank"
            >
              <img className="link-logo" src={ZoComLogo} alt="Logotyp ZoCom AB" />
            </a>
            <a
            className="about-logo-container__link"         
            href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/"
            target="_blank"
            >
              <img className="link-logo"  src={FolkUniversitetetLogo} alt="Logotyp Folkuniversitetet" />
            </a>
          </section>
        </main>
      </div>
    </>
  );
}

export default About;
