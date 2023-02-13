import About from "./views/about/About";
import Error from "./views/error/Error";
import Form from "./views/form/Form";
import Home from "./views/home/Home";
import Personas from "./views/personas/Personas";
import Header from "./components/header/header";
import { useState, useEffect } from "react";
import "./scss/global.scss";
import { Route, Routes } from "react-router-dom";
import Educations from "./views/educations/Educations";
import { useSwipeable } from "react-swipeable";
import anime from "animejs";
import { db } from "./services/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navClass, setNavClass] = useState<string>("nav-icon");
  const [activePersona, setActivePersona] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>();
  const [data, setData] = useState<Array<any>>([]);
  const [interviewData, setInterviewData] = useState<any[]>([]);
  const [questions, setQuestions] = useState<Array<any>>([]);

  const targets = document.querySelectorAll(
    ".persona-header .persona-text-container"
  );

  const buttonElements = (
    <ul className="galleryButtons">
      <input
        type="radio"
        name="radio-btn"
        className="gallery-btn"
        id="btn1"
        checked={activePersona === 0}
        onChange={(e) => {
          changePersona(e);
        }}
      />
      <input
        type="radio"
        name="radio-btn"
        checked={activePersona === 1}
        className="gallery-btn"
        id="btn2"
        onChange={(e) => {
          changePersona(e);
        }}
      />
      <input
        type="radio"
        name="radio-btn"
        checked={activePersona === 2}
        className="gallery-btn"
        id="btn3"
        onChange={(e) => {
          changePersona(e);
        }}
      />
      <input
        type="radio"
        name="radio-btn"
        className="gallery-btn"
        checked={activePersona === 3}
        id="btn4"
        onChange={(e) => {
          changePersona(e);
        }}
      />
      <input
        type="radio"
        name="radio-btn"
        className="gallery-btn"
        checked={activePersona === 4}
        onChange={(e) => {
          changePersona(e);
        }}
        id="btn5"
      />
    </ul>
  );
  const changePersona = (e: any) => {
    if (e.target.id === "btn1") {
      setActivePersona(0);
    } else if (e.target.id === "btn2") {
      setActivePersona(1);
    } else if (e.target.id === "btn3") {
      setActivePersona(2);
    } else if (e.target.id === "btn4") {
      setActivePersona(3);
    } else if (e.target.id === "btn5") {
      setActivePersona(4);
    }
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
      setInterviewData(
        data.map((personas, index) => {
          return (
            <div className="personas-main" key={index}>
              <article className="personas-card">
                <section className="personas-card-header">
                  <h2 className="personas-card-title">
                    {personas.name + `, ` + personas.age}
                  </h2>
                </section>
                <main className="personas-card-text-container">
                  <p className="personas-card-ingress">{personas.desc}</p>
                  <span>
                    Vad var det som fick dig att välja din utbildning?
                  </span>
                  <br></br>
                  <section className="card-text-container">
                    <p className="personas-card-text">{personas.replies[0]}</p>
                    <span>Vad har du för bakgrund innan denna utbildning?</span>
                    <br></br>
                    <p className="personas-card-text">{personas.replies[1]}</p>
                    <span>Vad är det bästa med din utbildning?</span>
                    <br></br>
                    <p className="personas-card-text">{personas.replies[2]}</p>
                    <span>
                      Har du några visdomsord till andra som funderar på att
                      söka eller som redan sökt?
                    </span>
                    <br></br>
                    <p className="personas-card-text">{personas.replies[3]}</p>
                  </section>
                </main>
              </article>
            </div>
          );
        })
      );
    }
  }, [data]);

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
      {/**bryt ut <Header/> till egen komponent som vi använder där den behövs och inte på alla sidor, väldigt mycket problem med z-index osv pga detta}*/}
      <Header
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        navClass={navClass}
        setNavClass={setNavClass}
      />
      <Routes>
        <Route path="/om" element={<About />} />
        <Route path="/utbildningar" element={<Educations />} />
        <Route path="/*" element={<Error />} />
        <Route
          path="/fragor"
          element={
            <Form
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
              data={data}
              interviewData={interviewData}
              handlers={handlers}
              activePersona={activePersona}
              buttonElements={buttonElements}
              setIsMobile={setIsMobile}
            />
          }
        />
        <Route
          path="/personer"
          element={
            <Personas
              questions={questions}
              data={data}
              interviewData={interviewData}
              handlers={handlers}
              activePersona={activePersona}
              buttonElements={buttonElements}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
