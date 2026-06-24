export function calculatePriority(
  category,
  description
) {
  let score = 50;

  const text =
    description.toLowerCase();

  if (
    category === "Water Leakage"
  )
    score += 15;

  if (
    category === "Streetlight"
  )
    score += 10;

  if (
    category === "Drainage"
  )
    score += 20;

  if (
    text.includes("school")
  )
    score += 20;

  if (
    text.includes("hospital")
  )
    score += 25;

  if (
    text.includes("accident")
  )
    score += 30;

  if (
    text.includes("danger")
  )
    score += 20;

  if (score >= 90)
    return {
      score,
      priority: "Critical",
      color: "text-red-500",
    };

  if (score >= 75)
    return {
      score,
      priority: "High",
      color: "text-orange-500",
    };

  if (score >= 60)
    return {
      score,
      priority: "Medium",
      color: "text-yellow-500",
    };

  return {
    score,
    priority: "Low",
    color: "text-green-500",
  };
}