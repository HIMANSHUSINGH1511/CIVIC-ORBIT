export const getWeatherAlert = (weather) => {
  if (!weather) return null;

  const temp = weather.main?.temp;
  const wind = weather.wind?.speed;
  const rain = weather.rain?.["1h"] || 0;

  if (temp >= 40) {
    return {
      type: "Heatwave Alert 🔥",
      message:
        "Extreme heat conditions. Avoid outdoor activities during peak hours and stay hydrated."
    };
  }

  if (wind >= 15) {
    return {
      type: "Storm Alert ⛈",
      message:
        "Strong winds expected. Authorities should secure infrastructure and citizens should remain cautious."
    };
  }

  if (rain >= 10) {
    return {
      type: "Flood Alert 🌊",
      message:
        "Heavy rainfall expected. Drainage systems should be checked and citizens should avoid waterlogged areas."
    };
  }

  return {
    type: "Safe ✅",
    message:
      "No major weather threats detected."
  };
};