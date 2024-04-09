import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="container contact">
      <h2>
        have a question? <span>get in touch!</span>
      </h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
