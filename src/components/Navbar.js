import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/pali-colors-logo-navbar.png`}
            alt="Pali Colors"
          />
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/">Naslovna</NavLink>
          <NavLink to="/o-nama">O nama</NavLink>
          <NavLink to="/usluge">Usluge</NavLink>
          <NavLink to="/projekti">Projekti</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;