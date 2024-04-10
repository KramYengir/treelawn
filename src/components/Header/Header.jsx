import { useState } from "react";
import "./Header.css";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  isOpen
    ? document.body.classList.add("disable-scrolling")
    : document.body.classList.remove("disable-scrolling");

  return (
    <header className="container">
      <nav>
        <div>
          <h1>
            Tree<span>Lawn</span>
          </h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          {isOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
        {isOpen && (
          <ul className="mobile">
            <li>
              <a href="#about" onClick={() => setIsOpen(!isOpen)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsOpen(!isOpen)}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
                Get in Touch!
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
