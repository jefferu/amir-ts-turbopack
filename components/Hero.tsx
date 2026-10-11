import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-margin-mobile lg:px-margin pt-space-lg lg:pt-space-xl pb-space-xxl relative overflow-hidden" id="trainer">
      {/* Background ambient neon glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-border-highlight/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left Column: High-Intensity Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Neon Status Pill */}
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-raised border border-border-highlight/30 mb-space-md">
            <span className="w-2 h-2 bg-border-highlight animate-pulse inline-block"></span>
            <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-widest font-bold">
              ATP &amp; DAVIS CUP COACHING
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline-xl text-headline-xl lg:text-display-hero text-text-primary uppercase tracking-tight leading-[0.95] mb-space-md">
            PROFESSIONELLES <span className="text-border-highlight">TENNISTRAINING</span> IN DARMSTADT &amp; UMGEBUNG
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mb-space-xl leading-relaxed">
            Geleitet von Ex-Davis-Cup-Spieler und GPTCA/ATP A-Lizenz Coach Amir Reza. Individuelle
            Technik- und Matchanalyse für Anfänger, ambitionierte Clubspieler und Nachwuchstalente auf
            internationalem Niveau.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto mb-space-xl">
            <a
              className="w-full sm:w-auto bg-border-highlight hover:bg-volt-bright text-surface-base font-label-mono-lg text-label-mono-lg px-space-xl py-space-md uppercase font-bold tracking-wider transition-all duration-150 inline-flex items-center justify-center gap-space-xs hover:shadow-[0_0_24px_rgba(204,255,0,0.35)]"
              href="#inquiry"
            >
              <span>JETZT ANFRAGEN</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className="w-full sm:w-auto bg-transparent hover:bg-surface-raised text-text-primary hover:text-border-highlight border border-border-strong hover:border-border-highlight font-label-mono-lg text-label-mono-lg px-space-lg py-space-md uppercase font-bold tracking-wider transition-all duration-150 inline-flex items-center justify-center"
              href="#methodology"
            >
              TRAININGSMETHODIK
            </a>
          </div>

          {/* Micro-Metrics / Credibility Strip */}
          <div className="grid grid-cols-3 gap-space-md w-full pt-space-lg border-t border-border-subtle">
            <div>
              <div className="font-headline-lg text-headline-lg text-text-primary">
                15+ <span className="text-border-highlight text-headline-sm">JAHRE</span>
              </div>
              <div className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                Tour- &amp; Coaching-Erfahrung
              </div>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg text-text-primary">100+</div>
              <div className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                Turniersiege Betreut
              </div>
            </div>
            <div>
              <div className="font-headline-lg text-headline-lg text-border-highlight">YONEX</div>
              <div className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                Offizieller Teststützpunkt
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Tech Telemetry Analytics Dashboard with Amir Photo */}
        <div className="lg:col-span-5">
          <div className="bg-surface-card border border-border-subtle hover:border-border-strong transition-colors p-space-lg relative overflow-hidden shadow-2xl">
            {/* Live Telemetry Top Bar */}
            <div className="flex items-center justify-between pb-space-md border-b border-border-subtle mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 bg-border-highlight inline-block"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-text-primary uppercase tracking-wider font-bold">
                  MATCH &amp; STROKE BIOMETRICS
                </span>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm text-border-highlight px-2 py-0.5 bg-surface-base border border-border-highlight/40 uppercase">
                LIVE STREAM
              </span>
            </div>

            {/* Stylized Court Trajectory Vector Graphic */}
            <div className="relative w-full h-48 bg-surface-base border border-border-subtle p-space-sm mb-space-md overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between text-text-muted font-label-mono-sm text-label-mono-sm">
                <span>RADAR SYS 01 // OVERHEAD VIEW</span>
                <span>GPS COURT LATENCY: 2ms</span>
              </div>

              {/* Court Vector Lines Diagram */}
              <svg
                className="w-full h-28 my-auto"
                fill="none"
                viewBox="0 0 400 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Court Outline & Baseline */}
                <rect height="100" stroke="#262626" strokeWidth="1.5" width="360" x="20" y="10" />
                {/* Service Boxes */}
                <line stroke="#262626" strokeWidth="1.5" x1="120" x2="120" y1="10" y2="110" />
                <line stroke="#262626" strokeWidth="1.5" x1="280" x2="280" y1="10" y2="110" />
                {/* Center Service Line */}
                <line stroke="#262626" strokeWidth="1.5" x1="120" x2="280" y1="60" y2="60" />
                {/* Net */}
                <line stroke="#444933" strokeDasharray="3 3" strokeWidth="2" x1="200" x2="200" y1="5" y2="115" />
                {/* Ball Trajectory Arc (Forehand Crosscourt Inside-Out) */}
                <path d="M 40 95 Q 160 30, 360 25" stroke="#CCFF00" strokeDasharray="4 2" strokeWidth="2" />
                {/* Bounce Target Marker */}
                <circle cx="340" cy="28" fill="#CCFF00" r="5" />
                <circle cx="340" cy="28" r="11" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1" />
                <circle cx="40" cy="95" fill="#FFFFFF" r="4" />
              </svg>

              <div className="flex items-center justify-between font-label-mono-sm text-label-mono-sm text-text-secondary">
                <span className="text-border-highlight">VECTOR: CROSSCOURT TOPSPIN</span>
                <span>ACCURACY INDEX: 98.4%</span>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-space-sm mb-space-md">
              <div className="bg-surface-raised p-space-sm border border-border-subtle">
                <div className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                  BALLGESCHWINDIGKEIT
                </div>
                <div className="font-headline-md text-headline-md text-border-highlight font-bold">
                  178 <span className="text-label-mono-sm text-text-primary">KM/H</span>
                </div>
              </div>

              <div className="bg-surface-raised p-space-sm border border-border-subtle">
                <div className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                  TREFFPUNKT-PRÄZISION
                </div>
                <div className="font-headline-md text-headline-md text-text-primary font-bold">
                  94% <span className="text-label-mono-sm text-border-highlight">OPTIMAL</span>
                </div>
              </div>

              <div className="bg-surface-raised p-space-sm border border-border-subtle">
                <div className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                  ROTATIONSRATE
                </div>
                <div className="font-headline-md text-headline-md text-text-primary font-bold">
                  3.250 <span className="text-label-mono-sm text-text-secondary">RPM</span>
                </div>
              </div>

              {/* Head Coach Metric with real Coach Photo */}
              <div className="bg-surface-raised p-space-sm border border-border-subtle flex items-center gap-3">
                <div className="relative w-12 h-12 shrink-0 rounded bg-surface-base border border-border-highlight/40 overflow-hidden">
                  <Image
                    src="/images/amir/amir.png"
                    alt="Amir Reza Coach"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                    HEAD COACH
                  </div>
                  <div className="font-headline-sm text-headline-sm text-text-primary truncate">
                    AMIR REZA
                  </div>
                  <span className="text-label-mono-sm text-border-highlight block font-bold">
                    ATP A-LIZENZ
                  </span>
                </div>
              </div>
            </div>

            {/* Telemetry Footer Pill */}
            <div className="flex items-center justify-between pt-space-xs font-label-mono-sm text-label-mono-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-border-highlight text-[14px]">
                  videocam
                </span>
                POWERED BY TRACKMAN &amp; VIDEO-AI
              </span>
              <span className="text-text-muted">SESSION ID: #AR-2025-09</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
