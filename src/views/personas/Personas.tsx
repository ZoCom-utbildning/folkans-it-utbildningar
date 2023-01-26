import "./personas.scss";
import { useRef, useEffect, useState } from "react";
function Personas() {
  const contRef = useRef<HTMLDivElement>(null);
  const elsArrRef = useRef<HTMLDivElement[]>([]);
  const closeBtnsArrRef = useRef<HTMLButtonElement[]>([]);
  const [preview, setPreview] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      if (contRef.current) contRef.current.classList.remove("s--inactive");
    }, 200);

    elsArrRef.current = elsArrRef.current.filter(Boolean);
    elsArrRef.current.forEach((el) => {
      el.addEventListener("click", handleElClick);
    });
    if (!preview) {
      closeBtnsArrRef.current = closeBtnsArrRef.current.filter(Boolean);
      closeBtnsArrRef.current.forEach((btn) => {
        btn.addEventListener("click", handleCloseBtnClick);
        return () => {
          elsArrRef.current.forEach((el) => {
            el.removeEventListener("click", handleElClick);
          });

          closeBtnsArrRef.current.forEach((btn) => {
            btn.removeEventListener("click", handleCloseBtnClick);
          });
        };
      });
    }
  }, [preview]);

  const handleElClick = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    if (!target.classList.contains("s--active")) {
      elsArrRef.current.forEach((el) => {
        if (el.classList.contains("s--active")) {
          el.classList.remove("s--active");
        }
      });
      target.classList.add("s--active");
      setTimeout(() => {
        setPreview(false);
      }, 1000);
    }
  };

  const handleCloseBtnClick = (e: MouseEvent) => {
    setPreview(true);
    e.stopPropagation();
    elsArrRef.current.forEach((el) => {
      if (el.classList.contains("s--active")) {
        el.classList.remove("s--active");
      }
    });
  };

  return (
    <div className="personasView-container">
      <section className="personasView">
        <h1 className="title-h1">Möt några av våra studerande</h1>
        <h2 className="title-h1">
          Klicka på något av korten för att läsa mer om en student
        </h2>
        <div className="cont" ref={contRef}>
          <div className="cont__inner">
            <div
              className="el"
              ref={(el) => elsArrRef.current.push(el as HTMLDivElement)}
            >
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  {preview ? (
                    <section className="el__preview-cont">
                      <h2 className="el__heading">Adam, 20</h2>
                    </section>
                  ) : (
                    <div className="el__content">
                      <div className="personas-content-container">
                        <article className="personas-card">
                          <section className="personas-card-header">
                            <h2 className="personas-card-title">Adam, 20</h2>
                          </section>
                          <main className="personas-card-text-container">
                            <p className="personas-card-ingress">
                              Adam är en av de personer som startat sin
                              utbildning hos Folkuniversitetet.
                            </p>
                            <p className="personas-card-text">
                              Här är en text som beskriver Adam och hur han kom
                              in på utbildningensom förändrade hans liv till det
                              bättre. Adam är en riktig kung som har lärt sig
                              programmera på egen hand men ville utvecklas
                              ytterliggare så han sökte in på
                              frontend-utbildningen via folkuniversitetets
                              hemsida, efter att han tagit quizet och fått reda
                              på att han skulle passa perfekt inom
                              frontend-utbildningen.
                            </p>
                          </main>
                        </article>
                        <div
                          className="el__close-btn"
                          ref={(btn) =>
                            closeBtnsArrRef.current.push(
                              btn as unknown as HTMLButtonElement
                            )
                          }
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className="el"
              ref={(el) => elsArrRef.current.push(el as HTMLDivElement)}
            >
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  {preview ? (
                    <section className="el__preview-cont">
                      <h2 className="el__heading">Adam, 20</h2>
                    </section>
                  ) : (
                    <div className="el__content">
                      <div className="personas-content-container">
                        <article className="personas-card">
                          <section className="personas-card-header">
                            <h2 className="personas-card-title">Adam, 20</h2>
                          </section>
                          <main className="personas-card-text-container">
                            <p className="personas-card-ingress">
                              Adam är en av de personer som startat sin
                              utbildning hos Folkuniversitetet.
                            </p>
                            <p className="personas-card-text">
                              Här är en text som beskriver Adam och hur han kom
                              in på utbildningensom förändrade hans liv till det
                              bättre. Adam är en riktig kung som har lärt sig
                              programmera på egen hand men ville utvecklas
                              ytterliggare så han sökte in på
                              frontend-utbildningen via folkuniversitetets
                              hemsida, efter att han tagit quizet och fått reda
                              på att han skulle passa perfekt inom
                              frontend-utbildningen.
                            </p>
                          </main>
                        </article>
                        <div
                          className="el__close-btn"
                          ref={(btn) =>
                            closeBtnsArrRef.current.push(
                              btn as unknown as HTMLButtonElement
                            )
                          }
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className="el"
              ref={(el) => elsArrRef.current.push(el as HTMLDivElement)}
            >
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  {preview ? (
                    <section className="el__preview-cont">
                      <h2 className="el__heading">Adam, 20</h2>
                    </section>
                  ) : (
                    <div className="el__content">
                      <div className="personas-content-container">
                        <article className="personas-card">
                          <section className="personas-card-header">
                            <h2 className="personas-card-title">Adam, 20</h2>
                          </section>
                          <main className="personas-card-text-container">
                            <p className="personas-card-ingress">
                              Adam är en av de personer som startat sin
                              utbildning hos Folkuniversitetet.
                            </p>
                            <p className="personas-card-text">
                              Här är en text som beskriver Adam och hur han kom
                              in på utbildningensom förändrade hans liv till det
                              bättre. Adam är en riktig kung som har lärt sig
                              programmera på egen hand men ville utvecklas
                              ytterliggare så han sökte in på
                              frontend-utbildningen via folkuniversitetets
                              hemsida, efter att han tagit quizet och fått reda
                              på att han skulle passa perfekt inom
                              frontend-utbildningen.
                            </p>
                          </main>
                        </article>
                        <div
                          className="el__close-btn"
                          ref={(btn) =>
                            closeBtnsArrRef.current.push(
                              btn as unknown as HTMLButtonElement
                            )
                          }
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className="el"
              ref={(el) => elsArrRef.current.push(el as HTMLDivElement)}
            >
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  {preview ? (
                    <section className="el__preview-cont">
                      <h2 className="el__heading">Adam, 20</h2>
                    </section>
                  ) : (
                    <div className="el__content">
                      <div className="personas-content-container">
                        <article className="personas-card">
                          <section className="personas-card-header">
                            <h2 className="personas-card-title">Adam, 20</h2>
                          </section>
                          <main className="personas-card-text-container">
                            <p className="personas-card-ingress">
                              Adam är en av de personer som startat sin
                              utbildning hos Folkuniversitetet.
                            </p>
                            <p className="personas-card-text">
                              Här är en text som beskriver Adam och hur han kom
                              in på utbildningensom förändrade hans liv till det
                              bättre. Adam är en riktig kung som har lärt sig
                              programmera på egen hand men ville utvecklas
                              ytterliggare så han sökte in på
                              frontend-utbildningen via folkuniversitetets
                              hemsida, efter att han tagit quizet och fått reda
                              på att han skulle passa perfekt inom
                              frontend-utbildningen.
                            </p>
                          </main>
                        </article>
                        <div
                          className="el__close-btn"
                          ref={(btn) =>
                            closeBtnsArrRef.current.push(
                              btn as unknown as HTMLButtonElement
                            )
                          }
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className="el"
              ref={(el) => elsArrRef.current.push(el as HTMLDivElement)}
            >
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  {preview ? (
                    <section className="el__preview-cont">
                      <h2 className="el__heading">Adam, 20</h2>
                    </section>
                  ) : (
                    <div className="el__content">
                      <div className="personas-content-container">
                        <article className="personas-card">
                          <section className="personas-card-header">
                            <h2 className="personas-card-title">Adam, 20</h2>
                          </section>
                          <main className="personas-card-text-container">
                            <p className="personas-card-ingress">
                              Adam är en av de personer som startat sin
                              utbildning hos Folkuniversitetet.
                            </p>
                            <p className="personas-card-text">
                              Här är en text som beskriver Adam och hur han kom
                              in på utbildningensom förändrade hans liv till det
                              bättre. Adam är en riktig kung som har lärt sig
                              programmera på egen hand men ville utvecklas
                              ytterliggare så han sökte in på
                              frontend-utbildningen via folkuniversitetets
                              hemsida, efter att han tagit quizet och fått reda
                              på att han skulle passa perfekt inom
                              frontend-utbildningen.
                            </p>
                          </main>
                        </article>
                        <div
                          className="el__close-btn"
                          ref={(btn) =>
                            closeBtnsArrRef.current.push(
                              btn as unknown as HTMLButtonElement
                            )
                          }
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Personas;
