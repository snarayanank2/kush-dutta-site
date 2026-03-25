import { useState, useCallback, useEffect } from 'react'
import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import OptimizedImage from './OptimizedImage'
import './Gallery.css'

export default function Gallery() {
  const ref = useScrollReveal()
  const items = siteData.gallery.items
  const [active, setActive] = useState(0)
  const current = items[active]!

  const next = useCallback(() => {
    setActive((i) => (i + 1) % items.length)
  }, [items.length])

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="gallery" id="testimonials">
      <div className="section-container">
        <div className="section-header">
          <h2>{siteData.gallery.title}</h2>
          <p>{siteData.gallery.subtitle}</p>
        </div>
        <div className="carousel reveal" ref={ref}>
          <div className="carousel-slide">
            <div className="carousel-image">
              <OptimizedImage
                image={current.image}
                sizes="(max-width: 500px) calc(100vw - 32px), 500px"
              />
            </div>
            <div className="carousel-quote">
              <blockquote>
                <p>{current.quote}</p>
                <cite>— {current.name}</cite>
              </blockquote>
            </div>
          </div>
          <div className="carousel-controls">
            <button onClick={prev} aria-label="Previous slide">&#8592;</button>
            <div className="carousel-dots">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next slide">&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  )
}
