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
  const [activePersona, setActivePersona] = useState<number>(0);
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
        <Route path="/*" element={<Error />} />
        <Route
          path="/fragor"
          element={<Form activePersona={activePersona} />}
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
        {/* <Route path="/personer" element={<Personas />} /> */}
      </Routes>
    </div>
  );
}

export default App;
