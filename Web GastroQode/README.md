# GastroQode

Landing de GastroQode: Vite + React + TanStack Router + Tailwind v4. Build estático, desplegado en Cloudflare.

## Desarrollo

```bash
npm install
npm run dev
npm run build   # genera dist/
```

## Assets

Imágenes y videos viven en `src/assets/` (ver imports en `src/routes/index.tsx`).

## Deploy en Cloudflare

- **Workers (assets estáticos):** `npm run build && npx wrangler deploy` (usa `wrangler.jsonc`, con fallback SPA).
- **Pages conectado a Git:** build command `npm run build`, output directory `dist`.

Después, agregá el dominio en Custom domains del proyecto.
