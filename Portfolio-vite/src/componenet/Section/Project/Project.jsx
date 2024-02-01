import classes from "./Project.module.css";
import ProjectPart from "./ProjectPart";
import invest from "../../../images/invest1.png";
import emotion from "../../../images/emotionDiary1.png";
import { forwardRef } from "react";

const Project = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Project</h1>
      <div className={classes.projectWrap}>
        <ProjectPart image={invest} title = "investment"/>
        <ProjectPart image={emotion} title = "emotionalDiary"/>
        <ProjectPart title = "Portfolio"/>
      </div>
    </div>
  );
})

export default Project;
