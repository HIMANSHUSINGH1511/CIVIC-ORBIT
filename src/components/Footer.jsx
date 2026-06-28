import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-cyan-500/20 mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Logo Section */}

          <div className="text-center sm:text-left">

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              CIVIC
              <span className="text-cyan-400"> ORBIT</span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              Where Every Citizen Drives Change.
            </p>

          </div>

          {/* Quick Links */}

          <div className="text-center sm:text-left">

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-cyan-400 transition"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/report"
                  className="hover:text-cyan-400 transition"
                >
                  Report Issue
                </Link>
              </li>

              <li>
                <Link
                  to="/leaderboard"
                  className="hover:text-cyan-400 transition"
                >
                  Leaderboard
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition"
                >
                  About
                </Link>
              </li>

            </ul>

          </div>

          {/* Features */}

          <div className="text-center sm:text-left">

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Features
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link
                  to="/assistant"
                  className="hover:text-cyan-400 transition"
                >
                  AI Complaint Analysis
                </Link>
              </li>

              <li>
                <Link
                  to="/map"
                  className="hover:text-cyan-400 transition"
                >
                  Smart Maps
                </Link>
              </li>

              <li>
                <Link
                  to="/hotspots"
                  className="hover:text-cyan-400 transition"
                >
                  Hotspot Prediction
                </Link>
              </li>

              <li>
                <Link
                  to="/gov-dashboard"
                  className="hover:text-cyan-400 transition"
                >
                  Government Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/rewards"
                  className="hover:text-cyan-400 transition"
                >
                  Community Rewards
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-cyan-500/10 mt-10 pt-6">

          <p className="text-center text-gray-500 text-sm sm:text-base">
            © 2026 <span className="text-cyan-400 font-semibold">CIVIC ORBIT</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            Developed by Himanshu Singh
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;