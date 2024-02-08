import classes from "./Project.module.css";
import ProjectPart from "./ProjectPart";
import invest from "../../../images/invest1.png";
import emotion from "../../../images/emotionDiary1.png";
import { forwardRef, useState } from "react";
import ProjectInfo from "./ProjectInfo";

const Project = forwardRef((props, ref) => {
  const [selectPart, setSelectPart] = useState(1);

  const partHandler = (partNum) => {
    setSelectPart(partNum);
  };
  return (
    <div ref={ref}>
      <h1>Project</h1>
      <div className={classes.projectWrap}>
        <div className={classes.wrapper} onClick={() => partHandler(1)}>
          <ProjectPart image={invest} title="investment" />
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
      {selectPart === 1 && <ProjectInfo part={"1"} />}
      {selectPart === 2 && <ProjectInfo part={"2"} />}
      {selectPart === 3 && <ProjectInfo part={"3"} />}
    </div>
  );
});
Project.displayName = "Project";

export default Project;
