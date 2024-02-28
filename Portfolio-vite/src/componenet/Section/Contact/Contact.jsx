import { forwardRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Contact.module.css";
import ContactPart from "./ContactPart";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = forwardRef((props, ref) => {
  return (
    <footer ref={ref}>
      <h1>Contact</h1>
      <ContactPart
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        title="Mail"
        description="wltn7star@gmail.com"
      />
      <ContactPart title="Phone" description="010-8974-9756" />
      <ContactPart title="Kakao" description="wltn7star" />
      <ContactPart title="" description="wltn7star" />
    </footer>
  );
});
Contact.displayName = "Contact";
export default Contact;
