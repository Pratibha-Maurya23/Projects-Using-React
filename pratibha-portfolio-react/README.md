# Pratibha Portfolio (React + Vite)

This is a React port of your static portfolio.  
It keeps your original HTML structure and CSS, and adds:
- Componentized sections (Aside, Home, About, Services, Portfolio, Contact)
- Theme color switcher (updates `--skin-color` CSS variable)
- Dark/Light toggle (persists in localStorage)
- Intersection-based active nav highlight
- Vite dev server for fast reloads

## Getting Started

```bash
npm install
npm run dev
```

Then open the shown local URL.

## Assets

Place your actual images in `public/images/`:
- `profilePic.jpg`
- `portfolio-1.png` ... `portfolio-6.png`

## Notes

- Icons: The left sidebar still uses Font Awesome classes for layout, but
  in `Services` we use `lucide-react` icons for reliability. You can swap all icons to lucide if you prefer.
- All colors are controlled by CSS variables in `style.css`. The StyleSwitcher sets `--skin-color`.
