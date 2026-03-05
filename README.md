# Habbo WBL – Liga de Baseball ⚾

Sitio web oficial de la **World Baseball League (WBL)** en Hobbaz, con estética Habbo, panel de administración y contenido público de la liga (noticias, equipos, programación, clasificación, estadísticas, reglas, FAQ y créditos).

## 📌 Versión actual

**v1.0.0**

## 🎯 ¿De qué trata el proyecto?

Proyecto SPA orientado a la gestión y visualización de una liga de baseball roleplay en Habbo.

- **Frontend público** para jugadores y visitantes.
- **Panel admin protegido** para gestionar contenido en Firebase.
- **Programación y clasificación** con carga dinámica desde Firestore.
- **Diseño responsive** para desktop, tablet y mobile.

## 🧩 Secciones del sitio

### Públicas

- `/` — Inicio y noticias
- `/stats` — Estadísticas y líderes
- `/seasons` — Temporadas
- `/faq` — Preguntas frecuentes
- `/teams` — Equipos
- `/rules` — Reglamento
- `/founders` — Créditos
- `/schedule` — Programación
- `/standings` — Clasificación

### Administración

- `/admin-wbl-2026/login` — Login admin
- `/admin-wbl-2026` — Panel admin protegido
	- Gestión de noticias
	- Gestión de equipos
	- Gestión de estadísticas
	- Gestión de programación
	- Gestión de clasificación

## 🛠️ Stack técnico

- React 18 + Vite 6 + TypeScript
- Tailwind CSS
- React Router
- Firebase (Auth + Firestore)

## 📋 Requisitos

- Node.js 18+
- npm

## 🚀 Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 📁 Estructura principal

```text
src/
	App.tsx
	main.tsx
	index.css
	firebase.ts
	components/
		ProtectedRoute.tsx
		admin/
			ScheduleAdmin.tsx
			StandingsAdmin.tsx
	contexts/
		AuthContext.tsx
	pages/
		AdminPage.tsx
		LoginPage.tsx
		SchedulePage.tsx
		StandingsPage.tsx
	services/
		scheduleService.ts
		standingsService.ts
```

## 🔄 Changelog

### v1.0.0 - 2026-03-05

- Base estable del sitio público WBL con secciones principales.
- Integración de panel admin con autenticación.
- Gestión de programación y clasificación conectada a Firestore.
- Campo de **ronda** en programación (admin + vista pública).
- Soporte de etiquetas de ronda numéricas y fases especiales (**Semifinal**, **Final**).
- Orden avanzado en programación:
	- primero por fase/ronda (más alta arriba),
	- luego partidos no finalizados sobre finalizados,
	- en no finalizados, con fecha acordada arriba y sin fecha debajo.
- Posibilidad de dejar la ronda en blanco y limpiar el campo al editar.

## 🌐 Deploy

- Recomendado: Netlify (ver `NETLIFY_DEPLOYMENT.md`).
- Compatible con cualquier hosting estático (Vercel, Firebase Hosting, etc.).

---

Desarrollado para la comunidad de la **World Baseball League** 🌍⚾
