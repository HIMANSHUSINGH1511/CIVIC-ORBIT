import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import {
  subscribeComplaints,
} from "../services/firestoreComplaintService";

function DonationAnalytics() {
  const [complaints, setComplaints] =
    useState([]);

  useEffect(() => {
    const unsubscribe =
      subscribeComplaints(
        setComplaints
      );

    return () => unsubscribe();
  }, []);

  const totalRaised =
    complaints.reduce(
      (sum, item) =>
        sum + (item.fundRaised || 0),
      0
    );

  const totalUsed =
    complaints.reduce(
      (sum, item) =>
        sum + (item.amountUsed || 0),
      0
    );

  const remaining =
    totalRaised - totalUsed;

  const totalProjects =
    complaints.filter(
      (item) => item.fundTarget
    ).length;

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">

        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          💰 Donation Analytics
        </h1>

        {/* STATS */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-2xl">
            <h3 className="text-gray-400">
              Total Raised
            </h3>

            <p className="text-3xl font-bold text-cyan-400 mt-3">
              ₹{totalRaised}
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl">
            <h3 className="text-gray-400">
              Total Used
            </h3>

            <p className="text-3xl font-bold text-green-400 mt-3">
              ₹{totalUsed}
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-2xl">
            <h3 className="text-gray-400">
              Remaining Fund
            </h3>

            <p className="text-3xl font-bold text-yellow-400 mt-3">
              ₹{remaining}
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-2xl">
            <h3 className="text-gray-400">
              Active Projects
            </h3>

            <p className="text-3xl font-bold text-purple-400 mt-3">
              {totalProjects}
            </p>
          </div>

        </div>

        {/* PROJECTS */}

        <div className="space-y-6">

          {complaints
            .filter(
              (item) =>
                item.fundTarget
            )
            .map((item) => {

              const progress =
                item.fundTarget > 0
                  ? (
                      (item.fundRaised || 0) /
                      item.fundTarget
                    ) * 100
                  : 0;

              return (
                <div
                  key={item.id}
                  className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6"
                >

                  <h2 className="text-2xl font-bold text-cyan-400">
                    {item.category}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {item.description}
                  </p>

                  <div className="mt-5 grid md:grid-cols-3 gap-5">

                    <div>
                      🎯 Target
                      <h3 className="text-xl mt-2">
                        ₹{item.fundTarget}
                      </h3>
                    </div>

                    <div>
                      💰 Raised
                      <h3 className="text-xl mt-2 text-green-400">
                        ₹
                        {item.fundRaised || 0}
                      </h3>
                    </div>

                    <div>
                      🏗 Used
                      <h3 className="text-xl mt-2 text-yellow-400">
                        ₹
                        {item.amountUsed || 0}
                      </h3>
                    </div>

                  </div>

                  {/* Progress */}

                  <div className="mt-6">

                    <div className="flex justify-between mb-2">
                      <span>
                        Funding Progress
                      </span>

                      <span>
                        {progress.toFixed(
                          0
                        )}
                        %
                      </span>
                    </div>

                    <div className="w-full bg-gray-700 rounded-full h-4">

                      <div
                        className="bg-gradient-to-r from-cyan-500 to-green-500 h-4 rounded-full"
                        style={{
                          width:
                            `${progress}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>
              );
            })}

        </div>

      </div>
    </div>
  );
}

export default DonationAnalytics;