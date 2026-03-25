import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import OptimizedImage from './OptimizedImage'
import './Testimonials.css'

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-container">
        <div className="section-header">
          <h2>{siteData.testimonials.title}</h2>
          <p>{siteData.testimonials.subtitle}</p>
        </div>
        <div className="testimonials-grid reveal" ref={ref}>
          {siteData.testimonials.items.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                {item.avatar ? (
                  <OptimizedImage
                    image={item.avatar}
                    sizes="48px"
                    className="testimonial-avatar"
                  />
                ) : (
                  <div className="placeholder-img testimonial-avatar">
                    {item.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
