import Image from "next/image";
import { getAssetPath } from "@/lib/assets";

/**
 * Visual photo showcase demonstrating training drills, camps, and equipment fitting.
 */
export default function PhotoShowcase() {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xxl" id="camps">
      <div className="max-w-[1440px] mx-auto space-y-space-lg">
        {/* Main 2-Column Visual Contrast Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Card 1: Action Precision & Individual Coaching */}
          <div className="relative group overflow-hidden bg-surface-card border border-border-subtle min-h-[460px] flex flex-col justify-end p-space-lg">
            <div className="absolute inset-0">
              <Image
                src={getAssetPath("/images/amir/amir_training.png")}
                alt="Amir Reza beim Einzeltraining"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/80 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              <div className="mb-space-xs">
                <span className="px-space-sm py-1 bg-border-highlight text-surface-base font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider inline-block">
                  PRÄZISION &amp; KRAFT
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-text-primary uppercase mb-space-xs drop-shadow-md">
                TECHNIK &amp; PRÄZISION: Individuelles Einzeltraining
              </h3>
              <p className="font-body-md text-body-md text-text-secondary max-w-xl">
                Vollständige Video-Slow-Motion Analyse für maximale Schlagstabilität, Treffpunkterfassung
                und explosive Beinarbeit bei Matchtempo.
              </p>
            </div>
          </div>

          {/* Card 2: Coach & Racket Fitting / Camps */}
          <div className="relative group overflow-hidden bg-surface-card border border-border-subtle min-h-[460px] flex flex-col justify-end p-space-lg">
            <div className="absolute inset-0">
              <Image
                src={getAssetPath("/images/amir/slider-trainer.png")}
                alt="Trainerteam Tennisschule Amir"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/80 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              <div className="mb-space-xs">
                <span className="px-space-sm py-1 bg-surface-raised border border-border-highlight text-border-highlight font-label-mono-sm text-label-mono-sm font-bold uppercase tracking-wider inline-block">
                  OFFIZIELLER YONEX PARTNER
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-text-primary uppercase mb-space-xs drop-shadow-md">
                POWER &amp; TOPSPIN: Maßgeschneiderte Trainingsprogramme
              </h3>
              <p className="font-body-md text-body-md text-text-secondary max-w-xl">
                Professionelles Racket-Fitting, Griffoptimierung und gezielte Vorbereitung für Medenspiele,
                Ranglistenturniere und Freizeitspieler.
              </p>
            </div>
          </div>
        </div>

        {/* Live Action Strip: Camps, Junior Stars & Real Court Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-2">
          {/* Action Snapshot 1: Sommercamp */}
          <div className="relative group overflow-hidden bg-surface-card border border-border-subtle h-56 flex flex-col justify-end p-4">
            <Image
              src={getAssetPath("/images/amir/sommercamp_juli_2024_teil1_1.jpg")}
              alt="Jugend-Sommercamp Tennisschule Amir"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/60 to-transparent" />
            <div className="relative z-10">
              <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase font-bold block">
                INTENSIVCAMPS
              </span>
              <span className="font-headline-sm text-headline-sm text-text-primary uppercase">
                SOMMERCAMP 2024 &amp; 2025
              </span>
            </div>
          </div>

          {/* Action Snapshot 2: Trainingslager */}
          <div className="relative group overflow-hidden bg-surface-card border border-border-subtle h-56 flex flex-col justify-end p-4">
            <Image
              src={getAssetPath("/images/amir/trainingslager_2024_2.jpeg")}
              alt="Trainingslager Weiterstadt"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/60 to-transparent" />
            <div className="relative z-10">
              <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase font-bold block">
                MATCHPRAXIS
              </span>
              <span className="font-headline-sm text-headline-sm text-text-primary uppercase">
                LEISTUNGSLAGER WEITERSTADT
              </span>
            </div>
          </div>

          {/* Action Snapshot 3: Schnuppertag */}
          <div className="relative group overflow-hidden bg-surface-card border border-border-subtle h-56 flex flex-col justify-end p-4">
            <Image
              src={getAssetPath("/images/amir/schnuppertag.jpeg")}
              alt="Schnuppertag und Einsteigerförderung"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/60 to-transparent" />
            <div className="relative z-10">
              <span className="font-label-mono-sm text-label-mono-sm text-border-highlight uppercase font-bold block">
                BALLSCHULE &amp; KIDS
              </span>
              <span className="font-headline-sm text-headline-sm text-text-primary uppercase">
                OFFENER SCHNUPPERTAG
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
