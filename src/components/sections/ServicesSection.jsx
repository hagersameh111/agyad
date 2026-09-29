import React from "react";
import { SERVICES } from "../../data/services.js";

export default function ServicesSection() {
  return (
    <div dir="rtl" lang="ar">
    <section id="services" className="bg-ink py-24 md:py-32 relative">
      <div className="absolute inset-0 lattice-soft opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-right mb-16">
          <p className="text-gild text-sm mb-3">ما نقدمه</p>
          <h2 className="font-serif text-4xl md:text-5xl text-parchment">خدماتنا</h2>
          <div className="hairline w-24 my-7 mr-0 ml-auto" />
          <p className="text-stone max-w-xl mr-0 ml-auto leading-7">
            مجموعة متكاملة من خدمات الدعاية والإعلان، مصمّمة لتلبية احتياجات علامتك بدقة وذوق.
          </p>
        </div>

        <div className="border-t border-ink-line">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-12 items-center gap-6 py-8 border-b border-ink-line hover:bg-white/[0.02] transition-colors px-2 md:px-4"
            >
              <div className="md:col-span-1 text-stone/50 font-serif text-lg order-2 md:order-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-1 order-1 md:order-2">
                <s.icon className="w-9 h-9 text-gild-bright" />
              </div>
              <div className="md:col-span-4 order-3">
                <h3 className="font-serif text-2xl text-parchment">{s.title}</h3>
              </div>
              <div className="md:col-span-6 order-4">
                <p className="text-stone text-sm leading-7">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}