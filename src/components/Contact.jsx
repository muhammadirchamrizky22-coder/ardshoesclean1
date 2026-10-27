import { business } from '../data/business.js'

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{children}</svg>
)
const IconWA = () => (<Svg><path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.5L3 21z" /><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .7c-1-.4-1.800-1.200-2.200-2.200l.7-1-1-2L9 9z" /></Svg>)
const IconIG = () => (<Svg><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r=".5" /></Svg>)
const IconTT = () => (<Svg><path d="M14 3v12a4 4 0 1 1-4-4" /><path d="M14 3c.5 2.500 2.200 4 5 4" /></Svg>)

export default function Contact() {
  const wa = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(`Halo ${business.name}, saya ingin bertanya.`)}`
  return (
    <>
      <section id="contact" className="section">
        <div className="wrap">
          <h2>Hubungi kami</h2>
          <p className="sub">{business.tagline}</p>
          <ul className="contacts">
            <li>
              <a className="contact wa" href={wa} target="_blank" rel="noopener noreferrer">
                <IconWA /><span><strong>WhatsApp</strong><small>{business.whatsappDisplay}</small></span>
              </a>
            </li>
            <li>
              <a className="contact" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
                <IconIG /><span><strong>Instagram</strong><small>{business.instagramHandle}</small></span>
              </a>
            </li>
            <li>
              <a className="contact" href={business.tiktokUrl} target="_blank" rel="noopener noreferrer">
                <IconTT /><span><strong>TikTok</strong><small>{business.tiktokHandle}</small></span>
              </a>
            </li>
          </ul>
          {(business.address || business.hours) && (
            <ul className="info">
              {business.address && <li>Alamat: {business.address}</li>}
              {business.hours && <li>Jam operasional: {business.hours}</li>}
            </ul>
          )}
        </div>
      </section>
      <footer className="footer">
        <div className="wrap">
          <p>&copy; {new Date().getFullYear()} {business.name} {business.tagline}</p>
        </div>
      </footer>
    </>
  )
}
