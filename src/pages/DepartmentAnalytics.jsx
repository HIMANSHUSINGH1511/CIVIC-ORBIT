import { useEffect, useState } from "react";
import {
  subscribeComplaints,
} from "../services/firestoreComplaintService";
import BackButton from "../components/BackButton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DepartmentAnalytics() {

  const [complaints, setComplaints] =
    useState([]);

  useEffect(() => {

    const unsubscribe =
      subscribeComplaints(
        setComplaints
      );

    return () =>
      unsubscribe();

  }, []);

  const departments = [
    "Roads",
    "Sanitation",
    "Water",
    "Electricity",
  ];

  const data =
    departments.map(
      (dept) => {

        const total =
          complaints.filter(
            (c) =>
              c.department === dept
          ).length;

        const resolved =
          complaints.filter(
            (c) =>
              c.department === dept &&
              c.resolved
          ).length;

        return {
          department: dept,
          score:
            total === 0
              ? 100
              : Math.round(
                  (resolved /
                    total) *
                    100
                ),
        };
      }
    );

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <h1 className="text-5xl font-bold mb-10">
        🏛 Department Analytics
      </h1>

      <div className="bg-white/5 p-6 rounded-3xl">
      <BackButton />

        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <BarChart data={data}>

            <XAxis
              dataKey="department"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="score"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default DepartmentAnalytics;