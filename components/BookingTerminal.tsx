"use client";

import { useState } from "react";

/**
 * Interactive court inquiry terminal enabling players to configure session preferences and submit requests.
 */
export default function BookingTerminal() {
  const [selectedTrack, setSelectedTrack] = useState<string>("kids");
  const [selectedLocation, setSelectedLocation] = useState<string>("weiterstadt");
  const [selectedDay, setSelectedDay] = useState<string>("MO");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    level: "beginner",
    notes: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const tracks = [
    { id: "kids", label: "KIDS & BALLSCHULE" },
    { id: "youth", label: "JUGENDTRAINING" },
    { id: "adults", label: "ERWACHSENE" },
    { id: "elite", label: "LEISTUNGSKADER / PRIVAT" },
  ];

  const locations = [
    { id: "weiterstadt", label: "SG WEITERSTADT (HALLE & SAND)" },
    { id: "pfungstadt", label: "DARMSTADT / TC PFUNGSTADT" },
  ];

  const days = ["MO", "DI", "MI", "DO", "FR", "SA"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xxl" id="inquiry">
      <div className="max-w-[1040px] mx-auto bg-surface-card border border-border-subtle p-space-lg md:p-space-xl relative shadow-2xl">
        {/* Top Neon Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-lg border-b border-border-subtle mb-space-xl gap-space-sm">
          <div>
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="w-2.5 h-2.5 bg-border-highlight inline-block"></span>
              <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-widest font-bold">
                SCHNUPPERSTUNDE ODER PROBETRAINING ANFRAGEN
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase">
              STARTE DEINE TRAININGSSESSION
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-text-secondary max-w-xs md:text-right">
            Wähle deinen Wunsch-Track und Standort für eine unverbindliche Ersteinschätzung durch
            Cheftrainer Amir Reza.
          </p>
        </div>

        {/* Interactive Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
          {/* Selector 1: Track Choice */}
          <div>
            <label className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase block mb-space-xs">
              01 // WÄHLE DEIN TRAININGSMODUL
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs">
              {tracks.map((track) => {
                const isActive = selectedTrack === track.id;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setSelectedTrack(track.id)}
                    className={`px-space-sm py-space-sm bg-surface-raised font-label-mono-sm text-label-mono-sm uppercase text-center transition-all duration-150 ${
                      isActive
                        ? "border border-border-highlight text-border-highlight font-bold shadow-[0_0_12px_rgba(204,255,0,0.15)]"
                        : "border border-border-subtle hover:border-border-strong text-text-secondary"
                    }`}
                  >
                    {track.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selector 2: Location Choice */}
          <div>
            <label className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase block mb-space-xs">
              02 // WUNSCH-STANDORT
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
              {locations.map((loc) => {
                const isActive = selectedLocation === loc.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`px-space-md py-space-sm bg-surface-raised font-label-mono-sm text-label-mono-sm uppercase text-left flex items-center justify-between transition-all duration-150 ${
                      isActive
                        ? "border border-border-highlight text-border-highlight font-bold shadow-[0_0_12px_rgba(204,255,0,0.15)]"
                        : "border border-border-subtle hover:border-border-strong text-text-secondary"
                    }`}
                  >
                    <span>{loc.label}</span>
                    <span
                      className={`material-symbols-outlined text-[18px] transition-opacity ${
                        isActive ? "opacity-100 text-border-highlight" : "opacity-0"
                      }`}
                    >
                      check
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selector 3: Preferred Day Interactive Strip */}
          <div>
            <label className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase block mb-space-xs">
              03 // PRÄFERIERTE TRAININGSZEIT (WOCHENTAG)
            </label>
            <div className="grid grid-cols-6 gap-space-xs">
              {days.map((day) => {
                const isActive = selectedDay === day;
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`py-space-sm bg-surface-raised font-label-mono-sm text-label-mono-sm uppercase text-center transition-all duration-150 ${
                      isActive
                        ? "border border-border-highlight text-border-highlight font-bold shadow-[0_0_12px_rgba(204,255,0,0.2)] bg-surface-card"
                        : "border border-border-subtle hover:border-border-strong text-text-secondary"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Personal Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <label className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                VOLLSTÄNDIGER NAME
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="z.B. Alexander Meyer"
                className="w-full bg-surface-base border border-border-subtle focus:border-border-highlight text-text-primary px-space-sm py-space-sm font-body-md text-body-md outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                TELEFON / WHATSAPP
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="017X - XXXXXXXX"
                className="w-full bg-surface-base border border-border-subtle focus:border-border-highlight text-text-primary px-space-sm py-space-sm font-body-md text-body-md outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-space-xs">
              <label className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                SPIELSTÄRKE / LK
              </label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full bg-surface-base border border-border-subtle focus:border-border-highlight text-text-primary px-space-sm py-space-sm font-body-md text-body-md outline-none transition-colors"
              >
                <option value="beginner">Anfänger / Erste Schläge</option>
                <option value="intermediate">Fortgeschritten / Hobbyspieler</option>
                <option value="club">Club- &amp; Medenspieler (LK 15-25)</option>
                <option value="tournament">Turnierkader / LK 1-14</option>
              </select>
            </div>
          </div>

          {/* Additional Note */}
          <div className="flex flex-col gap-space-xs">
            <label className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
              BEMERKUNG ODER SPEZIELLE ZIELE (OPTIONAL)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="z.B. Vorhand-Technik umstellen, Vorbereitung auf Medenspiele, Alter des Kindes..."
              className="w-full bg-surface-base border border-border-subtle focus:border-border-highlight text-text-primary px-space-sm py-space-sm font-body-md text-body-md outline-none transition-colors"
            />
          </div>

          {/* Transparent Pricing Hint Box */}
          <div className="p-space-sm bg-surface-base border border-border-subtle flex items-center justify-between flex-wrap gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-border-highlight text-[18px]">
                info
              </span>
              <span className="font-label-mono-sm text-label-mono-sm text-text-secondary uppercase">
                GRUPPENTRAINING AB 150 € / SAISON • PRIVAT 10ER-KARTE 550 € INKL. TRAINER &amp; PLATZGEBÜHR
              </span>
            </div>
            <span className="font-label-mono-sm text-label-mono-sm text-border-highlight font-bold uppercase">
              KEINE VERSTECKTEN KOSTEN
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-border-highlight hover:bg-volt-bright text-surface-base font-label-mono-lg text-label-mono-lg py-space-md uppercase font-bold tracking-wider transition-all duration-150 flex items-center justify-center gap-space-xs hover:shadow-[0_0_24px_rgba(204,255,0,0.35)] cursor-pointer"
          >
            <span>UNVERBINDLICH ANFRAGEN</span>
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </form>

        {/* Confirmation Overlay Modal */}
        {isModalOpen && (
          <div className="absolute inset-0 bg-surface-base/95 backdrop-blur-md flex flex-col items-center justify-center p-space-xl text-center z-20 animate-fadeIn">
            <span className="w-16 h-16 bg-border-highlight/10 border border-border-highlight flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-border-highlight text-[36px]">
                done
              </span>
            </span>
            <h3 className="font-headline-lg text-headline-lg text-text-primary uppercase mb-space-xs">
              ANFRAGE ERFOLGREICH ÜBERMITTELT
            </h3>
            <p className="font-body-md text-body-md text-text-secondary max-w-md mb-space-sm">
              Vielen Dank, <span className="text-text-primary font-bold">{formData.name || "Sportler"}</span>!
              Deine Anfrage für{" "}
              <span className="text-border-highlight font-bold">
                {tracks.find((t) => t.id === selectedTrack)?.label}
              </span>{" "}
              am Standort{" "}
              <span className="text-border-highlight font-bold">
                {locations.find((l) => l.id === selectedLocation)?.label}
              </span>{" "}
              (Wunschtag: {selectedDay}) wurde registriert.
            </p>
            <p className="font-body-sm text-body-sm text-text-muted max-w-md mb-space-lg">
              Cheftrainer Amir Reza wird sich innerhalb von 24 Stunden telefonisch oder per WhatsApp
              unter <span className="text-text-primary">{formData.phone || "deiner Nummer"}</span> melden.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-space-xl py-space-sm bg-border-highlight text-surface-base font-label-mono-sm text-label-mono-sm uppercase font-bold tracking-wider hover:bg-volt-bright transition-colors"
              >
                SCHLIESSEN
              </button>
              <a
                href={`https://wa.me/491624207661?text=${encodeURIComponent(
                  `Hallo Amir, ich habe eine Trainingsanfrage für ${
                    tracks.find((t) => t.id === selectedTrack)?.label
                  } am ${selectedDay}. Mein Name: ${formData.name || ""}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-md py-space-sm bg-surface-raised border border-border-highlight text-border-highlight font-label-mono-sm text-label-mono-sm uppercase font-bold tracking-wider hover:bg-border-highlight/10 transition-colors inline-flex items-center gap-1.5"
              >
                <span>DIREKT VIA WHATSAPP</span>
                <span className="material-symbols-outlined text-[16px]">chat</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
