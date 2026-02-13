import { useState, useEffect } from 'react';
import { scheduleService, GameSchedule } from '../../services/scheduleService';

export default function ScheduleAdmin() {
  const [games, setGames] = useState<GameSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadingHomeLogo, setUploadingHomeLogo] = useState(false);
  const [uploadingAwayLogo, setUploadingAwayLogo] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState<Omit<GameSchedule, 'id' | 'createdAt'>>({
    homeTeam: '',
    awayTeam: '',
    date: '',
    time: '',
    stadium: '',
    status: 'Regular',
    finished: false
  });

  useEffect(() => {
    loadGames();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const loadGames = async () => {
    setLoading(true);
    try {
      const data = await scheduleService.getGames();
      setGames(data);
    } catch (error) {
      console.error('Error loading games:', error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch('https://api.imgbb.com/1/upload?key=53d55929203cca2897412059c25399d3', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Error al subir la imagen');
    }
    
    const data = await response.json();
    return data.data.display_url;
  };

  const handleHomeLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen es muy grande. Máximo 5MB.');
      return;
    }

    try {
      setUploadingHomeLogo(true);
      const url = await uploadImage(file);
      setFormData({ ...formData, homeTeamLogo: url });
    } catch (err) {
      console.error('Error subiendo logo:', err);
      alert('No se pudo subir el logo');
    } finally {
      setUploadingHomeLogo(false);
    }
  };

  const handleAwayLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      alert('La imagen es muy grande. Máximo 5MB.');
      return;
    }

    try {
      setUploadingAwayLogo(true);
      const url = await uploadImage(file);
      setFormData({ ...formData, awayTeamLogo: url });
    } catch (err) {
      console.error('Error subiendo logo:', err);
      alert('No se pudo subir el logo');
    } finally {
      setUploadingAwayLogo(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.homeTeam.trim() || !formData.awayTeam.trim() || !formData.stadium.trim()) {
      setMessage({ type: 'error', text: 'Por favor completa los campos: Equipo Local, Equipo Visitante y Estadio' });
      return;
    }

    setSubmitting(true);
    setMessage(null);
    
    try {
      // Filtrar campos undefined antes de enviar
      const cleanedData = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value !== undefined)
      );

      if (editingId) {
        await scheduleService.updateGame(editingId, cleanedData as Partial<GameSchedule>);
        setMessage({ type: 'success', text: 'Partido actualizado correctamente' });
      } else {
        await scheduleService.addGame(cleanedData as Omit<GameSchedule, 'id' | 'createdAt'>);
        setMessage({ type: 'success', text: 'Partido creado correctamente' });
      }
      await new Promise(resolve => setTimeout(resolve, 500));
      await loadGames();
      resetForm();
    } catch (error) {
      console.error('Error saving game:', error);
      setMessage({ type: 'error', text: `Error al guardar: ${error instanceof Error ? error.message : 'Error desconocido'}` });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Eliminar este partido?')) {
      try {
        await scheduleService.deleteGame(id);
        await loadGames();
      } catch (error) {
        console.error('Error deleting game:', error);
      }
    }
  };

  const handleEdit = (game: GameSchedule) => {
    setFormData({
      homeTeam: game.homeTeam,
      awayTeam: game.awayTeam,
      homeTeamLogo: game.homeTeamLogo,
      awayTeamLogo: game.awayTeamLogo,
      date: game.date || '',
      time: game.time || '',
      stadium: game.stadium,
      status: game.status,
      finished: game.finished,
      homeTeamScore: game.homeTeamScore,
      awayTeamScore: game.awayTeamScore
    });
    setEditingId(game.id || null);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      homeTeam: '',
      awayTeam: '',
      date: '',
      time: '',
      stadium: '',
      status: 'Regular',
      finished: false
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-yellow-400">Gestionar Programación</h2>
        
        {/* Add Game Button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
          >
            + Agregar Partido
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-gray-700 p-6 rounded-lg mb-6 border-2 border-yellow-400">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">
            {editingId ? 'Editar Partido' : 'Nuevo Partido'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Equipo Local
                </label>
                <input
                  type="text"
                  value={formData.homeTeam}
                  onChange={(e) => setFormData({ ...formData, homeTeam: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Logo Equipo Local
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleHomeLogoUpload}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none text-sm"
                    disabled={uploadingHomeLogo}
                  />
                  {formData.homeTeamLogo && (
                    <img src={formData.homeTeamLogo} alt="Logo Local" className="w-10 h-10 rounded object-cover" />
                  )}
                </div>
                {uploadingHomeLogo && <p className="text-yellow-400 text-xs mt-1">Subiendo...</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Equipo Visitante
                </label>
                <input
                  type="text"
                  value={formData.awayTeam}
                  onChange={(e) => setFormData({ ...formData, awayTeam: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Logo Equipo Visitante
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAwayLogoUpload}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none text-sm"
                    disabled={uploadingAwayLogo}
                  />
                  {formData.awayTeamLogo && (
                    <img src={formData.awayTeamLogo} alt="Logo Visitante" className="w-10 h-10 rounded object-cover" />
                  )}
                </div>
                {uploadingAwayLogo && <p className="text-yellow-400 text-xs mt-1">Subiendo...</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Fecha</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">Opcional: deja vacío si no se ha acordado</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Hora</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">Opcional: deja vacío si no se ha acordado</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Estadio</label>
                <input
                  type="text"
                  value={formData.stadium}
                  onChange={(e) => setFormData({ ...formData, stadium: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Estado</label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as GameSchedule['status']
                    })
                  }
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                >
                  <option value="Pretemporada">Pretemporada</option>
                  <option value="Regular">Regular</option>
                  <option value="Postemporada">Postemporada</option>
                </select>
              </div>
            </div>

            {/* Score inputs if finished */}
            {formData.finished && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Goles Local
                  </label>
                  <input
                    type="number"
                    value={formData.homeTeamScore ?? ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({
                        ...formData,
                        homeTeamScore: value === '' ? undefined : parseInt(value, 10)
                      });
                    }}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Goles Visitante
                  </label>
                  <input
                    type="number"
                    value={formData.awayTeamScore ?? ''}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData({
                        ...formData,
                        awayTeamScore: value === '' ? undefined : parseInt(value, 10)
                      });
                    }}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.finished}
                  onChange={(e) => setFormData({ ...formData, finished: e.target.checked })}
                  className="w-5 h-5"
                />
                <span className="text-gray-200">Partido finalizado</span>
              </label>
            </div>

            {message && (
              <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-900/30 border border-green-600 text-green-300' : 'bg-red-900/30 border border-red-600 text-red-300'}`}>
                {message.text}
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="bg-green-600 hover:bg-green-500 disabled:bg-green-800 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {submitting ? 'Guardando...' : editingId ? 'Guardar Cambios' : 'Crear Partido'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Games List */}
      {loading ? (
        <p className="text-gray-300">Cargando partidos...</p>
      ) : games.length === 0 ? (
        <p className="text-gray-400">No hay partidos registrados</p>
      ) : (
        <div className="space-y-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-700 p-4 rounded-lg border-l-4 border-yellow-400 flex justify-between items-center"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  {game.homeTeamLogo && (
                    <img src={game.homeTeamLogo} alt={game.homeTeam} className="w-8 h-8 rounded object-cover" />
                  )}
                  <div>
                    <p className="font-bold text-white">
                      {game.homeTeam} vs {game.awayTeam}
                    </p>
                    <p className="text-sm text-gray-300">
                      {game.date && game.time ? (
                        <>{game.date} - {game.time} ({game.stadium})</>
                      ) : (
                        <>Fecha no acordada ({game.stadium})</>
                      )}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{game.status}</p>
                  </div>
                  {game.awayTeamLogo && (
                    <img src={game.awayTeamLogo} alt={game.awayTeam} className="w-8 h-8 rounded object-cover" />
                  )}
                  {game.finished && (
                    <div className="ml-4">
                      <p className="text-xl font-bold text-yellow-400">
                        {game.homeTeamScore} - {game.awayTeamScore}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(game)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(game.id!)}
                  className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
