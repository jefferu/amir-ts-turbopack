"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ts_amir_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "ts_amir_cookie_consent",
      JSON.stringify({ necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() })
    );
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem(
      "ts_amir_cookie_consent",
      JSON.stringify({ necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() })
    );
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-xl z-50 bg-surface-card/95 border border-border-highlight p-space-md shadow-[0_0_32px_rgba(0,0,0,0.8)] backdrop-blur-md animate-fadeIn"
    >
      <div className="flex items-start gap-space-sm">
        <span className="material-symbols-outlined text-border-highlight text-[28px] shrink-0 mt-0.5">
          cookie
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="font-headline-sm text-headline-sm text-text-primary uppercase tracking-wide">
              DATENSCHUTZ- &amp; COOKIE-EINSTELLUNGEN
            </h4>
          </div>
          <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
            Wir nutzen funktionale und technisch notwendige Cookies, um die Stabilität unseres
            Buchungssystems und Telemetrie-Dashboards zu gewährleisten. Analyse-Tools werden nur mit
            deiner ausdrücklichen Zustimmung aktiviert.
          </p>

          {showDetails && (
            <div className="my-2 p-3 bg-surface-base border border-border-subtle flex flex-col gap-2 text-xs text-text-secondary">
              <div className="flex items-center justify-between">
                <span>
                  <strong className="text-text-primary">Essenziell:</strong> Grundfunktionen,
                  Navigation &amp; Sicherheit
                </span>
                <span className="text-border-highlight font-bold font-mono">IMMER AKTIV</span>
              </div>
              <div className="flex items-center justify-between">
                <span>
                  <strong className="text-text-primary">Analyse / Performance:</strong> Anonyme
                  Reichweitenmessung
                </span>
                <span className="text-text-muted font-mono">OPTIONAL</span>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-subtle mt-1">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="bg-border-highlight hover:bg-volt-bright text-surface-base font-label-mono-sm text-label-mono-sm px-space-md py-2 uppercase font-bold tracking-wider transition-all duration-150 shadow-[0_0_12px_rgba(204,255,0,0.25)] cursor-pointer"
            >
              ALLE AKZEPTIEREN
            </button>
            <button
              type="button"
              onClick={handleAcceptNecessary}
              className="bg-surface-raised hover:bg-surface-card text-text-primary hover:text-border-highlight border border-border-strong hover:border-border-highlight font-label-mono-sm text-label-mono-sm px-space-md py-2 uppercase font-bold tracking-wider transition-all duration-150 cursor-pointer"
            >
              NUR NOTWENDIGE
            </button>
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="text-text-muted hover:text-text-primary font-label-mono-sm text-label-mono-sm uppercase underline cursor-pointer ml-auto"
            >
              {showDetails ? "WENIGER" : "DETAILS"}
            </button>
          </div>

          <div className="flex items-center gap-3 pt-1 text-[11px] font-mono text-text-muted uppercase">
            <Link href="/datenschutz" className="hover:text-border-highlight transition-colors">
              DATENSCHUTZERKLÄRUNG
            </Link>
            <span>•</span>
            <Link href="/impressum" className="hover:text-border-highlight transition-colors">
              IMPRESSUM
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
