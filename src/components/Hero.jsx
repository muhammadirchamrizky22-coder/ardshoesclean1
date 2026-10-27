import { business, heroImage } from '../data/business.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="tag">{business.tagline}</p>
          <h1>Cuci sepatu, tas, helm, dan topi dengan mudah.</h1>
          <p className="lead">
            {business.name} menyediakan layanan cuci dan perawatan sepatu, sneakers, tas, helm, dan topi.
            Pilih layanan, hitung total otomatis, lalu kirim pesanan lewat WhatsApp.
          </p>
          <div className="row">
            <a className="btn btn-primary" href="#booking">Pesan Sekarang</a>
            <a className="btn btn-ghost" href="#services">Lihat Layanan</a>
          </div>
        </div>
        <div className="hero-visual">
          {heroImage ? (
            <img src={heroImage} alt="Sepatu yang dicuci oleh ArdShoesClean" width="640" height="800" />
          ) : (
            <div className="ph" role="img" aria-label="Placeholder foto hero">
              <strong>Foto hero</strong>
              <span>Placeholder. Isi heroImage di src/data/business.js dengan foto asli ArdShoesClean.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
