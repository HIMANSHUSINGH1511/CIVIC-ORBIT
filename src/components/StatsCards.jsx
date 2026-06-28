function StatsCards({
  activeCitizens,
  resolvedIssues,
  totalComplaints,
  topArea,
}) {
  const stats = [
    {
      title: "Active Citizens",
      value: activeCitizens,
      desc: "Growing every day",
    },
    {
      title: "Issues Resolved",
      value: resolvedIssues,
      desc: "Across all communities",
    },
    {
      title: "Complaints Reported",
      value: totalComplaints,
      desc: "Community submissions",
    },
    {
      title: "Top Community",
      value: topArea,
      desc: "Most active area",
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 hover:scale-[1.02] transition duration-300"
        >
          <h3 className="text-gray-400 text-sm sm:text-base">
            {item.title}
          </h3>

          <p className="text-white text-2xl sm:text-3xl font-bold mt-2 break-words">
            {item.value}
          </p>

          <p className="text-gray-500 text-sm mt-2">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;