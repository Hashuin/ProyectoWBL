import { useState, useEffect } from 'react';
import { standingsService, TeamStanding } from '../../services/standingsService';

export default function StandingsAdmin() {
  const [standings, setStandings] = useState<TeamStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState<Omit<TeamStanding, 'id' | 'createdAt'>>({
    rank: 1,
    teamName: '',
    division: 'Este',
    games: 0,
    wins: 0,
    losses: 0,
    percentage: 0,
    gamesBehind: 0
  });

  useEffect(() => {
    loadStandings();
  }, []);

  const loadStandings = async () => {
    setLoading(true);
    try {
      const data = await standingsService.getStandings();
      setStandings(data);
    } catch (error) {
      console.error('Error loading standings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate percentage
    const totalGames = formData.wins + formData.losses;
    const percentage = totalGames > 0 ? formData.wins / totalGames : 0;

    const dataWithPercentage = {
      ...formData,
      percentage,
      games: totalGames
    };

    try {
      if (editingId) {
        await standingsService.updateTeamStanding(editingId, dataWithPercentage);
      } else {
        await standingsService.addTeamStanding(dataWithPercentage);
      }
      await loadStandings();
      resetForm();
    } catch (error) {
      console.error('Error saving standing:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Eliminar este equipo de la clasificación?')) {
      try {
        await standingsService.deleteTeamStanding(id);
        await loadStandings();
      } catch (error) {
        console.error('Error deleting standing:', error);
      }
    }
  };

  const handleEdit = (standing: TeamStanding) => {
    setFormData({
      rank: standing.rank,
      teamName: standing.teamName,
      logo: standing.logo,
      division: standing.division,
      games: standing.games,
      wins: standing.wins,
      losses: standing.losses,
      percentage: standing.percentage,
      gamesBehind: standing.gamesBehind
    });
    setEditingId(standing.id || null);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      rank: 1,
      teamName: '',
      division: 'Este',
      games: 0,
      wins: 0,
      losses: 0,
      percentage: 0,
      gamesBehind: 0
    });
    setEditingId(null);
    setShowForm(false);
  };

  const divisions = Array.from(new Set(standings.map(s => s.division)));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-yellow-400">Gestionar Clasificación</h2>
        
        {/* Add Team Button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
          >
            + Agregar Equipo
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-gray-700 p-6 rounded-lg mb-6 border-2 border-yellow-400">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">
            {editingId ? 'Editar Equipo' : 'Nuevo Equipo'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Posición
                </label>
                <input
                  type="number"
                  value={formData.rank}
                  onChange={(e) => setFormData({ ...formData, rank: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Nombre del Equipo
                </label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  División
                </label>
                <select
                  value={formData.division}
                  onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                >
                  <option value="Este">Este</option>
                  <option value="Oeste">Oeste</option>
                  <option value="Central">Central</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  URL Logo
                </label>
                <input
                  type="text"
                  value={formData.logo || ''}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Victorias
                </label>
                <input
                  type="number"
                  value={formData.wins}
                  onChange={(e) => setFormData({ ...formData, wins: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Derrotas
                </label>
                <input
                  type="number"
                  value={formData.losses}
                  onChange={(e) => setFormData({ ...formData, losses: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Juegos de Diferencia
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={formData.gamesBehind}
                  onChange={(e) =>
                    setFormData({ ...formData, gamesBehind: parseFloat(e.target.value) })
                  }
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-yellow-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {editingId ? 'Guardar Cambios' : 'Crear Equipo'}
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

      {/* Divisions Tables */}
      {divisions.length > 0 && (
        <div className="space-y-8">
          {divisions.map((division) => (
            <div key={division}>
              <h3 className="text-lg font-bold text-yellow-400 mb-3">{division}</h3>
              <div className="bg-gray-700 rounded-lg overflow-hidden border-2 border-yellow-400">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800 border-b border-gray-600">
                      <th className="px-4 py-2 text-left text-sm font-bold">#</th>
                      <th className="px-4 py-2 text-left text-sm font-bold">Equipo</th>
                      <th className="px-4 py-2 text-center text-sm font-bold">G</th>
                      <th className="px-4 py-2 text-center text-sm font-bold">V</th>
                      <th className="px-4 py-2 text-center text-sm font-bold">D</th>
                      <th className="px-4 py-2 text-center text-sm font-bold">ACC</th>
                      <th className="px-4 py-2 text-center text-sm font-bold">GD</th>
                      <th className="px-4 py-2 text-center text-sm font-bold">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings
                      .filter((s) => s.division === division)
                      .sort((a, b) => a.rank - b.rank)
                      .map((team) => (
                        <tr key={team.id} className="border-b border-gray-600 hover:bg-gray-600">
                          <td className="px-4 py-2 font-bold text-yellow-400">{team.rank}</td>
                          <td className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              {team.logo && (
                                <img src={team.logo} alt={team.teamName} className="w-6 h-6" />
                              )}
                              <span className="text-sm">{team.teamName}</span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-center text-sm">{team.games}</td>
                          <td className="px-4 py-2 text-center text-sm font-bold text-green-400">
                            {team.wins}
                          </td>
                          <td className="px-4 py-2 text-center text-sm font-bold text-red-400">
                            {team.losses}
                          </td>
                          <td className="px-4 py-2 text-center text-sm">
                            {team.percentage.toFixed(3)}
                          </td>
                          <td className="px-4 py-2 text-center text-sm">
                            {team.gamesBehind === 0 ? '-' : team.gamesBehind.toFixed(1)}
                          </td>
                          <td className="px-4 py-2 text-center">
                            <button
                              onClick={() => handleEdit(team)}
                              className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded text-xs mr-1"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDelete(team.id!)}
                              className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded text-xs"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {loading && <p className="text-gray-300">Cargando clasificación...</p>}
      {!loading && standings.length === 0 && (
        <p className="text-gray-400">No hay equipos registrados</p>
      )}
    </div>
  );
}
