import classes from "./ProjectInfo.module.css";

const ProjectInfo = (props) => {
  console.log(props.part);
  return (
    <div>
      <div className={classes.projectInfoWrap}>
        <div className={classes.infoWrap}>
          <div className={classes.image}></div>
          <div className={classes.part}>
            <p>링크</p>
            <p>깃헙</p>
          </div>
        </div>
        <div className={classes.infoWrap}>
          <h3>프로젝트 소개</h3>
          <h3>적용 기술</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
