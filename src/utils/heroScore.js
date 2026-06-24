export function calculateHeroScores(complaints) {
  const users = {};

  complaints.forEach((complaint) => {
    const user = complaint.reportedBy || "Anonymous";

    if (!users[user]) {
      users[user] = {
        name: user,
        reports: 0,
        score: 0,
      };
    }

    users[user].reports += 1;
    users[user].score += 10;

    if (complaint.status === "Resolved") {
      users[user].score += 50;
    }
  });

  return Object.values(users).sort(
    (a, b) => b.score - a.score
  );
}