import heroImage from '../assets/hero.jpg'
import afterImage from '../assets/after.jpg'
import afterImage1 from '../assets/after1.jpg'
import afterImage2 from '../assets/after2.jpg'
import beforeImage from '../assets/before.jpg'
import beforeImage1 from '../assets/before 1.jpg'
import beforeImage2 from '../assets/before2.jpg'
import testimonialImage1 from '../assets/testimoni1.jpeg'
import testimonialImage2 from '../assets/testimoni2.jpeg'
import testimonialImage3 from '../assets/testimoni3.jpeg'
import testimonialImage4 from '../assets/testimoni4.jpeg'
import testimonialImage5 from '../assets/testimoni5.jpeg'
import testimonialImage6 from '../assets/testimoni6.jpeg'
import testimonialImage7 from '../assets/testimoni7.jpeg'
import testimonialImage8 from '../assets/testimoni8.jpeg'
import testimonialImage9 from '../assets/testimoni9.jpeg'
import testimonialImage10 from '../assets/testimoni10.jpeg'

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

const testimonialImages = [
  testimonialImage1,
  testimonialImage2,
  testimonialImage3,
  testimonialImage4,
  testimonialImage5,
  testimonialImage6,
  testimonialImage7,
  testimonialImage8,
  testimonialImage9,
  testimonialImage10,
]

export const testimonials = testimonialImages.map((image, index) => ({
  id: index + 1,
  image,
}))
