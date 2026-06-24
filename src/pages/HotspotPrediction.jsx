import { useEffect, useState } from "react";
import { subscribeComplaints }
from "../services/firestoreComplaintService";
import BackButton from "../components/BackButton";
import {
  getHotspotAreas
} from "../utils/hotspotPrediction";

function HotspotPrediction() {

  const [areas, setAreas] =
    useState([]);

  useEffect(() => {

    const unsubscribe =
      subscribeComplaints(
        (complaints) => {

          const hotspots =
            getHotspotAreas(
              complaints
            );

          setAreas(hotspots);

        }
      );

    return () =>
      unsubscribe();

  }, []);

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">
        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          🔥 Hotspot Prediction
        </h1>

        {areas.map((area, index) => (

          <div
            key={index}
            className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 mb-5"
          >

            <h2 className="text-2xl font-bold text-cyan-400">
              {area.area}
            </h2>

            <p>
              Complaints:
              {area.count}
            </p>

            <p
              className={
                area.risk === "High"
                  ? "text-red-500"
                  : area.risk === "Medium"
                  ? "text-yellow-400"
                  : "text-green-400"
              }
            >
              Risk Level:
              {area.risk}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default HotspotPrediction;