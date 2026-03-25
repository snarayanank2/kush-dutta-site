import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import OptimizedImage from './OptimizedImage'
import './Gallery.css'

export default function Gallery() {
  const ref = useScrollReveal()

  return (
    <section className="gallery" id="gallery">
      <div className="section-container">
        <div className="section-header">
          <h2>{siteData.gallery.title}</h2>
          <p>{siteData.gallery.subtitle}</p>
        </div>
        <div className="gallery-grid reveal" ref={ref}>
          {siteData.gallery.items.map((image, i) => (
            <div className="gallery-item" key={i}>
              <OptimizedImage
                image={image}
                sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 36px), 380px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
