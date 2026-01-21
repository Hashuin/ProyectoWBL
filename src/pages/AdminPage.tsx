import { useState, FormEvent, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc, query, orderBy, limit, getDocs, Timestamp, deleteDoc, doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface NewsItem {
  id?: string;
  title: string;
  body: string;
  tag: string;
  date: string;
  createdAt: Date;
  imageUrl?: string;
}

interface TeamDoc {
  id?: string;
  name: string;
  city: string;
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
  leaderImageUrl?: string;
  position: string;
  entries: LeaderEntry[];
}

interface StatsDoc {
  champion: { name: string; season: string; detail: string };
  featuredTeamId?: string;
  leadersBatting: LeaderCardData[];
  leadersPitching: LeaderCardData[];
}

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'teams' | 'stats'>('news');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tag, setTag] = useState('Temporada');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [recentNews, setRecentNews] = useState<NewsItem[]>([]);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [confirmTitle, setConfirmTitle] = useState('');
  const [teams, setTeams] = useState<TeamDoc[]>([]);
  const [teamForm, setTeamForm] = useState<TeamDoc & { lineupText: string }>({
    name: '',
    city: '',
    record: '',
    logoUrl: '',
    hits: 0,
    runs: 0,
    hr: 0,
    so: 0,
    power: 0,
    contact: 0,
    defense: 0,
    speed: 0,
    lineup: [],
    members: '',
    lineupText: '',
    order: teams.length + 1
  });
  const [editingTeamId, setEditingTeamId] = useState<string | null>(null);
  const [statsForm, setStatsForm] = useState<StatsDoc>({
    champion: { name: '', season: '', detail: '' },
    featuredTeamId: '',
    leadersBatting: [
      { label: 'OPS', stat: '', leader: '', leaderImageUrl: '', position: '', entries: [{ name: '', value: '', imageUrl: '' }] }
    ],
    leadersPitching: [
      { label: 'SO', stat: '', leader: '', leaderImageUrl: '', position: '', entries: [{ name: '', value: '', imageUrl: '' }] }
    ]
  });
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/admin-wbl-2026/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    loadRecentNews();
    loadTeams();
    loadStats();
  }, []);

  const loadRecentNews = async () => {
    try {
      const newsQuery = query(
        collection(db, 'news'),
        orderBy('createdAt', 'desc'),
        limit(5)
      );
      const snapshot = await getDocs(newsQuery);
      const news = snapshot.docs.map(item => ({ id: item.id, ...(item.data() as NewsItem) }));
      setRecentNews(news);
    } catch (err) {
      console.error('Error loading news:', err);
    }
  };

  const loadTeams = async () => {
    try {
      const snap = await getDocs(query(collection(db, 'teams'), orderBy('order', 'asc')));
      if (!snap.empty) {
        const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as TeamDoc) }));
        setTeams(list);
      }
    } catch (err) {
      console.error('Error loading teams:', err);
    }
  };

  const loadStats = async () => {
    try {
      const statsRef = doc(db, 'stats', 'current');
      const snap = await getDoc(statsRef);
      if (snap.exists()) {
        const data = snap.data() as StatsDoc;
        setStatsForm({
          champion: data.champion || { name: '', season: '', detail: '' },
          featuredTeamId: data.featuredTeamId || '',
          leadersBatting: data.leadersBatting && data.leadersBatting.length ? data.leadersBatting : statsForm.leadersBatting,
          leadersPitching: data.leadersPitching && data.leadersPitching.length ? data.leadersPitching : statsForm.leadersPitching
        });
      }
    } catch (err) {
      console.error('Error loading stats:', err);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('La imagen es muy grande. Máximo 5MB.');
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setError('');
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);
    
    const imgbbKey = import.meta.env.VITE_IMGBB_API_KEY;
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Error al subir la imagen');
    }
    
    const data = await response.json();
    return data.data.display_url;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const now = new Date();
      const dateStr = now.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

      let imageUrl = '';
      
      if (image) {
        setUploading(true);
        imageUrl = await uploadImage(image);
        setUploading(false);
      }

      await addDoc(collection(db, 'news'), {
        title,
        body,
        tag,
        date: dateStr,
        createdAt: Timestamp.fromDate(now),
        ...(imageUrl && { imageUrl })
      });

      setSuccess('¡Noticia publicada exitosamente!');
      setTitle('');
      setBody('');
      setTag('Temporada');
      setImage(null);
      setImagePreview('');
      loadRecentNews();
    } catch (err: any) {
      setError(err.message || 'Error al publicar la noticia. Intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const requestDelete = (newsId?: string, title?: string) => {
    if (!newsId) return;
    setConfirmId(newsId);
    setConfirmTitle(title || 'esta noticia');
  };

  const confirmDelete = async () => {
    if (!confirmId) return;
    try {
      setLoading(true);
      await deleteDoc(doc(db, 'news', confirmId));
      setRecentNews((prev) => prev.filter((item) => item.id !== confirmId));
    } catch (err) {
      console.error('Error al eliminar noticia', err);
      setError('No se pudo eliminar la noticia.');
    } finally {
      setLoading(false);
      setConfirmId(null);
      setConfirmTitle('');
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const resetTeamForm = () => {
    setTeamForm({
      name: '',
      city: '',
      record: '',
      logoUrl: '',
      hits: 0,
      runs: 0,
      hr: 0,
      so: 0,
      power: 0,
      contact: 0,
      defense: 0,
      speed: 0,
      lineup: [],
      members: '',
      lineupText: '',
      order: (teams.length || 0) + 1
    });
    setEditingTeamId(null);
  };

  const handleTeamSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const lineup = teamForm.lineupText.split(',').map((p) => p.trim()).filter(Boolean);
      const payload: TeamDoc = {
        name: teamForm.name,
        city: teamForm.city,
        record: teamForm.record,
        logoUrl: teamForm.logoUrl,
        hits: Number(teamForm.hits) || 0,
        runs: Number(teamForm.runs) || 0,
        hr: Number(teamForm.hr) || 0,
        so: Number(teamForm.so) || 0,
        power: Number(teamForm.power) || 0,
        contact: Number(teamForm.contact) || 0,
        defense: Number(teamForm.defense) || 0,
        speed: Number(teamForm.speed) || 0,
        members: teamForm.members,
        lineup,
        order: teamForm.order || teams.length + 1
      };

      if (editingTeamId) {
        await updateDoc(doc(db, 'teams', editingTeamId), payload as any);
        setSuccess('Equipo actualizado.');
      } else {
        await addDoc(collection(db, 'teams'), payload);
        setSuccess('Equipo creado.');
      }

      await loadTeams();
      resetTeamForm();
    } catch (err: any) {
      console.error('Error guardando equipo', err);
      setError(err.message || 'No se pudo guardar el equipo');
    } finally {
      setLoading(false);
    }
  };

  const editTeam = (team: TeamDoc) => {
    setEditingTeamId(team.id || null);
    setTeamForm({
      ...team,
      lineupText: team.lineup.join(', ')
    });
  };

  const deleteTeam = async (teamId?: string) => {
    if (!teamId) return;
    try {
      setLoading(true);
      await deleteDoc(doc(db, 'teams', teamId));
      await loadTeams();
      setSuccess('Equipo eliminado');
    } catch (err) {
      console.error('Error eliminando equipo', err);
      setError('No se pudo eliminar el equipo');
    } finally {
      setLoading(false);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError('La imagen es muy grande. Máximo 5MB.');
      return;
    }
    try {
      setUploading(true);
      const url = await uploadImage(file);
      setTeamForm((prev) => ({ ...prev, logoUrl: url }));
    } catch (err) {
      console.error('Error subiendo logo', err);
      setError('No se pudo subir el logo');
    } finally {
      setUploading(false);
    }
  };

  const handleStatsChange = (path: string, value: string) => {
    setStatsForm((prev) => {
      const draft = JSON.parse(JSON.stringify(prev)) as StatsDoc;
      const [head, ...rest] = path.split('.');
      if (head === 'champion' && rest.length) {
        (draft as any).champion[rest[0]] = value;
      }
      if (head === 'featuredTeamId') draft.featuredTeamId = value;
      return draft;
    });
  };

  const handleLeaderChange = (type: 'leadersBatting' | 'leadersPitching', cardIdx: number, field: keyof LeaderCardData, value: string) => {
    setStatsForm((prev) => {
      const draft = JSON.parse(JSON.stringify(prev)) as StatsDoc;
      (draft as any)[type][cardIdx][field] = value;
      return draft;
    });
  };

  const handleLeaderEntryChange = (
    type: 'leadersBatting' | 'leadersPitching',
    cardIdx: number,
    entryIdx: number,
    field: keyof LeaderEntry,
    value: string
  ) => {
    setStatsForm((prev) => {
      const draft = JSON.parse(JSON.stringify(prev)) as StatsDoc;
      (draft as any)[type][cardIdx].entries[entryIdx][field] = value;
      return draft;
    });
  };

  const handleLeaderEntryUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'leadersBatting' | 'leadersPitching',
    cardIdx: number,
    entryIdx: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError('La imagen es muy grande. Máximo 5MB.');
      return;
    }
    try {
      setUploading(true);
      const url = await uploadImage(file);
      handleLeaderEntryChange(type, cardIdx, entryIdx, 'imageUrl', url);
    } catch (err) {
      console.error('Error subiendo avatar', err);
      setError('No se pudo subir el icono');
    } finally {
      setUploading(false);
    }
  };

  const addLeaderEntry = (type: 'leadersBatting' | 'leadersPitching', cardIdx: number) => {
    setStatsForm((prev) => {
      const draft = JSON.parse(JSON.stringify(prev)) as StatsDoc;
      draft[type][cardIdx].entries.push({ name: '', value: '', imageUrl: '' });
      return draft;
    });
  };

  const handleLeaderImageUpload = async (e: ChangeEvent<HTMLInputElement>, type: 'leadersBatting' | 'leadersPitching', cardIdx: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      setStatsForm((prev) => {
        const draft = JSON.parse(JSON.stringify(prev)) as StatsDoc;
        draft[type][cardIdx].leaderImageUrl = url;
        return draft;
      });
    } catch (err: any) {
      setError(err.message || 'Error subiendo imagen');
    } finally {
      setUploading(false);
    }
  };

  const removeLeaderEntry = (type: 'leadersBatting' | 'leadersPitching', cardIdx: number, entryIdx: number) => {
    setStatsForm((prev) => {
      const draft = JSON.parse(JSON.stringify(prev)) as StatsDoc;
      // No permitir eliminar si solo hay 1 entrada
      if (draft[type][cardIdx].entries.length <= 1) return prev;
      draft[type][cardIdx].entries.splice(entryIdx, 1);
      return draft;
    });
  };

  const addLeaderCard = (type: 'leadersBatting' | 'leadersPitching') => {
    setStatsForm((prev) => {
      const draft = JSON.parse(JSON.stringify(prev)) as StatsDoc;
      draft[type].push({ label: '', stat: '', leader: '', leaderImageUrl: '', position: '', entries: [{ name: '', value: '', imageUrl: '' }] });
      return draft;
    });
  };

  const saveStats = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await setDoc(doc(db, 'stats', 'current'), statsForm);
      setSuccess('Estadísticas actualizadas');
    } catch (err) {
      console.error('Error guardando estadísticas', err);
      setError('No se pudo guardar las estadísticas');
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <>
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl mb-2">Panel de Administración</h1>
              <p className="text-white/70 text-sm">Bienvenido, {user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { key: 'news', label: 'Noticias' },
              { key: 'teams', label: 'Equipos' },
              { key: 'stats', label: 'Estadísticas' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key as any);
                  setSuccess('');
                  setError('');
                }}
                className={`px-4 py-2 rounded-lg border ${activeTab === tab.key ? 'bg-habboOrange text-[#0f1018] border-transparent' : 'bg-white/5 border-white/15 text-white'} hover:border-habboOrange/40 transition-colors`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'news' && (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 card-glow">
                <h2 className="font-display text-xl mb-4">Publicar Noticia</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-white/80 mb-2">
                      Título
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-habboSky focus:border-transparent"
                      placeholder="Título de la noticia"
                    />
                  </div>

                  <div>
                    <label htmlFor="body" className="block text-sm font-medium text-white/80 mb-2">
                      Contenido
                    </label>
                    <textarea
                      id="body"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      required
                      rows={4}
                      maxLength={300}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-habboSky focus:border-transparent resize-none"
                      placeholder="Escribe el contenido de la noticia..."
                    />
                    <p className="text-xs text-white/60 mt-1">{body.length}/300 caracteres</p>
                  </div>

                  <div>
                    <label htmlFor="tag" className="block text-sm font-medium text-white/80 mb-2">
                      Categoría
                    </label>
                    <select
                      id="tag"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-habboSky focus:border-transparent"
                    >
                      <option value="Temporada">Temporada</option>
                      <option value="Fichajes">Fichajes</option>
                      <option value="Eventos">Eventos</option>
                      <option value="Anuncio">Anuncio</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-white/80 mb-2">
                      Imagen (opcional, máx 5MB)
                    </label>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-habboOrange file:text-[#0f1018] hover:file:bg-habboOrange/90 file:cursor-pointer"
                    />
                    {imagePreview && (
                      <div className="mt-2 relative w-full overflow-hidden rounded-lg border border-white/10" style={{ paddingTop: '56%' }}>
                        <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => {
                            setImage(null);
                            setImagePreview('');
                          }}
                          className="absolute top-2 right-2 p-1 rounded-full bg-habboBrick/80 hover:bg-habboBrick text-white"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>

                  {success && (
                    <div className="p-3 rounded-lg bg-habboMint/20 border border-habboMint/40">
                      <p className="text-sm text-habboMint">{success}</p>
                    </div>
                  )}

                  {error && (
                    <div className="p-3 rounded-lg bg-habboBrick/20 border border-habboBrick/40">
                      <p className="text-sm text-habboBrick">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || uploading}
                    className="w-full px-4 py-3 rounded-lg bg-habboOrange text-[#0f1018] font-semibold shadow-pixel hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploading ? 'Subiendo imagen...' : loading ? 'Publicando...' : 'Publicar Noticia'}
                  </button>
                </form>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 card-glow">
                <h2 className="font-display text-xl mb-4">Noticias Recientes</h2>
                <div className="space-y-3">
                  {recentNews.length === 0 ? (
                    <p className="text-white/60 text-sm">No hay noticias publicadas aún.</p>
                  ) : (
                    recentNews.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-habboOrange font-semibold">{item.tag}</span>
                          <span className="text-xs text-white/60">{item.date}</span>
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
                        <h3 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h3>
                        <p className="text-xs text-white/75 line-clamp-2">{item.body.length > 100 ? item.body.substring(0, 100) + '...' : item.body}</p>
                        <div className="flex justify-end mt-2">
                          <button
                            onClick={() => requestDelete(item.id, item.title)}
                            className="text-xs px-3 py-1 rounded-lg bg-habboBrick/70 text-white hover:bg-habboBrick transition-colors"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teams' && (
            <div className="grid gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 card-glow">
                <h2 className="font-display text-xl mb-4">Equipos</h2>
                {success && (
                  <div className="p-3 rounded-lg bg-habboMint/20 border border-habboMint/40 mb-3">
                    <p className="text-sm text-habboMint">{success}</p>
                  </div>
                )}
                {error && (
                  <div className="p-3 rounded-lg bg-habboBrick/20 border border-habboBrick/40 mb-3">
                    <p className="text-sm text-habboBrick">{error}</p>
                  </div>
                )}
                <form onSubmit={handleTeamSubmit} className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
                      <p className="text-sm text-white/70 font-semibold">Identidad del equipo</p>
                      <div>
                        <label className="block text-sm text-white/80 mb-1">Nombre (ej. Guerreros de La Habana)</label>
                        <input className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" value={teamForm.name} onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })} required />
                      </div>
                      <div>
                        <label className="block text-sm text-white/80 mb-1">Ciudad (ej. La Habana)</label>
                        <input className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" value={teamForm.city} onChange={(e) => setTeamForm({ ...teamForm, city: e.target.value })} required />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-white/80 mb-1">Record (ej. 18-6)</label>
                          <input className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" value={teamForm.record} onChange={(e) => setTeamForm({ ...teamForm, record: e.target.value })} placeholder="18-6" required />
                        </div>
                        <div>
                          <label className="block text-sm text-white/80 mb-1">Orden (controla el orden en la lista)</label>
                          <input type="number" className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" value={teamForm.order || 1} onChange={(e) => setTeamForm({ ...teamForm, order: Number(e.target.value) })} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
                      <p className="text-sm text-white/70 font-semibold">Logo, lineup e integrantes</p>
                      <div>
                        <label className="block text-sm text-white/80 mb-1">Logo (png/jpg, máx 5MB)</label>
                        <input type="file" accept="image/*" onChange={handleLogoUpload} className="w-full text-white" />
                        <p className="text-[11px] text-white/60 mt-1">Usa fondo transparente si es posible.</p>
                        {teamForm.logoUrl && <img src={teamForm.logoUrl} alt="logo" className="mt-2 h-16 w-auto rounded border border-white/10" />}
                      </div>
                      <div>
                        <label className="block text-sm text-white/80 mb-1">Lineup (separa con coma, orden de bateo)</label>
                        <textarea className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" rows={2} value={teamForm.lineupText} onChange={(e) => setTeamForm({ ...teamForm, lineupText: e.target.value })} placeholder="Flash (P), Lucas (1B), JJ (SS), Kush (DH)" />
                        <p className="text-[11px] text-white/60 mt-1">Ejemplo: Flash (P), Lucas (1B), JJ (SS), Kush (DH). Incluye posición entre paréntesis.</p>
                      </div>
                      <div>
                        <label className="block text-sm text-white/80 mb-1">Integrantes (texto libre)</label>
                        <textarea className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" rows={2} value={teamForm.members} onChange={(e) => setTeamForm({ ...teamForm, members: e.target.value })} placeholder="Kush, Lucas, Flash, JJ, xzxxzc" />
                        <p className="text-[11px] text-white/60 mt-1">Incluye roster ampliado o staff si aplica.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
                    <div>
                      <p className="text-sm text-white/70 font-semibold">Stats ofensivas / alternativas</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mt-2">
                        {[
                          { key: 'hits', label: 'HITS' },
                          { key: 'runs', label: 'RUNS' },
                          { key: 'hr', label: 'HR' },
                          { key: 'so', label: 'SO (ponches)' }
                        ].map((f) => (
                          <div key={f.key} className="space-y-1">
                            <label className="block text-xs text-white/70">{f.label}</label>
                            <input
                              type="number"
                              placeholder={f.label}
                              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                              value={(teamForm as any)[f.key] || ''}
                              onChange={(e) => setTeamForm({ ...teamForm, [f.key]: Number(e.target.value) })}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 font-semibold">Ratings alternativos</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mt-2">
                        {[
                          { key: 'power', label: 'Poder' },
                          { key: 'contact', label: 'Contacto' },
                          { key: 'defense', label: 'Defensa' },
                          { key: 'speed', label: 'Velocidad' }
                        ].map((f) => (
                          <div key={f.key} className="space-y-1">
                            <label className="block text-xs text-white/70">{f.label}</label>
                            <input
                              type="number"
                              placeholder={f.label}
                              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                              value={(teamForm as any)[f.key] || ''}
                              onChange={(e) => setTeamForm({ ...teamForm, [f.key]: Number(e.target.value) })}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button type="submit" className="flex-1 px-4 py-2 rounded-lg bg-habboOrange text-[#0f1018] font-semibold shadow-pixel disabled:opacity-50" disabled={loading || uploading}>
                      {editingTeamId ? 'Actualizar equipo' : 'Crear equipo'}
                    </button>
                    {editingTeamId && (
                      <button type="button" onClick={resetTeamForm} className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10">Cancelar</button>
                    )}
                  </div>
                </form>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 card-glow">
                <h3 className="font-display text-lg mb-3">Listado</h3>
                <div className="space-y-3">
                  {teams.length === 0 ? (
                    <p className="text-sm text-white/60">Sin equipos todavía.</p>
                  ) : (
                    teams.map((team) => (
                      <div key={team.id} className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3 justify-between">
                        <div className="flex items-center gap-3">
                          {team.logoUrl && <img src={team.logoUrl} alt="logo" className="h-10 w-10 rounded bg-white/10 border border-white/10 object-contain" />}
                          <div>
                            <p className="font-semibold">{team.name}</p>
                            <p className="text-xs text-white/60">{team.city} · {team.record}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 text-xs">
                          <button onClick={() => editTeam(team)} className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15">Editar</button>
                          <button onClick={() => deleteTeam(team.id)} className="px-3 py-1 rounded-lg bg-habboBrick text-white hover:bg-habboBrick/90">Eliminar</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="grid gap-6">
              <form onSubmit={saveStats} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 card-glow space-y-6 max-w-7xl w-full mx-auto">
                <h2 className="font-display text-xl">Estadísticas</h2>
                {success && (
                  <div className="p-3 rounded-lg bg-habboMint/20 border border-habboMint/40">
                    <p className="text-sm text-habboMint">{success}</p>
                  </div>
                )}
                {error && (
                  <div className="p-3 rounded-lg bg-habboBrick/20 border border-habboBrick/40">
                    <p className="text-sm text-habboBrick">{error}</p>
                  </div>
                )}
                <div className="grid gap-6 xl:gap-8 grid-cols-1 xl:grid-cols-2">
                  <div className="p-4 lg:p-5 rounded-xl border border-white/10 bg-white/5 space-y-3">
                    <p className="text-sm text-white/70 font-semibold">Campeón y destacado</p>
                    <div className="space-y-2">
                      <label className="block text-sm text-white/80">Nombre del campeón</label>
                      <input className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" placeholder="Ej. Conquistadores" value={statsForm.champion.name} onChange={(e) => handleStatsChange('champion.name', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm text-white/80">Season</label>
                      <input className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" placeholder="Ej. 2026" value={statsForm.champion.season} onChange={(e) => handleStatsChange('champion.season', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm text-white/80">Detalle (marcador, serie, etc.)</label>
                      <input className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" placeholder="Ej. 4-2 sobre Pirates" value={statsForm.champion.detail} onChange={(e) => handleStatsChange('champion.detail', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm text-white/80">Equipo destacado</label>
                      <select className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" value={statsForm.featuredTeamId} onChange={(e) => handleStatsChange('featuredTeamId', e.target.value)}>
                        <option value="">Seleccione equipo</option>
                        {teams.map((t) => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </select>
                      <p className="text-[11px] text-white/60">Se mostrará como destacado en la sección pública.</p>
                    </div>
                  </div>

                  <div className="p-4 lg:p-5 rounded-xl border border-white/10 bg-white/5 space-y-4">
                    <p className="text-sm text-white/70 font-semibold">Líderes de bateo</p>
                    <p className="text-[11px] text-white/60">Llena cada tarjeta con el label (ej. OPS) y la línea principal; debajo agrega entradas para top 3.</p>
                    <div className="space-y-3">
                      {statsForm.leadersBatting.map((card, idx) => (
                        <div key={`bat-${idx}`} className="p-4 rounded-lg border border-white/10 bg-white/5 space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="space-y-1">
                              <label className="block text-xs text-white/70">Label (ej. OPS)</label>
                              <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="OPS" value={card.label} onChange={(e) => handleLeaderChange('leadersBatting', idx, 'label', e.target.value)} />
                            </div>
                            <div className="space-y-1">
                              <label className="block text-xs text-white/70">Stat (valor)</label>
                              <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="1.050" value={card.stat} onChange={(e) => handleLeaderChange('leadersBatting', idx, 'stat', e.target.value)} />
                            </div>
                            <div className="space-y-1">
                              <label className="block text-xs text-white/70">Líder principal</label>
                              <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="Nombre" value={card.leader} onChange={(e) => handleLeaderChange('leadersBatting', idx, 'leader', e.target.value)} />
                            </div>
                            <div className="space-y-1">
                              <label className="block text-xs text-white/70">Icono del líder (opcional)</label>
                              <div className="flex items-center gap-3">
                                <label className="cursor-pointer">
                                  <input type="file" accept="image/*" onChange={(e) => handleLeaderImageUpload(e, 'leadersBatting', idx)} className="hidden" />
                                  <span className="inline-block px-4 py-2 text-xs rounded bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors">Seleccionar archivo</span>
                                </label>
                                {card.leaderImageUrl && (
                                  <div className="flex items-center gap-2">
                                    <img src={card.leaderImageUrl} alt="líder" className="h-10 w-10 rounded bg-white/10 border border-white/10 object-contain" />
                                    <span className="text-xs text-white/60">✓ Cargado</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="space-y-1">
                              <label className="block text-xs text-white/70">Posición / Equipo</label>
                              <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="SS - Falcons" value={card.position} onChange={(e) => handleLeaderChange('leadersBatting', idx, 'position', e.target.value)} />
                            </div>
                          </div>
                          <div className="mt-3 space-y-3">
                            <p className="text-xs text-white/60 font-medium">Entradas del top:</p>
                            {card.entries.map((entry, eIdx) => (
                              <div key={`be-${eIdx}`} className="p-3 rounded bg-white/5 border border-white/5 relative">
                                {card.entries.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeLeaderEntry('leadersBatting', idx, eIdx)}
                                    className="absolute top-2 right-2 p-1 rounded bg-habboBrick/70 hover:bg-habboBrick text-white transition-colors"
                                    title="Eliminar entrada"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                )}
                                <div className="grid grid-cols-1 gap-3">
                                  <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                      <label className="block text-xs text-white/70">Nombre</label>
                                      <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm" placeholder="Kush" value={entry.name} onChange={(e) => handleLeaderEntryChange('leadersBatting', idx, eIdx, 'name', e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                      <label className="block text-xs text-white/70">Valor</label>
                                      <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm" placeholder="12" value={entry.value} onChange={(e) => handleLeaderEntryChange('leadersBatting', idx, eIdx, 'value', e.target.value)} />
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    <label className="block text-xs text-white/70">Icono (opcional)</label>
                                    <div className="flex items-center gap-3">
                                      <label className="cursor-pointer">
                                        <input type="file" accept="image/*" onChange={(e) => handleLeaderEntryUpload(e, 'leadersBatting', idx, eIdx)} className="hidden" />
                                        <span className="inline-block px-4 py-2 text-xs rounded bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors">Seleccionar archivo</span>
                                      </label>
                                      {entry.imageUrl && (
                                        <div className="flex items-center gap-2">
                                          <img src={entry.imageUrl} alt="ico" className="h-10 w-10 rounded bg-white/10 border border-white/10 object-contain" />
                                          <span className="text-xs text-white/60">✓ Archivo cargado</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button type="button" onClick={() => addLeaderEntry('leadersBatting', idx)} className="text-xs px-3 py-2 rounded bg-white/10 border border-white/15 hover:bg-white/15 transition-colors">+ entrada</button>
                          </div>
                        </div>
                      ))}
                      <button type="button" onClick={() => addLeaderCard('leadersBatting')} className="text-xs px-3 py-1 rounded bg-white/10 border border-white/15">+ tarjeta bateo</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-white/70 font-semibold">Líderes de pitcheo</p>
                  <p className="text-[11px] text-white/60">Usa los mismos labels que en la vista pública (SO, ERA, etc.).</p>
                  <div className="space-y-3">
                    {statsForm.leadersPitching.map((card, idx) => (
                      <div key={`pit-${idx}`} className="p-4 rounded-lg border border-white/10 bg-white/5 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div className="space-y-1">
                            <label className="block text-xs text-white/70">Label (ej. SO)</label>
                            <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="SO" value={card.label} onChange={(e) => handleLeaderChange('leadersPitching', idx, 'label', e.target.value)} />
                          </div>
                          <div className="space-y-1">
                            <label className="block text-xs text-white/70">Stat (valor)</label>
                            <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="35" value={card.stat} onChange={(e) => handleLeaderChange('leadersPitching', idx, 'stat', e.target.value)} />
                          </div>
                          <div className="space-y-1">
                            <label className="block text-xs text-white/70">Líder principal</label>
                            <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="Nombre" value={card.leader} onChange={(e) => handleLeaderChange('leadersPitching', idx, 'leader', e.target.value)} />
                          </div>
                          <div className="space-y-1">
                            <label className="block text-xs text-white/70">Icono del líder (opcional)</label>
                            <div className="flex items-center gap-3">
                              <label className="cursor-pointer">
                                <input type="file" accept="image/*" onChange={(e) => handleLeaderImageUpload(e, 'leadersPitching', idx)} className="hidden" />
                                <span className="inline-block px-4 py-2 text-xs rounded bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors">Seleccionar archivo</span>
                              </label>
                              {card.leaderImageUrl && (
                                <div className="flex items-center gap-2">
                                  <img src={card.leaderImageUrl} alt="líder" className="h-10 w-10 rounded bg-white/10 border border-white/10 object-contain" />
                                  <span className="text-xs text-white/60">✓ Cargado</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="block text-xs text-white/70">Posición / Equipo</label>
                            <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white" placeholder="P - Raptors" value={card.position} onChange={(e) => handleLeaderChange('leadersPitching', idx, 'position', e.target.value)} />
                          </div>
                        </div>
                        <div className="mt-3 space-y-3">
                          <p className="text-xs text-white/60 font-medium">Entradas del top:</p>
                          {card.entries.map((entry, eIdx) => (
                            <div key={`pe-${eIdx}`} className="p-3 rounded bg-white/5 border border-white/5 relative">
                              {card.entries.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeLeaderEntry('leadersPitching', idx, eIdx)}
                                  className="absolute top-2 right-2 p-1 rounded bg-habboBrick/70 hover:bg-habboBrick text-white transition-colors"
                                  title="Eliminar entrada"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              )}
                              <div className="grid grid-cols-1 gap-3">
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="space-y-1">
                                    <label className="block text-xs text-white/70">Nombre</label>
                                    <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm" placeholder="Pitcher" value={entry.name} onChange={(e) => handleLeaderEntryChange('leadersPitching', idx, eIdx, 'name', e.target.value)} />
                                  </div>
                                  <div className="space-y-1">
                                    <label className="block text-xs text-white/70">Valor</label>
                                    <input className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm" placeholder="35" value={entry.value} onChange={(e) => handleLeaderEntryChange('leadersPitching', idx, eIdx, 'value', e.target.value)} />
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <label className="block text-xs text-white/70">Icono (opcional)</label>
                                  <div className="flex items-center gap-3">
                                    <label className="cursor-pointer">
                                      <input type="file" accept="image/*" onChange={(e) => handleLeaderEntryUpload(e, 'leadersPitching', idx, eIdx)} className="hidden" />
                                      <span className="inline-block px-4 py-2 text-xs rounded bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors">Seleccionar archivo</span>
                                    </label>
                                    {entry.imageUrl && (
                                      <div className="flex items-center gap-2">
                                        <img src={entry.imageUrl} alt="ico" className="h-10 w-10 rounded bg-white/10 border border-white/10 object-contain" />
                                        <span className="text-xs text-white/60">✓ Archivo cargado</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <button type="button" onClick={() => addLeaderEntry('leadersPitching', idx)} className="text-xs px-3 py-2 rounded bg-white/10 border border-white/15 hover:bg-white/15 transition-colors">+ entrada</button>
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={() => addLeaderCard('leadersPitching')} className="text-xs px-3 py-1 rounded bg-white/10 border border-white/15">+ tarjeta pitcheo</button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 rounded-lg bg-habboOrange text-[#0f1018] font-semibold shadow-pixel disabled:opacity-50" disabled={loading || uploading}>
                    Guardar estadísticas
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {confirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm" onClick={() => setConfirmId(null)}>
          <div
            className="bg-[#0f1018] border border-white/10 rounded-xl p-6 max-w-sm w-full card-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-lg mb-2">Eliminar noticia</h3>
            <p className="text-sm text-white/80 mb-4">¿Seguro que quieres eliminar esta noticia? Esta acción no se puede deshacer.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmId(null)}
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-habboBrick text-white hover:bg-habboBrick/90"
                disabled={loading}
              >
                {loading ? 'Eliminando...' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPage;
