import { useState } from "react";
import "./Header.css";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle toggling menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleBodyScrolling();
  };

  // Toggle body scrolling
  const toggleBodyScrolling = () => {
    if (!isOpen) {
      document.body.classList.add("disable-scrolling");
    } else {
      document.body.classList.remove("disable-scrolling");
    }
  };

  // Function to handle keyboard events
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
    toggleBodyScrolling();
  };

  // Function to handle closing the menu when clicking outside
  const handleCloseMenu = () => {
    setIsOpen(false);
    toggleBodyScrolling();
  };

  return (
    <header className="container">
      <nav>
        <h1>
          Tree<span>Lawn</span>
        </h1>
        <ul className="desktop">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact" className="btn">
              Get in Touch!
            </a>
          </li>
        </ul>
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          onKeyDown={handleKeyDown}
        >
          {isOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
        {isOpen && (
          <ul className="mobile" onClick={handleCloseMenu}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
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
