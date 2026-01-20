@echo off
REM Script para conectar repositorio local a GitHub

echo.
echo ╔════════════════════════════════════════════════╗
echo ║   CONECTAR PROYECTOWBL A GITHUB                ║
echo ╚════════════════════════════════════════════════╝
echo.

setlocal enabledelayedexpansion

REM Pedir usuario de GitHub
set /p GITHUB_USER="Ingresa tu usuario de GitHub: "

if "%GITHUB_USER%"=="" (
    echo ERROR: Debes ingresar un usuario de GitHub
    pause
    exit /b 1
)

REM Pedir nombre del repositorio (default: ProyectoWBL)
set /p REPO_NAME="Nombre del repositorio (default: ProyectoWBL): "
if "%REPO_NAME%"=="" set REPO_NAME=ProyectoWBL

echo.
echo Pasos:
echo 1. Ve a https://github.com/new
echo 2. Crea un repositorio llamado "%REPO_NAME%"
echo 3. Marca "Public"
echo 4. NO marques "Add .gitignore" o "Add README"
echo 5. Crea el repositorio
echo 6. Vuelve aquí y presiona una tecla
echo.
pause

set REPO_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git

echo.
echo Conectando repositorio local a: %REPO_URL%
echo.

git remote add origin %REPO_URL%
if errorlevel 1 (
    echo ERROR: No se pudo agregar el remote
    echo Quizá ya existe. Intenta con: git remote set-url origin %REPO_URL%
    pause
    exit /b 1
)

echo ✓ Remote agregado exitosamente

echo.
echo Renombrando rama a 'main'...
git branch -M main

echo ✓ Rama renombrada

echo.
echo Haciendo push al repositorio...
git push -u origin main

if errorlevel 1 (
    echo ERROR: No se pudo hacer push
    echo Verifica que:
    echo   - Tu usuario de GitHub es correcto: %GITHUB_USER%
    echo   - El repositorio existe: https://github.com/%GITHUB_USER%/%REPO_NAME%
    echo   - Tienes acceso a GitHub desde Git
    pause
    exit /b 1
)

echo.
echo ╔════════════════════════════════════════════════╗
echo ║   ✅ ¡REPOSITORIO CONECTADO EXITOSAMENTE!     ║
echo ╚════════════════════════════════════════════════╝
echo.
echo Tu repositorio está en:
echo   https://github.com/%GITHUB_USER%/%REPO_NAME%
echo.
echo Próximo paso: Conectar a Netlify
echo   1. Ve a https://app.netlify.com/
echo   2. "Add new site" ^> "Import an existing project"
echo   3. Selecciona tu repositorio
echo   4. ¡Deploy automático en 2 minutos!
echo.
pause
