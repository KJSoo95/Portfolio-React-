import { forwardRef } from "react";
import Section from "../../Common/Section";

import classes from "./About.module.css";

import profile from "../../../images/myimg2.jpg";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>About</h1>
      <div className={classes.aboutWrap}>
        <div className={classes.imgWrap}>
          <img className={classes.proimg} src={profile} alt="profile image" />
        </div>
        <div className={classes.paraWrap}>
          <h2>안녕하세요 프론트엔드 개발자 강지수입니다.</h2>
          <p>
            <strong>사용자 중심</strong>으로 누구나{" "}
            <strong>접근이 쉽고 편리한</strong> 웹 페이지를 제작해 나가는
            웹개발자
          </p>
          <p>
            할당된 임무를 꼼꼼히 완수해 나갈 수 있는{" "}
            <strong>섬세한 성격</strong>
          </p>
          <p>
            원하는 결과를 얻기위해 <strong>끊임없이 고민하고 시도</strong>할 수
            있는 능력
          </p>
          <p>
            <strong>
              위와 같은 능력을 바탕으로 자신을 성장시켜 목표를 이룰 때까지
              노력해 나가겠습니다.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
});
About.displayName = "About";
export default About;
