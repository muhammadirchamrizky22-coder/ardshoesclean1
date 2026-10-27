import { useRef, useState } from 'react'
import { testimonials } from '../data/business.js'

export default function Testimonials() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = () => {
    const track = trackRef.current
    if (!track) return

    const slides = Array.from(track.children)
    const index = slides.reduce((closestIndex, slide, currentIndex) => {
      const currentDistance = Math.abs(slide.offsetLeft - track.scrollLeft)
      const closestDistance = Math.abs(slides[closestIndex].offsetLeft - track.scrollLeft)
      return currentDistance < closestDistance ? currentIndex : closestIndex
    }, 0)
    setActiveIndex(index)
  }

  const moveSlide = (direction) => {
    const nextIndex = Math.max(0, Math.min(testimonials.length - 1, activeIndex + direction))
    trackRef.current?.children[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    setActiveIndex(nextIndex)
  }

  return (
    <section id="testimonials" className="section alt">
      <div className="wrap">
        <h2>Testimoni pelanggan</h2>
        <p className="sub">Cerita pelanggan ArdShoesClean.</p>
        <div className="testimonial-controls">
          <span className="testimonial-count" aria-live="polite">{activeIndex + 1} / {testimonials.length}</span>
          <button type="button" className="testimonial-arrow" aria-label="Testimoni sebelumnya" onClick={() => moveSlide(-1)} disabled={activeIndex === 0}>←</button>
          <button type="button" className="testimonial-arrow" aria-label="Testimoni berikutnya" onClick={() => moveSlide(1)} disabled={activeIndex === testimonials.length - 1}>→</button>
        </div>
        <div className="testimonial-track" ref={trackRef} onScroll={updateActiveIndex} aria-label="Foto testimoni pelanggan" tabIndex="0">
          {testimonials.map((testimonial) => (
            <figure className="testimonial-slide" key={testimonial.id}>
              {testimonial.image ? (
                <img src={testimonial.image} alt={`Screenshot testimoni pelanggan ${testimonial.id}`} loading="lazy" />
              ) : (
                <div className="testimonial-placeholder" aria-label={`Foto testimoni ${testimonial.id} belum ditambahkan`}>
                  <span>Foto testimoni</span>
                  <strong>{String(testimonial.id).padStart(2, '0')}</strong>
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
