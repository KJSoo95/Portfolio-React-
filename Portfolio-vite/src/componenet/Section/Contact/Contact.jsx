import classes from "./Contact.module.css"
import ContactPart from "./ContactPart";


const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <ContactPart title = "Mail" description = "wltn7star@gmail.com"/>
            <ContactPart title = "Phone" description = "010-8974-9756"/>
            <ContactPart title = "Kakao" description = "wltn7star"/>
            <ContactPart title = "" description = "wltn7star"/>

        </div>
    );
};

export default Contact;