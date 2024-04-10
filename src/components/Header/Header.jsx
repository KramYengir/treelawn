import { useState } from "react";
import "./Header.css";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container">
      <nav>
        <div>
          <h1>
            Tree<span>Lawn</span>
          </h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
        {isOpen && (
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Get in Touch!</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
