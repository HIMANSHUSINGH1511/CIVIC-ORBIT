export function generateHeatmap(
  complaints
) {
  const heatmap = {};

  complaints.forEach((item) => {

    const area =
      item.location;

    if (!heatmap[area]) {
      heatmap[area] = 0;
    }

    heatmap[area] += 1;
  });

  return Object.entries(
    heatmap
  ).map(([name, count]) => ({
    name,
    complaints: count,
  }));
}