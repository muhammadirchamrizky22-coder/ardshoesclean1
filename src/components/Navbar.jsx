import { useState } from 'react'
import { business } from '../data/business.js'

export default function Navbar({ hasTestimonials, count }) {
  const [open, setOpen] = useState(false)
  const links = [
    ['top', 'Home'],
    ['about', 'Tentang'],
    ['services', 'Layanan'],
    ['gallery', 'Galeri'],
    ['how', 'Cara pesan'],
    ...(hasTestimonials ? [['testimonials', 'Testimoni']] : []),
    ['contact', 'Kontak'],
  ]
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="logo" onClick={close}>{business.name}</a>
        <button className="burger" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav id="menu" className={open ? 'menu open' : 'menu'} aria-label="Navigasi utama">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={close}>{label}</a>
          ))}
          <a className="btn btn-primary sm" href="#booking" onClick={close}>
            Pesan{count > 0 ? ` (${count})` : ''}
          </a>
        </nav>
      </div>
    </header>
  )
}
