import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Achievements.css'

export default function Achievements() {
  const ref = useScrollReveal()

  return (
    <section className="achievements" id="results">
      <div className="section-container">
        <div className="section-header">
          <h2>{siteData.achievements.title}</h2>
          <p>{siteData.achievements.subtitle}</p>
        </div>
        <div className="achievements-grid reveal" ref={ref}>
          {siteData.achievements.items.map((item) => (
            <div className="achievement-card" key={item.title}>
              <p className="achievement-stat">{item.placement}</p>
              <h3>{item.title}</h3>
              <p className="achievement-category">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
