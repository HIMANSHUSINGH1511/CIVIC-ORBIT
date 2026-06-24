import { getComplaints } from "../services/complaintService";
import BackButton from "../components/BackButton";
function Awards() {

  const complaints = getComplaints();

  const totalReports =
    complaints.length;

  const verifiedReports =
    complaints.filter(
      c => c.verified
    ).length;

  const resolvedReports =
    complaints.filter(
      c => c.resolved
    ).length;

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-6xl mx-auto">
        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          🏆 Civic Awards
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
              👑 Best Citizen Reporter
            </h2>

            <p className="mt-4">
              Himanshu Singh
            </p>

            <p className="text-yellow-400 mt-2">
              Reports: {totalReports}
            </p>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
              🌟 Most Trusted Citizen
            </h2>

            <p className="mt-4">
              Verified Reports:
              {verifiedReports}
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
              🏙 Best Area
            </h2>

            <p className="mt-4">
              Based on Area Ranking
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
              🏛 Best Department
            </h2>

            <p className="mt-4">
              Highest Resolution Rate
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
              👷 Best Contractor
            </h2>

            <p className="mt-4">
              Highest Citizen Rating
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
              🚀 Change Maker Award
            </h2>

            <p className="mt-4">
              Resolved Reports:
              {resolvedReports}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Awards;