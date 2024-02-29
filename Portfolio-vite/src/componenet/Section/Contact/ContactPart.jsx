import classes from "./ContactPart.module.css";

const ContactPart = (props) => {
  return (
    <div className={classes.div}>
      <h3>
        {props.icon}
        {props.title}
      </h3>
      <p>{props.description}</p>
    </div>
  );
};

export default ContactPart;
