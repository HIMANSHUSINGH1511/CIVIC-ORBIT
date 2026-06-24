import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-cyan-500/20 mt-20">

      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo Section */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              CIVIC
              <span className="text-cyan-400"> ORBIT</span>
            </h2>

            <p className="text-gray-400 mt-4">
              Where Every Citizen Drives Change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link to="/" className="hover:text-cyan-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-cyan-400"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/report"
                  className="hover:text-cyan-400"
                >
                  Report Issue
                </Link>
              </li>

              <li>
                <Link
                  to="/leaderboard"
                  className="hover:text-cyan-400"
                >
                  Leaderboard
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400"
                >
                  About
                </Link>
              </li>

            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Features
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link
                  to="/assistant"
                  className="hover:text-cyan-400"
                >
                  AI Complaint Analysis
                </Link>
              </li>

              <li>
                <Link
                  to="/map"
                  className="hover:text-cyan-400"
                >
                  Smart Maps
                </Link>
              </li>

              <li>
                <Link
                  to="/hotspots"
                  className="hover:text-cyan-400"
                >
                  Hotspot Prediction
                </Link>
              </li>

              <li>
                <Link
                  to="/gov-dashboard"
                  className="hover:text-cyan-400"
                >
                  Government Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/rewards"
                  className="hover:text-cyan-400"
                >
                  Community Rewards
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/10 mt-10 pt-6 text-center text-gray-500">
          © 2026 CIVIC ORBIT • Developed by Himanshu Singh
        </div>

      </div>

    </footer>
  );
}

export default Footer;