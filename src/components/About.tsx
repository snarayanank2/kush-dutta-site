import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about-grid reveal" ref={ref}>
          <div className="placeholder-img about-image">Photo</div>
          <div className="about-text">
            <h2>{siteData.about.title}</h2>
            {siteData.about.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="about-credentials">
              {siteData.about.credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
