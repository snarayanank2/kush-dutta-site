import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import OptimizedImage from './OptimizedImage'
import './About.css'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about-grid reveal" ref={ref}>
          {siteData.about.image ? (
            <OptimizedImage
              image={siteData.about.image}
              sizes="(max-width: 768px) calc(100vw - 48px), 50vw"
              className="about-image"
            />
          ) : (
            <div className="placeholder-img about-image">Photo</div>
          )}
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
