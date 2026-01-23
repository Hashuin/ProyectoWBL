# 🎯 Secciones de Programación y Clasificación - Documentación

## Descripción General

Se han agregado **dos nuevas secciones públicas** y sus correspondientes **paneles de administración**:

### 🌐 Secciones Públicas (Para todos los usuarios)

1. **📅 Programación** (`/schedule`)
   - Ver todos los partidos programados
   - Filtrar por estado: Pretemporada, Regular, Postemporada
   - Ver detalles: equipos, fecha, hora, estadio
   - Mostrar resultados de partidos finalizados

2. **📊 Clasificación** (`/standings`)
   - Ver tabla de posiciones por división
   - Estadísticas: Juegos, Victorias, Derrotas, Porcentaje, Juegos de Diferencia
   - Filtrar por división (Este, Oeste, Central)
   - Logos de equipos

---

## 📁 Estructura de Archivos Agregados

### Servicios Firebase
```
src/services/
├── scheduleService.ts    # CRUD para partidos
└── standingsService.ts   # CRUD para clasificación
```

### Páginas Públicas
```
src/pages/
├── SchedulePage.tsx      # Página pública de programación
└── StandingsPage.tsx     # Página pública de clasificación
```

### Componentes Admin
```
src/components/admin/
├── ScheduleAdmin.tsx     # Panel para gestionar partidos
└── StandingsAdmin.tsx    # Panel para gestionar clasificación
```

---

## 🔧 Cómo Usar

### Para Administradores

#### Gestionar Programación
1. Ir a `/admin-wbl-2026`
2. Hacer click en tab "Programación"
3. **Agregar Partido**: Click en "+ Agregar Partido"
   - Llenar datos del partido (equipos, fecha, hora, estadio)
   - Seleccionar estado (Pretemporada/Regular/Postemporada)
   - Si está finalizado, agregar marcadores
4. **Editar Partido**: Click en "Editar" en la tarjeta del partido
5. **Eliminar Partido**: Click en "Eliminar"

#### Gestionar Clasificación
1. Ir a `/admin-wbl-2026`
2. Hacer click en tab "Clasificación"
3. **Agregar Equipo**: Click en "+ Agregar Equipo"
   - Posición, nombre, división
   - Victorias y derrotas (el sistema calcula automáticamente)
   - Juegos de diferencia
4. **Editar Equipo**: Click en "Editar"
5. **Eliminar Equipo**: Click en "Eliminar"

### Para Usuarios

#### Ver Programación
- Ir a `/schedule` desde el navbar
- Filtrar por estado del partido
- Ver detalles completos de cada match

#### Ver Clasificación
- Ir a `/standings` desde el navbar
- Filtrar por división
- Consultar posiciones y estadísticas

---

## 📊 Modelos de Datos

### GameSchedule
```typescript
{
  id?: string;
  homeTeam: string;              // Equipo local
  awayTeam: string;              // Equipo visitante
  date: string;                  // Fecha (YYYY-MM-DD)
  time: string;                  // Hora (HH:mm)
  stadium: string;               // Nombre del estadio
  status: 'Pretemporada' | 'Regular' | 'Postemporada';
  homeTeamScore?: number;        // Goles/puntos local
  awayTeamScore?: number;        // Goles/puntos visitante
  finished: boolean;             // ¿Partido finalizado?
  createdAt?: Timestamp;
}
```

### TeamStanding
```typescript
{
  id?: string;
  rank: number;                  // Posición
  teamName: string;              // Nombre del equipo
  logo?: string;                 // URL del logo
  division: string;              // División (Este/Oeste/Central)
  games: number;                 // Total de juegos
  wins: number;                  // Victorias
  losses: number;                // Derrotas
  percentage: number;            // Porcentaje (calculado automáticamente)
  gamesBehind: number;           // Juegos de diferencia
  createdAt?: Timestamp;
}
```

---

## 🗄️ Colecciones Firebase

### `schedule` collection
- Almacena todos los partidos programados
- Índice: ordenado por fecha ascendente

### `standings` collection
- Almacena la clasificación de los equipos
- Índice: ordenado por posición

---

## 🎨 Estilos Aplicados

- **Tema Habbo**: Colores dorados y oscuros (`text-yellow-400`, `bg-gray-700`)
- **Responsive**: Diseño adaptable a móvil y desktop
- **Animaciones**: Hover effects y transiciones suaves
- **Bordes**: Estilo pixel/retro con bordes amarillos

---

## 🔗 Links en Navbar

Las nuevas secciones se agregaron al navbar principal:
- **Programación** - `/schedule`
- **Clasificación** - `/standings`

---

## ✅ Checklist de Funcionalidades

- ✅ Página pública de programación
- ✅ Página pública de clasificación
- ✅ Panel de admin para crear/editar partidos
- ✅ Panel de admin para crear/editar clasificación
- ✅ Integración completa con Firebase
- ✅ Cálculo automático de porcentaje de victorias
- ✅ Filtros por estado y división
- ✅ Responsive design
- ✅ Tema Habbo consistente
- ✅ Build sin errores

---

## 🚀 Próximas Mejoras Posibles

- [ ] Agregar búsqueda de equipos/partidos
- [ ] Historial de resultados
- [ ] Gráficos de progresión por equipo
- [ ] Exportar clasificación a CSV
- [ ] Notificaciones de cambios en partidos
- [ ] API pública para terceros
