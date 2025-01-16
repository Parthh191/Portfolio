import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Parth Tyagi</div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`} onClick={closeMenu}>
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="/education" onClick={closeMenu}>Education</a></li>
        <li><a href="/skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="/projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}