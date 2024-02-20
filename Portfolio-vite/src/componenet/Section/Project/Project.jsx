import { forwardRef, useState } from "react";
import { createRef } from "react";

import classes from "./Project.module.css";
import ProjectPart from "./ProjectPart";
import ProjectInfo from "./ProjectInfo";

import project from "../../../images/port1.png";
import emotion from "../../../images/emotionDiary1.png";



const Project = forwardRef((props, ref) => {
  const [selectPart, setSelectPart] = useState(1);
  const ProjectInforef = createRef();

  const partHandler = (partNum) => {
    setSelectPart(partNum);
    ProjectInforef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={ref}>
      <h1>Project</h1>
      <div className={classes.projectWrap}>
        <div className={classes.wrapper} onClick={() => partHandler(1)}>
          <ProjectPart
            image={project}
            title="Portfolio"
            description="강남아이티 아카데미에서 배운 HTML, CSS, JavaScript, jQuery를 사용하여 만들어본 포트폴리오로 slick.js"
          />
        </div>
        <div className={classes.wrapper} onClick={() => partHandler(2)}>
          <ProjectPart
            image={emotion}
            title="emotionalDiary"
            onClick={() => partHandler(2)}
          />
        </div>
        <div className={classes.wrapper} onClick={() => partHandler(3)}>
          <ProjectPart title="Portfolio" />
        </div>
      </div>
      <div ref={ProjectInforef}>
        {selectPart === 1 && <ProjectInfo part={"1"} />}
        {selectPart === 2 && <ProjectInfo part={"2"} />}
        {selectPart === 3 && <ProjectInfo part={"3"} />}
      </div>
    </div>
  );
});
Project.displayName = "Project";

export default Project;
