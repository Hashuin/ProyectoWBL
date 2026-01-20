# Habbo WBL – Liga de Baseball ⚾

Sitio web responsivo con estética Habbo para la World Baseball League. Incluye múltiples secciones: inicio/noticias, calendario, estadísticas MLB-style, temporadas, FAQ, equipos, reglas y créditos. Completamente responsive para desktop, tablet y mobile.

## 🎨 Características

- ✅ **Diseño Habbo**: Paleta de colores personalizada, fuentes pixel-friendly
- ✅ **Responsive**: Mobile-first, optimizado para todos los tamaños de pantalla
- ✅ **SPA (Single Page Application)**: Navegación rápida con React Router
- ✅ **Accesible**: Focus states, reduced motion support, WCAG compliance
- ✅ **Animaciones**: Efectos float, pulse, shimmer, fade-in
- ✅ **MLB Statistics**: Tablas de líderes, rankings, estadísticas detalladas
- ✅ **8 Páginas**: Inicio, Calendario, Estadísticas, Temporadas, FAQ, Equipos, Reglas, Créditos

## 📋 Requisitos

- **Node.js 18+** y **npm** (necesarios para compilar/servir)
- Si no los tienes, instálalos desde https://nodejs.org

## 🚀 Scripts

```bash
npm install       # Instala dependencias
npm run dev       # Local dev server en http://localhost:5173
npm run build     # Genera build para producción (carpeta dist/)
npm run preview   # Sirve la build local para verificación
```

## 📦 Stack

- **React 18.3** + **Vite 6** + **TypeScript 5.6**
- **Tailwind CSS 3.4** para utilidades y diseño responsivo
- **react-router-dom 6** para enrutamiento SPA
- **Fuentes**: Press Start 2P (badges), Space Grotesk (títulos), Inter (cuerpo)

## 🗂️ Estructura

```
src/
├── App.tsx              # Layout principal, rutas, componentes y datos estáticos
├── main.tsx             # Punto de entrada React
└── index.css            # Estilos globales, animaciones, reduced-motion

public/
tailwind.config.js       # Configuración Tailwind, colores Habbo, animaciones
vite.config.ts           # Configuración Vite
netlify.toml             # Configuración para Netlify deployment
package.json
```

## 📄 Páginas

| Ruta | Nombre | Contenido |
|------|--------|----------|
| `/` | Inicio | Noticias, CTA, información general |
| `/calendar` | Calendario | Próximos juegos, fechas, lugares |
| `/stats` | Estadísticas | Líderes MLB-style, tabla general, campeón actual |
| `/seasons` | Temporadas | Información de temporadas actuales |
| `/faq` | Preguntas frecuentes | Q&A sobre la liga |
| `/teams` | Equipos | Datos de los 4 equipos principales |
| `/rules` | Reglas | Reglamento oficial |
| `/credits` | Créditos | Fundadores, creadores y contribuidores |

## 🎮 Personalización

Todos los datos están en `src/App.tsx` en arrays estáticos:
- `news` — Artículos de inicio
- `teams` — Información de equipos
- `seasons` — Datos de temporadas
- `calendarEvents` — Próximos juegos
- `faqs` — Preguntas frecuentes
- `rules` — Reglamento
- `founders` — Créditos
- `battingLeaders`, `pitchingLeaders`, `fieldingLeaders` — Estadísticas

Edita estos datos directamente en el código y ejecuta `npm run dev` para ver cambios en tiempo real.

## 🌐 Deployment

### Opción 1: Netlify (Recomendado - Fácil y Gratis)

Ver [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md) para instrucciones detalladas.

**Resumen rápido:**
1. Push el código a GitHub
2. Conecta tu repositorio a Netlify
3. ¡Deploy automático en cada push!

URL gratis: `tu-proyecto.netlify.app`

### Opción 2: Vercel, GitHub Pages u otros

El proyecto es una SPA estática. Funciona en cualquier hosting de archivos estáticos:
- **Vercel**: Importa desde GitHub, auto-deploy
- **GitHub Pages**: Configura `gh-pages` en package.json
- **Firebase Hosting**: `firebase deploy`

## 🔧 Configuración Responsive

El proyecto usa Tailwind breakpoints:
- `sm: 640px` — Tablets pequeñas
- `md: 768px` — Tablets
- `lg: 1024px` — Desktops

Todos los componentes están optimizados con:
- Tipografía escalable: `text-xs sm:text-sm md:text-base`
- Padding responsive: `p-4 sm:p-5 md:p-6`
- Grids adaptables: `grid gap-4 sm:gap-5 md:grid-cols-2`

## ✨ Próximos Pasos

1. **Desarrollo local**: `npm install && npm run dev`
2. **Hacer cambios**: Edita `src/App.tsx`, datos en arrays
3. **Build**: `npm run build` genera carpeta `dist/`
4. **Deploy**: Sube a Netlify siguiendo [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md)

## 🎯 Notas

- La navegación móvil se muestra como hamburger menu en pantallas < 768px
- Todos los botones y links tienen estados focus accesibles
- Las animaciones respetan `prefers-reduced-motion`
- La tabla de estadísticas es responsive con truncation en mobile

---

**Creado para la World Baseball League 🌍⚾**
