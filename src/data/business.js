import heroImage from '../assets/hero.jpg'
import afterImage from '../assets/after.jpg'
import afterImage1 from '../assets/after1.jpg'
import afterImage2 from '../assets/after2.jpg'
import beforeImage from '../assets/before.jpg'
import beforeImage1 from '../assets/before 1.jpg'
import beforeImage2 from '../assets/before2.jpg'

// ============================================================
// ALL business info is edited HERE (one place).
// Items marked EDIT are not provided yet: fill in or leave empty.
// ============================================================

export const business = {
  name: 'ArdShoesClean',
  tagline: '#simplecleanbyardshoesclean',
  siteUrl: 'https://ardshoesclean.vercel.app/',
  // WhatsApp: digits only, with country code (62 = Indonesia, no leading 0).
  whatsappNumber: '6289521148863',
  whatsappDisplay: '+62 895-2114-8863',
  instagramUrl: 'https://www.instagram.com/ardshoesclean/',
  instagramHandle: '@ardshoesclean',
  tiktokHandle: '@ardshoesclean',
  // Standard TikTok profile format built from the handle. Open it once to verify it, and fix it here if needed.
  tiktokUrl: 'https://www.tiktok.com/@ardshoesclean',
  // EDIT: leave '' to hide. Not provided, so nothing is shown.
  address: '',
  hours: '',
  // EDIT: owner/business story. Leave '' to hide.
  story: '',
}

// Before/after photos for the gallery.
export const gallery = [
  { before: beforeImage, after: afterImage },
  { before: beforeImage1, after: afterImage1 },
  { before: beforeImage2, after: afterImage2 },
]

// Hero photo (genuine ArdShoesClean photo).
export { heroImage }

// Add ONLY real testimonials (with the customer's permission). Empty = section hidden.
// Format: { name: 'Nama / inisial', text: 'Isi testimoni asli' }
export const testimonials = []
