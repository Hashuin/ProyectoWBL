import { useState, useEffect } from 'react';
import { standingsService, TeamStanding } from '../services/standingsService';

export default function StandingsPage() {
  const [standings, setStandings] = useState<TeamStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDivision, setSelectedDivision] = useState<string>('');

  useEffect(() => {
    loadStandings();
  }, []);

  const loadStandings = async () => {
    setLoading(true);
    try {
      const data = await standingsService.getStandings();
      setStandings(data);
      
      // Seleccionar la primera división que tenga contenido
      const divisions = Array.from(new Set(data.map(s => s.division)));
      if (divisions.length > 0) {
        setSelectedDivision(divisions[0]);
      }
    } catch (error) {
      console.error('Error loading standings:', error);
    } finally {
      setLoading(false);
    }
  };

  const divisions = Array.from(new Set(standings.map(s => s.division)));
  const filteredStandings = standings.filter(s => s.division === selectedDivision);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 text-yellow-400">Clasificación</h1>
          <p className="text-gray-300">Posiciones actuales de los equipos</p>
        </div>

        {/* Division Filter */}
        {divisions.length > 0 && (
          <div className="flex gap-3 mb-8 flex-wrap">
            {divisions.map((division) => (
              <button
                key={division}
                onClick={() => setSelectedDivision(division)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedDivision === division
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {division}
              </button>
            ))}
          </div>
        )}

        {/* Standings Table */}
        {loading ? (
          <div className="text-center py-12">
            <p>Cargando clasificación...</p>
          </div>
        ) : filteredStandings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No hay equipos en esta división</p>
          </div>
        ) : (
          <div className="bg-gray-700 rounded-lg overflow-hidden border-2 border-yellow-400 w-full">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-800 border-b-2 border-yellow-400">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-yellow-400 text-sm sm:text-base">#</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-yellow-400 text-sm sm:text-base">Equipo</th>
                  <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-bold text-yellow-400 text-sm sm:text-base">J</th>
                  <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-bold text-yellow-400 text-sm sm:text-base">G</th>
                  <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-bold text-yellow-400 text-sm sm:text-base">P</th>
                  <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-bold text-yellow-400 text-xs sm:text-base">PCT</th>
                  <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-bold text-yellow-400 text-sm sm:text-base">GB</th>
                </tr>
              </thead>
              <tbody>
                {filteredStandings.map((team, index) => (
                  <tr
                    key={team.id}
                    className={`border-b border-gray-600 hover:bg-gray-600 transition-colors ${
                      index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-750'
                    }`}
                  >
                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-yellow-400">{team.rank}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {team.logo && (
                          <img src={team.logo} alt={team.teamName} className="w-6 h-6 sm:w-8 sm:h-8 rounded flex-shrink-0" />
                        )}
                        <span className="font-semibold text-sm sm:text-base">{team.teamName}</span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base">{team.games}</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-center font-bold text-green-400 text-sm sm:text-base">{team.wins}</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-center font-bold text-red-400 text-sm sm:text-base">{team.losses}</td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-center font-bold text-xs sm:text-base">
                      {team.percentage.toFixed(3)}
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base">
                      {team.gamesBehind === 0 ? '-' : team.gamesBehind.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
