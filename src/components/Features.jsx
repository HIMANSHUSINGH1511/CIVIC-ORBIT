function Features() {
  const features = [
    "AI Image Analysis",
    "Voice Complaint Reporting",
    "Smart GIS Mapping",
    "Community Verification",
    "Citizen Rewards",
    "Area Ranking",
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-8">

      <h2 className="text-center text-white text-5xl font-bold mb-16">
        Smart Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8"
          >
            <h3 className="text-cyan-400 text-2xl font-semibold">
              {feature}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;