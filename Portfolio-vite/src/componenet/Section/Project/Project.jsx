import { forwardRef, useState } from "react";
import { createRef } from "react";

import classes from "./Project.module.css";
import ProjectPart from "./ProjectPart";
import ProjectInfo from "./ProjectInfo";

import project from "../../../images/port1.png";
import emotion from "../../../images/emotionDiary1.png";
import Section from "../../Common/Section";

const Project = forwardRef((props, ref) => {
  const [selectPart, setSelectPart] = useState(1);
  const ProjectInforef = createRef();

  const partHandler = (partNum) => {
    setSelectPart(partNum);
    ProjectInforef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section ref={ref}>
      <h1>Project</h1>
      <div className={classes.projectWrap}>
        <div className={classes.wrapper} onClick={() => partHandler(1)}>
          <ProjectPart
            image={project}
            title="Portfolio"
            description="배운 내용을 바탕으로 만들어본 첫번째 포트폴리오 프로젝트 스크롤 이동을 사용하였고 슬라이드 효과로 내부 프로젝트들을 볼 수 있게 해놓았습니다."
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
    </Section>
  );
});
Project.displayName = "Project";

export default Project;
