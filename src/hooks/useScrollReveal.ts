import { useEffect, useRef } from 'react'

const DEFAULT_OPTIONS: IntersectionObserverInit = { threshold: 0.15 }

export function useScrollReveal(options: IntersectionObserverInit = DEFAULT_OPTIONS) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      options
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return ref
}
