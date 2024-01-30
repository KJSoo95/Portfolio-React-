import classes from "./SkillPart.module.css"

const SkillPart = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.h2wrapper}>
            <h2>{props.skill}</h2>
            <img className={classes.image} src={props.image}/>
            </div>
            <p>{props.description}</p>
        </div>
    );
};

export default SkillPart;