export function getHotspotAreas(complaints) {
  const areaMap = {};

  complaints.forEach((c) => {
    const area = c.location || "Unknown";

    if (!areaMap[area]) {
      areaMap[area] = 0;
    }

    areaMap[area]++;
  });

  return Object.entries(areaMap)
    .map(([area, count]) => ({
      area,
      count,
      risk:
        count >= 10
          ? "High"
          : count >= 5
          ? "Medium"
          : "Low",
    }))
    .sort((a, b) => b.count - a.count);
}