import { testimonials } from '../data/business.js'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <h2>Kata pelanggan</h2>
        <div className="grid g3">
          {testimonials.map((t, i) => (
            <blockquote className="card" key={i}>
              <p>{t.text}</p>
              <footer className="meta">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
