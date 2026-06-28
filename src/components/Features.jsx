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
    <section className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">

      <h2 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16">
        Smart Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 sm:p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >
            <h3 className="text-cyan-400 text-xl sm:text-2xl font-semibold text-center">
              {feature}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;