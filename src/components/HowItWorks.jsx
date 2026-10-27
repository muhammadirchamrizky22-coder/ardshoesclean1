const steps = [
  ['Pilih layanan', 'Jelajahi layanan dan tambahkan ke pesanan beserta jumlahnya.'],
  ['Cek ringkasan', 'Periksa rincian harga dan total, lalu isi nama dan nomor WhatsApp.'],
  ['Kirim lewat WhatsApp', 'Pesan siap kirim terbuka di WhatsApp. Tekan kirim di sana.'],
  ['Konfirmasi admin', 'Admin menghubungi kamu untuk konfirmasi pesanan dan cara pembayaran.'],
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
          Pesanan lewat website belum otomatis diterima. Pesanan dianggap berjalan setelah admin mengonfirmasi lewat WhatsApp.
          Website ini tidak menyimpan data pesanan dan tidak memproses pembayaran.
        </p>
      </div>
    </section>
  )
}
