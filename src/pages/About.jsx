import BackButton from "../components/BackButton";

function About() {
  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">

      <div className="max-w-7xl mx-auto">

        <BackButton />

        {/* HERO */}

        <div className="text-center mb-20">

          <h1 className="text-6xl font-bold mb-6">
            About
            <span className="text-cyan-400">
              {" "}CIVIC ORBIT
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where Every Citizen Drives Change.
            CIVIC ORBIT is an AI-powered civic engagement platform
            designed to connect citizens with local authorities,
            improve transparency, and build smarter communities.
          </p>

        </div>

        {/* MISSION & VISION */}

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              🌍 Our Mission
            </h2>

            <p className="text-gray-300 leading-relaxed">
              To empower citizens through technology by providing
              a transparent platform for reporting, tracking,
              and resolving civic issues efficiently.
            </p>

          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              🚀 Our Vision
            </h2>

            <p className="text-gray-300 leading-relaxed">
              To create smarter, cleaner, and more accountable
              communities where every citizen's voice contributes
              to meaningful civic improvement.
            </p>

          </div>

        </div>

        {/* FEATURES */}

        <div className="mb-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            ✨ Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🤖 AI Complaint Analysis
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🗺 Smart Civic Map
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🔥 Hotspot Prediction
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🏆 Citizen Rewards
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              📊 Area Rankings
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🏛 Government Dashboard
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              💰 Budget Transparency
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🔔 Real-Time Notifications
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              📄 PDF Reports
            </div>

          </div>

        </div>

        {/* TECHNOLOGY */}

        <div className="mb-16">

          <h2 className="text-4xl font-bold text-center mb-10">
            🛠 Technology Stack
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-cyan-500/10 p-6 rounded-2xl text-center">
              React.js
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-2xl text-center">
              Tailwind CSS
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-2xl text-center">
              Firebase
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-2xl text-center">
              Gemini AI
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-2xl text-center">
              Firestore
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-2xl text-center">
              Recharts
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-2xl text-center">
              Leaflet Maps
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-2xl text-center">
              OpenStreetMap
            </div>

          </div>

        </div>

        {/* WHY CIVIC ORBIT */}

        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-10 mb-16">

          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
            💡 Why CIVIC ORBIT?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Many civic issues remain unresolved due to lack of
            transparency, communication, and accountability.
            CIVIC ORBIT bridges the gap between citizens and
            authorities using Artificial Intelligence, Community
            Verification, Data Analytics, and Real-Time Tracking.
          </p>

        </div>

        {/* DEVELOPER */}

        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-cyan-500/20 rounded-3xl p-10 mb-16 text-center">

          <h2 className="text-4xl font-bold mb-6">
            👨‍💻 Developer
          </h2>

          <h3 className="text-3xl text-cyan-400 font-bold">
            Himanshu Singh
          </h3>

          <p className="text-gray-300 mt-4">
            B.Tech Computer Science & Engineering
          </p>

          <p className="text-gray-300">
            Pranveer Singh Institute of Technology (PSIT)
          </p>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Passionate about Artificial Intelligence,
            Full Stack Development, Civic Technology,
            and Smart City Solutions.
          </p>

        </div>

        {/* FUTURE ROADMAP */}

        <div className="mb-20">

          <h2 className="text-4xl font-bold text-center mb-10">
            🔮 Future Roadmap
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              📱 Mobile Application
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🛰 Live GIS Tracking
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🤖 Advanced AI Verification
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              🔗 Smart City Integration
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              📈 Predictive Analytics
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-cyan-500/20">
              ⛓ Blockchain Transparency
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;