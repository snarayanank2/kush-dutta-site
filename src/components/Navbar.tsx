import { useState } from 'react'
import { siteData } from '../data/content'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo">{siteData.name}</a>

        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {siteData.nav.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
