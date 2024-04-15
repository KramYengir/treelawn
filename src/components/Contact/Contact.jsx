import "./Contact.css";
// import ContactForm from "./ContactForm";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="container contact">
      <h2>
        have a question? <span>get in touch!</span>
      </h2>
      <div className="contact-wrapper">
        {/* <ContactForm /> */}
        <div className="contact-info">
          <div className="contact-info__card">
            <div className="card-icon">
              <FaLocationDot />
            </div>
            <p>
              Mountrath St.,
              <br /> Kilcormac,
              <br /> Co. Offaly
            </p>
          </div>
          <div className="contact-info__card">
            <div className="card-icon">
              <FaPhone />
            </div>
            <p>123456789</p>
          </div>
          <div className="contact-info__card">
            <div className="card-icon">
              <MdEmail />
            </div>
            <p>treelawn@gmail.com</p>
          </div>
          <a href="#">
            <MdOutlineKeyboardDoubleArrowUp /> Back to the top{" "}
            <MdOutlineKeyboardDoubleArrowUp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
