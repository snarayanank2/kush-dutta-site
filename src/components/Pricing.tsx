import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Pricing.css'

export default function Pricing() {
  const ref = useScrollReveal()

  return (
    <section className="pricing" id="pricing">
      <div className="section-container">
        <div className="section-header">
          <h2>{siteData.pricing.title}</h2>
          <p>{siteData.pricing.subtitle}</p>
        </div>
        <div className="pricing-grid reveal" ref={ref}>
          {siteData.pricing.tiers.map((tier) => (
            <div
              className={`pricing-card ${tier.highlighted ? 'highlighted' : ''}`}
              key={tier.name}
            >
              <p className="pricing-card-name">{tier.name}</p>
              <p className="pricing-card-price">
                ₹{tier.price}<span>{tier.period}</span>
              </p>
              <p className="pricing-card-desc">{tier.description}</p>
              <ul className="pricing-features">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-outline">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
