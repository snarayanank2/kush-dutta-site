import { useState } from 'react'
import { siteData } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './FAQ.css'

export default function FAQ() {
  const ref = useScrollReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="section-container">
        <div className="section-header">
          <h2>{siteData.faq.title}</h2>
          <p>{siteData.faq.subtitle}</p>
        </div>
        <div className="faq-list reveal" ref={ref}>
          {siteData.faq.items.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
