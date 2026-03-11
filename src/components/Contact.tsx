import { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

export default function Contact() {
  const ref = useScrollReveal()
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const { contact } = siteData

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    try {
      const res = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-header">
          <h2>{contact.title}</h2>
          <p>{contact.subtitle}</p>
        </div>
        <div className="contact-grid reveal" ref={ref}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit" className="btn btn-dark">Send Message</button>
            {status === 'success' && (
              <p className="contact-form-message success">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form-message error">
                Something went wrong. Please try again or reach out directly.
              </p>
            )}
          </form>
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Whether you have a question about training, pricing, or just want to say hello,
              I'd love to hear from you. Reach out through the form or any of the channels below.
            </p>
            <div className="contact-links">
              <a href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-icon"><FaWhatsapp /></span>
                WhatsApp
              </a>
              <a href={contact.instagram} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-icon"><FaInstagram /></span>
                Instagram
              </a>
              <a href={`mailto:${contact.email}`} className="contact-link">
                <span className="contact-link-icon"><FaEnvelope /></span>
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
