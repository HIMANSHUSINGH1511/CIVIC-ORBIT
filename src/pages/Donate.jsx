
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import qr from "../assets/phonepe-qr.jpeg";

import {
  subscribeComplaints,
} from "../services/firestoreComplaintService";

function Donate() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeComplaints(setComplaints);
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-6">

      <div className="max-w-6xl mx-auto">

        <BackButton />

        <h1 className="text-5xl font-bold mb-10 text-center">
          ❤️ Community Funding
        </h1>

        <p className="text-center text-gray-400 mb-12 text-lg">
          Support genuine civic issues by donating through UPI.
        </p>

        {complaints
          .filter((item) => item.donationEnabled)
          .map((item) => (
            <DonationCard
              key={item.id}
              item={item}
            />
          ))}

      </div>
    </div>
  );
}

function DonationCard({ item }) {

  const progress = (
    ((item.fundRaised || 0) / item.fundTarget) * 100
  ).toFixed(0);

  return (
    <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 mb-10 shadow-lg">

      <h2 className="text-3xl font-bold text-cyan-400">
        {item.category}
      </h2>

      <p className="mt-4 text-gray-300">
        {item.description}
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-8">

        {/* LEFT */}

        <div>

          <p className="text-lg">
            🎯 <span className="font-semibold">Target:</span> ₹{item.fundTarget}
          </p>

          <p className="mt-2 text-lg">
            💰 <span className="font-semibold">Raised:</span> ₹{item.fundRaised || 0}
          </p>

          <div className="w-full bg-gray-700 rounded-full h-4 mt-6">

            <div
              className="bg-green-500 h-4 rounded-full transition-all"
              style={{
                width: `${Math.min(progress, 100)}%`,
              }}
            />

          </div>

          <p className="mt-3 text-green-400 font-semibold">
            {progress}% Funded
          </p>

          <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">

            <h3 className="text-xl font-bold text-cyan-300 mb-3">
              Why Donate?
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>✔ Repair damaged public infrastructure</li>
              <li>✔ Improve sanitation & cleanliness</li>
              <li>✔ Support verified civic projects</li>
              <li>✔ Help build a better community</li>
            </ul>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col items-center">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Scan & Donate
          </h3>

          <img
            src={qr}
            alt="PhonePe QR"
            className="w-72 rounded-2xl border-2 border-cyan-500 shadow-xl"
          />

          <h4 className="mt-6 text-xl font-bold">
            HIMANSHU SINGH
          </h4>

          <p className="text-gray-400 mt-2 text-center">
            Scan using PhonePe, Google Pay,
            Paytm or any UPI application.
          </p>

          <div className="mt-6 bg-green-500/10 border border-green-500 rounded-xl p-4 w-full">

            <p className="text-center text-green-400 font-semibold">
              ❤️ Thank you for supporting Civic Orbit
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Donate;

