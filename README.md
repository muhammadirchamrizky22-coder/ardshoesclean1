# ArdShoesClean Website

Website layanan cuci sepatu, tas, helm, dan topi. React + Vite + plain CSS. No database, no backend, no paid services.

**Order flow:** customers review their order, pay the displayed total using the static QRIS image, then send a prefilled payment confirmation through WhatsApp.
Orders are **not saved** in a website database and there is **no payment gateway**. Payment is not verified by the website; the admin checks it manually and confirms the order through WhatsApp.

## Structure
```
src/data/business.js    contact info, social links, gallery photos, testimonials (EDIT HERE)
src/data/services.js    all services and prices (single source of truth)
src/components/         Navbar, Hero, About, Services, Gallery, HowItWorks, Testimonials, Booking, Contact
src/index.css           brand colors (CSS variables at the top) and styles
public/images/          your photos
```
Sections: Home, About, Product/Service, Reservation/Order, Contact Us.

## Run locally
Requires Node.js 18+.
```bash
npm install
npm run dev        # development
npm run build      # production build (must succeed before you push)
npm run preview    # preview the build
```

## Change prices or services
Edit `src/data/services.js`: change a `price` number or add `{ id, name, price }` to a category (ids must be unique).
Service cards, order form, summary, and WhatsApp message all update automatically.

## Change contact details
Edit `src/data/business.js` (WhatsApp number is digits only, e.g. `6289521148863`).
`tiktokUrl` is built from the handle: open it once to confirm it is correct, and fix it there if not.
`address`, `hours`, and `story` are empty because they were not provided; they stay hidden until you fill them.

## Replace images
Copy real photos into `public/images/` and set paths in `business.js`, e.g. `heroImage: '/images/hero.jpg'`,
gallery `before: '/images/before-1.jpg'`. While empty, labeled placeholders are shown. Only use genuine ArdShoesClean photos.
Testimonials stay hidden until you add real ones (with the customer's permission).

## Push and deploy (GitHub + Vercel)
```bash
git add .
git commit -m "Redesign: blue brand, multi-service order form"
git push
```
Vercel is connected to the repo, so each push to `main` redeploys automatically. Check the deployment at https://ardshoesclean.vercel.app/.
If it is not connected: Vercel > Add New > Project > import the repo (Framework: Vite, Build `npm run build`, Output `dist`).

## Transaction log for UTS (keep outside the website)
Use a spreadsheet with columns: order reference, date, customer name/initials, services, actual total, payment status,
service status, evidence location, customer feedback. Order references (ASC-YYYYMMDD-XXXX) appear in each WhatsApp message.
Keep real chat/payment evidence privately and never publish customers' phone numbers or payment details.
