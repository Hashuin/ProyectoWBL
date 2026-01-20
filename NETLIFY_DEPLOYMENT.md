# 🚀 Guía de Deployment en Netlify

## Opción 1: Deploy automático con GitHub (Recomendado)

### Paso 1: Inicializar Git (si no está hecho)
```bash
cd f:\ProyectoWBL
git init
git add .
git commit -m "Initial commit: WBL website"
```

### Paso 2: Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `ProyectoWBL` (o el que prefieras)
3. Selecciona "Public" (para dominio gratis en Netlify)
4. Crea el repositorio

### Paso 3: Conectar tu repositorio local a GitHub
```bash
git remote add origin https://github.com/TU_USUARIO/ProyectoWBL.git
git branch -M main
git push -u origin main
```

### Paso 4: Deploy en Netlify
1. Ve a https://app.netlify.com/
2. Haz clic en "Add new site" → "Import an existing project"
3. Selecciona GitHub y autoriza
4. Busca y selecciona tu repositorio `ProyectoWBL`
5. Configuración automática:
   - Build command: `npm run build` (ya configurado en netlify.toml)
   - Publish directory: `dist` (ya configurado)
6. Haz clic en "Deploy site"

**¡Listo!** En 1-2 minutos tu sitio estará en vivo en una URL como:
- `https://tuproyecto-xxxxx.netlify.app`

---

## Opción 2: Deploy manual sin GitHub (Upload de carpeta dist)

### Paso 1: Generar build local
```bash
npm run build
```

### Paso 2: Crear cuenta en Netlify
- Ve a https://app.netlify.com/signup
- Regístrate con GitHub, Google o correo

### Paso 3: Drag & Drop
1. En el dashboard de Netlify, localiza la sección de Drag & Drop Deploy
2. Arrastra la carpeta `dist` (desde `f:\ProyectoWBL\dist`)
3. ¡Tu sitio se publicará automáticamente!

**Nota:** Este método no tiene actualizaciones automáticas. Cada cambio requiere nuevo build y upload.

---

## Opción 3: Deploy con Netlify CLI (Avanzado)

### Paso 1: Instalar Netlify CLI
```bash
npm install -g netlify-cli
```

### Paso 2: Autenticarse
```bash
netlify login
```

### Paso 3: Deploy
```bash
netlify deploy --prod
```

Cuando se pida, selecciona:
- Publish directory: `dist`

---

## Dominio Gratis en Netlify

Por defecto recibirás un dominio gratuito como:
- `random-numbers-xxxxx.netlify.app`

### Personalizar el nombre del subdomain
1. Ve a "Site settings" → "Site details"
2. Cambia "Site name" a algo como `wbl-league`
3. Tu URL será: `wbl-league.netlify.app`

### Agregar dominio personalizado (opcional)
Si tienes tu propio dominio, puedes conectarlo gratis en Netlify:
1. "Site settings" → "Domain management"
2. Sigue las instrucciones para apuntar DNS

---

## Después del Deploy ✅

### Monitoreo
- Dashboard de Netlify mostrará:
  - Despliegues recientes
  - Build logs
  - Rendimiento
  - Errores

### Actualizaciones automáticas (GitHub)
- Cada `git push` a `main` dispara un nuevo build automático
- El sitio se actualiza sin intervención manual

### Variables de Entorno (si necesitas)
- Site settings → Build & deploy → Environment
- Puedes agregar variables para producción

---

## Troubleshooting

### Build falla
- Revisa "Deploys" → "Log" para ver errores
- Asegúrate de que `npm run build` funciona localmente

### Sitio muestra 404 en rutas
- El `netlify.toml` ya incluye la redirección necesaria
- Si aún no funciona, verifica que el archivo está en la raíz del proyecto

### Cambios no aparecen
- Borra caché del navegador (Ctrl+Shift+Delete)
- Si usas GitHub, espera a que el build termine (ver "Deploys")

---

## Estructura final esperada

```
ProyectoWBL/
├── dist/              (generado por build)
├── public/
├── src/
├── netlify.toml       ✅ Creado
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

**¡Tu sitio WBL está listo para el mundo! 🌍⚾**
