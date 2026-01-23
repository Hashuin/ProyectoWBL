import { useState, useEffect } from 'react';
import { scheduleService, GameSchedule } from '../services/scheduleService';

export default function SchedulePage() {
  const [games, setGames] = useState<GameSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<'Pretemporada' | 'Regular' | 'Postemporada'>('Regular');

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

  const filteredGames = games.filter(game => game.status === selectedStatus);

  const statusColors: Record<string, string> = {
    'Pretemporada': 'bg-blue-100 text-blue-800',
    'Regular': 'bg-green-100 text-green-800',
    'Postemporada': 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 text-yellow-400">Programación</h1>
          <p className="text-gray-300">Próximos partidos y resultados</p>
        </div>

        {/* Status Filter */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {(['Pretemporada', 'Regular', 'Postemporada'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedStatus === status
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Games List */}
        {loading ? (
          <div className="text-center py-12">
            <p>Cargando programación...</p>
          </div>
        ) : filteredGames.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No hay partidos programados en esta categoría</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors border-l-4 border-yellow-400"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[game.status]}`}>
                    {game.status}
                  </span>
                  {game.finished && (
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">
                      Finalizado
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  {/* Home Team */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-yellow-400">{game.homeTeam}</h3>
                    {game.finished && (
                      <p className="text-3xl font-bold mt-2">{game.homeTeamScore}</p>
                    )}
                  </div>

                  {/* Time and Details */}
                  <div className="text-center border-t border-b border-gray-600 py-4">
                    <p className="text-2xl font-bold text-yellow-300">{game.time}</p>
                    <p className="text-sm text-gray-300">{game.date}</p>
                    <p className="text-xs text-gray-400 mt-2">📍 {game.stadium}</p>
                  </div>

                  {/* Away Team */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-yellow-400">{game.awayTeam}</h3>
                    {game.finished && (
                      <p className="text-3xl font-bold mt-2">{game.awayTeamScore}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
