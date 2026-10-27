// SINGLE SOURCE OF TRUTH for services and prices (IDR).
// To change a price, edit the number below. Cards, form, and WhatsApp message update automatically.

export const categories = [
  {
    id: 'fast',
    name: 'Fast Clean',
    subtitle: 'Cuci sepatu luar saja',
    description: 'Pembersihan bagian luar sepatu saja. Bagian dalam sepatu tidak dicuci.',
    items: [
      { id: 'fast-reguler', name: 'Reguler', price: 20000 },
      { id: 'fast-putih', name: 'Sepatu Putih', price: 25000 },
      { id: 'fast-multi', name: 'Multi Material', price: 25000 },
      { id: 'fast-suede', name: 'Suede', price: 25000 },
      { id: 'fast-boots', name: 'Boots / Sepatu Gunung', price: 30000 },
      { id: 'fast-anak', name: 'Sepatu Anak', price: 20000 },
      { id: 'fast-flat', name: 'Flat Shoes', price: 20000 },
    ],
  },
  {
    id: 'deep',
    name: 'Deep Clean',
    subtitle: 'Cuci sepatu luar dan dalam',
    description: 'Pembersihan bagian luar dan bagian dalam sepatu.',
    items: [
      { id: 'deep-reguler', name: 'Reguler', price: 30000 },
      { id: 'deep-putih', name: 'Sepatu Putih', price: 35000 },
      { id: 'deep-multi', name: 'Multi Material', price: 35000 },
      { id: 'deep-suede', name: 'Suede', price: 35000 },
      { id: 'deep-boots', name: 'Boots / Sepatu Gunung', price: 40000 },
      { id: 'deep-anak', name: 'Sepatu Anak', price: 25000 },
      { id: 'deep-flat', name: 'Flat Shoes', price: 25000 },
    ],
  },
  {
    id: 'bag',
    name: 'Bag Spa',
    subtitle: 'Cuci tas',
    description: 'Pembersihan tas, harga menurut ukuran.',
    items: [
      { id: 'bag-s', name: 'Bag Spa Size Small', price: 30000 },
      { id: 'bag-m', name: 'Bag Spa Size Medium', price: 40000 },
      { id: 'bag-l', name: 'Bag Spa Size Large', price: 50000 },
      { id: 'bag-xl', name: 'Bag Spa Size Extra Large', price: 60000 },
    ],
  },
  {
    id: 'helmet',
    name: 'Helmet Cleaning',
    subtitle: 'Cuci helm',
    description: 'Pembersihan helm, harga menurut jenis helm.',
    items: [
      { id: 'helmet-half', name: 'Helmet Half Face', price: 45000 },
      { id: 'helmet-full', name: 'Helmet Full Face', price: 55000 },
      { id: 'helmet-anak', name: 'Helmet Anak', price: 35000 },
    ],
  },
  {
    id: 'hat',
    name: 'Hat Cleaning',
    subtitle: 'Cuci topi',
    description: 'Pembersihan topi.',
    items: [{ id: 'hat', name: 'Hat Cleaning / Cuci Topi', price: 20000 }],
  },
]

// Flat lookup: id -> { ...item, categoryId, categoryName }
const lookup = {}
categories.forEach((c) =>
  c.items.forEach((i) => {
    lookup[i.id] = { ...i, categoryId: c.id, categoryName: c.name }
  })
)
export const getService = (id) => lookup[id]

export const formatIDR = (n) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
    .format(n)
    .replace(/\s/g, '')

// cart = [{ id, qty }]
export const lineTotal = (line) => (getService(line.id)?.price || 0) * line.qty
export const cartTotal = (cart) => cart.reduce((sum, l) => sum + lineTotal(l), 0)
