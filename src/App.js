import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/About/About";
import Aside from "./components/Aside/Aside";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import More from "./components/More/More";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Router>
        <Header
          handleMobileMenuOpen={mobileMenuOpen}
          handleSetMobileMenuOpen={setMobileMenuOpen}
        />
        {/* <About/> */}
        {/* <header className="links">
          <Link className="link" to="/">
            Inicio
          </Link>
          <Link className="link" to="/education">
            Educación
          </Link>
          <Link className="link" to="/experience">
            Experiencia
          </Link>
          <Link className="link" to="/about">
            Sobre mi
          </Link>
          <Link className="link" to="/more">
            Mas
          </Link>
        </header> */}
        <main className="relative isolate px-6 pt-14 lg:px-8">
          <Aside hero={hero} />
          <Routes>
            <Route exact path="/" element={<Hero hero={hero} />}></Route>
            <Route
              exact
              path="/education"
              element={<Education education={education} />}
            ></Route>
            <Route
              exact
              path="/experience"
              element={<Experience experience={experience} />}
            ></Route>
            <Route exact path="/about" element={<About hero={hero} />}></Route>
            <Route
              exact
              path="/more"
              element={<More languages={languages} habilities={habilities} />}
            ></Route>
          </Routes>
        </main>
        {/* <Hero hero={hero} />
      <About hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <More languages={languages} habilities={habilities} /> */}
      </Router>
    </div>
  );
}

export default App;
