import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'
import { siteData } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{siteData.name}</h3>
            <p>{siteData.footer.tagline}</p>
          </div>
          <nav className="footer-nav">
            {siteData.nav.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <div className="footer-social">
            <a href={`https://wa.me/${siteData.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href={siteData.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={siteData.contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{siteData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
