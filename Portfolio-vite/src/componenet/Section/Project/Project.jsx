import classes from "./Project.module.css";
import ProjectPart from "./ProjectPart";
import invest from "../../../images/invest1.png";
import emotion from "../../../images/emotionDiary1.png";

const Project = () => {
  return (
    <div>
      <h1>Project</h1>
      <div className={classes.projectWrap}>
        <ProjectPart image={invest} title = "investment"/>
        <ProjectPart image={emotion} title = "emotionalDiary"/>
        <ProjectPart title = "Portfolio"/>
      </div>
    </div>
  );
};

export default Project;
