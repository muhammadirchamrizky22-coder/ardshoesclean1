import { gallery } from '../data/business.js'

function Shot({ src, label, title }) {
  return src ? (
    <figure className="shot">
      <img src={src} alt={title ? `${label}: ${title}` : label} loading="lazy" />
    </figure>
  ) : (
    <figure className="shot ph" aria-label={title ? `Placeholder ${label}: ${title}` : `Placeholder ${label}`}>
      <strong>{label}</strong>
      <span>Placeholder foto</span>
    </figure>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <h2>Katalog</h2>
        <p className="sub">Dokumentasi hasil perawatan sepatu ArdShoesClean.</p>
        <div className="grid g3">
          {gallery.map((g) => (
            <div className="pair" key={g.before}>
              <div className="pair-imgs">
                <Shot src={g.before} label="Before" title={g.title} />
                <Shot src={g.after} label="After" title={g.title} />
              </div>
              {g.title && <p className="meta">{g.title}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
