# Habbo WBL – Liga de Baseball ⚾

Sitio web oficial de la **World Baseball League (WBL)** en Hobbaz, con estética Habbo y panel de administración para operar contenido dinámico de la liga en Firebase.

## 📌 Estado actual

- **Versión funcional documentada:** `v1.0.0`
- **Versión en package.json:** `0.0.1`

## 🎯 Objetivo del proyecto

Aplicación SPA para gestionar y mostrar:

- Noticias de la liga
- Equipos y roster
- Estadísticas y líderes
- Programación de partidos
- Clasificación por división
- Reglas y FAQ
- Créditos del staff fundador

## 🧩 Funcionalidades actuales

### Frontend público

- Navegación SPA con rutas públicas.
- Carga de datos desde Firestore (noticias, equipos, stats, schedule, standings).
- Diseño responsive con Tailwind y estética Habbo.
- Sección de programación con orden avanzado por fase/ronda.

### Panel de administración (protegido)

- Login con Firebase Auth.
- Gestión de **Noticias** (crear, previsualizar, eliminar).
- Gestión de **Equipos** (datos, logo, lineup, ratings/stats).
- Gestión de **Estadísticas** (campeón, equipo destacado, líderes bateo/pitcheo con entradas e imágenes).
- Gestión de **Programación**:
	- Crear/editar/eliminar partidos.
	- Subida de logos local/visitante.
	- Estado de partido y marcador final.
	- Campo `Ronda` (acepta texto libre + sugerencias: Ronda N, Semifinal, Final).
	- Permite dejar la ronda vacía y limpiar el campo en edición.
- Gestión de **Clasificación** por divisiones.

## 🗺️ Rutas disponibles

### Públicas

- `/` → Inicio
- `/stats` → Estadísticas
- `/seasons` → Temporadas
- `/faq` → Preguntas frecuentes
- `/teams` → Equipos
- `/rules` → Reglas
- `/founders` → Créditos
- `/schedule` → Programación
- `/standings` → Clasificación

### Admin

- `/admin-wbl-2026/login` → Acceso admin
- `/admin-wbl-2026` → Panel admin protegido (`ProtectedRoute`)

## 🛠️ Stack técnico

- React 18 + Vite 6 + TypeScript
- Tailwind CSS
- React Router
- Firebase:
	- Authentication
	- Firestore
	- Storage (inicializado)

## 🔐 Variables de entorno (Firebase)

Definir en `.env`:

```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

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

## 📚 Regla de orden en Programación

En `SchedulePage`, los partidos se ordenan así:

1. **Fase/ronda más alta primero**:
	 - `Final` > `Semifinal` > `Ronda N` (descendente)
2. Dentro de la misma ronda:
	 - partidos **no finalizados** arriba
	 - partidos **finalizados** debajo
3. Entre no finalizados:
	 - con fecha/hora acordada arriba
	 - sin fecha/hora debajo

## 🔄 Changelog

### v1.0.0 - 2026-03-05

- Base estable del sitio público WBL.
- Integración de panel admin con autenticación.
- CRUD funcional para noticias, equipos, programación y clasificación.
- Configuración de estadísticas dinámicas (campeón, destacado, líderes).
- Campo de ronda en programación con soporte de:
	- `Ronda N`
	- `Semifinal`
	- `Final`
- Orden avanzado de programación por fase, finalización y fecha acordada.
- Posibilidad de dejar la ronda en blanco y limpiar ese campo en edición.

## 🌐 Deploy

- Recomendado: Netlify (`NETLIFY_DEPLOYMENT.md`)
- Compatible con hosting estático (Vercel, Firebase Hosting, etc.)

---

Desarrollado para la comunidad de la **World Baseball League** 🌍⚾
