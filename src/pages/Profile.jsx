import BackButton from "../components/BackButton";
import { getComplaints } from "../services/complaintService";
import { calculateHeroScores } from "../utils/heroScore";
import { getBadge } from "../utils/badges";

function Profile() {

  const user = JSON.parse(
    localStorage.getItem("civic_user")
  );

  if (!user) {
    return (
      <div className="min-h-screen bg-[#050B1D] text-white flex justify-center items-center">
        Please Login First
      </div>
    );
  }

  const complaints =
    getComplaints();

  const myComplaints =
    complaints.filter(
      (c) =>
        c.reportedBy === user.name
    );

  const heroData =
    calculateHeroScores(
      complaints
    );

  const currentUser =
    heroData.find(
      (c) =>
        c.name === user.name
    );

  const heroScore =
    currentUser?.score || 0;

  const badge =
    getBadge(heroScore);

  const handleLogout = () => {

    localStorage.removeItem(
      "civic_user"
    );

    window.location.href =
      "/";
  };

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-3xl mx-auto">

        <BackButton />

        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10 text-center">

          {user.photo ? (

            <img
              src={user.photo}
              alt="profile"
              className="w-32 h-32 rounded-full mx-auto mb-5"
            />

          ) : (

            <div className="w-32 h-32 rounded-full mx-auto mb-5 bg-cyan-600 flex items-center justify-center text-5xl">
              🏛
            </div>

          )}

          <h1 className="text-4xl font-bold">
            {user.name}
          </h1>

          <p className="text-gray-400 mt-3">
            {user.email}
          </p>

          <p className="text-cyan-400 mt-2">
            Role:
            {" "}
            {user.role || "citizen"}
          </p>

          <button
            onClick={handleLogout}
            className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
          >
            Logout
          </button>

          <div className="grid md:grid-cols-3 gap-5 mt-10">

            <div className="bg-cyan-500/10 p-5 rounded-xl">

              <p>
                Hero Score
              </p>

              <h2 className="text-3xl mt-2">
                {heroScore}
              </h2>

            </div>

            <div className="bg-green-500/10 p-5 rounded-xl">

              <p>
                Complaints
              </p>

              <h2 className="text-3xl mt-2">
                {myComplaints.length}
              </h2>

            </div>

            <div className="bg-yellow-500/10 p-5 rounded-xl">

              <p>
                Badge
              </p>

              <h2 className="text-xl mt-2">
                {badge}
              </h2>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;