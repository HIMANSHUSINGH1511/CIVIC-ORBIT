import { getComplaints }
from "../services/complaintService";
import BackButton from "../components/BackButton";
import {
  calculateTrustScores
}
from "../utils/trustScore";

function TrustScores() {

  const complaints =
    getComplaints();

  const users =
    calculateTrustScores(
      complaints
    );

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-6xl mx-auto">
        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          Trust Scores
        </h1>

        <div className="space-y-5">

          {users.map(
            (user, index) => (

              <div
                key={index}
                className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6"
              >

                <h2 className="text-2xl font-bold">
                  {user.name}
                </h2>

                <p className="text-cyan-400 mt-2">
                  Trust Score:
                  {" "}
                  {user.score}
                </p>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}

export default TrustScores;