import React from "react";

export default function HeroSection() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 lattice pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-oxblood/30 blur-[110px]" />

      <div className="relative max-w-full mx-auto w-full px-6 md:px-10 pt-28 pb-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* تم تعديل الأعمدة هنا لتتمركز في المنتصف */}
          <div className="md:col-span-10 md:col-start-2 text-center">
            <p className="text-gild text-sm tracking-wide mb-4">وكالة إعلانية سعودية — تبوك</p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.15] text-parchment">
              باب أجياد
              <span className="block text-3xl sm:text-4xl md:text-5xl text-gild-bright mt-2">للدعاية والإعلان</span>
            </h1>
            {/* mx-auto لتوسيط الخط */}
            <div className="hairline w-40 my-7 mx-auto" />
            {/* mx-auto لتوسيط النص */}
            <p className="text-stone text-base md:text-lg leading-8 max-w-xl mx-auto">
              حلول إبداعية متكاملة في عالم الدعاية والإعلان، من التصميم إلى التنفيذ، بحرفية تراعي
              التفاصيل وتلتزم بأعلى معايير الجودة.
            </p>
            {/* justify-center لتوسيط الأزرار */}
            <div className="flex flex-wrap gap-4 mt-9 justify-center">
              <a
                href="#services"
                onClick={scrollTo("services")}
                className="bg-gild text-white px-8 py-3.5 text-sm font-medium  hover:bg-gild-bright transition-colors"
              >
                خدماتنا
              </a>
              <a
                href="#contact"
                onClick={scrollTo("contact")}
                className="border border-parchment/25 text-parchment px-8 py-3.5 text-sm hover:border-gild hover:text-gild-bright transition-colors "
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>

        {/* justify-center لتوسيط نص التمرير السفلي */}
        <div className="mt-24 flex items-center gap-6 justify-center text-stone">
          <div className="hairline w-16" />
          <span className="text-xs tracking-widest">مرّر لتكتشف المزيد</span>
          <div className="hairline w-16" /> {/* أضفت خطاً إضافياً ليكون متوازناً من الجانبين */}
        </div>
      </div>
    </section>
  );
}