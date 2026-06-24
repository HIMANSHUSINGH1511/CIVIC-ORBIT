export function calculateAreaRankings(
  complaints
) {
  const areaMap = {};

  complaints.forEach((complaint) => {
    const area = complaint.area;

    if (!areaMap[area]) {
      areaMap[area] = {
        name: area,
        complaints: 0,
      };
    }

    areaMap[area].complaints += 1;
  });

  return Object.values(areaMap)
    .map((area) => ({
      ...area,
      score: Math.max(
        100 - area.complaints * 5,
        50
      ),
    }))
    .sort((a, b) => b.score - a.score);
}