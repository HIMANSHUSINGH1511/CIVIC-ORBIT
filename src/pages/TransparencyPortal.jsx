import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import {
  subscribeComplaints,
} from "../services/firestoreComplaintService";

function TransparencyPortal() {
  const [complaints, setComplaints] =
    useState([]);

  useEffect(() => {
    const unsubscribe =
      subscribeComplaints(
        setComplaints
      );

    return () => unsubscribe();
  }, []);

  const totalComplaints =
    complaints.length;

  const resolvedComplaints =
    complaints.filter(
      (c) =>
        c.status === "Resolved"
    ).length;

  const pendingComplaints =
    complaints.filter(
      (c) =>
        c.status !== "Resolved"
    ).length;

  const totalFunds =
    complaints.reduce(
      (sum, item) =>
        sum +
        (item.fundRaised || 0),
      0
    );

  const avgProgress =
    complaints.length > 0
      ? (
          complaints.reduce(
            (sum, item) =>
              sum +
              (item.progress || 0),
            0
          ) / complaints.length
        ).toFixed(0)
      : 0;

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">

        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          📊 Transparency Portal
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          <Card
            title="Total Complaints"
            value={totalComplaints}
          />

          <Card
            title="Resolved"
            value={resolvedComplaints}
          />

          <Card
            title="Pending"
            value={pendingComplaints}
          />

          <Card
            title="Funds Raised"
            value={`₹${totalFunds}`}
          />

        </div>

        <div className="mt-10 bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            Government Performance
          </h2>

          <p className="text-xl">
            Average Resolution Progress:
            {" "}
            {avgProgress}%
          </p>

        </div>

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Recent Complaints
          </h2>

          {complaints.map((item) => (

            <div
              key={item.id}
              className="bg-white/5 border border-cyan-500/20 rounded-2xl p-5 mb-4"
            >

              <h3 className="text-xl font-bold text-cyan-400">
                {item.category}
              </h3>

              <p className="mt-2">
                {item.description}
              </p>

              <p className="mt-2">
                Status:
                {" "}
                {item.status}
              </p>

              <p>
                Progress:
                {" "}
                {item.progress || 0}%
              </p>

              <p>
                Funds:
                ₹{item.fundRaised || 0}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

function Card({
  title,
  value,
}) {
  return (
    <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6">

      <h3 className="text-gray-400">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-3 text-cyan-400">
        {value}
      </h2>

    </div>
  );
}

export default TransparencyPortal;