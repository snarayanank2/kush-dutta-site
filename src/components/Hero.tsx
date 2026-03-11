import { siteData } from '../data/content'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>{siteData.name}</h1>
        <p className="hero-tagline">{siteData.tagline}</p>
        <p className="hero-subtext">{siteData.heroSubtext}</p>
        <a href="#contact" className="btn btn-primary">{siteData.ctaText}</a>
      </div>
    </section>
  )
}
