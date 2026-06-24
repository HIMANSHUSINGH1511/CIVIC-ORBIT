export function calculateHealthScore(
  complaints
) {
  const total =
    complaints.length;

  const resolved =
    complaints.filter(
      (c) => c.resolved
    ).length;

  const avgRating =
    complaints.length > 0
      ? complaints.reduce(
          (sum, c) =>
            sum +
            (c.citizenSatisfaction || 0),
          0
        ) / complaints.length
      : 5;

  let score = 100;

  score -= total * 2;

  score += resolved * 1.5;

  score += avgRating * 3;

  return Math.max(
    0,
    Math.min(
      100,
      Math.round(score)
    )
  );
}