import { getComplaints } from "../services/complaintService";
import { calculateAreaRankings } from "../utils/areaRanking";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
function AreaRanking() {
  const complaints = getComplaints();

  const areas = calculateAreaRankings(complaints);

  if (areas.length === 0) {
    return (
      <div className="min-h-screen bg-[#050B1D] text-white flex items-center justify-center">
        <div className="text-center">

          <h1 className="text-5xl font-bold mb-4">
            🏆 Area Ranking
          </h1>

          <p className="text-gray-400 text-xl">
            No complaints submitted yet.
          </p>

          <Link
            to="/report"
            className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-xl"
          >
            Submit Complaint
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">
        <BackButton />

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-bold">
            🏆 Area Ranking
          </h1>

          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-xl"
          >
            Dashboard
          </Link>

        </div>

        {/* TOP 3 */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-3xl p-6">
            <h2 className="text-3xl">🥇</h2>

            <h3 className="text-2xl font-bold mt-3">
              {areas[0]?.name || "N/A"}
            </h3>

            <p className="text-yellow-400 text-xl mt-2">
              Score: {areas[0]?.score || 0}
            </p>
          </div>

          <div className="bg-gray-500/10 border border-gray-500/30 rounded-3xl p-6">
            <h2 className="text-3xl">🥈</h2>

            <h3 className="text-2xl font-bold mt-3">
              {areas[1]?.name || "N/A"}
            </h3>

            <p className="text-gray-300 text-xl mt-2">
              Score: {areas[1]?.score || 0}
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-3xl p-6">
            <h2 className="text-3xl">🥉</h2>

            <h3 className="text-2xl font-bold mt-3">
              {areas[2]?.name || "N/A"}
            </h3>

            <p className="text-orange-400 text-xl mt-2">
              Score: {areas[2]?.score || 0}
            </p>
          </div>

        </div>

        {/* TABLE */}

        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl overflow-hidden">

          <table className="w-full">

            <thead>

              <tr className="bg-cyan-500/10">

                <th className="p-5 text-left">Rank</th>
                <th className="p-5 text-left">Area</th>
                <th className="p-5 text-left">Complaints</th>
                <th className="p-5 text-left">Score</th>

              </tr>

            </thead>

            <tbody>

              {areas.map((area, index) => (

                <tr
                  key={index}
                  className="border-t border-cyan-500/10"
                >

                  <td className="p-5">
                    #{index + 1}
                  </td>

                  <td className="p-5 font-semibold">
                    {area.name}
                  </td>

                  <td className="p-5">
                    {area.complaints}
                  </td>

                  <td className="p-5 text-cyan-400 font-bold">
                    {area.score}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AreaRanking;