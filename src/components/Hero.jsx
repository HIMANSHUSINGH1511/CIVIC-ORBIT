import logo from "../assets/logo.png";
import StatsCards from "./StatsCards";
import OrbitIcons from "./OrbitIcons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  subscribeComplaints,
} from "../services/firestoreComplaintService";

function Hero() {
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

  const totalComplaints =
    complaints.length;

  const resolvedIssues =
    complaints.filter(
      (c) =>
        c.status === "Resolved"
    ).length;

  const activeCitizens =
    new Set(
      complaints.map(
        (c) =>
          c.userName ||
          c.email ||
          c.id
      )
    ).size;

  const topArea = (() => {
    const areaMap = {};

    complaints.forEach((c) => {
      const area =
        c.location ||
        "Unknown";

      areaMap[area] =
        (areaMap[area] || 0) + 1;
    });

    return (
      Object.entries(areaMap)
        .sort(
          (a, b) =>
            b[1] - a[1]
        )[0]?.[0] || "N/A"
    );
  })();

  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-40">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_1fr_0.9fr] gap-10 items-center">

        {/* LEFT CONTENT */}

        <div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
            Together,
            <br />
            We Build
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Better Communities
            </span>
          </h1>
<Link
  to="/donate"
  className="
  fixed
  bottom-8
  right-8
  z-50
  bg-gradient-to-r
  from-green-500
  to-emerald-600
  px-8
  py-4
  rounded-full
  text-white
  font-bold
  text-lg
  animate-bounce
  shadow-[0_0_35px_rgba(34,197,94,0.8)]
  "
>
  ❤️ Donate & Fix Local Issues
</Link>
          <p className="text-gray-300 text-xl mt-8 leading-relaxed">
            Report issues, track progress and make your community
            a better place with the power of AI and collective action.
          </p>

          <div className="flex gap-5 mt-10">
           <Link
  to="/report"
  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold"
>
  Report Issue
</Link>

           <Link
  to="/dashboard"
  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400/10"
>
  Explore Dashboard
</Link>
          </div>
        </div>

        {/* CENTER LOGO */}

        <div className="relative flex justify-center items-center">

          <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/10 animate-spin" />

          <div className="absolute w-[450px] h-[450px] rounded-full border border-cyan-500/20 animate-spin" />

          <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-3xl" />

          <img
            src={logo}
            alt="Civic Orbit"
            className="w-[280px] lg:w-[320px] relative z-10 object-contain"
          />

          <OrbitIcons />

        </div>

        {/* RIGHT STATS */}

        <div className="flex justify-center lg:justify-end">
          <StatsCards
            activeCitizens={
              activeCitizens
            }
            resolvedIssues={
              resolvedIssues
            }
            totalComplaints={
              totalComplaints
            }
            topArea={topArea}
          />
        </div>
<Link
  to="/transparency"
  className="bg-cyan-600 px-8 py-4 rounded-full text-white font-bold hover:scale-105 transition"
>
  📊 Transparency Portal
</Link>
      </div>

    </section>
  );
}

export default Hero;