import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// NECESSARY INFO FOR EMAILJS
const SERVICE_ID = "aaaa";
const TEMPLATE_ID = "aaa";
const PUBLIC_KEY = "aaa";

const ContactForm = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      console.log("Form: ", form.current.checkValidity());
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          setHasSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
    }
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Full Name:</label>
        <input id="name" type="text" name="name" required />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="phone">Phone Number (optional):</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="10" required></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>

      {/* Message Success Confirmation */}

      {hasSubmitted && (
        <div className="success-msg-container">
          <div className="success-msg">
            <p>Thank You!</p>
            <p>I will get back to you shortly.</p>
            <button
              className="btn btn-primary"
              onClick={() => setHasSubmitted(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
