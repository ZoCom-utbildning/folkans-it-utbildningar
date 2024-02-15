import About from "./views/about/About";
import Error from "./views/error/Error";
import Form from "./views/form/Form";
import Home from "./views/home/Home";
import Personas from "./views/personas/Personas";
import Header from "./components/header/header";
import Educations from "./views/educations/Educations";
import Education from "./views/education/Education";
import { useState, useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import "./scss/global.scss";

import { useSwipeable } from "react-swipeable";
import anime from "animejs";

import { db } from "./services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Question, Persona } from "./models/types";
import TestButton from "./components/testbutton/testButton";
import { TransitionWrapper } from "./components/transitionWrapper/transitionWrapper";
import Footer from "./components/footer/Footer";

function App() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navClass, setNavClass] = useState<string>("nav-icon");
  const [activePersona, setActivePersona] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [data, setData] = useState<Persona[]>([]);
  const [interviewData, setInterviewData] = useState<JSX.Element[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [scrollClass, setScrollClass] = useState<string>("");

  const targets = document.getElementsByClassName("image_section");
  function checkMediaQuery() {
    if (window.innerWidth > 820) {
      setIsMobile(false);
      console.log("isMobile: ", isMobile);
    } else {
      setIsMobile(true);
      console.log("isMobile: ", isMobile);
    }
  }
  window.addEventListener("resize", checkMediaQuery);

  useEffect(() => {
    checkMediaQuery();
  }, []);

  const inputElem: JSX.Element[] = interviewData.map(
    (data: JSX.Element, index: number) => {
      return (
        <input
          type="radio"
          name="radio-btn"
          className="gallery-btn"
          id={"btn" + (index + 1)}
          key={"btn" + (index + 1)}
          checked={activePersona === index}
          onChange={(e) => {
            changePersona(e);
          }}
        />
      );
    }
  );

  const buttonElements: JSX.Element = (
    <ul className="galleryButtons">{inputElem}</ul>
  );

  const changePersona = (e: any) => {
    interviewData.forEach((data: JSX.Element, index: number) => {
      if (e.target.id === "btn" + (index + 1)) {
        setActivePersona(index);
      }
    });
  };

  // swiping animation between personas
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    onSwipedLeft: () => swipeLeft(),
    onSwipedRight: () => swipeRight(),
    trackMouse: true,
  });

  const swipeRight = () => {
    if (isMobile) {
      anime({
        targets: targets,
        keyframes: [
          { translateX: "200%", duration: 250 },
          { translateX: "0", duration: 250 },
        ],
        duration: 500,
        easing: "easeInOutQuad",
      });
      if (activePersona === 0) {
        setActivePersona(4);
      } else {
        setActivePersona(activePersona - 1);
      }
    }
  };
  const swipeLeft = () => {
    if (isMobile) {
      anime({
        targets: targets,
        keyframes: [
          { translateX: "-200%", duration: 250 },
          { translateX: "0", duration: 250 },
        ],
        duration: 500,
        easing: "easeInOutQuad",
      });

      if (activePersona === 4) {
        setActivePersona(0);
      } else {
        setActivePersona(activePersona + 1);
      }
    }
  };

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
    if (data.length > 0) {
      if (isMobile) {
        console.log(isMobile, "activated scroll mobile");

        setScrollClass("");
      } else {
        console.log(isMobile, "activated scroll desktop");
        setScrollClass("scroll");
      }
      setInterviewData(
        data.map((personas: Persona, index: number) => {
          return (
            <div className={"personas-main"} key={index}>
              <article className="personas-card">
                <section className="personas-card-header">
                  <h2 className="personas-card-title">
                    {personas.name + `, ` + personas.age}
                  </h2>
                </section>
                <main className="personas-card-text-container">
                  <p className="ingress">{personas.desc}</p>
                  <h2 className="question-title">
                    Vad var det som fick dig att välja din utbildning?
                  </h2>

                  <section className="card-text-container">
                    <p className="personas-card-text">{personas.replies[0]}</p>
                    <h2 className="question-title">
                      Vad har du för bakgrund innan denna utbildning?
                    </h2>

                    <p className="personas-card-text">{personas.replies[1]}</p>
                    <h2 className="question-title">
                      Vad är det bästa med din utbildning?
                    </h2>

                    <p className="personas-card-text">{personas.replies[2]}</p>
                    <h2 className="question-title">
                      Har du några visdomsord till andra som funderar på att
                      söka eller som redan sökt?
                    </h2>

                    <p className="personas-card-text">{personas.replies[3]}</p>
                  </section>
                  <TestButton buttonText={"Gör testet"} />
                </main>
              </article>
            </div>
          );
        })
      );
    }
  }, [data, scrollClass]);

  // Hämtar questions från firebase databasen
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      const tempArr: any[] = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
      });

      setQuestions(tempArr);
    })();
  }, []);

  return (
    <div className="App">
      <Header
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        navClass={navClass}
        setNavClass={setNavClass}
      />
      <main>
        <TransitionWrapper>
          <Routes>
            <Route path="/om" element={<About />} />
            <Route path="/utbildningar" element={<Educations />} />
            <Route path="/utbildningar/:educationId" element={<Education />} />
            <Route path="/*" element={<Error />} />
            <Route
              path="/fragor/:pageId"
              element={
                <Form
                  setActivePersona={setActivePersona}
                  interviewData={interviewData}
                  activePersona={activePersona}
                  buttonElements={buttonElements}
                  questions={questions}
                />
              }
            />
            <Route
              path="/"
              element={
                <Home
                  setActivePersona={setActivePersona}
                  questions={questions}
                  data={data}
                  interviewData={interviewData}
                  handlers={handlers}
                  activePersona={activePersona}
                  buttonElements={buttonElements}
                />
              }
            />
            <Route
              path="/personer"
              element={
                <Personas
                  setActivePersona={setActivePersona}
                  isMobile={isMobile}
                  questions={questions}
                  scrollClass={scrollClass}
                  data={data}
                  interviewData={interviewData}
                  handlers={handlers}
                  activePersona={activePersona}
                  buttonElements={buttonElements}
                />
              }
            />
          </Routes>
        </TransitionWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default App;
