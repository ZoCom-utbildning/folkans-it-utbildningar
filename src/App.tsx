import About from "./views/about/About";
import Error from "./views/error/Error";
import Form from "./views/form/Form";
import Home from "./views/home/Home";

import Header from "./components/header/header";
import { useState } from "react";
import "./scss/global.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navClass, setNavClass] = useState<string>("nav-icon");
  const [personaTitle, setPersonaTitle] = useState<string>("Adam, 20");
  const [personaIngress, setPersonaIngress] = useState<string>(
    "Adam är en av de personer som startat sin utbildning hos Folkuniversitetet."
  );
  const [personaText, setPersonaText] = useState<string>(
    "Här är en text som beskriver Adam och hur han kom in på utbildningensom förändrade hans liv till det bättre."
  );
  return (
    <div className="App">
      <Header
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        navClass={navClass}
        setNavClass={setNavClass}
      />
      <Routes>
        <Route path="/om" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route
          path="/fragor"
          element={
            <Form
              personaTitle={personaTitle}
              personaIngress={personaIngress}
              personaText={personaText}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              personaTitle={personaTitle}
              personaIngress={personaIngress}
              personaText={personaText}
              setPersonaTitle={setPersonaTitle}
              setPersonaIngress={setPersonaIngress}
              setPersonaText={setPersonaText}
            />
          }
        />
        {/* <Route path="/personer" element={<Personas />} /> */}
      </Routes>
    </div>
  );
}

export default App;
