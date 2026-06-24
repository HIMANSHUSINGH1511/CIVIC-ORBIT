import { useEffect, useState } from "react";
import {
  subscribeComplaints,
} from "../services/firestoreComplaintService";
import BackButton from "../components/BackButton";
function GovernmentPerformance() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const unsubscribe =
      subscribeComplaints(setComplaints);

    return () => unsubscribe();
  }, []);

  const departments = [
    "Road",
    "Water",
    "Streetlight",
    "Garbage",
  ];

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">
      <div className="max-w-6xl mx-auto">
        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          🏛 Government Performance
        </h1>

        <table className="w-full bg-white/5 rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-cyan-500/10">
              <th className="p-4 text-left">
                Department
              </th>
              <th className="p-4 text-left">
                Complaints
              </th>
              <th className="p-4 text-left">
                Resolved
              </th>
              <th className="p-4 text-left">
                Score
              </th>
            </tr>
          </thead>

          <tbody>
            {departments.map((dept) => {
              const total =
                complaints.filter((c) =>
                  c.category?.includes(dept)
                ).length;

              const resolved =
                complaints.filter(
                  (c) =>
                    c.category?.includes(dept) &&
                    c.status === "Resolved"
                ).length;

              const score =
                total === 0
                  ? 100
                  : Math.round(
                      (resolved / total) * 100
                    );

              return (
                <tr
                  key={dept}
                  className="border-t border-cyan-500/10"
                >
                  <td className="p-4">
                    {dept}
                  </td>

                  <td className="p-4">
                    {total}
                  </td>

                  <td className="p-4">
                    {resolved}
                  </td>

                  <td className="p-4 text-cyan-400 font-bold">
                    {score}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default GovernmentPerformance;