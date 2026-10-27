import { useState } from 'react'
import { categories, formatIDR } from '../data/services.js'

export default function Services({ onAdd, cart }) {
  const [active, setActive] = useState(categories[0].id)
  const cat = categories.find((c) => c.id === active)
  const qtyOf = (id) => cart.find((l) => l.id === id)?.qty || 0

  return (
    <section id="services" className="section alt">
      <div className="wrap">
        <h2>Layanan dan harga</h2>
        <p className="sub">Pilih kategori, lalu tekan Tambah untuk memasukkan layanan ke pesanan. Kamu bisa memilih lebih dari satu layanan.</p>
        <div className="tabs" role="tablist" aria-label="Kategori layanan">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={c.id === active}
              aria-controls="svc-panel"
              className={c.id === active ? 'tab on' : 'tab'}
              onClick={() => setActive(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div id="svc-panel" role="tabpanel" aria-labelledby={`tab-${cat.id}`}>
          <h3 className="cat-title">{cat.name}: {cat.subtitle}</h3>
          <p className="sub">{cat.description}</p>
          <ul className="svc-list">
            {cat.items.map((s) => (
              <li className="svc" key={s.id}>
                <div>
                  <h4>{s.name}</h4>
                  <p className="price">{formatIDR(s.price)}</p>
                </div>
                <div className="svc-act">
                  {qtyOf(s.id) > 0 && <span className="badge">{qtyOf(s.id)} dipilih</span>}
                  <button className="btn btn-dark sm" onClick={() => onAdd(s.id, 1, `${cat.name} ${s.name}`)}>
                    Tambah
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
