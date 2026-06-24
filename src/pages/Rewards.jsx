import BackButton from "../components/BackButton";

function Rewards() {
  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">

        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          🎁 Civic Rewards Center
        </h1>

        {/* Badge Rewards */}

        <h2 className="text-3xl font-bold mb-6">
          🏆 Citizen Badge System
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              🥉 Bronze Hero
            </h3>
            <p className="mt-3">
              50+ Points
            </p>
          </div>

          <div className="bg-gray-500/10 border border-gray-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              🥈 Silver Hero
            </h3>
            <p className="mt-3">
              100+ Points
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              🥇 Gold Hero
            </h3>
            <p className="mt-3">
              200+ Points
            </p>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              🏆 Civic Champion
            </h3>
            <p className="mt-3">
              500+ Points
            </p>
          </div>

        </div>

        {/* Redeem Rewards */}

        <h2 className="text-3xl font-bold mb-6">
          🎁 Redeem Rewards
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              📜 Certificate of Appreciation
            </h3>

            <p className="text-cyan-400 mt-3">
              Cost: 100 Points
            </p>

            <button className="mt-5 bg-cyan-600 px-5 py-3 rounded-xl">
              Redeem
            </button>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              🎁 Gift Voucher
            </h3>

            <p className="text-cyan-400 mt-3">
              Cost: 250 Points
            </p>

            <button className="mt-5 bg-cyan-600 px-5 py-3 rounded-xl">
              Redeem
            </button>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              🏆 Civic Excellence Award
            </h3>

            <p className="text-cyan-400 mt-3">
              Cost: 500 Points
            </p>

            <button className="mt-5 bg-cyan-600 px-5 py-3 rounded-xl">
              Redeem
            </button>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6">
            <h3 className="text-2xl font-bold">
              🌟 Community Hero Trophy
            </h3>

            <p className="text-cyan-400 mt-3">
              Cost: 1000 Points
            </p>

            <button className="mt-5 bg-cyan-600 px-5 py-3 rounded-xl">
              Redeem
            </button>
          </div>

        </div>

        {/* Monthly Rewards */}

        <h2 className="text-3xl font-bold mb-6">
          🔥 Monthly Champion Rewards
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-3xl p-6">
            <h3 className="text-3xl">
              🥇
            </h3>

            <p className="mt-4">
              Rank 1
            </p>

            <p className="text-yellow-400">
              ₹5000 + Trophy
            </p>
          </div>

          <div className="bg-gray-500/10 border border-gray-500/20 rounded-3xl p-6">
            <h3 className="text-3xl">
              🥈
            </h3>

            <p className="mt-4">
              Rank 2
            </p>

            <p className="text-gray-300">
              ₹3000 Reward
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-3xl p-6">
            <h3 className="text-3xl">
              🥉
            </h3>

            <p className="mt-4">
              Rank 3
            </p>

            <p className="text-orange-400">
              ₹1000 Reward
            </p>
          </div>

        </div>

        {/* Certificates */}

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-4">
            📜 Certificates
          </h2>

          <p className="text-gray-300 mb-5">
            Download certificates based on your civic contribution and community impact.
          </p>

          <button className="bg-cyan-600 px-6 py-3 rounded-xl">
            Download Certificate
          </button>

        </div>

      </div>

    </div>
  );
}

export default Rewards;