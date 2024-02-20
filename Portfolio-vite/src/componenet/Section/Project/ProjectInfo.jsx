import classes from "./ProjectInfo.module.css";

import portfolio from "../../../images/Portfolio.mp4";
import emotion from "../../../images/emotion.mp4";
import html from "../../../images/html.png";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import jq from "../../../images/jquery.png";
import ret from "../../../images/react.png";

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
