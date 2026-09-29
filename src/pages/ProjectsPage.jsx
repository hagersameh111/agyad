import React, { useState, useEffect } from "react";
import PageNav from "../components/layout/Navbar.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import PageFooter from "../components/layout/Footer.jsx";
import { IconChevron } from "../components/icons.jsx";
import { fetchAllProjectsPageData } from "../services/api.js";

const toArabicDigits = (n) =>
  String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

export default function ProjectsPage() {
  const [filter, setFilter] = useState("الكل");
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const pageData = await fetchAllProjectsPageData();
      setData(pageData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-[#1E3A5F]">
        جاري التحميل...
      </div>
    );
  }

  const items =
    filter === "الكل"
      ? data.projects
      : data.projects.filter((p) => p.category === filter);

  return (
    <div
      dir="rtl"
      lang="ar"
      className="bg-slate-50 min-h-screen font-sans"
    >
      <PageNav />

      <main className="max-w-7xl mx-auto px-6 md:px-10 pt-32">
        {/* Header */}
        <section className="pb-14 text-right">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-[#1E3A5F] text-sm font-medium mb-5">
            أعمالنا
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-[#1E3A5F] mb-6 leading-tight">
            {data.pageHeader.title}
          </h1>

          <p className="text-slate-600 leading-8 max-w-3xl">
            {data.pageHeader.subtitle}
          </p>
        </section>

        {/* Filters */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {data.categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setFilter(c);
                  setPage(1);
                }}
                className={
                  "px-5 py-2.5 rounded-full text-sm border transition-all duration-300 " +
                  (filter === c
                    ? "bg-[#1E3A5F] border-[#1E3A5F] text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-600 hover:border-[#1E3A5F] hover:text-[#1E3A5F]")
                }
              >
                {c}
              </button>
            ))}
          </div>

          <div className="text-sm text-slate-500">
            <span className="font-semibold text-[#1E3A5F]">
              {toArabicDigits(items.length)} مشروع
            </span>{" "}
            تم تنفيذها بنجاح
          </div>
        </section>

        {/* Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <ProjectCard
              key={p.id || p.title}
              project={p}
              index={i}
            />
          ))}
        </section>

        {/* Pagination */}
        <nav className="flex items-center justify-center gap-3 py-20">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="
              w-11 h-11
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-500
              hover:border-[#1E3A5F]
              hover:text-[#1E3A5F]
              transition-all
              flex
              items-center
              justify-center
            "
          >
            <IconChevron className="w-4 h-4 rotate-180" />
          </button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={
                "w-11 h-11 rounded-full text-sm font-medium transition-all flex items-center justify-center " +
                (page === n
                  ? "bg-[#1E3A5F] text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#1E3A5F] hover:text-[#1E3A5F]")
              }
            >
              {toArabicDigits(n)}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(3, p + 1))}
            className="
              w-11 h-11
              rounded-full
              border
              border-slate-200
              bg-white
              text-slate-500
              hover:border-[#1E3A5F]
              hover:text-[#1E3A5F]
              transition-all
              flex
              items-center
              justify-center
            "
          >
            <IconChevron className="w-4 h-4" />
          </button>
        </nav>
      </main>

      <PageFooter />
    </div>
  );
}