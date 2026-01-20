<!-- QUICK START GUIDE -->

# 🚀 GUÍA RÁPIDA - WBL Website en Netlify

## Opción 1️⃣: La MÁS FÁCIL (Drag & Drop - 2 minutos)

### Paso 1: Build local
```bash
npm run build
```
✅ Se genera carpeta `dist/`

### Paso 2: Ve a Netlify
1. Abre https://app.netlify.com/drop
2. **Arrastra la carpeta `dist/`** aquí
3. ¡Espera 30 segundos!

### Resultado
Tu sitio está VIVO en: `https://random-name-xxxxx.netlify.app` 🎉

---

## Opción 2️⃣: Con GitHub (Recomendado - Automático)

### Paso 1: Commit y Push a GitHub
```bash
git init
git add .
git commit -m "WBL Website - Ready for production"
git remote add origin https://github.com/TU_USUARIO/ProyectoWBL.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar en Netlify
1. Abre https://app.netlify.com/
2. "Add new site" → "Import an existing project"
3. Selecciona GitHub
4. Busca `ProyectoWBL`
5. Haz clic en "Deploy"

### Resultado
- Sitio en vivo automáticamente ✅
- Cada `git push` = nuevo deploy ⚡
- URL: `https://tuproyecto.netlify.app` 🌐

---

## Opción 3️⃣: Con Netlify CLI (Avanzado)

```bash
# Instalar
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

Selecciona `dist` como directorio de publicación.

---

## ✨ Personalizar tu Dominio

**En Netlify Dashboard:**
1. Site settings → Site details
2. "Change site name" → escribe algo como `wbl-league`
3. ✅ Tu URL: `wbl-league.netlify.app`

---

## 📊 Después del Deploy

Tu sitio incluye:

| Página | URL |
|--------|-----|
| Inicio | `/` |
| Estadísticas | `/stats` |
| Equipos | `/teams` |
| Temporadas | `/seasons` |
| FAQ | `/faq` |
| Reglas | `/rules` |
| Créditos | `/credits` |

**Todas responsivas en mobile ✅**

---

## 🔧 Hacer Cambios Después del Deploy

### Si usas GitHub:
```bash
# Edita archivos localmente
# En src/App.tsx edita los datos (teams, seasons, etc.)

git add .
git commit -m "Update: cambios"
git push

# ✅ Netlify hace rebuild automático (1-2 min)
```

### Si usas Drag & Drop:
```bash
npm run build
# Arrastra dist/ a Netlify de nuevo
```

---

## ❓ Troubleshooting

### No aparecen cambios
- Borra caché: Ctrl+Shift+Delete
- Espera a que termine el build (ver "Deploys")

### Rutas no funcionan en Netlify
- ✅ Ya está arreglado con `netlify.toml`
- SPA routing funciona automático

### Build falla
- Revisa "Deploys" → "Log"
- Verifica que `npm run build` funciona localmente

---

## 📱 Verificar Responsividad

En DevTools (F12):
1. Click en "Toggle device toolbar" (Ctrl+Shift+M)
2. Prueba en:
   - iPhone (375px)
   - iPad (768px)
   - Desktop (1440px)

Todo debe verse perfecto ✨

---

## 🎯 Resumen

```
┌─────────────────────────┐
│ Opción 1: Drag & Drop   │
│ ⏱️ 2 min | ⭐⭐⭐       │
└─────────────────────────┘
  → Copia dist/ a Netlify

┌──────────────────────────┐
│ Opción 2: GitHub + Netlify│
│ ⏱️ 5 min | ⭐⭐⭐⭐⭐   │
└──────────────────────────┘
  → Push a GitHub
  → Conectar a Netlify
  → Auto-deploy en cada push ✅

┌──────────────────────────┐
│ Opción 3: Netlify CLI    │
│ ⏱️ 5 min | ⭐⭐⭐⭐   │
└──────────────────────────┘
  → CLI deploy directo
```

---

## ✅ ¡Listo!

Tu sitio WBL está:
- ✅ Completo y responsivo
- ✅ Optimizado para producción
- ✅ Listo para 1000s de usuarios
- ✅ Con dominio gratis en Netlify

**Elige una opción arriba y ¡lánzalo! 🚀⚾**

Para más info: Ver `NETLIFY_DEPLOYMENT.md`
