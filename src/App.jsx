import { useState } from 'react'
import { testimonials } from './data/business.js'
import { cartTotal, formatIDR } from './data/services.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import Booking from './components/Booking.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [cart, setCart] = useState([]) // [{ id, qty }]
  const [toast, setToast] = useState('')

  const addItem = (id, qty = 1, name = '') => {
    setCart((c) =>
      c.some((l) => l.id === id)
        ? c.map((l) => (l.id === id ? { ...l, qty: Math.min(99, Number(l.qty) + qty) } : l))
        : [...c, { id, qty: Math.min(99, qty) }]
    )
    setToast(name ? `${name} ditambahkan ke pesanan` : 'Ditambahkan ke pesanan')
    window.clearTimeout(window.__toastTimer)
    window.__toastTimer = window.setTimeout(() => setToast(''), 2200)
  }
  const setQty = (id, qty) => setCart((c) => c.map((l) => (l.id === id ? { ...l, qty } : l)))
  const removeItem = (id) => setCart((c) => c.filter((l) => l.id !== id))
  const clearCart = () => setCart([])

  const count = cart.reduce((n, l) => n + (Number(l.qty) || 0), 0)

  return (
    <>
      <a className="skip" href="#main">Lewati ke konten</a>
      <Navbar hasTestimonials={testimonials.length > 0} count={count} />
      <main id="main">
        <Hero />
        <About />
        <Services onAdd={addItem} cart={cart} />
        <Gallery />
        <HowItWorks />
        <Booking cart={cart} addItem={addItem} setQty={setQty} removeItem={removeItem} clearCart={clearCart} />
        {testimonials.length > 0 && <Testimonials />}
        <Contact />
      </main>
      <p className="toast" role="status" aria-live="polite">{toast}</p>
      {count > 0 && (
        <a className="cartbar" href="#booking">
          <span>{count} item dipilih</span>
          <strong>{formatIDR(cartTotal(cart))}</strong>
          <span className="go">Lihat pesanan</span>
        </a>
      )}
    </>
  )
}
