# Omegaa Constructions

Official website for **Omegaa Construction** — a construction company based in Kanchipuram. Static Next.js frontend with project galleries, design studio, services, and contact information.

---

## Project structure

```
omegaa-constructions/
├── app/                           # Next.js routes and pages
├── components/                    # UI, layout, and page components
├── lib/                           # Data, SEO, images, and project configuration
├── public/                        # Optimized web-ready static assets
│   ├── design-studio/             # Design Studio media (WebP images + MP4 video)
│   ├── documents/                 # PDF specification sheets
│   └── images/
│       ├── about/                 # Founder photograph
│       ├── associations/          # Partner association logos
│       └── completed/             # Completed project photo galleries
├── content.md                     # Site copy reference document
├── .cursorrules                   # Project coding guidelines
└── README.md                      # Documentation
```

---

## Requirements

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/) | 18+ | Frontend dev server and build |

---

## Setup and run

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production build (static export)

```powershell
npm run build
npm run preview
```

---

## Contact page

Update phone, email, and office address in `lib/contact.ts` (`contactChannels` and `officeLocation`).

---

## Design Studio

Page order on `/ongoing` (Design Studio nav):

1. **Design Overview** — PDF exported as `01-design-overview.webp`
2. **3D Model Video** — `02-sketchup-video.mp4`
3. **Design Visualizations collage** — SketchUp image, rendered image, and room renders

**Deployed:** `public/design-studio/`  
**Config:** `lib/design-studio.ts`

---

## Completed projects

- **Hero slideshow:** `public/images/completed/hero/`
- **Project galleries:** `public/images/completed/{slug}/`
- **Metadata and order:** `lib/completed-projects.ts`

---

## About page

- Founder photo: `public/images/about/founder.webp`
- Founder copy and timeline: `lib/about.ts`

---

## License

Private — Omegaa Constructions.
