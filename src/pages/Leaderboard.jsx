import { getComplaints } from "../services/complaintService";
import { calculateHeroScores } from "../utils/heroScore";
import { getBadge } from "../utils/badges";
import {
  downloadCertificate,
} from "../utils/certificateGenerator";
function Leaderboard() {
  const complaints = getComplaints();

  const citizens =
    calculateHeroScores(complaints);

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          🏆 Citizen Leaderboard
        </h1>

        {citizens.length === 0 ? (

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10 text-center">
            No citizen activity yet.
          </div>

        ) : (

          <>
            {/* TOP 3 */}

            <div className="grid md:grid-cols-3 gap-6 mb-10">

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-3xl p-6">

                <h2 className="text-4xl">
                  🥇
                </h2>

                <h3 className="text-2xl font-bold mt-3">
                  {citizens[0]?.name}
                </h3>

                <p className="text-yellow-400 mt-2">
                  Score: {citizens[0]?.score}
                </p>

              </div>

              <div className="bg-gray-500/10 border border-gray-500/30 rounded-3xl p-6">

                <h2 className="text-4xl">
                  🥈
                </h2>

                <h3 className="text-2xl font-bold mt-3">
                  {citizens[1]?.name || "N/A"}
                </h3>

                <p className="text-gray-300 mt-2">
                  Score: {citizens[1]?.score || 0}
                </p>

              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-3xl p-6">

                <h2 className="text-4xl">
                  🥉
                </h2>

                <h3 className="text-2xl font-bold mt-3">
                  {citizens[2]?.name || "N/A"}
                </h3>

                <p className="text-orange-400 mt-2">
                  Score: {citizens[2]?.score || 0}
                </p>

              </div>

            </div>

            {/* TABLE */}

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl overflow-hidden">

              <table className="w-full">

                <thead>

                  <tr className="bg-cyan-500/10">

                    <th className="p-5 text-left">
                      Rank
                    </th>

                    <th className="p-5 text-left">
                      Citizen
                    </th>

                    <th className="p-5 text-left">
                      Reports
                    </th>

                    <th className="p-5 text-left">
                      Hero Score
                    </th>

                    <th className="p-5 text-left">
                      Badge
                    </th>
                    <th className="p-5">
  Certificate
</th>

                  </tr>

                </thead>

                <tbody>

                  {citizens.map(
                    (citizen, index) => (

                      <tr
                        key={index}
                        className="border-t border-cyan-500/10 hover:bg-cyan-500/5"
                      >

                        <td className="p-5">
                          #{index + 1}
                        </td>

                        <td className="p-5 font-semibold">
                          {citizen.name}
                        </td>

                        <td className="p-5">
                          {citizen.reports}
                        </td>

                        <td className="p-5 text-cyan-400 font-bold">
                          {citizen.score}
                        </td>

                        <td className="p-5">
                          {getBadge(citizen.score)}
                        </td>

                        <td className="p-5">

  <button
    onClick={() =>
      downloadCertificate(
        citizen
      )
    }
    className="bg-cyan-600 px-4 py-2 rounded-lg"
  >
    📜 Certificate
  </button>

</td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

            {/* BADGE SYSTEM */}

            <h2 className="text-3xl font-bold mt-12 mb-6">
              🎖 Badge System
            </h2>

            <div className="grid md:grid-cols-4 gap-5">

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-5 rounded-2xl">

                <h3 className="text-xl font-bold mb-2">
                  🥉 Bronze Badge
                </h3>

                <p>
                  50+ Points
                </p>

              </div>

              <div className="bg-gray-500/10 border border-gray-500/20 p-5 rounded-2xl">

                <h3 className="text-xl font-bold mb-2">
                  🥈 Silver Badge
                </h3>

                <p>
                  100+ Points
                </p>

              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 p-5 rounded-2xl">

                <h3 className="text-xl font-bold mb-2">
                  🥇 Gold Badge
                </h3>

                <p>
                  200+ Points
                </p>

              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 p-5 rounded-2xl">

                <h3 className="text-xl font-bold mb-2">
                  🏆 Civic Champion
                </h3>

                <p>
                  500+ Points
                </p>

              </div>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default Leaderboard;