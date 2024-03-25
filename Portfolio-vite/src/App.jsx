import { createRef } from "react";
import "./App.css";

import Header from "./componenet/Section/Header/Header";
import Navi from "./componenet/Section/Navigation/Navi";
import About from "./componenet/Section/About/About";
import Project from "./componenet/Section/Project/Project";
import Skill from "./componenet/Section/Skill/Skill";
import Contact from "./componenet/Section/Contact/Contact";

function App() {
  const Aboutref = createRef();
  const Projectref = createRef();
  const Skillref = createRef();
  const Contactref = createRef();

  const onAboutClick = () => {
    Aboutref.current.scrollIntoView({ behavior: "smooth" });
  };
  const onProjectClick = () => {
    Projectref.current.scrollIntoView({ behavior: "smooth" });
  };
  const onSkillClick = () => {
    Skillref.current.scrollIntoView({ behavior: "smooth" });
  };
  const onContactClick = () => {
    Contactref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navi
        onAboutClick={onAboutClick}
        onProjectClick={onProjectClick}
        onSkillClick={onSkillClick}
        onContactClick={onContactClick}
      />
      <Header />
      <About ref={Aboutref} />
      <Project ref={Projectref} />
      <Skill ref={Skillref} />
      <Contact ref={Contactref} />
    </>
  );
}

export default App;
