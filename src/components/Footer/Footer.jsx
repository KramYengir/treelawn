import "./Footer.css";
import rigneymadeLogo from "../../assets/images/rigneymade-logo.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://rigneymade.com/" target="_blank">
        <img src={rigneymadeLogo} alt="logo for website creator - rigneymade" />{" "}
        RigneyMade <span>2024 ©</span>
      </a>
    </footer>
  );
};

export default Footer;
