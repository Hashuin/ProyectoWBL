import { useMemo, useEffect, useState } from 'react';
import { Link, Route, Routes, Outlet, useLocation } from 'react-router-dom';

const news = [
  {
    title: 'Temporada 5 arranca el 12 de febrero',
    body: 'Nuevas reglas de pitcheo, uniformes retro y modo espectador mejorado en Habbo.',
    tag: 'Temporada',
    date: 'Enero 2026'
  },
  {
    title: 'Mercado de fichajes abierto',
    body: 'Los equipos pueden registrar hasta 2 agentes libres por jornada. Consulta a tu GM.',
    tag: 'Fichajes',
    date: 'Enero 2026'
  },
  {
    title: 'Evento amistoso en el lobby',
    body: 'Mini home run derby en la plaza principal. Premios de rarezas y placas limitadas.',
    tag: 'Eventos',
    date: 'Próximo sábado'
  }
];

const teams = [
  {
    name: 'Habbo Meteors',
    city: 'Ciudad Pixel',
    record: '18-6',
    power: 92,
    contact: 87,
    defense: 90,
    speed: 84,
    lineup: ['Kiro (P)', 'Luna (SS)', 'Dex (1B)', 'Mika (CF)', 'Rho (C)']
  },
  {
    name: 'Neon Caps',
    city: 'Neón Central',
    record: '15-9',
    power: 85,
    contact: 90,
    defense: 86,
    speed: 88,
    lineup: ['Taro (P)', 'Eli (SS)', 'Nova (RF)', 'Seth (2B)', 'Mori (C)']
  },
  {
    name: 'Pixel Pirates',
    city: 'Bahía 8-bit',
    record: '13-11',
    power: 83,
    contact: 82,
    defense: 80,
    speed: 86,
    lineup: ['Ray (P)', 'Cora (LF)', 'Zed (3B)', 'Ivy (CF)', 'Tess (C)']
  },
  {
    name: 'Retro Rockets',
    city: 'Órbita 2004',
    record: '12-12',
    power: 80,
    contact: 78,
    defense: 81,
    speed: 79,
    lineup: ['Vox (P)', 'Ari (SS)', 'Neo (1B)', 'Rin (RF)', 'Kai (C)']
  }
];

const seasons = [
  {
    name: 'Season 1 · 2026',
    status: 'Próxima',
    highlight: 'Regresa el modo noche en el estadio Habbo Square.',
    starts: 'Por definir'
  }
];

const faqs = [
  {
    question: '¿De cuántos jugadores está compuesta la alineación del equipo?',
    answer:
      'Dos equipos de hasta cinco jugadores. El LOCAL inicia fildeando con tres: pitcher, líder/estratega y short/primera según situación. Tras 3 outs, batean cuatro o hasta cinco en orden comunicado al árbitro.'
  },
  {
    question: '¿Cómo empiezo mi carrera dentro de la liga?',
    answer:
      'Únete al Discord y busca a los capacitadores. Te enseñan lo básico. Puedes esperar a mercado de fichajes o fichar como AGENTE LIBRE si un equipo necesita jugador.'
  }
];

const founders = [
  { name: 'Lucas', role: 'Fundador', bio: 'Visionario y líder del proyecto WBL.', size: 'normal', image: '/avatars/lucas.png' },
  { name: 'Kush', role: 'Director de Tecnología', bio: 'Encargado del desarrollo técnico y coordinación general del proyecto.', size: 'normal', image: '/avatars/kush.png' },
  { name: 'Jonatito (Pepe)', role: 'Desarrollador de Aplicaciones', bio: 'Desarrolla herramientas y aplicaciones para la gestión de la liga.', size: 'normal', image: '/avatars/pepe.png' },
  { name: 'Wya', role: 'Inversionista', bio: 'Brinda el respaldo financiero para hacer realidad la liga.', size: 'normal', image: '/avatars/wya.png' },
  { name: 'Flash', role: 'Diseñador', bio: 'Responsable de la identidad visual y estética del proyecto.', size: 'normal', image: '/avatars/flash.png' },
  { name: 'Skyripa', role: 'Colaborador', bio: 'Apoyo en el desarrollo del proyecto.', size: 'small' },
  { name: 'Alucard', role: 'Colaborador', bio: 'Apoyo en el desarrollo del proyecto.', size: 'small' }
];

const rules = [
  {
    title: 'Reglas de juego',
    description: 'Las reglas oficiales de la WBL serán publicadas próximamente. Incluirán mecánicas de bateo, pitcheo, fildeo y orden de turnos.'
  },
  {
    title: 'Código de conducta',
    description: 'Todos los jugadores deben mantener respeto hacia compañeros, árbitros y staff. Fair play ante todo.'
  },
  {
    title: 'Formato de temporada',
    description: 'Temporada regular de 24 juegos por equipo, seguida de playoffs al mejor de 7 series. Detalles en Discord.'
  }
];

const battingLeaders = [
  {
    label: 'OPS',
    stat: '.987',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Jackson Holliday', value: '.889', imageUrl: '' },
      { name: 'Jordan Westburg', value: '.770', imageUrl: '' },
      { name: 'Colton Cowser', value: '.732', imageUrl: '' }
    ]
  },
  {
    label: 'Jonrones',
    stat: '31',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Jackson Holliday', value: '25', imageUrl: '' },
      { name: 'Jordan Westburg', value: '21', imageUrl: '' },
      { name: 'Colton Cowser', value: '19', imageUrl: '' }
    ]
  },
  {
    label: 'Carreras',
    stat: '92',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Jackson Holliday', value: '81', imageUrl: '' },
      { name: 'Adley Rutschman', value: '74', imageUrl: '' },
      { name: 'Ryan Mountcastle', value: '68', imageUrl: '' }
    ]
  },
  {
    label: 'Promedio',
    stat: '.274',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Jackson Holliday', value: '.262', imageUrl: '' },
      { name: 'Adley Rutschman', value: '.258', imageUrl: '' },
      { name: 'Ryan Mountcastle', value: '.253', imageUrl: '' }
    ]
  },
  {
    label: 'Impulsadas',
    stat: '88',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Adley Rutschman', value: '72', imageUrl: '' },
      { name: 'Ryan Mountcastle', value: '69', imageUrl: '' },
      { name: 'Jackson Holliday', value: '65', imageUrl: '' }
    ]
  },
  {
    label: 'Hits',
    stat: '158',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Jackson Holliday', value: '150', imageUrl: '' },
      { name: 'Jordan Westburg', value: '134', imageUrl: '' },
      { name: 'Adley Rutschman', value: '129', imageUrl: '' }
    ]
  }
];

const pitchingLeaders = [
  {
    label: 'Ganados',
    stat: '14',
    leader: 'Dean Kremer',
    position: 'P · #64',
    entries: [
      { name: 'Trevor Rogers', value: '11', imageUrl: '' },
      { name: 'Zach Eflin', value: '9', imageUrl: '' },
      { name: 'Keegan Akin', value: '8', imageUrl: '' }
    ]
  },
  {
    label: 'Salvados',
    stat: '21',
    leader: 'Félix Bautista',
    position: 'P · #74',
    entries: [
      { name: 'Keegan Akin', value: '8', imageUrl: '' },
      { name: 'Yennier Cano', value: '4', imageUrl: '' },
      { name: 'Dietrich Enns', value: '3', imageUrl: '' }
    ]
  },
  {
    label: 'Ponches',
    stat: '182',
    leader: 'Dean Kremer',
    position: 'P · #64',
    entries: [
      { name: 'Cade Povich', value: '156', imageUrl: '' },
      { name: 'Trevor Rogers', value: '143', imageUrl: '' },
      { name: 'Keegan Akin', value: '97', imageUrl: '' }
    ]
  },
  {
    label: 'PCL (ERA)',
    stat: '3.42',
    leader: 'Dean Kremer',
    position: 'P · #64',
    entries: [
      { name: 'Cade Povich', value: '3.68', imageUrl: '' },
      { name: 'Trevor Rogers', value: '3.91', imageUrl: '' },
      { name: 'Zach Eflin', value: '4.02', imageUrl: '' }
    ]
  },
  {
    label: 'Innings lanzados',
    stat: '183.1',
    leader: 'Dean Kremer',
    position: 'P · #64',
    entries: [
      { name: 'Cade Povich', value: '168.2', imageUrl: '' },
      { name: 'Trevor Rogers', value: '162.1', imageUrl: '' },
      { name: 'Zach Eflin', value: '151.0', imageUrl: '' }
    ]
  },
  {
    label: 'WHIP',
    stat: '1.21',
    leader: 'Dean Kremer',
    position: 'P · #64',
    entries: [
      { name: 'Cade Povich', value: '1.25', imageUrl: '' },
      { name: 'Trevor Rogers', value: '1.28', imageUrl: '' },
      { name: 'Zach Eflin', value: '1.29', imageUrl: '' }
    ]
  }
];

const fieldingLeaders = [
  {
    label: 'Puestos out',
    stat: '518',
    leader: 'Adley Rutschman',
    position: 'C · #35',
    entries: [
      { name: 'Coby Mayo', value: '486', imageUrl: '' },
      { name: 'Ryan Mountcastle', value: '361', imageUrl: '' },
      { name: 'Gunnar Henderson', value: '310', imageUrl: '' }
    ]
  },
  {
    label: '% de fildeo',
    stat: '1.000',
    leader: 'Dean Kremer',
    position: 'P · #64',
    entries: [
      { name: 'Gunnar Henderson', value: '.986', imageUrl: '' },
      { name: 'Jackson Holliday', value: '.981', imageUrl: '' },
      { name: 'Adley Rutschman', value: '.979', imageUrl: '' }
    ]
  },
  {
    label: 'Entradas',
    stat: '1249.2',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Jackson Holliday', value: '1202.2', imageUrl: '' },
      { name: 'Coby Mayo', value: '586.1', imageUrl: '' },
      { name: 'Adley Rutschman', value: '573.1', imageUrl: '' }
    ]
  },
  {
    label: 'Asistencias',
    stat: '371',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Jackson Holliday', value: '331', imageUrl: '' },
      { name: 'Jordan Westburg', value: '81', imageUrl: '' },
      { name: 'Ryan Mountcastle', value: '37', imageUrl: '' }
    ]
  },
  {
    label: 'Chances totales',
    stat: '585',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Adley Rutschman', value: '547', imageUrl: '' },
      { name: 'Jackson Holliday', value: '531', imageUrl: '' },
      { name: 'Coby Mayo', value: '517', imageUrl: '' }
    ]
  },
  {
    label: 'Doble matanzas',
    stat: '76',
    leader: 'Gunnar Henderson',
    position: 'SS · #2',
    entries: [
      { name: 'Jackson Holliday', value: '72', imageUrl: '' },
      { name: 'Coby Mayo', value: '49', imageUrl: '' },
      { name: 'Ryan Mountcastle', value: '37', imageUrl: '' }
    ]
  }
];

const battingTable = [
  {
    name: 'Gunnar Henderson', imageUrl: '', team: 'MET', pos: 'SS',
    games: 154, tb: 577, h: 158, hr: 31, rbi: 88, bb: 68, so: 137, avg: '.274', obp: '.349', slg: '.438', ops: '.787'
  },
  {
    name: 'Jackson Holliday', imageUrl: '', team: 'MET', pos: '2B',
    games: 149, tb: 586, h: 152, hr: 25, rbi: 65, bb: 55, so: 140, avg: '.262', obp: '.314', slg: '.375', ops: '.689'
  },
  {
    name: 'Jordan Westburg', imageUrl: '', team: 'NEO', pos: '3B',
    games: 152, tb: 538, h: 147, hr: 21, rbi: 70, bb: 41, so: 170, avg: '.265', obp: '.313', slg: '.457', ops: '.770'
  },
  {
    name: 'Colton Cowser', imageUrl: '', team: 'PIX', pos: 'CF',
    games: 142, tb: 327, h: 104, hr: 19, rbi: 58, bb: 40, so: 127, avg: '.196', obp: '.269', slg: '.385', ops: '.654'
  },
  {
    name: 'Adley Rutschman', imageUrl: '', team: 'MET', pos: 'C',
    games: 138, tb: 322, h: 129, hr: 18, rbi: 72, bb: 57, so: 90, avg: '.248', obp: '.300', slg: '.388', ops: '.688'
  }
];

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/stats', label: 'Estadísticas' },
  { to: '/seasons', label: 'Temporadas' },
  { to: '/faq', label: 'FAQ' },
  { to: '/teams', label: 'Equipos' },
  { to: '/rules', label: 'Reglas' },
  { to: '/founders', label: 'Créditos' }
];

const StatBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between text-sm text-white/80 font-medium">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const Avatar = ({ name, imageUrl }: { name: string; imageUrl?: string }) => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/12 via-white/6 to-white/3 border border-white/15 grid place-items-center overflow-hidden">
    {imageUrl ? (
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    ) : (
      <span className="text-xs font-semibold text-white/80">X</span>
    )}
  </div>
);

const Shell = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));
  // Dynamic document title per route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Inicio',
      '/stats': 'Estadísticas',
      '/seasons': 'Temporadas',
      '/faq': 'FAQ',
      '/teams': 'Equipos',
      '/rules': 'Reglas',
      '/founders': 'Créditos'
    };
    const t = titles[location.pathname] || 'WBL';
    document.title = `WBL · ${t}`;
    setMobileMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-white relative flex flex-col">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-grid" aria-hidden />
      <header className="sticky top-0 z-20 backdrop-blur bg-[#0f1018]/85 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/" className="hover:scale-110 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018]">
              <img src="/LogoWBL.png" alt="WBL Logo" className="h-14 sm:h-16 md:h-20 w-auto drop-shadow-[0_0_12px_rgba(255,156,51,0.6)]" />
            </Link>
            <div className="leading-tight">
              <p className="font-display text-sm sm:text-lg">Liga de Baseball · Habbo</p>
              <p className="text-xs text-white/70">Temporada 1 · Universo Pixel</p>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 text-xs sm:text-sm font-medium text-white/80">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`hover:text-white transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] ${isActive(item.to) ? 'text-white' : 'text-white/80'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/5 bg-[#0f1018]/95 px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.to)
                    ? 'bg-habboOrange text-[#1f1d2b] font-medium'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-5 pb-16 sm:pb-20 pt-4 sm:pt-6 flex-1">
        <div key={location.pathname} className="animate-fadeIn">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0c12] mt-auto">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 py-4 sm:py-6 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-base sm:text-lg">World Baseball League · Habbo</p>
            <p className="text-white/60 text-xs sm:text-sm">© 2026 WBL. Todos los derechos reservados. Proyecto de rol, no oficial.</p>
          </div>
          <a
            href="https://discord.com"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-lg bg-habboSky text-[#0f1018] font-semibold shadow-pixel relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c12]"
          >
            Únete al Discord
          </a>
        </div>
      </footer>
    </div>
  );
};

const HomePage = () => (
  <section className="min-h-screen grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start relative px-4 sm:px-5 py-8 sm:py-12" style={{backgroundImage: 'url(/fondo.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
    {/* Overlay difuminado */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0f1018]/45 via-[#0f1018]/65 to-[#0f1018]/80 backdrop-blur-sm pointer-events-none"></div>
    
    {/* Cards con z-index para estar sobre el fondo */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow relative z-10">
      <div className="section-title mb-4 text-[8px] sm:text-[10px]">Bienvenida</div>
      <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
        Bienvenido a la World Baseball League de Habbo
      </h1>
      <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
        Liga oficial roleplay con fixtures semanales, mercado de fichajes, transmisión en salas Habbo y stats en vivo. Vive el pixel-ball con estética retro y comunidades activas.
      </p>
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        <div className="p-3 sm:p-4 rounded-xl bg-habboInk/70 border border-white/10">
          <p className="text-xs sm:text-sm text-white/70 mb-1">Arranque temporada</p>
          <p className="font-semibold text-base sm:text-lg">12 Feb · 20:00 HBT</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl bg-habboInk/70 border border-white/10">
          <p className="text-xs sm:text-sm text-white/70 mb-1">Estadio</p>
          <p className="font-semibold text-base sm:text-lg">Habbo Square · Lobby</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
        <a
          href="https://discord.com"
          className="px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-habboOrange text-[#1f1d2b] font-semibold shadow-pixel animate-pulseGlow relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboGold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018]"
        >
          Unirse al Discord
        </a>
        <Link
          to="/stats"
          className="px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-habboSky/50 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018]"
        >
          Ver estadísticas
        </Link>
      </div>
    </div>

    <div className="space-y-4 relative z-10">
      <div className="bg-habboInk/80 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow">
        <div className="section-title mb-4 text-[8px] sm:text-[10px]">Noticias</div>
        <div className="space-y-3 sm:space-y-4">
          {news.map((item) => (
            <article key={item.title} className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 hover:border-habboSky/50 hover:bg-white/8 transition-all hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-2 text-[10px] sm:text-xs text-white/60 uppercase tracking-wide">
                <span>{item.tag}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="font-semibold mb-1 text-sm sm:text-base">{item.title}</h3>
              <p className="text-xs sm:text-sm text-white/75">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

    </div>
  </section>
);

const StatsPage = () => {
  const featured = useMemo(() => teams[0], []);
  const champion = useMemo(() => ({
    name: 'Habbo Meteors',
    season: 'Season 4 · 2025',
    detail: 'Serie 4-2 vs Neon Caps'
  }), []);

  const LeaderCard = ({
    title,
    stat,
    leader,
    position,
    entries
  }: {
    title: string;
    stat: string;
    leader: string;
    position: string;
    entries: { name: string; value: string; imageUrl?: string }[];
  }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 card-glow grid gap-3 hover:border-habboSky/30 hover:bg-white/8 transition-all hover:scale-[1.02]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-white/60 uppercase mb-1">{title}</p>
          <p className="text-4xl md:text-5xl font-black leading-none">{stat}</p>
          <p className="mt-2 font-semibold">{leader}</p>
          <p className="text-xs text-white/60">{position}</p>
        </div>
        <div className="w-20 h-24 rounded-xl bg-white/8 border border-white/10" />
      </div>
      <div className="divide-y divide-white/5 rounded-xl border border-white/5 bg-white/3">
        {entries.map((item) => (
          <div key={item.name} className="flex items-center gap-3 px-3 py-2">
            <Avatar name={item.name} imageUrl={item.imageUrl} />
            <div className="flex-1">
              <p className="text-sm font-medium">{item.name}</p>
            </div>
            <span className="font-semibold text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Equipo destacado */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow">
          <p className="text-xs sm:text-sm text-white/70 mb-2">Equipo destacado</p>
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-xl sm:text-2xl font-display">{featured.name}</h3>
            <p className="text-xs sm:text-base text-white/70">{featured.city} · {featured.record}</p>
          </div>
          <div className="space-y-3">
            <StatBar label="Poder" value={featured.power} color="bg-habboOrange" />
            <StatBar label="Contacto" value={featured.contact} color="bg-habboMint" />
            <StatBar label="Defensa" value={featured.defense} color="bg-habboSky" />
            <StatBar label="Velocidad" value={featured.speed} color="bg-habboBrick" />
          </div>
          <div className="mt-3 sm:mt-4">
            <p className="text-xs sm:text-sm text-white/70 mb-1 sm:mb-2">Alineación</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {featured.lineup.map((p) => (
                <span key={p} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* TOP categorías */}
        <div className="grid gap-4 md:grid-cols-2">
          <LeaderCard title="Impulsadas (RBI)" stat={battingLeaders[4].stat} leader={battingLeaders[4].leader} position={battingLeaders[4].position} entries={battingLeaders[4].entries} />
          <LeaderCard title="Hits" stat={battingLeaders[5].stat} leader={battingLeaders[5].leader} position={battingLeaders[5].position} entries={battingLeaders[5].entries} />
          <LeaderCard title="Jonrones (HR)" stat={battingLeaders[1].stat} leader={battingLeaders[1].leader} position={battingLeaders[1].position} entries={battingLeaders[1].entries} />
          <LeaderCard title="SO (Ponches)" stat={pitchingLeaders[2].stat} leader={pitchingLeaders[2].leader} position={pitchingLeaders[2].position} entries={pitchingLeaders[2].entries} />
        </div>
      </div>

      {/* Actual campeón */}
      <div className="bg-gradient-to-br from-habboGold/20 via-habboOrange/20 to-transparent border border-white/10 rounded-2xl p-4 sm:p-6">
        <div className="section-title mb-3 text-[8px] sm:text-[10px]">Actual campeón</div>
        <p className="font-display text-lg sm:text-xl mb-1">{champion.name}</p>
        <p className="text-xs sm:text-sm text-white/70">{champion.season} · {champion.detail}</p>
      </div>

      {/* Tabla general */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-6 card-glow">
        <div className="flex items-center justify-between mb-3 gap-2">
          <p className="text-xs sm:text-sm text-white/70">Tabla general</p>
          <span className="text-[10px] sm:text-xs px-2 py-1 rounded bg-white/10">Top 4</span>
        </div>
        <div className="divide-y divide-white/5">
          {teams.map((team, idx) => (
            <div key={team.name} className="py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
              <div className="w-7 sm:w-8 h-7 sm:h-8 grid place-items-center rounded-lg bg-habboInk border border-white/10 font-semibold text-xs sm:text-sm">#{idx + 1}</div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs sm:text-base truncate">{team.name}</p>
                <p className="text-[10px] sm:text-xs text-white/60 truncate">{team.city}</p>
              </div>
              <div className="text-xs sm:text-sm font-semibold whitespace-nowrap">{team.record}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SeasonsPage = () => (
  <section className="grid gap-3 sm:gap-4 md:grid-cols-3">
    {seasons.map((season) => (
      <div key={season.name} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 card-glow hover:border-habboGold/30 hover:bg-white/8 transition-all hover:scale-[1.02]">
        <p className="text-[8px] sm:text-xs text-white/60 uppercase mb-1">{season.status}</p>
        <h3 className="font-display text-lg sm:text-xl mb-2">{season.name}</h3>
        <p className="text-white/75 text-xs sm:text-sm mb-2 sm:mb-3">{season.highlight}</p>
        <div className="text-xs sm:text-sm text-white/70">Inicio: {season.starts}</div>
      </div>
    ))}
  </section>
);

const FaqPage = () => (
  <section className="grid gap-3 sm:gap-4 md:grid-cols-2">
    {faqs.map((faq) => (
      <div key={faq.question} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 card-glow">
        <h3 className="font-display text-base sm:text-lg mb-2">{faq.question}</h3>
        <p className="text-white/75 leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
      </div>
    ))}
  </section>
);

const TeamsPage = () => (
  <section className="grid gap-4 sm:gap-5 md:grid-cols-2">
    {teams.map((team) => (
        <div key={team.name} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow hover:border-habboMint/30 hover:bg-white/8 transition-all hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg sm:text-xl">{team.name}</h3>
          <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-habboOrange text-[#1f1d2b] font-semibold shadow-pixel hover:scale-110 transition-transform cursor-default">{team.record}</span>
        </div>
        <p className="text-white/70 text-xs sm:text-sm mb-3">{team.city}</p>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 mb-3">
          <span>Poder: {team.power}</span>
          <span>Contacto: {team.contact}</span>
          <span>Defensa: {team.defense}</span>
          <span>Velocidad: {team.speed}</span>
        </div>
        <p className="text-[10px] sm:text-xs text-white/60 mb-1 sm:mb-2">Alineación</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {team.lineup.map((p) => (
            <span key={p} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-[10px] sm:text-sm">{p}</span>
          ))}
        </div>
      </div>
    ))}
  </section>
);

const RulesPage = () => (
  <section className="space-y-5 sm:space-y-6">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow">
      <div className="section-title mb-3 sm:mb-4 text-lg sm:text-2xl">Reglas oficiales</div>
      <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
        Las reglas de la World Baseball League están diseñadas para garantizar un juego justo, competitivo y entretenido en el universo roleplay de Habbo.
      </p>
      <div className="space-y-3 sm:space-y-5">
        {rules.map((rule) => (
          <div key={rule.title} className="p-3 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20">
            <h3 className="font-display text-base sm:text-lg mb-2 sm:mb-3">{rule.title}</h3>
            <p className="text-white/75 leading-relaxed text-xs sm:text-sm">{rule.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-habboOrange/20 via-habboGold/15 to-transparent border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
      <div className="section-title mb-2 sm:mb-3 text-lg sm:text-2xl">Actualización de reglas</div>
      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
        El reglamento completo será publicado próximamente en el Discord oficial. Incluirá mecánicas detalladas, sistema de arbitraje y sanciones.
      </p>
      <a className="inline-flex px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-habboOrange text-[#0f1018] font-semibold shadow-pixel relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboGold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] text-xs sm:text-sm whitespace-nowrap" href="https://discord.com">
        Consultar en Discord
      </a>
    </div>
  </section>
);

const FoundersPage = () => (
  <section className="space-y-5 sm:space-y-6">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow">
      <div className="section-title mb-3 sm:mb-4 text-lg sm:text-2xl">Créditos</div>
      <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
        La World Baseball League fue creada por un grupo apasionado de roleplay en Habbo. Estos visionarios transformaron el concepto de baseball pixel en una experiencia competitiva única.
      </p>
    </div>

    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
      {founders.filter(f => f.size === 'normal').map((founder) => (
        <div key={founder.name} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow hover:border-habboGold/40 hover:bg-white/8 transition-all hover:scale-[1.02]">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            {founder.image ? (
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-br from-habboOrange/30 via-habboGold/20 to-transparent border-2 border-habboGold/40 flex-shrink-0 hover:scale-110 transition-transform flex items-center justify-center p-1 overflow-hidden">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-br from-habboOrange/30 via-habboGold/20 to-transparent border-2 border-habboGold/40 grid place-items-center hover:scale-110 transition-transform flex-shrink-0">
                <span className="text-lg sm:text-xl md:text-2xl font-black text-habboGold">{founder.name.slice(0, 1)}</span>
              </div>
            )}
            <div className="min-w-0">
              <h3 className="font-display text-base sm:text-lg md:text-xl truncate">{founder.name}</h3>
              <p className="text-[10px] sm:text-xs text-white/60 uppercase truncate">{founder.role}</p>
            </div>
          </div>
          <p className="text-white/75 text-xs sm:text-sm leading-relaxed">{founder.bio}</p>
        </div>
      ))}
    </div>
    
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-[7px] sm:text-[8px] text-white/40">
      {founders.filter(f => f.size === 'small').map((founder) => (
        <span key={founder.name}>{founder.name}</span>
      ))}
    </div>

    <div className="bg-gradient-to-br from-habboMint/20 via-habboSky/15 to-transparent border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
      <div className="section-title mb-2 sm:mb-3 text-lg sm:text-2xl">Únete al legado</div>
      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
        Gracias a todo el equipo, la WBL sigue creciendo temporada tras temporada. Únete a la comunidad y forma parte de esta historia.
      </p>
      <a className="inline-flex px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-habboSky text-[#0f1018] font-semibold shadow-pixel hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] text-xs sm:text-sm whitespace-nowrap" href="https://discord.com">
        Únete al Discord
      </a>
    </div>
  </section>
);

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-6">
    <div className="section-title mb-3 hover:text-habboGold transition-colors cursor-default">{title}</div>
    <p className="text-white/75 text-sm max-w-2xl">{subtitle}</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route
          index
          element={
            <>
              <PageHeader title="Inicio" subtitle="Noticias y bienvenida a la liga roleplay de baseball en Habbo." />
              <HomePage />
            </>
          }
        />
        <Route
          path="/stats"
          element={
            <>
              <PageHeader title="Estadísticas" subtitle="Tabla general, equipo destacado y barras de atributos." />
              <StatsPage />
            </>
          }
        />
        <Route
          path="/seasons"
          element={
            <>
              <PageHeader title="Temporadas" subtitle="Histórico de seasons jugadas y próxima temporada." />
              <SeasonsPage />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <PageHeader title="FAQ" subtitle="Respuestas rápidas sobre alineaciones, fichajes y cómo empezar." />
              <FaqPage />
            </>
          }
        />
        <Route
          path="/teams"
          element={
            <>
              <PageHeader title="Equipos" subtitle="Planteles inscritos con stats y alineación visible." />
              <TeamsPage />
            </>
          }
        />
        <Route
          path="/rules"
          element={
            <>
              <PageHeader title="Reglas" subtitle="Normativa oficial y código de conducta de la WBL." />
              <RulesPage />
            </>
          }
        />
        <Route
          path="/founders"
          element={
            <>
              <PageHeader title="Créditos" subtitle="Los visionarios que hicieron posible la World Baseball League." />
              <FoundersPage />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
