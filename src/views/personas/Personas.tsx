import "./personas.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import Arrow from "../../assets/icons/arrow.svg";
import FormComponent from "../../components/formcomponent/formComponent";
import { useSwipeable } from "react-swipeable";
import Footer from "../../components/footer/Footer";
import { Persona, Question } from "../../models/types";

type PersonasProps = {
  activePersona: number;
  buttonElements: JSX.Element;
  handlers: ReturnType<typeof useSwipeable>;
  data: Persona[];
  interviewData: JSX.Element[];
  questions: Question[];
  isMobile: boolean;
  scrollClass: string;
  setActivePersona: (activePersona: number) => void;
};
const Personas = ({
  setActivePersona,
  questions,
  activePersona,
  handlers,
  buttonElements,
  interviewData,
  data,
  scrollClass,
  isMobile,
}: PersonasProps) => {
  const [contClass, setContClass] = useState("cont s--inactive");
  const [activeEl, setActiveEl] = useState<HTMLDivElement | null>(null);
  const [preview, setPreview] = useState(true);
  const [backgroundClass, setBackgroundClass] = useState("lighter-background");

  const location = useLocation();
  const getQuery = new URLSearchParams(location.search);
  const query: string | undefined = getQuery.get("persona")?.split(",")[0];
  const [queryPersona, setQueryPersona] = useState(false);


  const reset = () => {
    setContClass("cont s__inactive");
    setActiveEl(null);
    setPreview(true);
    setQueryPersona(false);
    setBackgroundClass("lighter-background");
  }

  useEffect(() => {
    reset();

    if (query) {
      const targetElement = document.querySelector(`[data-persona=${query}]`) as HTMLDivElement;
      setContClass("cont s__el-active");
      setQueryPersona(true);
      setActiveEl(targetElement);
      setTimeout(() => {
        setPreview(false);
        setBackgroundClass("");
      }, 550);
    }
  }, [location]);


  const toggleClass = (el: HTMLDivElement, className: string) => {
    if (el.classList.contains(className) && !isMobile) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  };
  
  const handleElClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (contClass.includes("s__el-active") || isMobile) return;
    const el: HTMLDivElement = event.currentTarget;
    setContClass("cont s__el-active");
    toggleClass(el, "s--active");
    setActiveEl(el);
    setTimeout(() => {
      setPreview(false);
      setBackgroundClass("");
    }, 1350);
  };

  const handleCloseBtnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isMobile) {
      event.stopPropagation();
      toggleClass(activeEl!, "s--active");
      reset();
    }
  };
  return (
    <>
      {!isMobile ? (
        <div className="personasView-container">
          <section className="personasView">
            <div className={contClass}>
              <div className="cont__inner">
                {data &&
                  data.map((el, index) => (
                    <div
                      key={index}
                      data-persona={el.name}
                      className={`el ${
                        query && query === el.name ? "s--active" : ""
                      }`}
                      onClick={handleElClick}
                    >
                      <div className="el__overflow">
                        <div className="el__inner">
                          <div className={"el__bg " + backgroundClass}></div>

                          {preview && !queryPersona? (
                            <section className="el__preview-cont">
                              <h2 className="el__heading">
                                {el ? el.name + ", " + el.age : ""}
                              </h2>
                              <img className="arrow-img" src={Arrow} alt="" />
                            </section>
                          ) : (
                            <div className={`el__content ${scrollClass}`}>
                              {interviewData[index]}

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
      ) : (
        <section className="home-personas-wrapper" {...handlers}>
          <FormComponent
            setActivePersona={setActivePersona}
            questions={questions}
            interviewData={interviewData}
            buttonElements={buttonElements}
            activePersona={activePersona}
          />
        </section>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Personas;
