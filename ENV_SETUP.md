# Configuración de Variables de Entorno

## Local Development

1. Copia `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```

2. Rellena los valores con tus credenciales reales (Firebase y ImgBB API Key)

3. Nunca hagas commit de `.env.local` (está en `.gitignore`)

## Netlify Deployment

Para desplegar en Netlify, necesitas agregar las variables de entorno:

1. Ve a tu sitio en Netlify
2. Haz clic en **Site settings** → **Build & deploy** → **Environment**
3. Agrega las siguientes variables:

```
VITE_FIREBASE_API_KEY=tu_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_firebase_messaging_id
VITE_FIREBASE_APP_ID=tu_firebase_app_id
VITE_IMGBB_API_KEY=tu_imgbb_api_key
```

4. Guarda los cambios
5. Netlify redesplegará automáticamente con las nuevas variables

## Notas de Seguridad

- Las variables prefijadas con `VITE_` son públicas (expuestas al navegador)
- Firebase Config es seguro exponerlo (diseñado para lado del cliente)
- La API Key de ImgBB también es conocida públicamente (no es sensible)
- Nunca hagas commit de `.env` o `.env.local`
