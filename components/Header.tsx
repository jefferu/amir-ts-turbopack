"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "TRAINING", href: "#tracks" },
    { label: "METHODIK", href: "#methodology" },
    { label: "CAMPS & ACTION", href: "#camps" },
    { label: "STANDORTE", href: "#facilities" },
    { label: "CHEF-TRAINER", href: "#trainer" },
    { label: "ERFOLGE", href: "#reviews" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-raised/95 backdrop-blur-md border-b border-border-subtle">
      {/* Top Ticker with Neon Volt Text */}
      <div className="w-full bg-surface-container-high py-1 px-margin-mobile lg:px-margin overflow-hidden border-b border-border-subtle">
        <div className="flex items-center justify-center gap-space-sm font-label-mono-sm text-label-mono-sm text-border-highlight uppercase tracking-wider text-center">
          <span className="inline-block w-1.5 h-1.5 bg-border-highlight"></span>
          <span>
            OFFIZIELLER PARTNER DER RAFA NADAL ACADEMY • ATP ZERTIFIZIERTE TRAINER • DARMSTADT &amp; WEITERSTADT
          </span>
          <span className="inline-block w-1.5 h-1.5 bg-border-highlight"></span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 w-full px-margin-mobile lg:px-margin flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 shrink-0 bg-surface-base border border-border-subtle p-1 flex items-center justify-center">
            <Image
              src="/images/amir/Logo-Amir.png"
              alt="Tennisschule Amir"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-lg text-headline-lg tracking-wider text-text-primary uppercase group-hover:text-border-highlight transition-colors">
                TS AMIR
              </span>
              <span className="w-2.5 h-2.5 bg-border-highlight inline-block transform rotate-45"></span>
            </div>
            <span className="font-label-mono-sm text-label-mono-sm text-text-secondary tracking-widest uppercase">
              POWERED BY YONEX
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label-mono-lg text-label-mono-lg uppercase tracking-wider text-on-surface-variant hover:text-border-highlight transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & CTA */}
        <div className="flex items-center gap-space-md">
          <a
            href="#inquiry"
            className="hidden sm:inline-flex bg-border-highlight hover:bg-volt-bright text-surface-base font-label-mono-lg text-label-mono-lg px-space-lg py-space-sm uppercase tracking-wider transition-all duration-150 items-center justify-center font-bold hover:shadow-[0_0_20px_rgba(204,255,0,0.35)]"
          >
            SCHNUPPERSTUNDE
          </a>

          <div
            title="ATP / GPTCA Zertifiziert"
            className="w-9 h-9 border border-border-subtle bg-surface-base flex items-center justify-center shrink-0 overflow-hidden relative"
          >
            <Image
              src="/images/amir/official_atp_certified.png"
              alt="ATP Certified"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text-primary hover:text-border-highlight focus:outline-none"
            aria-label="Menü öffnen"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-raised border-b border-border-subtle px-margin-mobile py-space-lg flex flex-col gap-space-md animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-label-mono-lg text-label-mono-lg uppercase tracking-wider text-text-primary hover:text-border-highlight py-2 border-b border-border-subtle/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-border-highlight hover:bg-volt-bright text-surface-base font-label-mono-lg text-label-mono-lg py-3 uppercase tracking-wider font-bold text-center mt-2 shadow-[0_0_16px_rgba(204,255,0,0.25)]"
          >
            SCHNUPPERSTUNDE ANFRAGEN
          </a>
        </div>
      )}
    </header>
  );
}
