import { useState } from 'react'
import { categories, getService, lineTotal, cartTotal, formatIDR } from '../data/services.js'
import { business } from '../data/business.js'

const makeRef = () => {
  const d = new Date()
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  return `ASC-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}
const validQty = (q) => Number.isInteger(Number(q)) && Number(q) >= 1 && Number(q) <= 99

export default function Booking({ cart, addItem, setQty, removeItem, clearCart }) {
  const [form, setForm] = useState({ name: '', phone: '', notes: '' })
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState('form') // 'form' | 'confirm'
  const [ref, setRef] = useState('')
  const [pickCat, setPickCat] = useState(categories[0].id)
  const [pickSvc, setPickSvc] = useState(categories[0].items[0].id)
  const [pickQty, setPickQty] = useState(1)

  const total = cartTotal(cart)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const catItems = categories.find((c) => c.id === pickCat).items

  const changeCat = (id) => {
    setPickCat(id)
    setPickSvc(categories.find((c) => c.id === id).items[0].id)
  }
  const addPicked = () => {
    if (!validQty(pickQty)) return
    const s = getService(pickSvc)
    addItem(pickSvc, Number(pickQty), `${s.categoryName} ${s.name}`)
    setPickQty(1)
  }

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Isi nama minimal 2 huruf.'
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 9 || digits.length > 15) e.phone = 'Isi nomor WhatsApp yang valid (9-15 angka).'
    if (cart.length === 0) e.cart = 'Pilih minimal satu layanan.'
    else if (cart.some((l) => !validQty(l.qty))) e.cart = 'Jumlah tiap layanan harus bilangan bulat 1 sampai 99.'
    return e
  }

  const review = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setRef(makeRef())
    setStep('confirm')
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  const message = () =>
    [
      `Halo ${business.name}, saya ingin memesan.`,
      `No. Referensi: ${ref}`,
      '',
      `Nama: ${form.name.trim()}`,
      `WhatsApp: ${form.phone.trim()}`,
      '',
      'Pesanan:',
      ...cart.map((l) => {
        const s = getService(l.id)
        return `- ${s.categoryName} - ${s.name}: ${l.qty} x ${formatIDR(s.price)} = ${formatIDR(lineTotal(l))}`
      }),
      '',
      `Total: ${formatIDR(total)}`,
      `Catatan: ${form.notes.trim() || '-'}`,
      '',
      'Mohon konfirmasi pesanan dan cara pembayarannya. Terima kasih.',
    ].join('\n')

  const waUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(step === 'confirm' ? message() : '')}`

  const Summary = ({ editable }) => (
    <ul className="lines">
      {cart.map((l) => {
        const s = getService(l.id)
        return (
          <li key={l.id}>
            <div className="l-name">
              <strong>{s.name}</strong>
              <span>{s.categoryName} - {formatIDR(s.price)}</span>
            </div>
            {editable ? (
              <div className="qty">
                <button type="button" aria-label={`Kurangi ${s.name}`} disabled={Number(l.qty) <= 1} onClick={() => setQty(l.id, Math.max(1, Number(l.qty) - 1))}>-</button>
                <input aria-label={`Jumlah ${s.name}`} type="number" min="1" max="99" inputMode="numeric" value={l.qty}
                  onChange={(e) => setQty(l.id, e.target.value === '' ? '' : Math.min(99, Number(e.target.value)))} />
                <button type="button" aria-label={`Tambah ${s.name}`} disabled={Number(l.qty) >= 99} onClick={() => setQty(l.id, Math.min(99, Number(l.qty) + 1))}>+</button>
              </div>
            ) : (
              <span>{l.qty} x</span>
            )}
            <b className="l-sub">{formatIDR(lineTotal(l))}</b>
            {editable && <button type="button" className="rm" aria-label={`Hapus ${s.name}`} onClick={() => removeItem(l.id)}>Hapus</button>}
          </li>
        )
      })}
    </ul>
  )

  return (
    <section id="booking" className="section dark">
      <div className="wrap">
        <h2>Pesan Sekarang</h2>
        <p className="sub">Pesanan dikirim lewat WhatsApp dan tidak disimpan di database website. Pesanan baru berjalan setelah admin mengonfirmasi.</p>

        {step === 'form' ? (
          <form onSubmit={review} noValidate className="booking">
            <div className="panel">
              <h3>1. Pilih layanan</h3>
              <div className="adder">
                <div className="field">
                  <label htmlFor="pickCat">Kategori</label>
                  <select id="pickCat" value={pickCat} onChange={(e) => changeCat(e.target.value)}>
                    {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="pickSvc">Layanan</label>
                  <select id="pickSvc" value={pickSvc} onChange={(e) => setPickSvc(e.target.value)}>
                    {catItems.map((s) => <option key={s.id} value={s.id}>{s.name} ({formatIDR(s.price)})</option>)}
                  </select>
                </div>
                <div className="field q">
                  <label htmlFor="pickQty">Jumlah</label>
                  <input id="pickQty" type="number" min="1" max="99" inputMode="numeric" value={pickQty} onChange={(e) => setPickQty(e.target.value)} />
                </div>
                <button type="button" className="btn btn-dark" onClick={addPicked} disabled={!validQty(pickQty)}>Tambah</button>
              </div>

              <h3>2. Ringkasan pesanan</h3>
              {cart.length === 0 ? (
                <p className="empty">Belum ada layanan. Pilih di atas atau tekan Tambah pada daftar layanan.</p>
              ) : (
                <>
                  <Summary editable />
                  <p className="total">Total <strong>{formatIDR(total)}</strong></p>
                  <button type="button" className="link" onClick={clearCart}>Kosongkan pesanan</button>
                </>
              )}
              {errors.cart && <p className="err" role="alert">{errors.cart}</p>}
            </div>

            <div className="panel">
              <h3>3. Data kamu</h3>
              <div className="field">
                <label htmlFor="name">Nama</label>
                <input id="name" value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
                {errors.name && <p className="err" id="name-err" role="alert">{errors.name}</p>}
              </div>
              <div className="field">
                <label htmlFor="phone">Nomor WhatsApp</label>
                <input id="phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="08xxxxxxxxxx" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
                {errors.phone && <p className="err" id="phone-err" role="alert">{errors.phone}</p>}
              </div>
              <div className="field">
                <label htmlFor="notes">Catatan (opsional)</label>
                <textarea id="notes" rows="3" value={form.notes} onChange={set('notes')} placeholder="Contoh: merek sepatu, kondisi noda, atau permintaan lain" />
              </div>
              <button className="btn btn-primary wide" type="submit">Tinjau pesanan</button>
              <p className="hint">Belum ada pesan yang dikirim. Kamu akan melihat ringkasan dulu sebelum WhatsApp dibuka.</p>
            </div>
          </form>
        ) : (
          <div className="panel confirm" aria-live="polite">
            <h3>Konfirmasi pesanan</h3>
            <p className="hint">No. Referensi: <strong>{ref}</strong></p>
            <p>Nama: {form.name.trim()}<br />WhatsApp: {form.phone.trim()}<br />Catatan: {form.notes.trim() || '-'}</p>
            <Summary />
            <p className="total">Total <strong>{formatIDR(total)}</strong></p>
            <p className="notice">
              Tombol di bawah hanya membuka WhatsApp dengan pesan siap kirim. Kamu harus menekan kirim di WhatsApp.
              Pesanan baru dianggap diterima setelah admin membalas dan mengonfirmasi. Pembayaran disepakati lewat WhatsApp.
            </p>
            <div className="row">
              <a className="btn btn-primary" href={waUrl} target="_blank" rel="noopener noreferrer">Buka WhatsApp dan kirim pesanan</a>
              <button type="button" className="btn btn-ghost-light" onClick={() => setStep('form')}>Ubah pesanan</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
