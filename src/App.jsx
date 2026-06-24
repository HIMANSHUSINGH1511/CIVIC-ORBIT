import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import About from "./pages/About";
import SmartMap from "./pages/SmartMap";
import AreaRanking from "./pages/AreaRanking";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import TrustScores from "./pages/TrustScores";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import Heatmap from "./pages/Heatmap";
import Notifications
from "./pages/Notifications";
import NewsFeed from "./pages/NewsFeed";
import Awards from "./pages/Awards";
import AIAssistant from "./pages/AIAssistant";
import HotspotPrediction
from "./pages/HotspotPrediction";

import GovernmentPerformance
from "./pages/GovernmentPerformance";
import DepartmentAnalytics
from "./pages/DepartmentAnalytics";
import ProtectedRoute from "./components/ProtectedRoute";
import GovernmentLogin from "./pages/GovernmentLogin";

import Feedback from "./pages/Feedback";
import CitizenDashboard
from "./pages/CitizenDashboard";
import WeatherAlerts
from "./pages/WeatherAlerts";
import Donate from "./pages/Donate";
import DonationAnalytics
from "./pages/DonationAnalytics";
import TransparencyPortal
from "./pages/TransparencyPortal";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/report"
          element={<ReportIssue />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

        <Route
          path="/rewards"
          element={<Rewards />}
        />

        <Route
          path="/about"
          element={<About />}

        />
        <Route
 path="/area-ranking"
 element={<AreaRanking />}
/>
<Route
  path="/map"
  element={<SmartMap />}
/>
<Route
  path="/weather-alerts"
  element={<WeatherAlerts />}
/>
<Route
  path="/login"
  element={<Login />}
/>
<Route
  path="/official-login"
  element={<GovernmentLogin />}
/>
<Route
  path="/profile"
  element={<Profile />}
/>
<Route
 path="/citizen-dashboard"
 element={<CitizenDashboard />}
/>

<Route
  path="/trust-scores"
  element={<TrustScores />}
/>
<Route
 path="/gov-dashboard"
 element={
  <ProtectedRoute role="government">
    <GovernmentDashboard />
  </ProtectedRoute>
 }
/>

<Route
  path="/heatmap"
  element={<Heatmap />}
/>

<Route
  path="/notifications"
  element={<Notifications />}
/>

<Route
  path="/news"
  element={<NewsFeed />}
/>

<Route
  path="/awards"
  element={<Awards />}
/>

<Route
  path="/donate"
  element={<Donate />}
/>

<Route
 path="/donation-analytics"
 element={<DonationAnalytics />}
/>

<Route
  path="/assistant"
  element={<AIAssistant />}

/>


<Route
  path="/hotspots"
  element={<HotspotPrediction />}
/>
<Route
  path="/gov-performance"
  element={<GovernmentPerformance />}
/>
<Route
 path="/department-analytics"
 element={<DepartmentAnalytics />}
/>
<Route
  path="/feedback"
  element={<Feedback />}
/><Route
  path="/transparency"
  element={<TransparencyPortal />}
/>



<Route
  path="*"
  element={
    <div className="min-h-screen bg-[#050B1D] text-white flex items-center justify-center">
      <h1 className="text-5xl font-bold">
        404 Page Not Found
      </h1>
    </div>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;