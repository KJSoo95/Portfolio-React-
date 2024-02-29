import classes from "./ProjectInfo.module.css";

import portfolio from "../../../images/Portfolio.mp4";
import emotion from "../../../images/emotion.mp4";
import pofol from "../../../images/pofol.mp4";
import html from "../../../images/html.png";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import jq from "../../../images/jquery.png";
import ret from "../../../images/react.png";
import modcss from "../../../images/cssmodules.png";
import firebase from "../../../images/firebase.jpg";

const ProjectInfo = (props) => {
  console.log(props.part);
  return (
    <div>
      {/* 파트 1*/}
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
              <h3>프로젝트 소개 및 후기</h3>
              <p>
                공부하면서 만든 프로젝트를 재구성하여 나의 포트폴리오로
                만들어봤습니다. 그 동안 만들어 본 프로젝트를 바탕으로 만들어본
                포트폴리오로 HTML, CSS, JavaScript, jQuery를 사용하여 만들었고
                slick.js를 사용하여 프로젝트 슬라이드를 구현하였습니다. 만들면서
                뿌듯하였지만 아직 부족함을 느끼고 리액트를 공부하기
                시작하였습니다.
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
      {/* 파트2 */}
      {props.part === "2" && (
        <div className={classes.projectInfoWrap}>
          <div className={classes.infoWrap}>
            <div className={classes.image}>
              <video width="95%" autoPlay muted loop>
                <source src={emotion} />
              </video>
            </div>
          </div>
          <div className={classes.infoWrap}>
            <div className={classes.projectDetail}>
              <h3>프로젝트 소개 및 후기</h3>
              <p>
                리액트를 공부하면서 클론코딩으로 만들어본 감정 다이어리입니다.
                그 날의 일기를 간단히 적을 수 있고 추가로 감정도 기록을 할 수
                있게 해놨습니다. 수정과 삭제도 가능하며 일기기록은 로컬에
                저장되게 해놨습니다. 프로젝트를 하면서 어려웠지만 리액트에 대해
                더 관심이 생기고 리액트의 여러 훅이나 상태관리, 컴포넌트 분리 등
                익히기 좋은 프로젝트였습니다.
              </p>
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

            <div className={classes.skillwrap}>
              <h3>적용 기술</h3>
              <img className={classes.skill} src={html} />
              <img className={classes.skill} src={css} />
              <img className={classes.skill} src={ret} />
              <img className={classes.skill} src={firebase} />
            </div>
          </div>
        </div>
      )}
      {/* 파트3 */}
      {props.part === "3" && (
        <div className={classes.projectInfoWrap}>
          <div className={classes.infoWrap}>
            <div className={classes.image}>
              <video width="95%" autoPlay muted loop>
                <source src={pofol} />
              </video>
            </div>
          </div>
          <div className={classes.infoWrap}>
            <div className={classes.projectDetail}>
              <h3>프로젝트 소개 및 후기</h3>
              <p>
                전에 만든 포트폴리오를 vite와 리액트를 사용하여 다시 만들어 본
                포트폴리오로 목업을 만들어 놓고 그것과 유사하게 만들었습니다.
                네이게이션으로 해당 섹션으로 갈 수 있게 만들고 프로젝트 부분도
                클릭 시 해당 프로젝트의 세부 내용이 나오게 해놨습니다. 시멘틱
                태그로 만들고 역할에 따라 컴포넌트 분리하여 복잡성을
                개선하였습니다. 혼자서 만들다 보니까 시간이 오래걸리긴 했는데
                그만큼 뿌듯함이 컸습니다.
              </p>
            </div>
            <div className={classes.part}>
              <p>링크</p>
              <a href="https://kangs-portfolio-vite.firebaseapp.com/" target="blank">
                Go to Page
              </a>
              <p>깃헙</p>
              <a
                href="https://github.com/KJSoo95/Portfolio-React-"
                target="blank"
              >
                Go to github
              </a>
            </div>

            <div className={classes.skillwrap}>
              <h3>적용 기술</h3>
              <img className={classes.skill} src={html} />
              <img className={classes.skill} src={css} />
              <img className={classes.skill} src={ret} />
              <img className={classes.skill} src={modcss} />
              <img className={classes.skill} src={firebase} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
