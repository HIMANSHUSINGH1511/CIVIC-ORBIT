function ComplaintMarkers() {
  const markers = [
    "Pothole",
    "Water Leakage",
    "Garbage",
    "Street Light",
    "Infrastructure",
  ];

  return (
    <section className="py-10">

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">

        {markers.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl px-6 py-4 rounded-full text-cyan-300"
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default ComplaintMarkers;