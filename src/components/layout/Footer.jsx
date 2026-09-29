import React from "react";
import { NAV } from "../../data/nav";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-line py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <span className="font-serif text-2xl text-parchment">
          باب <span className="text-gild-bright">أجياد</span>
        </span>
        <nav className="flex flex-wrap gap-7 justify-center">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" })}
              className="text-stone hover:text-gild-bright text-sm transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <p className="text-stone/60 text-xs">© ٢٠٢٦ باب أجياد للدعاية والإعلان</p>
      </div>
    </footer>
  );
}