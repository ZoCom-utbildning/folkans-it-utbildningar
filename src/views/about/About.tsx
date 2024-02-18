import "./about.scss";

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
        </main>
      </div>
    </>
  );
}

export default About;
