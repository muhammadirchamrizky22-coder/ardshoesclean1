import { business } from '../data/business.js'

const focus = [
  ['Sepatu', 'Fast Clean (luar saja) dan Deep Clean (luar dan dalam) untuk berbagai jenis sepatu.'],
  ['Tas', 'Bag Spa untuk tas ukuran Small sampai Extra Large.'],
  ['Helm dan topi', 'Pembersihan helm (half face, full face, anak) dan topi.'],
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about">
        <div>
          <h2>Tentang {business.name}</h2>
          <p className="lead">
            {business.name} adalah usaha jasa cuci sepatu, perawatan sneakers, dan pembersihan aksesori seperti tas, helm, dan topi.
          </p>
          <p>
            Konsep kami sederhana, sesuai tagline <strong>{business.tagline}</strong>: daftar layanan dan harga yang jelas,
            total biaya yang bisa kamu hitung sendiri sebelum memesan, dan pemesanan langsung lewat WhatsApp.
          </p>
          {business.story && <p>{business.story}</p>}
        </div>
        <ul className="focus">
          {focus.map(([t, d]) => (
            <li key={t}><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
