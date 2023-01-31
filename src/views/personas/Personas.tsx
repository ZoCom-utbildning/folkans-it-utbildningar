import "./personas.scss";
import { useEffect, useState } from "react";

const Personas: React.FC = () => {
  const [contClass, setContClass] = useState("cont s--inactive");
  const [activeEl, setActiveEl] = useState<HTMLDivElement | null>(null);
  const [preview, setPreview] = useState(true);
  const NUM_OF_ELEMENTS = 5;

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
                                  Adam är en av de personer som startat sin
                                  utbildning hos Folkuniversitetet.
                                </p>
                                <section className="card-text-container">
                                  <p className="personas-card-text">
                                    Här är en text som beskriver Adam och hur
                                    han kom in på utbildningensom förändrade
                                    hans liv till det bättre. Adam är en riktig
                                    kung som har lärt sig programmera på egen
                                    hand men ville utvecklas ytterliggare så han
                                    sökte in på frontend-utbildningen via
                                    folkuniversitetets hemsida, efter att han
                                    tagit quizet och fått reda på att han skulle
                                    passa perfekt inom frontend-utbildningen.
                                  </p>
                                  <p className="personas-card-text">
                                    Här är en till text som beskriver Adam lite
                                    ytterligare och läses enklare än en enda
                                    lång paragraf
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
