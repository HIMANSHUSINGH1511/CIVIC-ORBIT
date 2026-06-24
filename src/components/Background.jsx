function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-[#050B1D]" />

      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/20 blur-[180px] rounded-full animate-pulse" />

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse" />

      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/10 blur-[120px] rounded-full" />

    </div>
  );
}

export default Background;