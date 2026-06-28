import logo from "../assets/logo.png";
import StatsCards from "./StatsCards";
import OrbitIcons from "./OrbitIcons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  subscribeComplaints,
} from "../services/firestoreComplaintService";

function Hero() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeComplaints(setComplaints);
    return () => unsubscribe();
  }, []);

  const totalComplaints = complaints.length;

  const resolvedIssues = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const activeCitizens = new Set(
    complaints.map(
      (c) => c.userName || c.email || c.id
    )
  ).size;

  const topArea = (() => {
    const areaMap = {};

    complaints.forEach((c) => {
      const area = c.location || "Unknown";
      areaMap[area] =
        (areaMap[area] || 0) + 1;
    });

    return (
      Object.entries(areaMap).sort(
        (a, b) => b[1] - a[1]
      )[0]?.[0] || "N/A"
    );
  })();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 lg:pt-40">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_0.9fr] gap-12 items-center">

        {/* LEFT */}

        <div className="text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">

            Together,
            <br />
            We Build
            <br />

            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">

              Better Communities

            </span>

          </h1>

          {/* Donate Button */}

          <Link
            to="/donate"
            className="
            fixed
            bottom-5
            right-4
            sm:bottom-8
            sm:right-8
            z-50
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            px-5
            sm:px-8
            py-3
            sm:py-4
            rounded-full
            text-white
            font-bold
            text-sm
            sm:text-lg
            animate-bounce
            shadow-[0_0_35px_rgba(34,197,94,0.8)]
            hover:scale-105
            transition
          "
          >

            <span className="hidden sm:inline">
              ❤️ Donate & Fix Local Issues
            </span>

            <span className="sm:hidden">
              ❤️ Donate
            </span>

          </Link>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mt-6 leading-relaxed">

            Report issues, track progress and make your community
            a better place with the power of AI and collective action.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

            <Link
              to="/report"
              className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto text-center px-8 py-4 rounded-xl text-white font-semibold"
            >
              Report Issue
            </Link>

            <Link
              to="/dashboard"
              className="border border-cyan-400 text-cyan-400 w-full sm:w-auto text-center px-8 py-4 rounded-xl hover:bg-cyan-400/10"
            >
              Explore Dashboard
            </Link>

          </div>

        </div>

        {/* CENTER */}

        <div className="relative flex justify-center items-center mt-8 lg:mt-0">

          <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border border-blue-500/10 animate-spin" />

          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border border-cyan-500/20 animate-spin" />

          <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full bg-cyan-500/10 blur-3xl" />

          <img
            src={logo}
            alt="Civic Orbit"
            className="w-44 sm:w-56 lg:w-80 relative z-10 object-contain"
          />

          <OrbitIcons />

        </div>

        {/* RIGHT */}

        <div className="flex justify-center lg:justify-end w-full mt-8 lg:mt-0">

          <StatsCards
            activeCitizens={activeCitizens}
            resolvedIssues={resolvedIssues}
            totalComplaints={totalComplaints}
            topArea={topArea}
          />

        </div>

        <div className="flex justify-center lg:justify-start lg:col-span-3 mt-6">

          <Link
            to="/transparency"
            className="bg-cyan-600 px-8 py-4 rounded-full text-white font-bold hover:scale-105 transition"
          >

            📊 Transparency Portal

          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;