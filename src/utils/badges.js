export const getBadge = (score) => {

  if (score >= 500)
    return "🏆 Civic Champion";

  if (score >= 200)
    return "🥇 Gold";

  if (score >= 100)
    return "🥈 Silver";

  if (score >= 50)
    return "🥉 Bronze";

  return "⭐ New Citizen";
};