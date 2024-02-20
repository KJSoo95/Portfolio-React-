import classes from "./ProjectInfo.module.css";

import portfolio from "../../../images/Portfolio.mp4";
import emotion from "../../../images/emotion.mp4";
import html from "../../../images/html.png";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import jq from "../../../images/jquery.png";
import ret from "../../../images/react.png";
import modcss from "../../../images/cssmodules.png";

const ProjectInfo = (props) => {
  console.log(props.part);
  return (
    <div>
      {props.part === "1" && (
        <div className={classes.projectInfoWrap}>
          <div className={classes.infoWrap}>
            <div className={classes.image}>
              <video width="95%" autoPlay muted loop>
                <source src={portfolio}></source>
              </video>
            </div>
          </div>
          <div className={classes.infoWrap}>
            <div className={classes.projectDetail}>
              <h3>프로젝트 소개</h3>
              <p>
                공부하면서 만든 프로젝트를 재구성하여 나의 포트폴리오로
                만들어봤습니다. 그 동안 만들어 본 프로젝트를 바탕으로 만들어본
                포트폴리오로 HTML, CSS, JavaScript, jQuery를 사용하여 만들었고
                slick.js를 사용하여 프로젝트 슬라이드를 구현하였습니다.
              </p>
            </div>

            <div className={classes.part}>
              <p>링크</p>
              <a href="https://kjsoo95.github.io/Portfolio/" target="blank">
                Go to Page
              </a>
              <p>깃헙</p>
              <a href="https://github.com/KJSoo95/Portfolio" target="blank">
                Go to github
              </a>
            </div>

            <div className={classes.skillwrap}>
              <h3>적용 기술</h3>
              <img className={classes.skill} src={html} />
              <img className={classes.skill} src={css} />
              <img className={classes.skill} src={js} />
              <img className={classes.skill} src={jq} />
            </div>
          </div>
        </div>
      )}
      {props.part === "2" && (
        <div className={classes.projectInfoWrap}>
          <div className={classes.infoWrap}>
            <div className={classes.image}>
              <video width="95%" autoPlay muted loop>
                <source src={emotion} />
              </video>
            </div>
            <div className={classes.part}>
              <p>링크</p>
              <a href="https://kjs-react-project.web.app/" target="blank">
                Go to Page
              </a>
              <p>깃헙</p>
              <a
                href="https://github.com/KJSoo95/Kang-s_FED/tree/main/React/Emotional-Diary"
                target="blank"
              >
                Go to github
              </a>
            </div>
          </div>
          <div className={classes.infoWrap}>
            <div className={classes.projectDetail}>
              <h3>프로젝트 소개</h3>
              <p></p>
            </div>

            <div className={classes.skillwrap}>
              <h3>적용 기술</h3>
              <img className={classes.skill} src={html} />
              <img className={classes.skill} src={css} />
              <img className={classes.skill} src={ret} />
            </div>
          </div>
        </div>
      )}
      {props.part === "3" && (
        <div className={classes.projectInfoWrap}>
          <div className={classes.infoWrap}>
            <div className={classes.image}></div>
            <div className={classes.part}>
              <p>링크3</p>
              <p>깃헙</p>
            </div>
          </div>
          <div className={classes.infoWrap}>
            <div className={classes.projectDetail}>
              <h3>프로젝트 소개</h3>
              <p></p>
            </div>

            <div className={classes.skillwrap}>
              <h3>적용 기술</h3>
              <img className={classes.skill} src={html} />
              <img className={classes.skill} src={css} />
              <img className={classes.skill} src={js} />
              <img className={classes.skill} src={jq} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
