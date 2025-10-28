// import { Link } from "react-router-dom"
// import "./Header.css"

// function Header() {
//   return (
//     <header className="header">
//       <div className="header-content">
//         <Link to="/" className="brand">
//           RSIS International
//         </Link>
//         <div className="header-right">
//           <span className="help-text">Need help?</span>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let ticking = false;
    const updateHeader = () => {
      const scrollY = window.scrollY;
      setIsShrunk(scrollY > 50);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestTick);
    return () => window.removeEventListener("scroll", requestTick);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "AboutUs", path: "/about-us" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/help" },
  ];

  return (
    <header className={`header ${isShrunk ? "shrunk" : ""}`} role="banner">
      <div className="header-content">
        <Link to="/" className="brand" aria-label="RSIS International Home">
          RSIS International
        </Link>
        <nav className="nav-menu" role="navigation">
          <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        <div className="header-right">
          <Link
            to="/contact"
            className="help-button"
            aria-label="Need help? Contact us"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
          >
            <span className="help-icon">?</span>
            <span className="help-text">Need help?</span>
          </Link>
          {showTooltip && (
            <div className="tooltip" role="tooltip">
              Click for support or email info@rsis.com
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
