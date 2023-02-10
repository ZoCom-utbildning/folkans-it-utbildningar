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
import Education from "./views/education/Education";
import { db } from "./services/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {

  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navClass, setNavClass] = useState<string>("nav-icon");
  const [activePersona, setActivePersona] = useState<number>(0);
  const [questions, setQuestions] = useState<Array<any>>([]);


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
        <Route path="/utbildningar/:educationId" element={<Education />} />
        <Route path="/*" element={<Error />} />
        <Route
          path="/fragor"
          element={<Form activePersona={activePersona} questions={ questions }/>}
        />
        <Route
          path="/"
          element={
            <Home
              activePersona={activePersona}
              setActivePersona={setActivePersona}
            />
          }
        />
        <Route path="/personer" element={<Personas />} />
      </Routes>
    </div>
  );
}

export default App;
