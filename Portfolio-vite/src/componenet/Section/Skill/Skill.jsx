import classes from "./Skill.module.css";
import SkillPart from "./SkillPart";
import htmlImg from "../../../images/html.png";
import cssImg from "../../../images/css.png";
import jsImg from "../../../images/js.png";
import jqImg from "../../../images/jquery.png";
import reactImg from "../../../images/react.png";
import { forwardRef } from "react";

const Html = {
  skill: "HTML",
  description: "",
};
const Css = {
  skill: "CSS",
  description: "",
};
const Javascript = {
  skill: "Javascript",
  description: "",
};
const Jquery = {
  skill: "jQuery",
  description: "",
};
const React = {
  skill: "React",
  description: "",
};

const Skill = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Skill</h1>
      <div className={classes.partWrapper}>
        <SkillPart
          skill={Html.skill}
          description={Html.description}
          image={htmlImg}
        />
        <SkillPart
          skill={Css.skill}
          description={Css.description}
          image={cssImg}
        />
        <SkillPart
          skill={Javascript.skill}
          description={Javascript.description}
          image={jsImg}
        />
        <SkillPart
          skill={Jquery.skill}
          description={Jquery.description}
          image={jqImg}
        />
        <SkillPart
          skill={React.skill}
          description={React.description}
          image={reactImg}
        />
      </div>
    </div>
  );
});

export default Skill;
