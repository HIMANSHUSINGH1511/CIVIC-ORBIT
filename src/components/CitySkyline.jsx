function CitySkyline() {
  return (
    <section className="relative h-[180px] sm:h-[220px] lg:h-[250px] overflow-hidden">

      {/* Glow Ground */}

      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 bg-cyan-500/10 blur-3xl" />

      {/* Buildings */}

      <div className="absolute bottom-0 w-full flex justify-center items-end gap-2 sm:gap-3 lg:gap-4">

        <div className="w-8 sm:w-10 lg:w-14 h-20 sm:h-24 lg:h-32 bg-cyan-500/20 border border-cyan-500/30 rounded-t-sm" />

        <div className="w-10 sm:w-14 lg:w-20 h-28 sm:h-36 lg:h-44 bg-cyan-500/20 border border-cyan-500/30 rounded-t-sm" />

        <div className="w-8 sm:w-12 lg:w-16 h-18 sm:h-24 lg:h-28 bg-cyan-500/20 border border-cyan-500/30 rounded-t-sm" />

        <div className="w-12 sm:w-16 lg:w-24 h-36 sm:h-46 lg:h-56 bg-cyan-500/20 border border-cyan-500/30 rounded-t-sm" />

        <div className="w-8 sm:w-12 lg:w-16 h-24 sm:h-30 lg:h-36 bg-cyan-500/20 border border-cyan-500/30 rounded-t-sm" />

        <div className="w-10 sm:w-14 lg:w-20 h-32 sm:h-40 lg:h-48 bg-cyan-500/20 border border-cyan-500/30 rounded-t-sm" />

        <div className="w-6 sm:w-8 lg:w-12 h-16 sm:h-20 lg:h-24 bg-cyan-500/20 border border-cyan-500/30 rounded-t-sm" />

      </div>

    </section>
  );
}

export default CitySkyline;