import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/pali-colors-logo-navbar.png`}
            alt="Pali Colors"
          />
        </NavLink>

        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otvori navigaciju"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
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