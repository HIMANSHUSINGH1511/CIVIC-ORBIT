

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
export const getWeatherByCoords =
  async (lat, lon) => {

    const response =
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

    return response.json();
  };