import { useMemo, useEffect, useState, lazy, Suspense } from 'react';
import { Link, Route, Routes, Outlet, useLocation } from 'react-router-dom';
import { collection, query, orderBy, limit, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const SchedulePage = lazy(() => import('./pages/SchedulePage'));
const StandingsPage = lazy(() => import('./pages/StandingsPage'));

interface NewsItem {
  title: string;
  body: string;
  tag: string;
  date: string;
  imageUrl?: string;
  id?: string;
}

interface TeamDoc {
  id?: string;
  name: string;
  city: string;
  stadium?: string;
  record: string;
  logoUrl?: string;
  hits?: number;
  runs?: number;
  hr?: number;
  so?: number;
  power?: number;
  contact?: number;
  defense?: number;
  speed?: number;
  lineup: string[];
  order?: number;
  members?: string;
}

interface LeaderEntry {
  name: string;
  value: string;
  imageUrl?: string;
}

interface LeaderCardData {
  label: string;
  stat: string;
  leader: string;
  imageUrl?: string;
  position: string;
  entries: LeaderEntry[];
}

interface StatsDoc {
  champion: { name: string; season: string; detail: string };
  featuredTeamId?: string;
  leadersBatting: LeaderCardData[];
  leadersPitching: LeaderCardData[];
}

const defaultNews: NewsItem[] = [
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
    name: 'Tohoku Rakuten Golden Eagles',
    city: 'Senday · Japón Pixel',
    record: '18-6',
    logo: '/logos/logoRakuten.png',
    hits: 1247,
    runs: 562,
    hr: 89,
    so: 412,
    members: 'Kush, Lucas, Flash, JJ, xzxxzc',
    lineup: ['Flash (P)', 'Lucas (1B)', 'JJ (SS)', 'Kush (1B)', 'xzxxzc (SS)']
  },
  {
    name: 'Neon Caps',
    city: 'Neón Central',
    record: '15-9',
    power: 85,
    contact: 90,
    defense: 86,
    speed: 88,
    lineup: ['Taro (P)', 'Eli (SS)', 'Nova (RF)', 'Seth (2B)', 'Mori (1B)']
  },
  {
    name: 'Pixel Pirates',
    city: 'Bahía 8-bit',
    record: '13-11',
    power: 83,
    contact: 82,
    defense: 80,
    speed: 86,
    lineup: ['Ray (P)', 'Cora (LF)', 'Zed (3B)', 'Ivy (SS)', 'Tess (1B)']
  },
  {
    name: 'Retro Rockets',
    city: 'Órbita 2004',
    record: '12-12',
    power: 80,
    contact: 78,
    defense: 81,
    speed: 79,
    lineup: ['Vox (P)', 'Ari (SS)', 'Neo (1B)', 'Rin (RF)', 'Kai (1B)']
  }
];

const defaultChampion = {
  name: 'Habbo Meteors',
  season: 'Season 4 · 2025',
  detail: 'Serie 4-2 vs Neon Caps'
};

const seasons = [
  {
    name: 'Season 1 · 2026',
    status: 'Próxima',
    highlight: 'Apertura de la primera temporada de la World Baseball League.',
    starts: 'Febrero 04'
  }
];

const faqs = [
  {
    question: '¿De cuántos jugadores está compuesta la alineación del equipo?',
    answer:
      'Cada equipo se compone de 4 jugadores y hasta dos suplentes opcionales. La alineación se define según el rol defensivo de cada jugador. Pitcher, shortstop o primera base.'
  },
  {
    question: '¿Cómo empiezo mi carrera dentro de la liga?',
    answer:
      'Si no sabes jugar, asegúrate de unirte al discord y buscar ayuda. La comunidad estará dispuesta a enseñarte lo básico para comenzar a jugar. Si estás interesado en unirte como jugador, en el discord encontrarás un canal llamado "agencia-libre" donde podrás postularte para que los equipos te contacten.'
  }
];

const founders = [
  { name: 'Lucas', role: 'Fundador', bio: 'Visionario y líder del proyecto WBL.', size: 'normal', image: '/avatars/lucas.png', profileUrl: 'http://hobbaz.es/profile/robertoconla9' },
  { name: 'Kush', role: 'Director de Tecnología', bio: 'Encargado del desarrollo técnico y coordinación general del proyecto.', size: 'normal', image: '/avatars/kush.png', profileUrl: 'http://hobbaz.es/profile/Kush' },
  { name: 'xzxxzc', role: 'Desarrollador de Aplicaciones', bio: 'Desarrolla herramientas y aplicaciones para la gestión de la liga.', size: 'normal', image: '/avatars/pepe.png', profileUrl: 'http://hobbaz.es/profile/xzxxzc' },
  { name: 'JJ', role: 'Inversionista', bio: 'Brinda el respaldo financiero para hacer realidad la liga.', size: 'normal', image: '/avatars/wya.png', profileUrl: 'http://hobbaz.es/profile/420am' },
  { name: 'Flash', role: 'Diseñador', bio: 'Responsable de la identidad visual y estética del proyecto.', size: 'normal', image: '/avatars/flash.png', profileUrl: 'http://hobbaz.es/profile/ShoheiOhtani' },
  { name: 'Skyripa', role: 'Colaborador', bio: 'Apoyo en el desarrollo del proyecto.', size: 'small' },
  { name: 'Alucard', role: 'Colaborador', bio: 'Apoyo en el desarrollo del proyecto.', size: 'small' }
];

const avatarMap: Record<string, string> = {
  'Lucas': '/avatars/lucas.png',
  'Kush': '/avatars/kush.png',
  'Flash': '/avatars/flash.png',
  'JJ': '/avatars/wya.png',
  'xzxxzc': '/avatars/pepe.png'
};

const rules = [
  {
    title: 'INTRODUCCIÓN',
    description: 'COMANDOS\n\n• Pitcher: cutter - slider - fast - curve - knuckle - fake - reset\n↳ reset: devuelve la bola al punto de lanzamiento\n• Fildeo: b1 - b2 - b3 - h4 (o b4)\n• Bate: swing - toque\n↳ swing: la pelota es enviada al jardín, donde juega el primera base y el shortstop. [!] Posibilidad de homerun o foul\n↳ toque: se envia la pelota dentro del juego de pitcher. [!] Sin probabilidad de homerun o foul.'
  },
  {
    title: '1.00 - JUEGO',
    description: '1.01 - El equipo que sea seleccionado como LOCAL será quien cierre el juego\n1.02 - Los partidos tendrán fechas limites para jugarse, si uno de los equipos no muestra esfuerzo con acordar una fecha, se le dará la victoria por default (1-0) al rival.\n1.02b - PODRÁ extenderse la fecha en caso de que ambos equipos no puedan acordar. La administración podrá poner una fecha concreta o darlo como no presentado (0-0)\n1.03 - Cada equipo dispondrá de 3 tiempos muertos. El mánager es quien tiene el derecho de pedir tiempo (TIME), pedir revisión de X jugada o de realizar una denuncia en el canal de ticket\n1.04 - Si un partido llega a un marcador de 7-0 se lo tomará como knockout y se terminará el partido\n1.05 - Si ningún equipo se presenta a la hora que acordaron no se modificará el horario y se tomará como NO PRESENTADO (0-0)\n1.06 - Se esperará como máximo 15 minutos si a la hora acordada falta el mínimo de jugadores para iniciar el partido (4 por equipo). No se podrán utilizar los tiempos muertos si no cumplen con el mínimo de jugadores. En caso de no contar con los 4 necesarios se dará default (1-0)\n1.07 - Un equipo no podrá continuar el partido y será puesto el marcador 1-0 (o quedar como estaba si iban ganando) si no cuenta con sus cuatro bateadores OBLIGATORIOS, dando la victoria al equipo que sí tiene su equipo completo\n1.08 - En caso de que el mánager no se presente al partido, este deberá seleccionar a uno de sus jugadores para que tomen su lugar temporalmente. En caso de que no avise, el umpire se encargará de seleccionarlo\n1.09 - En caso de coincidir colores en el uniforme, el equipo local será el que decida qué uniforme usar.\n1.10 - Cada juego constará de 3 innings con posibilidad de ir a 2 extra innings. En temporada regular los equipos quedarán empatados si no hay ganador en extra innings.\n1.10b - En Playoffs se jugará hasta que haya un ganador.'
  },
  {
    title: '2.00 - EQUIPOS',
    description: '2.01 - Los equipos deben ser de 4 hasta 6 jugadores como máximo. Se debe elegir un mánager del equipo (que también puede ser jugador a la vez)\n2.01b - En caso de tener un mánager NO JUGADOR no contará en la alineación (podrán ser 6 + el mánager, por ejemplo)\n2.02 - Los equipos deben tener dos uniformes con distintos colores por si coinciden con el color del uniforme rival.\n2.03 - Los jugadores solo pueden estar registrados en un único equipo durante la temporada.\n2.04 - Los cambios en el roster solo podrán realizarse antes del inicio de la temporada y en fechas o permisos habilitados por la administración'
  },
  {
    title: '3.00 - PARTIDOS',
    description: '3.01 - Los partidos se jugarán con 4 jugadores en campo por equipo como mínimo.\n3.02 - El orden del bateo debe mantenerse en todo el partido, salvo por expulsión o abandono.\n3.02b - El orden debe ser notificado al umpire únicamente por el mánager (o su suplente) antes de iniciar el partido.\n3.03 - No se permitirá el ingreso de jugadores externos una vez iniciado el partido. Únicamente podrán estar los dos equipos, el umpire y personal de la administración.\n3.04 - El umpire es la MÁXIMA AUTORIDAD durante el partido y sus decisiones son las que se deben seguir. La administración podrá poner excepciones a esta regla únicamente con clara justificación.\n3.04b - Ante cualquier comportamiento que el umpire considere indebido podrá expulsar y advertir a un jugador según lo vea necesario.\n3.05 - Cualquier invasión de campo no deseada sea por jugadores o no, no será tolerada. Interferir en un partido podrá resultar en expulsión.'
  },
  {
    title: '4.00 - BATEADOR',
    description: '4.01 - El bateador deberá pararse en alguno de los felpudos rojos para indicar que está listo para batear.\n4.01b - Una vez dado el ATT del pitcher no podrá bajarse del felpudo o será considerado un strike.\n4.02 - Cuando un bateador llega a los 3 strikes quedará out.\n4.02b - Un bateador no puede llegar al tercer strike por foul.\n4.03 - Queda prohibido el uso de macros, copiar y pegar, y el uso de la flecha para arriba para ahorrar escribir swing o toque.\n4.04 - Al acumular 4 bolas (por el pitcher) se le otorgará base por bola. Si habían corredores en alguna base asegurada deberán avanzar únicamente los que estaban obligados a correr.\n4.05 - Si se intenta batear una fake será contado como strike. Se tomará como intento de bateo si se baja del felpudo o envía algun comando para batear.\n4.05b - Si el pitcher iba a cometer "bola" y el bateador falla en el intento de batear la bola, será tomado como strike. El bateador debe estar atento y no intentar batear cuando el pitcher comete un error.\n4.06 - En caso de no haber podido batear la pelota, el bateador deberá despejar la casilla home (salir de encima) para no molestar al pitcher.\n4.06b - Según se dé la situación y el bateador haya impedido un CLARO out, el umpire podrá decidir si dar el out o no.\n4.07 - Si se logra batear y la pelota cae encima de donde está parado uno de los que fildean (sea 1B, SS o pitcher) será tomado como flyout. Este sistema está automatizado con wired, por lo que el bot dará aviso.\n4.08 - Un bateador no puede dar seat para batear. Ni antes ni después de HOME.'
  },
  {
    title: '5.00 - CORREDOR',
    description: '5.01 - El bateador que logre batear la bola deberá correr obligatoriamente a primera base y se convertirá en un corredor.\n5.02 - Si la base es pisada el corredor no podrá continuar hacia las otras bases y se contará como base asegurada.\n5.02b - En caso de continuar corriendo y lo dejan out, su safe no contará y es un out más para el equipo rival.\n5.02c - Si el corredor queda SAFE con el felpudo encima se termina la jugada. Los corredores no podrán robar base ya que la bola no está en juego y deberán quedarse en sus bases.\n5.02b - Para robar una base debe esquivarse diagonalmente y seguir corriendo hacia la próxima.\n5.02c - Si el corredor intenta recortar una base para robarla pero es interferido por alguien del equipo rival, podrá recortar la base esquivando al jugador que le está tapando el cuadro.\n5.02d - Un corredor no podrá robar la base si está disputando a "v" la base. Por ejemplo, si ya enviaron el felpudo a 1B y está a la misma distancia que un rival de pisar la base.\n5.03 - En caso de que un corredor obligado a correr se quede quieto en una base y su compañero vaya hacia su base, será OUT para el compañero.\n5.04 - Un corredor solo puede ir hacia la siguiente base cuando la bola llega a la casilla home. En caso de adelantarse será considerado OUT. Si se adelantó X cantidad de cuadros, deberá devolverse esa misma cantidad de cuadros y seguir corriendo para no quedar OUT.\n5.05 - En caso de que se marque un homerun se deben pisar todas las bases que tengan en frente. Por ejemplo, si estaban en segunda base cuando metieron el homerun, deberán pisar obligatoriamente la tercera base y home.\n5.06 - Un corredor podrá regresarse a su base segura únicamente si no pasó la mitad del recorrido para llegar a la siguiente base (4 casillas para adelante como máximo)\n5.06b - Si un corredor se devuelve antes de pasar la mitad del recorrido, para poder dejarlo out se debe hacerlo en la base a la que se está devolviendo.\n5.07 - Si el equipo que está fildeando interfiere en la llegada a una base será considerada como base asegurada. Si el corredor tiene intenciones de robar base, se debe seguir la regla 5.02c\n5.08 - No se puede sobrepasar a un compañero o será out automático. Esto también aplica cuando ocurre un homerun.\n5.09 - Si un corredor es interferido de asegurar base y detrás venía un compañero que robó base y va hacia la de este corredor, será SAFE para el corredor al que le taparon el cuadro. El compañero que robó base debe devolverse o quedará OUT.'
  },
  {
    title: '6.00 - PITCHER',
    description: '6.01 - El pitcher deberá decir "ATT" antes de hacer cualquier lanzamiento. Este solo puede ser dicho luego del playball del umpire y cuando el bateador está en alguno de los felpudos rojos. No será contada cualquier variante a esta, sea ATENTO o cualquier "ATT" mal escrito. También debe asegurarse de haber dado "reset" para dar el ATT.\n6.01b - El pitcher deberá repetir el ATT si cometió bola (bola1, bola2...)\n6.01c - Si el pitcher da ATT antes de que el bateador suba al felpudo y lanza, será BOLA. Se debe repetir el ATT siempre que haya sido uno inválido. Dar mal un ATT no contará como BOLA, pero sí lanzar luego de dar un ATT mal.\n6.02 - En caso de escribir mal el lanzamiento luego del "ATT" será contado como bola. Por ejemplo, el pitcher dice ATT y luego escribe fsat en lugar de fast.\n6.02b - Luego del ATT el pitcher no podrá no lanzar, en caso de bajarse de su lugar sin haber lanzado también será contado como bola. Tampoco podrá enviar algún otro mensaje que no sea un lanzamiento (pero sí luego de haber lanzado)\n6.03- El pitcher tendrá 8 segundos luego del ATT para hacer algún lanzamiento o será bola.\n6.04 - Solo podrá utilizar una fake por turno de bateador. En caso de fallar el intento de lanzar una fake será bola.\n6.04b - Como la knuckle también puede fallar debido a su complejidad será bola en caso de hacerlo.\n6.05 - Luego de hacer algún lanzamiento el pitcher puede ir a buscar la bola a HOME para intentar dejar out a los corredores que se movieron de su base.'
  },
  {
    title: '7.00 - MERCADO',
    description: '7.01 - El mercado estará abierto antes de iniciar la temporada y no volverá a ser abierto hasta los playoff.\n7.02 - Aquellos equipos eliminados pueden ofrecer a sus jugadores para que estén de refuerzo en otro equipo. El equipo que clasificó de primero será el primero en escoger qué refuerzo tomar.\n7.02b - Si un equipo quiere tomar de refuerzo a otro no debe tener el cupo lleno. En caso de ya ser 6 jugadores en su equipo, el manager tendrá la libertad de sacar jugadores.'
  }
];

const battingLeaders = [
  {
    label: 'OPS',
    stat: '.987',
    leader: 'Flash',
    position: 'P · #1',
    entries: [
      { name: 'Kush', value: '.889', imageUrl: '/avatars/kush.png' },
      { name: 'Lucas', value: '.770', imageUrl: '/avatars/lucas.png' },
      { name: 'xzxxzc', value: '.732', imageUrl: '/avatars/pepe.png' }
    ]
  },
  {
    label: 'Jonrones',
    stat: '31',
    leader: 'Lucas',
    position: 'P · #1',
    entries: [
      { name: 'Kush', value: '25', imageUrl: '/avatars/kush.png' },
      { name: 'Flash', value: '21', imageUrl: '/avatars/flash.png' },
      { name: 'xzxxzc', value: '19', imageUrl: '/avatars/pepe.png' }
    ]
  },
  {
    label: 'Carreras',
    stat: '92',
    leader: 'Flash',
    position: 'P · #1',
    entries: [
      { name: 'Kush', value: '81', imageUrl: '/avatars/kush.png' },
      { name: 'JJ', value: '74', imageUrl: '/avatars/wya.png' },
      { name: 'Lucas', value: '68', imageUrl: '/avatars/lucas.png' }
    ]
  },
  {
    label: 'Promedio',
    stat: '.274',
    leader: 'Flash',
    position: 'P · #1',
    entries: [
      { name: 'Kush', value: '.262', imageUrl: '/avatars/kush.png' },
      { name: 'JJ', value: '.258', imageUrl: '/avatars/wya.png' },
      { name: 'Lucas', value: '.253', imageUrl: '/avatars/lucas.png' }
    ]
  },
  {
    label: 'Impulsadas',
    stat: '88',
    leader: 'Kush',
    position: '1B · #2',
    entries: [
      { name: 'JJ', value: '72', imageUrl: '/avatars/wya.png' },
      { name: 'Lucas', value: '69', imageUrl: '/avatars/lucas.png' },
      { name: 'xzxxzc', value: '65', imageUrl: '/avatars/pepe.png' }
    ]
  },
  {
    label: 'Hits',
    stat: '158',
    leader: 'JJ',
    position: '1B · #3',
    entries: [
      { name: 'Flash', value: '150', imageUrl: '/avatars/flash.png' },
      { name: 'Kush', value: '147', imageUrl: '/avatars/kush.png' },
      { name: 'Lucas', value: '139', imageUrl: '/avatars/lucas.png' }
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
    leader: 'Flash',
    position: 'P · #1',
    entries: [
      { name: 'Kush', value: '156', imageUrl: '/avatars/kush.png' },
      { name: 'Lucas', value: '143', imageUrl: '/avatars/lucas.png' },
      { name: 'xzxxzc', value: '97', imageUrl: '/avatars/pepe.png' }
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
  { to: '/schedule', label: 'Programación' },
  { to: '/standings', label: 'Clasificación' },
  { to: '/seasons', label: 'Temporada' },
  { to: '/teams', label: 'Equipos' },
  { to: '/stats', label: 'Estadísticas' },
  { to: '/rules', label: 'Reglas' },
  { to: '/faq', label: 'FAQ' },
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
      '/schedule': 'Programación',
      '/standings': 'Clasificación',
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
              <p className="font-display text-sm sm:text-lg">Liga de Baseball · Hobbaz</p>
              <p className="text-xs text-white/70">Temporada 1</p>
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
            <p className="font-display text-base sm:text-lg">World Baseball League · Hobbaz</p>
            <p className="text-white/60 text-xs sm:text-sm">© 2026 WBL. Todos los derechos reservados. Proyecto de rol, no oficial.</p>
          </div>
          <a
            href="https://discord.gg/9ufJQpkq4S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-lg bg-habboSky text-[#0f1018] font-semibold shadow-pixel relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c12]"
          >
            Únete al Discord
          </a>
        </div>
      </footer>
    </div>
  );
};

const HomePage = () => {
  const [news, setNews] = useState<NewsItem[]>(defaultNews);
  const [loadingNews, setLoadingNews] = useState(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsQuery = query(
          collection(db, 'news'),
          orderBy('createdAt', 'desc'),
          limit(10)
        );
        const snapshot = await getDocs(newsQuery);
        const newsData = snapshot.docs.map(doc => doc.data() as NewsItem);
        
        if (newsData.length > 0) {
          setNews(newsData);
        }
      } catch (err) {
        console.error('Error loading news:', err);
        // Keep default news if Firebase fails
      } finally {
        setLoadingNews(false);
      }
    };

    loadNews();
  }, []);

  return (
    <section className="min-h-screen grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start relative px-4 sm:px-5 py-8 sm:py-12" style={{backgroundImage: 'url(/fondo.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
      {/* Overlay difuminado */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1018]/45 via-[#0f1018]/65 to-[#0f1018]/80 backdrop-blur-sm pointer-events-none"></div>
      
      {/* Cards con z-index para estar sobre el fondo */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow relative z-10">
        <div className="section-title mb-4 text-[8px] sm:text-[10px]">Bienvenida</div>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
          Bienvenido a la World Baseball League
        </h1>
        <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6">
          Liga oficial con fixtures y diseños semanales, mercado de fichajes, transmisión de partidos y stats en vivo.
        </p>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <div className="p-3 sm:p-4 rounded-xl bg-habboInk/70 border border-white/10">
            <p className="text-xs sm:text-sm text-white/70 mb-1">Arranque temporada</p>
            <p className="font-semibold text-base sm:text-lg">Febrero 04</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-habboInk/70 border border-white/10">
            <p className="text-xs sm:text-sm text-white/70 mb-1">Estadio</p>
            <p className="font-semibold text-base sm:text-lg">Estadio Oficial - WBL</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href="https://discord.gg/9ufJQpkq4S"
            target="_blank"
            rel="noopener noreferrer"
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
          {loadingNews ? (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-4 border-habboOrange border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {news.map((item, idx) => (
                <article
                  key={idx}
                  onClick={() => {
                    setSelectedNews(item);
                    setShowModal(true);
                  }}
                  className="cursor-pointer p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5 hover:border-habboSky/50 hover:bg-white/8 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between mb-2 text-[10px] sm:text-xs text-white/60 uppercase tracking-wide">
                    <span>{item.tag}</span>
                    <span>{item.date}</span>
                  </div>
                  {item.imageUrl && (
                    <div className="relative w-full overflow-hidden rounded-lg border border-white/5 mb-2" style={{ paddingTop: '56%' }}>
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-semibold mb-1 text-sm sm:text-base line-clamp-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/75 line-clamp-2">{item.body.length > 100 ? item.body.substring(0, 100) + '...' : item.body}</p>
                </article>
              ))}
            </div>
          )}
        </div>

      </div>

      {showModal && selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <div
            className="relative max-w-3xl w-full bg-[#0f1018] border border-white/10 rounded-2xl shadow-2xl card-glow overflow-hidden"
            style={{ animation: 'zoomInModal 180ms ease-out' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"
              aria-label="Cerrar"
            >
              ✕
            </button>
            {selectedNews.imageUrl && (
              <div className="relative w-full" style={{ paddingTop: '56%' }}>
                <img
                  src={selectedNews.imageUrl}
                  alt={selectedNews.title}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              </div>
            )}
            <div className="p-5 sm:p-6 space-y-2">
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-white/60 uppercase tracking-wide">
                <span>{selectedNews.tag}</span>
                <span>{selectedNews.date}</span>
              </div>
              <h3 className="font-semibold text-lg sm:text-xl">{selectedNews.title}</h3>
              <p className="text-sm text-white/80 whitespace-pre-wrap">{selectedNews.body}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const StatsPage = ({ teamsData }: { teamsData: TeamDoc[] }) => {
  const [statsData, setStatsData] = useState<StatsDoc | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const statsRef = doc(db, 'stats', 'current');
        const snap = await getDoc(statsRef);
        if (snap.exists()) {
          setStatsData(snap.data() as StatsDoc);
        }
      } catch (err) {
        console.error('Error loading stats', err);
      }
    };

    loadStats();
  }, []);

  const featured = useMemo(() => {
    if (statsData) {
      if (statsData.featuredTeamId === '') return null; // admin chose no featured
      if (statsData.featuredTeamId) {
        const found = teamsData.find((t) => t.id === statsData.featuredTeamId);
        if (found) return found;
      }
    }
    return teamsData[0] || null;
  }, [statsData, teamsData]);

  const champion = statsData?.champion || defaultChampion;
  const battingData = statsData?.leadersBatting?.length ? statsData.leadersBatting : (battingLeaders as LeaderCardData[]);
  const pitchingData = statsData?.leadersPitching?.length ? statsData.leadersPitching : (pitchingLeaders as LeaderCardData[]);

  const isNonEmpty = (s?: string) => (s ?? '').toString().trim().length > 0;
  const cardHasContent = (c: LeaderCardData) => {
    const hasHeader = isNonEmpty(c.label) || isNonEmpty(c.stat) || isNonEmpty(c.leader) || isNonEmpty(c.position);
    const hasEntries = Array.isArray(c.entries) && c.entries.some(e => isNonEmpty(e.name) || isNonEmpty(e.value) || isNonEmpty(e.imageUrl));
    return hasHeader || hasEntries;
  };
  const filteredBatting = battingData.filter(cardHasContent);
  const filteredPitching = pitchingData.filter(cardHasContent);

  const LeaderCard = ({
    label,
    stat,
    leader,
    imageUrl,
    position,
    entries
  }: LeaderCardData) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 card-glow grid gap-3 hover:border-habboSky/30 hover:bg-white/8 transition-all hover:scale-[1.02]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-white/60 uppercase mb-1">{label}</p>
          <p className="text-4xl md:text-5xl font-black leading-none">{stat}</p>
          <p className="mt-2 font-semibold">{leader}</p>
          <p className="text-xs text-white/60">{position}</p>
        </div>
        <div className="w-20 h-24 rounded-xl bg-white/8 border border-white/10 overflow-hidden flex-shrink-0 grid place-items-center">
          {leader && (imageUrl || avatarMap[leader] || entries.find((e) => e.name === leader)?.imageUrl) ? (
            <img
              src={imageUrl || entries.find((e) => e.name === leader)?.imageUrl || avatarMap[leader]}
              alt={leader}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 via-white/8 to-transparent border border-white/20 grid place-items-center text-white/70 font-semibold text-lg">
              {leader?.slice(0, 1) || '?'}
            </div>
          )}
        </div>
      </div>
      <div className="divide-y divide-white/5 rounded-xl border border-white/5 bg-white/3">
        {entries.map((item) => (
          <div key={item.name} className="flex items-center gap-3 px-3 py-2">
            <Avatar name={item.name} imageUrl={item.imageUrl || avatarMap[item.name]} />
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
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr,1fr] items-start">
        {/* Equipo destacado */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow lg:sticky lg:top-6 lg:self-start">
          <p className="text-xs sm:text-sm text-white/70 mb-2">Equipo destacado</p>
          {featured ? (
            <>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl font-display">{featured.name}</h3>
                  <p className="text-xs sm:text-base text-white/70">{featured.city} · {featured.record}</p>
                </div>
                {featured.logoUrl && (
                  <img src={featured.logoUrl} alt={`${featured.name} logo`} className="h-14 sm:h-16 w-auto rounded-lg bg-white/8 border border-white/10 object-contain p-1" />
                )}
              </div>
              {featured.hits !== undefined ? (
                <>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 mb-3">
                    <span className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/60 text-[10px] sm:text-xs">HITS</p>
                      <p className="font-semibold text-sm sm:text-base">{featured.hits}</p>
                    </span>
                    <span className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/60 text-[10px] sm:text-xs">RUNS</p>
                      <p className="font-semibold text-sm sm:text-base">{featured.runs}</p>
                    </span>
                    <span className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/60 text-[10px] sm:text-xs">HR</p>
                      <p className="font-semibold text-sm sm:text-base">{featured.hr}</p>
                    </span>
                    <span className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-white/60 text-[10px] sm:text-xs">SO (P)</p>
                      <p className="font-semibold text-sm sm:text-base">{featured.so}</p>
                    </span>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs sm:text-sm text-white/70 mb-1 sm:mb-2">Integrantes</p>
                    <p className="text-xs sm:text-sm text-white/80">{featured.members}</p>
                  </div>
                </>
              ) : (
                <div className="space-y-3 mb-3">
                  <StatBar label="Poder" value={featured.power || 0} color="bg-habboOrange" />
                  <StatBar label="Contacto" value={featured.contact || 0} color="bg-habboMint" />
                  <StatBar label="Defensa" value={featured.defense || 0} color="bg-habboSky" />
                  <StatBar label="Velocidad" value={featured.speed || 0} color="bg-habboBrick" />
                </div>
              )}
              <div className="mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-white/70 mb-1 sm:mb-2">Alineación</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {featured.lineup.map((p) => (
                    <span key={p} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10">{p}</span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-sm text-white/60">Sin equipo destacado seleccionado.</p>
          )}
        </div>

        {/* Líderes (consistentes con Admin) */}
        <div className="space-y-4">
          {filteredBatting.length > 0 && (
            <div>
              <p className="text-xs sm:text-sm text-white/70 mb-2">Líderes de bateo</p>
              <div className="grid gap-4 md:grid-cols-2">
                {filteredBatting.map((card) => (
                  <LeaderCard key={`bat-${card.label}-${card.stat}-${card.leader}`} {...card} />
                ))}
              </div>
            </div>
          )}
          {filteredPitching.length > 0 && (
            <div>
              <p className="text-xs sm:text-sm text-white/70 mb-2">Líderes de pitcheo</p>
              <div className="grid gap-4 md:grid-cols-2">
                {filteredPitching.map((card) => (
                  <LeaderCard key={`pit-${card.label}-${card.stat}-${card.leader}`} {...card} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Actual campeón */}
      <div className="bg-gradient-to-br from-habboGold/20 via-habboOrange/20 to-transparent border border-white/10 rounded-2xl p-4 sm:p-6">
        <div className="section-title mb-3 text-[8px] sm:text-[10px]">Actual campeon</div>
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
          {teamsData.map((team, idx) => (
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
  <section className="space-y-4 sm:space-y-5">
    <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
      {faqs.map((faq) => (
        <div key={faq.question} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 card-glow">
          <h3 className="font-display text-base sm:text-lg mb-2">{faq.question}</h3>
          <p className="text-white/75 leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-br from-habboSky/15 via-habboGold/20 to-transparent border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
      <div className="section-title mb-2 sm:mb-3 text-lg sm:text-xl">¿Quieres aprender a jugar?</div>
      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
        Visita nuestro Discord oficial donde encontrarás guías detalladas, tutoriales paso a paso y toda la información necesaria para comenzar tu carrera en la WBL.
      </p>
      <a className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-habboSky text-[#0f1018] font-semibold shadow-pixel relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] text-xs sm:text-sm whitespace-nowrap" href="https://discord.gg/9ufJQpkq4S" target="_blank" rel="noopener noreferrer">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
        Ir al canal "Cómo jugar"
      </a>
    </div>
  </section>
);

const TeamsPage = ({ teamsData }: { teamsData: TeamDoc[] }) => (
  <section className="grid gap-4 sm:gap-5 md:grid-cols-2">
    {teamsData.length === 0 ? (
      <div className="col-span-full text-center py-12 text-white/60">
        <p className="text-lg">No hay equipos registrados aún.</p>
      </div>
    ) : (
      teamsData.map((team) => (
        <div key={team.name} className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 card-glow hover:border-habboMint/30 hover:bg-white/8 transition-all hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {'logo' in team && team.logo && (
              <img src={(team as any).logo} alt={`${team.name} logo`} className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg bg-white/8 border border-white/10 object-contain p-1" />
            )}
            <h3 className="font-display text-lg sm:text-xl">{team.name}</h3>
          </div>
          <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-habboOrange text-[#1f1d2b] font-semibold shadow-pixel hover:scale-110 transition-transform cursor-default">{team.record}</span>
        </div>
          <p className="text-white/70 text-xs sm:text-sm mb-3">{team.city}</p>
        {'hits' in team ? (
          <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 mb-3">
            <span className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white/60 text-[10px] sm:text-xs">HITS</p>
              <p className="font-semibold text-sm sm:text-base">{team.hits}</p>
            </span>
            <span className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white/60 text-[10px] sm:text-xs">RUNS</p>
              <p className="font-semibold text-sm sm:text-base">{team.runs}</p>
            </span>
            <span className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white/60 text-[10px] sm:text-xs">HR</p>
              <p className="font-semibold text-sm sm:text-base">{team.hr}</p>
            </span>
            <span className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white/60 text-[10px] sm:text-xs">SO (P)</p>
              <p className="font-semibold text-sm sm:text-base">{team.so}</p>
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 mb-3">
            <span>Poder: {'power' in team ? team.power : 0}</span>
            <span>Contacto: {'contact' in team ? team.contact : 0}</span>
            <span>Defensa: {'defense' in team ? team.defense : 0}</span>
            <span>Velocidad: {'speed' in team ? team.speed : 0}</span>
          </div>
        )}
        {'members' in team && (
          <div className="mb-3">
            <p className="text-xs sm:text-sm text-white/70 mb-1 sm:mb-2">Integrantes</p>
            <p className="text-xs sm:text-sm text-white/80">{team.members}</p>
          </div>
        )}
        <p className="text-[10px] sm:text-xs text-white/60 mb-1 sm:mb-2">Alineación</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {team.lineup.map((p) => (
            <span key={p} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-[10px] sm:text-sm">{p}</span>
          ))}
        </div>
      </div>
    ))
    )}
  </section>
);

const RulesPage = () => (
  <section className="space-y-5 sm:space-y-6">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow">
      <div className="section-title mb-3 sm:mb-4 text-lg sm:text-2xl">Normativa oficial de la WBL</div>
      <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
        Las reglas de la World Baseball League están diseñadas para garantizar un juego justo, competitivo y entretenido.
      </p>
      <div className="space-y-3 sm:space-y-5">
        {rules.map((rule) => (
          <div key={rule.title} className="p-3 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20">
            <h3 className="font-display text-base sm:text-lg mb-2 sm:mb-3">{rule.title}</h3>
            <div className="text-white/75 leading-relaxed text-xs sm:text-sm space-y-2">
              {rule.description.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-habboOrange/20 via-habboGold/15 to-transparent border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
      <div className="section-title mb-2 sm:mb-3 text-lg sm:text-2xl">Consulta las reglas completas</div>
      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
        ¿Quieres conocer el reglamento actualizado, ver tutoriales de las mecánicas y enterarte de todo sobre la liga? Visita nuestro Discord Oficial donde encontrarás toda la información que necesitas.
      </p>
      <a className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-habboOrange text-[#0f1018] font-semibold shadow-pixel relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:animate-shimmer hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboGold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] text-xs sm:text-sm whitespace-nowrap" href="https://discord.gg/9ufJQpkq4S" target="_blank" rel="noopener noreferrer">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
        Ver reglas en Discord
      </a>
    </div>
  </section>
);

const FoundersPage = () => (
  <section className="space-y-5 sm:space-y-6">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow">
      <div className="section-title mb-3 sm:mb-4 text-lg sm:text-2xl">Creditos</div>
      <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
        La World Baseball League fue creada por un grupo apasionado de roleplay en Habbo. Este grupo transformó el concepto de baseball en una experiencia competitiva única.
      </p>
    </div>

    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
      {founders.filter(f => f.size === 'normal').map((founder) => (
        <a
          key={founder.name}
          href={founder.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 card-glow hover:border-habboGold/60 hover:bg-white/12 transition-all hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(246,196,69,0.4)] cursor-pointer group"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            {founder.image ? (
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-br from-habboOrange/30 via-habboGold/20 to-transparent border-2 border-habboGold/40 flex-shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center p-1 overflow-hidden group-hover:border-habboGold/80 group-hover:shadow-[0_0_15px_rgba(255,156,51,0.6)]">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-gradient-to-br from-habboOrange/30 via-habboGold/20 to-transparent border-2 border-habboGold/40 grid place-items-center group-hover:scale-110 transition-transform flex-shrink-0 group-hover:border-habboGold/80 group-hover:shadow-[0_0_15px_rgba(255,156,51,0.6)]">
                <span className="text-lg sm:text-xl md:text-2xl font-black text-habboGold">{founder.name.slice(0, 1)}</span>
              </div>
            )}
            <div className="min-w-0">
              <h3 className="font-display text-base sm:text-lg md:text-xl truncate group-hover:text-habboGold transition-colors">{founder.name}</h3>
              <p className="text-[10px] sm:text-xs text-white/60 uppercase truncate group-hover:text-habboOrange transition-colors">{founder.role}</p>
            </div>
          </div>
          <p className="text-white/75 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors">{founder.bio}</p>
          <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs text-white/60 group-hover:text-habboGold transition-colors opacity-0 group-hover:opacity-100">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Ver perfil en Hobbaz</span>
          </div>
        </a>
      ))}
    </div>
    
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-[7px] sm:text-[8px] text-white/40">
      {founders.filter(f => f.size === 'small').map((founder) => (
        <span key={founder.name}>{founder.name}</span>
      ))}
    </div>

    <div className="bg-gradient-to-br from-habboMint/20 via-habboSky/15 to-transparent border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
      <div className="section-title mb-2 sm:mb-3 text-lg sm:text-2xl">Unete al legado</div>
      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
        Gracias a todo el equipo, la WBL sigue creciendo temporada tras temporada. Únete a la comunidad y forma parte de esta historia.
      </p>
      <a className="inline-flex px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-habboSky text-[#0f1018] font-semibold shadow-pixel hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-habboSky focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1018] text-xs sm:text-sm whitespace-nowrap" href="https://discord.gg/9ufJQpkq4S" target="_blank" rel="noopener noreferrer">
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
  const [teamsData, setTeamsData] = useState<TeamDoc[]>([]);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const snap = await getDocs(query(collection(db, 'teams'), orderBy('order', 'asc')));
        if (!snap.empty) {
          const loaded = snap.docs.map((d) => ({ id: d.id, ...(d.data() as TeamDoc) }));
          setTeamsData(loaded);
        }
      } catch (err) {
        console.error('Error loading teams', err);
      }
    };

    loadTeams();
  }, []);

  return (
    <AuthProvider>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[#0f1018] text-white">
            Cargando...
          </div>
        }
      >
        <Routes>
          <Route element={<Shell />}>
          <Route
            index
            element={
              <>
                <PageHeader title="Inicio" subtitle="Noticias y bienvenida a la liga roleplay de baseball en Hobbaz." />
                <HomePage />
              </>
            }
          />
          <Route
            path="/stats"
            element={
              <>
                <PageHeader title="Estadisticas" subtitle="Tabla general, equipo destacado y top de estadísticas." />
                <StatsPage teamsData={teamsData} />
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
                <TeamsPage teamsData={teamsData} />
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
                <PageHeader title="Creditos" subtitle="Los visionarios que hicieron posible la World Baseball League." />
                <FoundersPage />
              </>
            }
          />
          <Route
            path="/schedule"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Cargando...</p></div>}>
                <SchedulePage />
              </Suspense>
            }
          />
          <Route
            path="/standings"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Cargando...</p></div>}>
                <StandingsPage />
              </Suspense>
            }
          />
        </Route>
        
          {/* Admin Routes - hidden from navbar */}
          <Route path="/admin-wbl-2026/login" element={<LoginPage />} />
          <Route
            path="/admin-wbl-2026"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
