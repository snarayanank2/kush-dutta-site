import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'
import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  const ref = useScrollReveal()
  const { contact } = siteData

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-header">
          <h2>{contact.title}</h2>
          <p>{contact.subtitle}</p>
        </div>
        <div className="contact-content reveal" ref={ref}>
          <div className="contact-links">
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Kush%2C%20I%27d%20like%20to%20know%20more%20about%20your%20training%20programs.`}
              className="contact-link contact-link-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon"><FaWhatsapp /></span>
              <div>
                <span className="contact-link-label">WhatsApp</span>
                <span className="contact-link-detail">+91 96637 72333</span>
              </div>
            </a>
            <a
              href={contact.instagram}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon"><FaInstagram /></span>
              <div>
                <span className="contact-link-label">Instagram</span>
                <span className="contact-link-detail">@kushdutta1.0</span>
              </div>
            </a>
            <a
              href={contact.youtube}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon"><FaYoutube /></span>
              <div>
                <span className="contact-link-label">YouTube</span>
                <span className="contact-link-detail">@kushdutta</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
