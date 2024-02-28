import classes from "./ContactPart.module.css";

const ContactPart = (props) => {
  return (
    <div>
      <div>
        <h3>{props.icon}{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ContactPart;
