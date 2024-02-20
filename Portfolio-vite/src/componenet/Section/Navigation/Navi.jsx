import classes from "./Navi.module.css";

const Navi = (props) => {
  const GotoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={classes.navi}>
      <div className={classes.left} onClick={GotoTop}>
        Kang ji su
      </div>
      <div className={classes.navWrap}>
        <div onClick={props.onAboutClick}>About</div>
        <div onClick={props.onProjectClick}>Project</div>
        <div onClick={props.onSkillClick}>Skill</div>
        <div onClick={props.onContactClick}>Contact</div>
      </div>
    </nav>
  );
};

export default Navi;
