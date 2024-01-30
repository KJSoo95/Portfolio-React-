import {} from "react";
import "./App.css";

import Header from "./componenet/Section/Header/Header";
import Navi from "./componenet/Section/Navigation/Navi";
import About from "./componenet/Section/About/About";
import Project from "./componenet/Section/Project/Project";
import Skill from "./componenet/Section/Skill/Skill";

function App() {
  return (
    <>
      <Navi />
      <Header />
      <About />
      <Project/>
      <Skill/>
    </>
  );
}

export default App;
