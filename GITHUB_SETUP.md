# 📋 PASOS PARA CREAR REPOSITORIO EN GITHUB

## Paso 1️⃣: Crea un repositorio vacío en GitHub

1. **Ve a GitHub** → https://github.com/new
2. **Nombre del repositorio**: `ProyectoWBL` (o el que prefieras)
3. **Descripción**: "World Baseball League - Habbo Roleplay Website"
4. **Selecciona**: "Public" (importante para usar dominio gratis en Netlify)
5. **Marca**: "Add .gitignore" = NO (ya tenemos uno local)
6. **Marca**: "Add a README.md" = NO (ya existe)
7. **Haz clic**: "Create repository"

---

## Paso 2️⃣: Conectar tu repositorio local a GitHub

Después de crear el repositorio en GitHub, verás una página que dice:
"…or push an existing repository from the command line"

Ejecuta los comandos que aparecen. Si no ves bien, serán algo como esto:

```bash
git remote add origin https://github.com/TU_USUARIO/ProyectoWBL.git
git branch -M main
git push -u origin main
```

⚠️ **Reemplaza `TU_USUARIO` con tu nombre de usuario en GitHub**

Ejemplo (si tu usuario es "juan123"):
```bash
git remote add origin https://github.com/juan123/ProyectoWBL.git
git branch -M main
git push -u origin main
```

---

## Paso 3️⃣: Verificar que funcionó

Ve a tu repositorio en GitHub:
- URL: `https://github.com/TU_USUARIO/ProyectoWBL`
- Deberías ver todos tus archivos listados ✅

---

## Paso 4️⃣: Conectar a Netlify para auto-deploy

1. Ve a https://app.netlify.com/
2. Si no tienes cuenta, "Sign up" con GitHub (recomendado)
3. Haz clic en "Add new site" → "Import an existing project"
4. Autoriza Netlify a acceder a tus repositorios de GitHub
5. Selecciona `ProyectoWBL` de la lista
6. Haz clic en "Deploy site"

**¡Listo!** En 1-2 minutos tu sitio estará en vivo ✅

---

## Paso 5️⃣: Personalizar URL en Netlify

1. En el dashboard de Netlify, entra en tu sitio
2. "Site settings" → "General" → "Site name"
3. Cambia el nombre a algo como `wbl-league`
4. Tu URL será: `wbl-league.netlify.app` 🎉

---

## ✅ Después de esto

Cada vez que hagas `git push` a GitHub:
1. GitHub detecta el cambio
2. Netlify lo ve automáticamente
3. Vuelve a hacer build
4. Tu sitio se actualiza en vivo (1-2 minutos)

¡Nunca más necesitas hacer upload manual!

---

## 🔗 Links útiles

- GitHub: https://github.com/new
- Netlify: https://app.netlify.com/
- Tu repositorio: `https://github.com/TU_USUARIO/ProyectoWBL`

---

**⏱️ Tiempo total: 5-10 minutos**
