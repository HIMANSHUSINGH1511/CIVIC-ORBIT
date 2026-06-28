import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("civic_user"));

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Civic Orbit"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />

          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-white">
              CIVIC <span className="text-cyan-400">ORBIT</span>
            </h1>

            <p className="hidden sm:block text-xs text-gray-300">
              Where Every Citizen Drives Change
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-5 text-white font-medium">

          <Link to="/"><li className="hover:text-cyan-400">Home</li></Link>

          <Link to="/report"><li className="hover:text-cyan-400">Report</li></Link>

          {user?.role === "government" ? (
            <Link to="/gov-dashboard">
              <li className="hover:text-cyan-400">Government</li>
            </Link>
          ) : (
            <Link to="/citizen-dashboard">
              <li className="hover:text-cyan-400">My Complaints</li>
            </Link>
          )}

          <Link to="/map"><li className="hover:text-cyan-400">Smart Map</li></Link>

          <Link to="/leaderboard"><li className="hover:text-cyan-400">Leaderboard</li></Link>

          <Link to="/trust-scores"><li className="hover:text-cyan-400">Trust Scores</li></Link>

          <Link to="/area-ranking"><li className="hover:text-cyan-400">Area Ranking</li></Link>

          <Link to="/rewards"><li className="hover:text-cyan-400">Rewards</li></Link>

          <Link to="/donation-analytics">
            <li className="hover:text-cyan-400">Donations</li>
          </Link>

          <Link to="/about">
            <li className="hover:text-cyan-400">About</li>
          </Link>

        </ul>

        {/* Right */}

        <div className="flex items-center gap-3">

          {!user && (
            <Link
              to="/official-login"
              className="hidden md:block border border-cyan-400 text-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400/10"
            >
              Officer Login
            </Link>
          )}

          {!user ? (
            <Link
              to="/login"
              className="hidden sm:block bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-full text-white font-semibold"
            >
              Login
            </Link>
          ) : (
            <Link to="/profile">
              {user.photo ? (
                <img
                  src={user.photo}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-cyan-400"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                  {user.name?.charAt(0)}
                </div>
              )}
            </Link>
          )}

          {/* Hamburger */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#0F172A] border-t border-cyan-500/20">

          <div className="flex flex-col px-6 py-5 space-y-4 text-white">

            <Link to="/" onClick={closeMenu}>Home</Link>

            <Link to="/report" onClick={closeMenu}>Report</Link>

            {user?.role === "government" ? (
              <Link to="/gov-dashboard" onClick={closeMenu}>
                Government
              </Link>
            ) : (
              <Link to="/citizen-dashboard" onClick={closeMenu}>
                My Complaints
              </Link>
            )}

            <Link to="/map" onClick={closeMenu}>Smart Map</Link>

            <Link to="/leaderboard" onClick={closeMenu}>Leaderboard</Link>

            <Link to="/trust-scores" onClick={closeMenu}>Trust Scores</Link>

            <Link to="/area-ranking" onClick={closeMenu}>Area Ranking</Link>

            <Link to="/rewards" onClick={closeMenu}>Rewards</Link>

            <Link to="/donation-analytics" onClick={closeMenu}>
              Donations
            </Link>

            <Link to="/about" onClick={closeMenu}>About</Link>

            {!user && (
              <>
                <Link to="/official-login" onClick={closeMenu}>
                  Officer Login
                </Link>

                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-center py-3 rounded-full"
                >
                  Login
                </Link>
              </>
            )}

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;