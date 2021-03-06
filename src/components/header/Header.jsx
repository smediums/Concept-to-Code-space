import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as OpenToggle } from "./assets/icon-hamburger.svg";
import { ReactComponent as CloseMenu } from "./assets/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [navShow, setNavShow] = useState(false);

  const handleToggle = () => {
    setNavShow(!navShow);
  };

  return (
    <header className="header">
      <div className="logo">
        <Logo className="theLogo" />
      </div>
      <OpenToggle className="toggler" onClick={handleToggle} />
      <nav className={navShow === true ? "showNav" : ""}>
        <CloseMenu className="close" onClick={handleToggle} />
        <ul className="navLinks">
          <li>
            <Link to="/" className="navLink" onClick={handleToggle}>
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination" className="navLink" onClick={handleToggle}>
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew" className="navLink" onClick={handleToggle}>
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology" className="navLink" onClick={handleToggle}>
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
