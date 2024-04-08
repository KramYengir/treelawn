import { useState } from "react";
import "./Header.css";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container">
      <nav>
        <div>
          <h1>TreeLawn</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoIosMenu />
        </button>
        {isOpen && (
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Get in Touch!</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
