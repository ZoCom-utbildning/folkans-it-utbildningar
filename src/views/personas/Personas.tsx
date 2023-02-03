import "./personas.scss";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
const Personas: React.FC = () => {
  const [contClass, setContClass] = useState("cont s--inactive");
  const [activeEl, setActiveEl] = useState<HTMLDivElement | null>(null);
  const [preview, setPreview] = useState(true);
  const [data, setData] = useState<Array<any>>([]);
  const NUM_OF_ELEMENTS = 5;
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "Personas"));
      const tempArr: any[] = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
      });

      setData(tempArr);
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setContClass("cont s--active");
    }, 200);
  }, []);

  const handleElClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (contClass.includes("s__el-active")) return;
    const el = event.currentTarget;
    setContClass("cont s__el-active");
    toggleClass(el, "s--active");
    setActiveEl(el);
    console.log(data);
    setTimeout(() => {
      setPreview(false);
    }, 1350);
  };

  const toggleClass = (el: HTMLDivElement, className: string) => {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  };

  const handleCloseBtnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    toggleClass(activeEl!, "s--active");
    setContClass("cont s__inactive");
    setActiveEl(null);

    setPreview(true);
  };

  return (
    <div className="personasView-container">
      <section className="personasView">
        <h1 className="title-h1">Möt några av våra studerande</h1>
        <h2 className="title-h1">
          Klicka på något av korten för att läsa mer om en student
        </h2>
        <div className={contClass}>
          <div className="cont__inner">
            {Array(NUM_OF_ELEMENTS)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="el" onClick={handleElClick}>
                  <div className="el__overflow">
                    <div className="el__inner">
                      <div className="el__bg"></div>
                      {preview ? (
                        <section className="el__preview-cont">
                          <h2 className="el__heading">Adam, 20</h2>
                        </section>
                      ) : (
                        <div className="el__content">
                          <div className="personas-main">
                            <article className="personas-card">
                              <section className="personas-card-header">
                                <h2 className="personas-card-title">
                                  Adam, 20
                                </h2>
                              </section>
                              <main className="personas-card-text-container">
                                <p className="personas-card-ingress">
                                  Adam kommer nästan direkt från gymnasiet, och
                                  fick upp ögonen för programmering på grund av
                                  sitt stora gamingintresse. Adam lägger en stor
                                  del av sin fritid på träning och ser
                                  kombinationen mellan att träna kroppen på
                                  gymmet och knoppen med koden som en klockren
                                  kombination.
                                </p>
                                <span>
                                  Vad var det som fick dig att välja din
                                  utbildning?
                                </span>
                                <br></br>
                                <section className="card-text-container">
                                  <p className="personas-card-text">
                                    - Jag har alltid gillat att gamea, men har
                                    egentligen inte förrän på senare år funderat
                                    över vad det är som får spelen att funka.
                                    Men från det att jag började fundera kunde
                                    jag inte sluta tänka på det. Jag funderade
                                    på att gå på högskolan, men dels såg det ut
                                    att vara ganska teoretiskt och dels var
                                    utbildningarna mycket längre. Min utbildning
                                    verkade dessutom ha en tydligare riktning
                                    mot ett faktiskt yrke.
                                  </p>
                                  <span>
                                    Vad har du för bakgrund innan denna
                                    utbildning?
                                  </span>
                                  <br></br>
                                  <p className="personas-card-text">
                                    - Inte så mycket mer än gymnasiet, faktisk.
                                    Jag tog ett halvt sabbatsår efter studenten
                                    och testade lite olika jobb, men det kändes
                                    aldrig som mer än bara som ett sätt att
                                    tjäna pengar. Jag kanske är naiv, men jag
                                    känner att livet är för kort för att ha ett
                                    tråkigt jobb. Nu stortrivs jag!
                                  </p>
                                  <span>
                                    Vad är det bästa med din utbildning?
                                  </span>
                                  <br></br>
                                  <p className="personas-card-text">
                                    - Hur gjorde du för att bli behörig? Till
                                    skillnad från flera av mina klasskamrater
                                    var jag faktiskt behörig från början,
                                    eftersom jag hade läst Programmering 1 som
                                    individuellt val på gymnasiet.
                                  </p>
                                  <span>
                                    Har du några visdomsord till andra som
                                    funderar på att söka eller som redan sökt?
                                  </span>
                                  <br></br>
                                  <p className="personas-card-text">
                                    - Se din utbildning som en passion och som
                                    ett fritidsintresse. Med kod är det som med
                                    så mycket annat, det krävs att man puttar in
                                    lite tid för att det ska funka. Jag älskar
                                    att koda och det har nu blivit ett av mina
                                    största fritidsintressen tillsammans med
                                    träning. I början var jag fortfarande
                                    osäker, vilket gjorde att jag slarvade en
                                    del, men sedan jag gått in med inställningen
                                    av att detta är en hobby jag har känner jag
                                    att det har lossnat rejäl. Jag kodar till
                                    och med egna projekt utöver utbildningen och
                                    jag känner att jag lär mig enormt mycket av
                                    det.
                                  </p>
                                </section>
                              </main>
                            </article>
                          </div>
                          <button
                            className="el__close-btn"
                            onClick={handleCloseBtnClick}
                          ></button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personas;
