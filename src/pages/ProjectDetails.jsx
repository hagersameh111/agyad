import React, { useState } from "react";
import { PROJECT_DETAIL as D } from "../data/projectdetail.js";
import { IconChevron, IconShare, IconSend, IconPlay, IconCheck } from "../components/icons.jsx";

function GalleryTile({ icon: Ic, label, area }) {
  return (
    <div
      style={{ gridArea: area }}
      className="relative overflow-hidden border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-center p-5 rounded-xl hover:border-blue-900 hover:shadow-md transition-all duration-300 group"
    >
      <Ic className="w-8 h-8 text-blue-950 relative group-hover:scale-110 transition-transform" />
      <p className="relative text-blue-950 font-medium text-xs mt-3">{label}</p>
    </div>
  );
}

function InfoTable({ rows }) {
  return (
    <div className="divide-y divide-slate-100">
      {rows.map((r, i) => (
        <div key={i} className="flex items-start justify-between gap-6 py-3.5 text-sm">
          <span className="text-slate-500 shrink-0">{r.label}</span>
          <span className="text-blue-950 font-medium text-right">{r.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectDetail() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div dir="rtl" lang="ar" className="bg-white min-h-screen font-sans">
      {/* Top bar: breadcrumb + actions */}
      <div className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">
            <span className="hover:text-blue-950 transition-colors cursor-pointer">{D.breadcrumbParent}</span>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-blue-950 tracking-wide">{D.breadcrumbCurrent}</span>
          </p>
          <div className="flex gap-3">
            <button className="inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-600 font-medium text-sm px-5 py-2.5 rounded-lg hover:border-blue-950 hover:text-blue-950 hover:bg-slate-50 transition-colors">
              <IconShare className="w-4 h-4" /> {D.shareLabel}
            </button>
            <button className="inline-flex items-center gap-2 bg-blue-950 text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-blue-900 shadow-sm transition-colors">
              {D.inquireLabel}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-blue-950 font-semibold tracking-tight mb-10">{D.title}</h1>

        {/* Gallery */}
        <section className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8 mb-8">
          <p className="text-blue-950 font-semibold tracking-wide uppercase text-sm mb-1.5">{D.galleryHeading}</p>
          <p className="text-slate-500 text-sm mb-6 max-w-2xl leading-7">{D.gallerySubtitle}</p>

          <div
            className="grid gap-3 sm:gap-4"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "160px 160px 130px",
              gridTemplateAreas: `"b b a a" "b b c c" "d e . ."`,
            }}
          >
            {D.gallery.map((g, i) => (
              <GalleryTile key={i} {...g} />
            ))}
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-slate-400 font-semibold uppercase tracking-wider text-xs mb-3">{D.mainFileLabel}</p>
            <div className="flex items-center gap-5 border border-slate-200 bg-slate-50 rounded-xl p-4 hover:shadow-sm transition-shadow">
              <div className="w-14 h-14 shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                <IconPlay className="w-6 h-6 text-blue-950 ml-1" />
              </div>
              <div>
                <p className="text-blue-950 text-sm font-bold">{D.mainFile.title}</p>
                <p className="text-slate-500 text-xs mt-1.5 leading-6">{D.mainFile.body}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Client info + overview */}
            <div className="grid sm:grid-cols-2 gap-6">
              <section className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
                <p className="text-blue-950 font-semibold tracking-wide uppercase text-sm mb-3">{D.clientHeading}</p>
                <p className="text-slate-500 text-xs leading-6 mb-5">{D.clientIntro}</p>
                <InfoTable rows={D.client} />
              </section>

              <section className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
                <p className="text-blue-950 font-semibold tracking-wide uppercase text-sm mb-3">{D.overviewHeading}</p>
                <p className="text-slate-500 text-xs leading-6 mb-5">{D.overviewIntro}</p>
                <InfoTable rows={D.overview} />
              </section>
            </div>

            {/* Story */}
            <section className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
              <p className="text-blue-950 font-semibold tracking-wide uppercase text-sm mb-4">{D.storyHeading}</p>
              <p className="text-slate-600 text-sm leading-8 whitespace-pre-line">{D.story}</p>
            </section>

            {/* Achievements */}
            <section className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
              <p className="text-blue-950 font-semibold tracking-wide uppercase text-sm mb-5">{D.achievementsHeading}</p>
              <ul className="space-y-4">
                {D.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="bg-white p-1 rounded-full border border-slate-200 shrink-0 shadow-sm mt-0.5">
                      <IconCheck className="w-3.5 h-3.5 text-blue-950" />
                    </div>
                    <span className="leading-7 font-medium">{a}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Side column */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-blue-950 text-white shadow-lg rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl -translate-y-10 translate-x-10 pointer-events-none"></div>
              
              <p className="text-xs text-blue-200 font-semibold tracking-wider uppercase mb-2">التواصل</p>
              <h3 className="font-serif text-2xl mb-4">{D.contactHeading}</h3>
              <p className="text-sm text-blue-100 leading-7 mb-6">{D.contactBody}</p>
              
              <form onSubmit={submit} className="space-y-4 relative z-10">
                <div>
                  <label className="block text-xs text-blue-200 font-medium mb-1.5">البريد الإلكتروني</label>
                  <input
                    type="email"
                    defaultValue={D.contact.email}
                    className="w-full bg-blue-900/50 border border-blue-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-blue-400 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-blue-200 font-medium mb-1.5">الهاتف</label>
                  <input
                    type="text"
                    defaultValue={D.contact.phone}
                    className="w-full bg-blue-900/50 border border-blue-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-blue-400 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-950 py-3.5 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  {sent ? "تم الإرسال بنجاح" : (
                    <>
                      {D.sendLabel} <IconSend className="w-4 h-4 rtl:rotate-180" />
                    </>
                  )}
                </button>
                <p className="text-xs text-blue-300 text-center mt-4">{D.contact.note}</p>
              </form>
            </section>

            <section className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8">
              <p className="text-blue-950 font-semibold tracking-wide uppercase text-sm mb-2">{D.deliverablesHeading}</p>
              <p className="text-slate-500 text-xs leading-6 mb-5">{D.deliverablesSubtitle}</p>
              <ul className="space-y-3">
                {D.deliverables.map((d, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <IconChevron className="w-4 h-4 text-blue-800 rotate-180 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}