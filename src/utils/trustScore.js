export function calculateTrustScores(
  complaints
) {
  const users = {};

  complaints.forEach((complaint) => {

    const user =
      complaint.reportedBy ||
      "Anonymous";

    if (!users[user]) {
      users[user] = {
        name: user,
        score: 50,
      };
    }

    if (complaint.verified) {
      users[user].score += 10;
    }

    if (
      (complaint.downvotes || 0) > 5
    ) {
      users[user].score -= 15;
    }
  });

  return Object.values(users);
}