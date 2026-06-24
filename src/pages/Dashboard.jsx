import {
  downloadComplaintPDF,
} from "../utils/pdfGenerator";
import {
  exportComplaintsCSV,
} from "../utils/exportCSV";
import { useEffect, useState } from "react";
import {
  updateComplaintFirestore,
  subscribeComplaints,
} from "../services/firestoreComplaintService";

import { Link } from "react-router-dom";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  calculateHealthScore,
} from "../utils/civicHealthScore";

import BackButton from "../components/BackButton";
function Dashboard() {
  const [complaints, setComplaints] =
    useState([]);
    const [search, setSearch] =
  useState("");

const [categoryFilter,
  setCategoryFilter] =
  useState("All");

const [statusFilter,
  setStatusFilter] =
  useState("All");

const [priorityFilter,
  setPriorityFilter] =
  useState("All");
useEffect(() => {

  const unsubscribe =
    subscribeComplaints(
      (data) => {

        setComplaints(data);

      }
    );

  return () =>
    unsubscribe();

}, []);

const handleVote = async (
  id,
  type
) => {

  const complaint =
    complaints.find(
      (c) => c.id === id
    );

  if (!complaint) return;

  const updatedData = {

    upvotes:
      type === "up"
        ? (complaint.upvotes || 0) + 1
        : complaint.upvotes || 0,

    downvotes:
      type === "down"
        ? (complaint.downvotes || 0) + 1
        : complaint.downvotes || 0,
  };

  updatedData.verified =
    updatedData.upvotes >= 5;

try {
  await updateComplaintFirestore(
    id,
    updatedData
  );

  console.log("Vote updated");
} catch (error) {
  console.error(
    "Vote Error:",
    error
  );
}
};

  const categoryData = [
    {
      name: "Pothole",
      value: complaints.filter(
        (c) =>
          c.category === "Pothole"
      ).length,
    },
    {
      name: "Garbage",
      value: complaints.filter(
        (c) =>
          c.category === "Garbage"
      ).length,
    },
    {
      name: "Water",
      value: complaints.filter(
        (c) =>
          c.category ===
          "Water Leakage"
      ).length,
    },
    {
      name: "Streetlight",
      value: complaints.filter(
        (c) =>
          c.category ===
          "Streetlight"
      ).length,
    },
  ];

  const COLORS = [
    "#06B6D4",
    "#2563EB",
    "#10B981",
    "#F59E0B",
  ];
  const filteredComplaints =
  complaints.filter((item) => {

    const matchesSearch =
      item.location
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        );

    const matchesCategory =
      categoryFilter === "All" ||
      item.category === categoryFilter;

    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      item.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus &&
      matchesPriority
    );
});

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">
        <BackButton />

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">

          <h1 className="text-5xl font-bold">
            Civic Dashboard
          </h1>

        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">

  <Link
    to="/map"
    className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-xl"
  >
    🗺 Smart Map
  </Link>
<Link to="/weather-alerts">
  <button className="bg-cyan-600 px-6 py-4 rounded-xl">
    🌦 Weather Alerts
  </button>
</Link>
  <Link
    to="/leaderboard"
    className="border border-cyan-400 px-6 py-3 rounded-xl text-cyan-400"
  >
    🏆 Leaderboard
  </Link>

<Link
  to="/awards"
  className="bg-yellow-600 px-6 py-3 rounded-xl"
>
  🏆 Awards
</Link>
  <Link
    to="/area-ranking"
    className="bg-purple-600 px-6 py-3 rounded-xl"
  >
    📊 Area Ranking
  </Link>

<Link
  to="/gov-performance"
  className="bg-indigo-600 px-6 py-3 rounded-xl"
>
  🏛 Performance
</Link>
<Link
  to="/department-analytics"
  className="bg-indigo-600 px-6 py-3 rounded-xl"
>
  🏛 Department Analytics
</Link>

  <Link
    to="/heatmap"
    className="bg-red-600 px-6 py-3 rounded-xl"
  >
    🔥 Heatmap
  </Link>

  <Link
  to="/news"
  className="bg-blue-700 px-6 py-3 rounded-xl"
>
  📰 News Feed
</Link>

<Link
  to="/hotspots"
  className="bg-orange-600 px-6 py-3 rounded-xl"
>
  🔥 Hotspot Prediction
</Link>

<Link
  to="/notifications"
  className="bg-green-600 px-6 py-3 rounded-xl"
>
  🔔 Notifications
</Link>
</div>

<Link
  to="/assistant"
  className="bg-purple-600 px-6 py-3 rounded-xl"
>
  🤖 AI Assistant
</Link>
        </div>

        {/* KPI */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
            <p>Total Complaints</p>

            <h2 className="text-4xl font-bold text-cyan-400 mt-2">
              {complaints.length}
            </h2>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-green-500/20">
            <p>Verified</p>

            <h2 className="text-4xl font-bold text-green-400 mt-2">
              {
                complaints.filter(
                  (c) =>
                    c.verified
                ).length
              }
            </h2>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-yellow-500/20">
            <p>Pending</p>

            <h2 className="text-4xl font-bold text-yellow-400 mt-2">
              {
                complaints.filter(
                  (c) =>
                    !c.verified
                ).length
              }
            </h2>
          </div>

       <div className="bg-white/5 p-6 rounded-2xl border border-blue-500/20">

  <p>Civic Health Index</p>

  <h2 className="text-4xl font-bold text-blue-400 mt-2">
    {calculateHealthScore(
      complaints
    )}
  </h2>

  <p className="mt-2">

    {calculateHealthScore(
      complaints
    ) >= 90
      ? "🟢 Excellent"
      : calculateHealthScore(
          complaints
        ) >= 70
      ? "🟡 Good"
      : calculateHealthScore(
          complaints
        ) >= 50
      ? "🟠 Average"
      : "🔴 Critical"}

  </p>

</div>

        </div>

        {/* CHART */}

        <div className="bg-white/5 rounded-2xl p-6 border border-cyan-500/20 mb-10">

          <h2 className="text-2xl font-bold mb-5">
            Complaint Analytics
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>

              <Pie
                data={categoryData}
                dataKey="value"
                outerRadius={100}
              >
                {categoryData.map(
                  (
                    _,
                    index
                  ) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

        {/* COMPLAINTS */}

        <h2 className="text-3xl font-bold mb-6">
          Community Verification
        </h2>
        <div className="grid md:grid-cols-4 gap-4 mb-8">

  <input
    type="text"
    placeholder="Search Location..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="bg-[#0F172A] p-3 rounded-xl border border-cyan-500/20"
  />

  <select
    value={categoryFilter}
    onChange={(e) =>
      setCategoryFilter(e.target.value)
    }
    className="bg-[#0F172A] p-3 rounded-xl"
  >
    <option>All</option>
    <option>Pothole</option>
    <option>Garbage</option>
    <option>Water Leakage</option>
    <option>Streetlight</option>
  </select>

  <select
    value={statusFilter}
    onChange={(e) =>
      setStatusFilter(e.target.value)
    }
    className="bg-[#0F172A] p-3 rounded-xl"
  >
    <option>All</option>
    <option>Reported</option>
    <option>Assigned</option>
    <option>In Progress</option>
    <option>Resolved</option>
  </select>

  <select
    value={priorityFilter}
    onChange={(e) =>
      setPriorityFilter(e.target.value)
    }
    className="bg-[#0F172A] p-3 rounded-xl"
  >
    <option>All</option>
    <option>Critical</option>
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
  </select>

</div>
<div className="flex justify-end mb-6">

  <button
    onClick={() =>
      exportComplaintsCSV(
        filteredComplaints
      )
    }
    className="bg-green-600 px-5 py-3 rounded-xl"
  >
    📊 Export CSV
  </button>

</div>
        <div className="space-y-5">

         {filteredComplaints.length === 0 ? (
            <div className="bg-white/5 p-5 rounded-xl">
              No complaints submitted.
            </div>
          ) : (
           filteredComplaints.map(
  (item) => (
                <div
                  key={
                    item.id
                  }
                  className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6"
                >

                  <h3 className="text-xl font-bold text-cyan-400">
                    {
                      item.category
                    }
                  </h3>

                  <p className="mt-2">
                    {
                      item.description
                    }
                  </p>

                  <p className="text-gray-400 mt-2">
                    📍{" "}
                    {
                      item.location
                    }
                  </p>

                  <p className="mt-2">
                    Status:{" "}
                    {
                      item.status
                    }
                  </p>

                  <div className="mt-3">

  <span
    className={`font-bold ${
      item.priority === "Critical"
        ? "text-red-500"
        : item.priority === "High"
        ? "text-orange-400"
        : item.priority === "Medium"
        ? "text-yellow-400"
        : "text-green-400"
    }`}
  >
    AI Priority:
    {" "}
    {item.priority}
  </span>

</div>

<p className="text-cyan-400 mt-2">
  Priority Score:
  {" "}
  {item.priorityScore}
</p>


         <p className="mt-2">

  {item.verified ? (
    <span className="text-green-400">
      ✅ Community Verified
    </span>
  ) : (
    <span className="text-yellow-400">
      ⏳ Awaiting Verification
    </span>
  )}

</p>

{/* TIMELINE */}

{item.timeline &&
 item.timeline.length > 0 && (

  <div className="mt-6">

    <h4 className="text-cyan-400 font-bold mb-3">
      Complaint Timeline
    </h4>

    {item.timeline.map(
      (step, index) => (
        <div
          key={index}
          className="mb-2 text-sm"
        >
          ✅ {step.status}

          <span className="text-gray-400 ml-2">
            {step.date}
          </span>
        </div>
      )
    )}

  </div>

)}

{/* VOTE BUTTONS */}

<div className="flex gap-4 mt-4">

  <button
    onClick={() =>
      handleVote(item.id, "up")
    }
    className="bg-green-600 px-4 py-2 rounded-lg"
  >
    👍 {item.upvotes || 0}
  </button>

  <button
    onClick={() =>
      handleVote(item.id, "down")
    }
    className="bg-red-600 px-4 py-2 rounded-lg"
  >
    👎 {item.downvotes || 0}
  </button>

</div>

<button
  onClick={() =>
    downloadComplaintPDF(item)
  }
  className="bg-cyan-600 px-4 py-2 rounded-lg"
>
  📄 Download Report
</button>


                </div>
              )
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;