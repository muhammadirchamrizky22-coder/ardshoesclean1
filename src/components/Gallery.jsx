import { gallery } from '../data/business.js'

function Shot({ src, label, title }) {
  return src ? (
    <figure className="shot">
      <img src={src} alt={`${label}: ${title}`} loading="lazy" />
      <figcaption>{label}</figcaption>
    </figure>
  ) : (
    <figure className="shot ph" aria-label={`Placeholder ${label}: ${title}`}>
      <strong>{label}</strong>
      <span>Placeholder foto</span>
    </figure>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <h2>Before & after</h2>
        <p className="sub">Kotak bergaris adalah placeholder. Foto hasil kerja asli ArdShoesClean akan ditampilkan di sini setelah tersedia.</p>
        <div className="grid g3">
          {gallery.map((g) => (
            <div className="pair" key={g.title}>
              <div className="pair-imgs">
                <Shot src={g.before} label="Before" title={g.title} />
                <Shot src={g.after} label="After" title={g.title} />
              </div>
              <p className="meta">{g.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
