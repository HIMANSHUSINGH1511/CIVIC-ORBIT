import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(
    localStorage.getItem("civic_user")
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur-xl border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src={logo}
            alt="Civic Orbit"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold text-white">
              CIVIC{" "}
              <span className="text-cyan-400">
                ORBIT
              </span>
            </h1>

            <p className="text-xs text-gray-300">
              Where Every Citizen Drives Change
            </p>
          </div>
        </Link>

        {/* MENU */}

        <ul className="hidden lg:flex items-center gap-5 text-white font-medium whitespace-nowrap">

          <Link to="/">
            <li className="hover:text-cyan-400 transition">
              Home
            </li>
          </Link>

          <Link to="/report">
            <li className="hover:text-cyan-400 transition">
              Report
            </li>
          </Link>

       {user?.role === "government" ? (

  <Link to="/gov-dashboard">
    <li className="hover:text-cyan-400 transition">
      Government
    </li>
  </Link>

) : (

  <Link to="/citizen-dashboard">
    <li className="hover:text-cyan-400 transition">
      My Complaints
    </li>
  </Link>

)}

          <Link to="/map">
            <li className="hover:text-cyan-400 transition">
              Smart Map
            </li>
          </Link>

          <Link to="/leaderboard">
            <li className="hover:text-cyan-400 transition">
              Leaderboard
            </li>
          </Link>

          <Link to="/trust-scores">
            <li className="hover:text-cyan-400 transition">
              Trust Scores
            </li>
          </Link>

          <Link to="/area-ranking">
            <li className="hover:text-cyan-400 transition">
              Area Ranking
            </li>
          </Link>

          <Link to="/rewards">
            <li className="hover:text-cyan-400 transition">
              Rewards
            </li>
          </Link>
<Link to="/donation-analytics">
  <li className="hover:text-cyan-400 transition">
    Donations
  </li>
</Link>
          {/* GOVERNMENT ONLY */}

          {user?.role === "government" && (
            <Link to="/gov-dashboard">
              <li className="hover:text-cyan-400 transition">
                Government
              </li>
            </Link>
          )}

          <Link to="/about">
            <li className="hover:text-cyan-400 transition">
              About
            </li>
          </Link>

        </ul>

        {/* RIGHT SECTION */}

        <div className="flex items-center gap-3">

          {/* Officer Login */}

          {!user && (
            <Link
              to="/official-login"
              className="hidden md:block border border-cyan-400 text-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400/10 transition"
            >
              Officer Login
            </Link>
          )}

          {/* Citizen Login */}

          {!user ? (
            <Link
              to="/login"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 rounded-full text-white font-semibold"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/profile"
              className="flex items-center gap-3"
            >

              {user.photo ? (
                <img
                  src={user.photo}
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-cyan-400"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white text-xl">
                  {user.name?.charAt(0)}
                </div>
              )}

            </Link>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;