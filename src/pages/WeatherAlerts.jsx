import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { getWeatherByCoords } from "../services/weatherService";
import { getWeatherAlert } from "../utils/weatherAlerts";

function WeatherAlerts() {
  const [weather, setWeather] = useState(null);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadWeather();
  }, []);

  const loadWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const data = await getWeatherByCoords(
            lat,
            lon
          );

          console.log(
            "Weather API Response:",
            data
          );

          if (
            data.cod &&
            Number(data.cod) !== 200
          ) {
            setError(data.message);
            setLoading(false);
            return;
          }

          setWeather(data);
          setAlert(
            getWeatherAlert(data)
          );
        } catch (err) {
          console.log(err);
          setError(
            "Unable to fetch weather data."
          );
        }

        setLoading(false);
      },

      (err) => {
        console.log(err);

        setError(
          "Location access denied."
        );

        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#050B1D] text-white pt-32 px-8">
      <div className="max-w-6xl mx-auto">

        <BackButton />

        <h1 className="text-5xl font-bold mb-10">
          🌦 Weather Alerts
        </h1>

        {loading && (
          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
            Loading weather data...
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500 rounded-3xl p-8">
            <h2 className="text-2xl text-red-400 font-bold">
              API Error
            </h2>

            <p className="mt-3">
              {error}
            </p>
          </div>
        )}

        {!loading && weather && (
          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Current Weather - {weather.name}
            </h2>

            <div className="space-y-4 text-xl">

              <p>
                🌡 Temperature:
                {" "}
                {weather.main?.temp}°C
              </p>

              <p>
                🤒 Feels Like:
                {" "}
                {weather.main?.feels_like}°C
              </p>

              <p>
                💧 Humidity:
                {" "}
                {weather.main?.humidity}%
              </p>

              <p>
                💨 Wind Speed:
                {" "}
                {weather.wind?.speed} m/s
              </p>

              <p>
                ☁ Condition:
                {" "}
                {weather.weather?.[0]?.main}
              </p>

            </div>

            <div className="mt-8 bg-cyan-500/10 p-6 rounded-xl">

              <h3 className="text-2xl font-bold mb-3">
                🚨 Alert Type:
                {" "}
                {alert?.type}
              </h3>

              <p>
                {alert?.message}
              </p>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default WeatherAlerts;