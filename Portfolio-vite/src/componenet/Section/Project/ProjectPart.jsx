import classes from "./ProjectPart.module.css";

const ProjectPart = (props) => {
  return (
    <div className={classes.ProjectPartWrapper}>
      <div className={classes.wrapper}>
        <img className={classes.img} src={props.image} alt="image"></img>
      </div>
      <div className={classes.wrapper}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectPart;
