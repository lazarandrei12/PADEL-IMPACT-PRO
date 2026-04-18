import { Eyebrow, H2 } from "./Primitives";

export default function Media() {
  return (
    <section id="media" className="relative py-24 md:py-32 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <Eyebrow>Media</Eyebrow>
          <H2>Official Trailer</H2>
        </div>

        {/* Coming Soon trailer placeholder */}
        <div className="relative aspect-video bg-[#070e1f] border border-white/10 overflow-hidden rounded-sm shadow-2xl shadow-black/50 reveal">
          {/* Atmospheric background */}
          <div aria-hidden className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.18) 0%, transparent 65%)"
          }} />
          <div className="absolute inset-0 pip-scanlines" />
          <div className="absolute inset-0 pip-grain opacity-30" />

          {/* Faint court line motif */}
          <div aria-hidden className="absolute inset-8 border border-white/5" />
          <div aria-hidden className="absolute top-1/2 left-8 right-8 h-px bg-white/5" />
          <div aria-hidden className="absolute left-1/2 top-8 bottom-8 w-px bg-white/5" />

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center px-6">
            <div className="w-16 h-16 border border-white/15 flex items-center justify-center mb-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            <div>
              <p className="text-[#3b82f6] text-[10px] tracking-[0.5em] uppercase mb-4" style={{ fontFamily: "'Barlow', sans-serif" }}>
                Trailer
              </p>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-white mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Coming
              </h3>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none" style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                WebkitTextStroke: "1px rgba(59,130,246,0.7)",
                color: "transparent",
              }}>
                Soon
              </h3>
            </div>

            <div className="flex items-center gap-3 mt-2" style={{ fontFamily: "'Barlow', sans-serif" }}>
              <span className="w-8 h-px bg-white/20" />
              <p className="text-white/40 text-[11px] tracking-[0.4em] uppercase">Trailer drops before launch</p>
              <span className="w-8 h-px bg-white/20" />
            </div>

            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#3b82f6]" style={{ fontFamily: "'Barlow', sans-serif" }}>
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse" />
              <span>In Production</span>
            </div>
          </div>

          {/* Corner label */}
          <div className="absolute top-6 left-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white/30" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <span className="w-6 h-px bg-[#3b82f6]/50" />
            <span>Official Teaser</span>
          </div>
        </div>

        {/*
          YouTube embed — uncomment when trailer is live:

          <div className="relative aspect-video bg-[#0d1929] border border-white/10 overflow-hidden rounded-sm shadow-2xl shadow-black/50">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Jm8j7A6llGk?rel=0&modestbranding=1"
              title="Padel Impact Pro — Official Teaser"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        */}
      </div>
    </section>
  );
}
