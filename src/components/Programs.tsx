import { FaDumbbell, FaWalking, FaAppleAlt, FaHeartbeat } from 'react-icons/fa'
import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Programs.css'

const iconMap: Record<string, React.ComponentType> = { FaDumbbell, FaWalking, FaAppleAlt, FaHeartbeat }

export default function Programs() {
  const ref = useScrollReveal()

  return (
    <section className="programs" id="programs">
      <div className="section-container">
        <div className="section-header">
          <h2>{siteData.programs.title}</h2>
          <p>{siteData.programs.subtitle}</p>
        </div>
        <div className="programs-grid reveal" ref={ref}>
          {siteData.programs.items.map((item) => {
            const Icon = iconMap[item.icon]
            if (!Icon) return null
            return (
              <div className="program-card" key={item.title}>
                <div className="program-icon"><Icon /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
