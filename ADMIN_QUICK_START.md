# 🚀 Guía Rápida - Sistema de Admin WBL

## ✅ Sistema Implementado Exitosamente

Tu sitio ahora tiene un **sistema de administración completo** para publicar noticias sin editar código.

---

## 📍 URLs Importantes

- **Sitio público**: `https://proyectowbl.netlify.app`
- **Login admin**: `https://proyectowbl.netlify.app/admin-wbl-2026/login`
- **Panel admin**: `https://proyectowbl.netlify.app/admin-wbl-2026`

---

## 🔧 Próximos Pasos (IMPORTANTE)

### 1. Configurar Firebase (15 minutos)

**Lee y sigue el archivo:** `FIREBASE_SETUP.md`

Este archivo contiene todos los pasos detallados para:
- ✅ Crear proyecto en Firebase
- ✅ Habilitar autenticación por email/password
- ✅ Crear base de datos Firestore
- ✅ Configurar reglas de seguridad
- ✅ Obtener credenciales del proyecto
- ✅ Crear tu primer usuario admin

**Sin completar estos pasos, el sistema no funcionará.**

---

### 2. Actualizar Credenciales

Después de crear tu proyecto Firebase:

1. Abre `src/firebase.ts`
2. Reemplaza los valores de configuración:

```typescript
const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

3. Guarda y haz commit de los cambios
4. Netlify se actualizará automáticamente

---

## 🎯 Cómo Funciona

### Flujo Completo

```
1. Usuario va a /admin-wbl-2026/login
   ↓
2. Ingresa email + password
   ↓
3. Firebase valida las credenciales
   ↓
4. Si es correcto → Redirige a /admin-wbl-2026
   ↓
5. Admin publica una noticia
   ↓
6. Noticia se guarda en Firestore
   ↓
7. HomePage lee las noticias de Firestore
   ↓
8. Visitantes ven las noticias actualizadas
```

### Características del Sistema

✅ **Autenticación segura** con Firebase Auth  
✅ **Base de datos en la nube** con Firestore  
✅ **Rutas protegidas** - solo admins autenticados  
✅ **Ruta oculta** - no aparece en el navbar  
✅ **Actualización en tiempo real** - sin rebuilds  
✅ **Gratis** - Plan Spark de Firebase  
✅ **Fallback** - muestra noticias por defecto si Firebase falla

---

## 📁 Archivos Creados

```
src/
├── firebase.ts              # Configuración de Firebase
├── contexts/
│   └── AuthContext.tsx      # Manejo de autenticación
├── components/
│   └── ProtectedRoute.tsx   # Protección de rutas
└── pages/
    ├── LoginPage.tsx        # Formulario de login
    └── AdminPage.tsx        # Panel de administración

FIREBASE_SETUP.md            # Guía detallada de configuración
ADMIN_QUICK_START.md         # Esta guía
```

---

## 🔐 Seguridad

### Reglas de Firestore

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /news/{document} {
      allow read: if true;              // ✅ Público
      allow write: if request.auth != null;  // 🔐 Solo admins
    }
  }
}
```

### Protección de Rutas

- `/admin-wbl-2026/login` → Público (formulario de login)
- `/admin-wbl-2026` → Protegido (requiere autenticación)

---

## 💡 Uso Diario

### Publicar una Noticia

1. Ve a `/admin-wbl-2026/login`
2. Ingresa tus credenciales
3. En el panel admin:
   - Título (máx 100 caracteres)
   - Contenido (máx 300 caracteres)
   - Categoría (Temporada / Fichajes / Eventos / Anuncio)
4. Click "Publicar Noticia"
5. ¡Listo! Aparece instantáneamente en la home

### Gestionar Admins

Para agregar más usuarios con permisos de publicación:

1. Firebase Console → Authentication → Users
2. "Add user"
3. Ingresa email + password
4. Comparte credenciales de forma segura

---

## 📊 Límites del Plan Gratuito

Firebase Spark Plan (Gratis):
- ✅ Autenticación: **Ilimitado**
- ✅ Firestore Lecturas: **50,000/día**
- ✅ Firestore Escrituras: **20,000/día**
- ✅ Almacenamiento: **1 GB**

**Para una liga mediana/pequeña esto es más que suficiente.**

---

## 🐛 Troubleshooting

### "Firebase config is missing"
→ Actualiza `src/firebase.ts` con tus credenciales reales

### "Permission denied"
→ Verifica las reglas de Firestore en Firebase Console

### Las noticias no aparecen
→ Abre la consola del navegador (F12) y busca errores  
→ Las noticias por defecto se mostrarán si hay problemas con Firebase

### "Email already in use"
→ Ese usuario ya existe en Firebase Authentication

---

## 📞 Soporte

Si tienes problemas con la configuración:

1. Revisa `FIREBASE_SETUP.md` paso a paso
2. Verifica la consola del navegador (F12) para errores
3. Verifica la Firebase Console para logs de errores
4. Contacta al equipo técnico de WBL

---

## 🎉 ¡Todo Listo!

Ahora puedes:
- ✅ Publicar noticias desde la web
- ✅ Sin editar código manualmente
- ✅ Sin hacer rebuilds
- ✅ Con autenticación segura
- ✅ Totalmente gratis

**Solo falta completar la configuración de Firebase siguiendo `FIREBASE_SETUP.md`**
