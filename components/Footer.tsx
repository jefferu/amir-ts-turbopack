import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-raised text-on-surface-variant mt-space-xxl border-t border-border-subtle">
      <div className="w-full px-margin-mobile lg:px-margin py-space-xxl max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          {/* Brand Info */}
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-lg text-headline-lg tracking-wider text-text-primary uppercase">
                TS AMIR
              </span>
              <span className="w-2.5 h-2.5 bg-border-highlight inline-block"></span>
            </div>
            <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-widest font-bold">
              POWERED BY YONEX
            </span>
            <p className="font-body-sm text-body-sm text-text-secondary mt-space-xs max-w-xs">
              Elite-Tennisausbildung nach internationalem Tour-Standard. Leistungszentrum Darmstadt
              &amp; Weiterstadt.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-8 h-8 rounded bg-surface-base border border-border-subtle flex items-center justify-center p-1">
                <Image
                  src="/images/amir/Logo-Amir.png"
                  alt="Amir Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 rounded bg-surface-base border border-border-subtle flex items-center justify-center p-1">
                <Image
                  src="/images/amir/official_atp_certified.png"
                  alt="ATP Certified"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-8 rounded bg-surface-base border border-border-subtle flex items-center justify-center p-1">
                <Image
                  src="/images/amir/logo_menu.png"
                  alt="Rafa Nadal Academy"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Academy HQ */}
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono-lg text-label-mono-lg text-text-primary uppercase tracking-wider mb-space-xs font-bold">
              AKADEMIE ZENTRALE
            </span>
            <span className="font-body-md text-body-md text-on-surface font-semibold">
              Amir Reza (Inhaber &amp; Cheftrainer)
            </span>
            <span className="font-body-md text-body-md text-text-secondary">Gerlachshöhe 28a</span>
            <span className="font-body-md text-body-md text-text-secondary">64367 Mühltal</span>
            <span className="font-body-md text-body-md text-text-secondary">Deutschland</span>
          </div>

          {/* Direct Contact */}
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono-lg text-label-mono-lg text-text-primary uppercase tracking-wider mb-space-xs font-bold">
              DIREKTKONTAKT
            </span>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-mono-sm text-label-mono-sm text-text-secondary">TEL:</span>
              <a
                className="font-body-md text-body-md text-on-surface hover:text-border-highlight transition-colors"
                href="tel:01624207661"
              >
                0162 - 420 76 61
              </a>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-mono-sm text-label-mono-sm text-text-secondary">MAIL:</span>
              <a
                className="font-body-md text-body-md text-on-surface hover:text-border-highlight transition-colors"
                href="mailto:info@ts-amir.de"
              >
                info@ts-amir.de
              </a>
            </div>
            <div className="flex items-center gap-space-xs mt-space-xs">
              <span className="font-label-mono-sm text-label-mono-sm text-text-secondary">WEB:</span>
              <span className="font-body-md text-body-md text-text-secondary">ts-amir.de</span>
            </div>
          </div>

          {/* Certifications & Partners */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-mono-lg text-label-mono-lg text-text-primary uppercase tracking-wider font-bold">
              ZERTIFIZIERUNGEN &amp; PARTNER
            </span>
            <div className="flex flex-col gap-space-xs">
              <div className="bg-surface-card border border-border-subtle px-space-sm py-space-xs flex items-center justify-between">
                <span className="font-label-mono-sm text-label-mono-sm text-text-primary font-bold tracking-wider uppercase">
                  YONEX
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase">
                  OFFICIAL PARTNER
                </span>
              </div>
              <div className="bg-surface-card border border-border-subtle px-space-sm py-space-xs flex items-center justify-between">
                <span className="font-label-mono-sm text-label-mono-sm text-text-primary font-bold tracking-wider uppercase">
                  RAFA NADAL ACADEMY
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase">
                  TALENT SCOUT
                </span>
              </div>
              <div className="bg-surface-card border border-border-subtle px-space-sm py-space-xs flex items-center justify-between">
                <span className="font-label-mono-sm text-label-mono-sm text-text-primary font-bold tracking-wider uppercase">
                  GPTCA
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase">
                  A-LIZENZ (ATP)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-space-xl pt-space-lg border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="font-label-mono-sm text-label-mono-sm text-text-muted uppercase">
            © 2025 TENNISSCHULE AMIR. ALLE RECHTE VORBEHALTEN.
          </div>
          <div className="flex items-center gap-space-lg font-label-mono-sm text-label-mono-sm uppercase">
            <a className="text-text-secondary hover:text-text-primary transition-colors" href="#inquiry">
              IMPRESSUM
            </a>
            <a className="text-text-secondary hover:text-text-primary transition-colors" href="#inquiry">
              DATENSCHUTZ
            </a>
            <a className="text-text-secondary hover:text-text-primary transition-colors" href="#inquiry">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
