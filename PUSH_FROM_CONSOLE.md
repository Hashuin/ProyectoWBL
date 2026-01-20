# 🚀 CREAR REPO EN GITHUB Y HACER PUSH - TODO DESDE CONSOLA

## PASO 1: Abre una NUEVA terminal PowerShell (cierra la actual primero)

## PASO 2: Ejecuta estos comandos EN ORDEN:

# 2.1 Autenticar con GitHub (te pedirá usuario/token)
gh auth login

# Responde así cuando pregunte:
# - What account do you want to log into? → GitHub.com
# - What is your preferred protocol for Git operations? → HTTPS
# - Authenticate Git with your GitHub credentials? → Y
# - How would you like to authenticate GitHub CLI? → Login with a web browser

# 2.2 Crear el repositorio directamente en GitHub
gh repo create ProyectoWBL --public --source=. --remote=origin --push

# ¡ESO ES! Con un solo comando:
# - Crea el repositorio en GitHub (público)
# - Conecta tu repo local a GitHub
# - Hace el primer push automáticamente

---

## ALTERNATIVA MÁS SIMPLE (sin GitHub CLI):

Ejecuta estos comandos en orden:

git remote add origin https://github.com/Hashuin/ProyectoWBL.git
git branch -M main
git push -u origin main

# Nota: GitHub te pedirá autenticación. Puedes usar:
# - Usuario: jossyrpin@gmail.com
# - Token de acceso personal (crea uno en https://github.com/settings/tokens)

---

## ¿CUÁL PREFIERES?

✅ OPCIÓN A: GitHub CLI (1 comando)
   → Más automático, menos pasos

✅ OPCIÓN B: Git manual (3 comandos)
   → Si no quieres GitHub CLI
