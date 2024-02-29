import { forwardRef } from "react";

import classes from "./Skill.module.css";
import SkillPart from "./SkillPart";

import htmlImg from "../../../images/html.png";
import cssImg from "../../../images/css.png";
import jsImg from "../../../images/js.png";
import jqImg from "../../../images/jquery.png";
import reactImg from "../../../images/react.png";
import fireImg from "../../../images/firebase.jpg";
import Section from "../../Common/Section";

const Html = {
  skill: "HTML",
  description:
    "시멘틱 태그로 구조 설계 하여 좀 더 명시적이며 구조적인 설계가 가능함.",
};
const Css = {
  skill: "CSS",
  description: "모듈 CSS를 사용 가능하며 CSS로 애니메이션 구현도 가능함. 반응형 웹 제작 경험이",
};
const Javascript = {
  skill: "Javascript",
  description:
    "기본 자바스크립트 언어 사용이 가능하며 기본적인 함수 사용 가능함. ES6문법을사용.",
};
const Jquery = {
  skill: "jQuery",
  description: "jQuery 사용해본 경험이 있음. 어떻게 사용해야하는지 알고있음.",
};
const React = {
  skill: "React",
  description: "컴포넌트 분리, 상태관리, 리액트 훅 등 사용 가능함.",
};
const Firebase = {
  skill: "Firebase",
  description: "빌드와 배포 사용한 경험이 있음.",
};

const Skill = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={classes.section}>
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
        <SkillPart
          skill={Firebase.skill}
          description={Firebase.description}
          image={fireImg}
        />
      </div>
    </section>
  );
});

Skill.displayName = "Skill";

export default Skill;
