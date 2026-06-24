import BackButton from "../components/BackButton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import {
  getComplaints
} from "../services/complaintService";

import {
  generateHeatmap
} from "../utils/heatmapData";

import {
  getHotspotAreas
} from "../utils/hotspotPrediction";
function Heatmap() {

  const complaints =
    getComplaints();

  const data =
    generateHeatmap(
      complaints
    );

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">
        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          🔥 Civic Heatmap
        </h1>
<div className="bg-red-500/10 border border-red-500/30 p-5 rounded-2xl mb-8">

  🚨 AI Prediction:
  Next Civic Hotspot:
  <span className="text-red-400 font-bold">
    {" "}
   {getHotspotAreas(complaints)[0]?.area}
  </span>

</div>
        <div className="bg-white/5 p-8 rounded-3xl border border-cyan-500/20">

          <ResponsiveContainer
            width="100%"
            height={500}
          >

            <BarChart data={data}>

              <XAxis
                dataKey="name"
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="complaints"
                fill="#ef4444"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Heatmap;