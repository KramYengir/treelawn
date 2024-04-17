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

      <div className="contact-info">
        <ul className="contact-info__list">
          <li className="contact-info__item">
            <div className="item-icon">
              <FaLocationDot aria-label="Address" />
            </div>
            <a
              href="https://www.google.com/maps?q=Mountrath+Street,+Kilcormac,+Co.+Offaly"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mountrath Street,
              <br /> Kilcormac,
              <br /> Co. Offaly
            </a>
          </li>
          <li className="contact-info__item">
            <div className="item-icon">
              <FaPhone aria-label="Phone" />
            </div>
            <a href="tel:+3538703643669">+353 87 036 43669</a>
          </li>
          <li className="contact-info__item">
            <div className="item-icon">
              <MdEmail aria-label="Email" />
            </div>
            <a href="mailto:treelawn24@gmail.com">treelawn24@gmail.com</a>
          </li>
        </ul>
        <a href="#" className="back-to-top">
          <MdOutlineKeyboardDoubleArrowUp /> Back to the top{" "}
          <MdOutlineKeyboardDoubleArrowUp />
        </a>
      </div>
    </section>
  );
};

export default Contact;
