import About from "./views/about/About";
import Error from "./views/error/Error";
import Form from "./views/form/Form";
import Home from "./views/home/Home";
import Personas from "./views/personas/Personas";
import Header from "./components/header/header";
import { useState } from "react";
import "./scss/global.scss";
import { Route, Routes } from "react-router-dom";
import Hamburger from "./components/hamburger/hamburger";

function App() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navClass, setNavClass] = useState<string>("nav-icon");
  return (
    <div className="App">
      <Hamburger
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        navClass={navClass}
        setNavClass={setNavClass}
      />
      <Header
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        navClass={navClass}
        setNavClass={setNavClass}
      />
      <Routes>
        <Route path="/om" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/fragor" element={<Form />} />
        <Route path="/" element={<Home />} />
        <Route path="/personer" element={<Personas />} />
      </Routes>
    </div>
  );
}

export default App;
