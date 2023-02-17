import "./personas.scss";
import { useEffect, useState } from "react";

import Arrow from "../../assets/icons/arrow.svg";
import FormComponent from "../../components/formcomponent/formComponent";
import { useSwipeable } from "react-swipeable";
import Footer from "../../components/footer/Footer";
import { Persona, Question } from "../../models/types";

type Props = {
  activePersona: number;
  buttonElements: JSX.Element;
  handlers: ReturnType<typeof useSwipeable>;
  data: Persona[];
  interviewData: JSX.Element[];
  questions: Question[];
  isMobile: boolean;
  scrollClass: string;
};
const Personas = ({
  questions,
  activePersona,
  handlers,
  buttonElements,
  interviewData,
  data,
  scrollClass,
  isMobile,
}: Props) => {
  const [contClass, setContClass] = useState("cont s--inactive");
  const [activeEl, setActiveEl] = useState<HTMLDivElement | null>(null);
  const [preview, setPreview] = useState(true);

  const NUM_OF_ELEMENTS: number = interviewData.length;

  useEffect(() => {
    setTimeout(() => {
      setContClass("cont s--active");
    }, 200);
  }, []);

  const handleElClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (contClass.includes("s__el-active")) return;
    else if (!isMobile) {
      const el: HTMLDivElement = event.currentTarget;
      setContClass("cont s__el-active");
      toggleClass(el, "s--active");
      setActiveEl(el);
      console.log(data);
      setTimeout(() => {
        setPreview(false);
      }, 1350);
      console.log(interviewData);
    }
  };

  const toggleClass = (el: HTMLDivElement, className: string) => {
    if (el.classList.contains(className) && !isMobile) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  };

  const handleCloseBtnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isMobile) {
      event.stopPropagation();
      toggleClass(activeEl!, "s--active");
      setContClass("cont s__inactive");
      setActiveEl(null);
      setPreview(true);
    }
  };

  return (
    <>
      {!isMobile ? (
        <div className="personasView-container">
          <section className="personasView">
            <div className={contClass}>
              <div className="cont__inner">
                {Array(NUM_OF_ELEMENTS)
                  .fill(0)
                  .map((_: string, index: number) => (
                    <div key={index} className="el" onClick={handleElClick}>
                      <div className="el__overflow">
                        <div className="el__inner">
                          <div className="el__bg"></div>
                          {preview ? (
                            <section className="el__preview-cont">
                              <h2 className="el__heading">
                                {data[index]
                                  ? data[index].name + ", " + data[index].age
                                  : ""}
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
        <section className="home-personas-wrapper">
          <div {...handlers}>
            <FormComponent
              questions={questions}
              interviewData={interviewData}
              buttonElements={buttonElements}
              activePersona={activePersona}
            />
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Personas;
