const steps = [
  ['Pilih layanan', 'Jelajahi layanan dan tambahkan ke pesanan beserta jumlahnya.'],
  ['Cek ringkasan', 'Periksa rincian harga dan total, lalu isi nama dan nomor WhatsApp.'],
  ['Bayar dengan QRIS', 'Scan QRIS, lalu masukkan nominal sesuai total pesanan secara manual.'],
  ['Konfirmasi pembayaran', 'Centang sudah membayar dan kirim pesanan lewat WhatsApp. Admin akan mengecek pembayaran secara manual.'],
]

export default function HowItWorks() {
  return (
    <section id="how" className="section alt">
      <div className="wrap">
        <h2>Cara pesan</h2>
        <ol className="steps">
          {steps.map(([t, d]) => (
            <li key={t}><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ol>
        <p className="notice">
          QRIS statis tidak diverifikasi otomatis oleh website. Pesanan diproses setelah admin memeriksa pembayaran dan mengonfirmasi lewat WhatsApp.
          Website ini tidak menyimpan data pesanan.
        </p>
      </div>
    </section>
  )
}
