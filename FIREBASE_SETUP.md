# 🔥 Firebase Setup Guide - WBL Admin System

## Configuración de Firebase para el Sistema de Administración

Este sistema te permitirá publicar noticias desde la web sin editar código manualmente.

---

## 📋 Pasos de Configuración

### 1. Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Click en **"Agregar proyecto"** o **"Add project"**
3. Nombre del proyecto: `wbl-habbo` (o el que prefieras)
4. Desactiva Google Analytics si no lo necesitas
5. Click en **"Crear proyecto"**

---

### 2. Habilitar Authentication (Email/Password)

1. En el menú lateral, click en **"Authentication"**
2. Click en **"Get Started"** o **"Comenzar"**
3. Ve a la pestaña **"Sign-in method"**
4. Click en **"Email/Password"**
5. Activa el interruptor de **"Email/Password"** (el primero)
6. Click en **"Guardar"**

---

### 3. Crear Base de Datos Firestore

1. En el menú lateral, click en **"Firestore Database"**
2. Click en **"Create database"** o **"Crear base de datos"**
3. Selecciona **"Start in production mode"** (modo producción)
4. Elige una ubicación cercana (ej: `us-east1` para América)
5. Click en **"Habilitar"**

#### Configurar Reglas de Seguridad

Después de crear la base de datos, ve a la pestaña **"Rules"** y reemplaza el contenido con:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read access to news
    match /news/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

Click en **"Publicar"** para aplicar las reglas.

---

### 4. Obtener Credenciales del Proyecto

1. Click en el ícono de **engranaje ⚙️** (Settings) junto a "Project Overview"
2. Selecciona **"Project settings"**
3. Scroll hasta la sección **"Your apps"**
4. Click en el ícono de **Web** `</>`
5. Registra tu app:
   - Nombre: `WBL Web`
   - **NO** marques "Firebase Hosting"
   - Click en **"Register app"**
6. Copia el objeto `firebaseConfig` que aparece

---

### 5. Actualizar la Configuración en tu Proyecto

1. Abre el archivo `src/firebase.ts` en VS Code
2. Reemplaza los valores `"YOUR_..."` con tus credenciales reales:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyC...", // Tu API Key real
  authDomain: "wbl-habbo.firebaseapp.com",
  projectId: "wbl-habbo",
  storageBucket: "wbl-habbo.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

3. Guarda el archivo

---

### 6. Crear tu Primer Usuario Admin

1. Vuelve a Firebase Console → **Authentication**
2. Click en la pestaña **"Users"**
3. Click en **"Add user"**
4. Ingresa:
   - Email: tu email (ej: `admin@wbl.com`)
   - Password: una contraseña segura (mínimo 6 caracteres)
5. Click en **"Add user"**

---

## 🚀 Uso del Sistema de Admin

### Acceder al Panel de Administración

1. Ve a tu sitio web: `https://tu-sitio.netlify.app/admin-wbl-2026/login`
2. Ingresa el email y contraseña que creaste en Firebase
3. Click en **"Iniciar Sesión"**

### Publicar Noticias

1. Una vez dentro del panel admin:
   - Escribe el **título** de la noticia
   - Escribe el **contenido** (máximo 300 caracteres)
   - Selecciona una **categoría**: Temporada, Fichajes, Eventos, Anuncio
   - Click en **"Publicar Noticia"**

2. La noticia aparecerá automáticamente en la página de inicio

### Cerrar Sesión

- Click en el botón **"Cerrar Sesión"** en la esquina superior derecha

---

## 🔒 Seguridad

- **Ruta oculta**: El panel admin está en `/admin-wbl-2026` (no aparece en el navbar)
- **Autenticación requerida**: Solo usuarios autenticados pueden acceder
- **Protección de datos**: Las reglas de Firestore permiten:
  - ✅ Cualquiera puede **leer** noticias (público)
  - 🔐 Solo usuarios autenticados pueden **escribir** noticias (admins)

---

## 📊 Plan Gratuito de Firebase

Firebase ofrece un plan gratuito generoso (Spark Plan):

- **Authentication**: Ilimitado
- **Firestore**: 
  - 50,000 lecturas/día
  - 20,000 escrituras/día
  - 1 GB de almacenamiento
- **Hosting**: 10 GB de transferencia/mes

Para una liga pequeña/mediana, esto es más que suficiente.

---

## 🆘 Solución de Problemas

### Error: "Firebase config is missing"

- Verifica que hayas reemplazado TODOS los `"YOUR_..."` en `src/firebase.ts`
- Asegúrate de que no haya comillas faltantes o errores de sintaxis

### Error: "Permission denied" al publicar

- Verifica que las reglas de Firestore estén correctamente configuradas
- Asegúrate de estar autenticado al intentar publicar

### No aparecen las noticias

- Verifica que Firebase esté correctamente configurado
- Abre la consola del navegador (F12) y busca errores
- Las noticias por defecto se mostrarán si Firebase falla

---

## 📝 Añadir Más Usuarios Admin

Para agregar más administradores:

1. Ve a Firebase Console → Authentication → Users
2. Click en "Add user"
3. Ingresa el nuevo email y contraseña
4. Comparte las credenciales de forma segura

---

¿Necesitas ayuda? Contacta al equipo técnico de WBL.
