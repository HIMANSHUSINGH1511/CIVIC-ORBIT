import { useState } from "react";

function GovernmentLogin() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

const handleLogin = () => {

  const GOVERNMENT_EMAIL =
    "admin@civicorbit.com";

  const GOVERNMENT_PASSWORD =
    "CivicOrbit@2026";

  if (
    email === GOVERNMENT_EMAIL &&
    password === GOVERNMENT_PASSWORD
  ) {

    localStorage.setItem(
      "civic_user",
      JSON.stringify({
        name:
          "Government Officer",
        email,
        role:
          "government",
        department:
          "Municipal Authority",
        badge:
          "🏛 Government Admin",
      })
    );

    window.location.href =
      "/gov-dashboard";

  } else {

    alert(
      "Invalid Government Credentials"
    );

  }
};

  return (
    <div className="min-h-screen bg-[#050B1D] flex justify-center items-center">

      <div className="bg-white/5 border border-cyan-500/20 p-10 rounded-3xl w-[450px]">

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Government Login
        </h1>

        <input
          type="email"
          placeholder="Official Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full bg-[#0F172A] p-4 rounded-xl mb-4 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full bg-[#0F172A] p-4 rounded-xl mb-6 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default GovernmentLogin;