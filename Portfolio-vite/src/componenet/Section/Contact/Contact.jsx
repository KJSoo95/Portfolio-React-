import { forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Contact.module.css";
import ContactPart from "./ContactPart";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Contact = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className={classes.section}>
      <h1>Contact</h1>
      <ContactPart
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        title="Mail"
        description="wltn7star@gmail.com"
      />
      <ContactPart
        icon={<FontAwesomeIcon icon={faPhone} />}
        title="Phone"
        description="010-8974-9756"
      />
      <ContactPart icon = {<FontAwesomeIcon icon={faComment}/>} title="Kakao" description="wltn7star" />
    </footer>
  );
});
Contact.displayName = "Contact";
export default Contact;
