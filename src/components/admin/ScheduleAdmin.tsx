import { useState, useEffect } from 'react';
import { scheduleService, GameSchedule } from '../../services/scheduleService';

export default function ScheduleAdmin() {
  const [games, setGames] = useState<GameSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await scheduleService.updateGame(editingId, formData);
      } else {
        await scheduleService.addGame(formData);
      }
      await loadGames();
      resetForm();
    } catch (error) {
      console.error('Error saving game:', error);
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
      date: game.date,
      time: game.time,
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
                <label className="block text-sm font-semibold text-gray-200 mb-2">Fecha</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">Hora</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
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
                    value={formData.homeTeamScore || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        homeTeamScore: parseInt(e.target.value) || undefined
                      })
                    }
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Goles Visitante
                  </label>
                  <input
                    type="number"
                    value={formData.awayTeamScore || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        awayTeamScore: parseInt(e.target.value) || undefined
                      })
                    }
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

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {editingId ? 'Guardar Cambios' : 'Crear Partido'}
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
                  <div>
                    <p className="font-bold text-white">
                      {game.homeTeam} vs {game.awayTeam}
                    </p>
                    <p className="text-sm text-gray-300">
                      {game.date} - {game.time} ({game.stadium})
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{game.status}</p>
                  </div>
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
