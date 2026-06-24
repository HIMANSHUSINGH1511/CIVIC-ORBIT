function CitySkyline() {
  return (
    <section className="relative h-[250px] overflow-hidden">

      {/* Glow Ground */}

      <div className="absolute bottom-0 left-0 w-full h-24 bg-cyan-500/10 blur-3xl" />

      {/* Buildings */}

      <div className="absolute bottom-0 w-full flex justify-center items-end gap-4">

        <div className="w-14 h-32 bg-cyan-500/20 border border-cyan-500/30" />
        <div className="w-20 h-44 bg-cyan-500/20 border border-cyan-500/30" />
        <div className="w-16 h-28 bg-cyan-500/20 border border-cyan-500/30" />

        <div className="w-24 h-56 bg-cyan-500/20 border border-cyan-500/30" />

        <div className="w-16 h-36 bg-cyan-500/20 border border-cyan-500/30" />

        <div className="w-20 h-48 bg-cyan-500/20 border border-cyan-500/30" />

        <div className="w-12 h-24 bg-cyan-500/20 border border-cyan-500/30" />

      </div>

    </section>
  );
}

export default CitySkyline;