import "./Footer.css";
import rigneymadeLogo from "../../assets/images/rigneymade-logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={rigneymadeLogo} alt="logo for website creator - rigneymade" />
      <a href="https://rigneymade.com/" target="_blank">
        RigneyMade <span>2024 ©</span>
      </a>
    </footer>
  );
};

export default Footer;
