# Vezra Studio - Nuxt 3

Vezra Studio veb-sayti Nuxt 3, Tailwind CSS va GSAP bilan yozilgan.

## O'rnatish

```bash
# Paketlarni o'rnatish
npm install

# Dev serverni ishga tushirish
npm run dev
```

http://localhost:3000 manzilida ochiladi.

## Build

```bash
# Production build
npm run build

# Preview
npm run preview

# Static export
npm run generate
```

## Loyiha tuzilishi

```
vezra-nuxt/
├── assets/
│   └── css/
│       └── main.css       # Asosiy CSS fayl (Tailwind)
├── components/            # Vue komponentlar
│   ├── TheNavbar.vue
│   ├── TheMobileMenu.vue
│   ├── ServicesSection.vue
│   ├── ServiceCard.vue
│   ├── FAQSection.vue
│   ├── AccordionItem.vue
│   ├── CTASection.vue
│   └── TheFooter.vue
├── public/
│   └── images/           # Rasmlar shu yerga joylang
├── app.vue               # Asosiy sahifa
├── nuxt.config.ts        # Nuxt konfiguratsiyasi
└── package.json
```

## Rasmlar

Quyidagi rasmlarni `public/images/` papkasiga joylang:

- `logo-full.png` - Logo
- `hero-mountains.png` - Hero fon rasmi
- `clients-grid.png` - Klientlar rasmi
