import React from "react";
import { IconStar, IconPalette, IconStorefront } from "../icons.jsx";

const POINTS = [
  { icon: IconStar, title: "قيمنا", body: "جودة لا تتنازل، وحرفية تُقرأ في كل تفصيلة من العمل." },
  { icon: IconPalette, title: "رسالتنا", body: "نمنح كل علامة صوتاً بصرياً يليق بحضورها في السوق." },
  { icon: IconStorefront, title: "رؤيتنا", body: "أن نكون المرجع الأول للدعاية الراقية في المنطقة." },
];

export default function AboutSection() {
  return (
    <div dir="rtl" lang="ar">
    <section id="about" className="bg-parchment text-ink py-24 md:py-32 ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-5">
          <p className="text-oxblood text-sm mb-3">تعرف علينا</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">من نحن</h2>
          <div className="hairline w-24 my-7" />
          <p className="text-ink/70 leading-8 mb-5">
            وكالة متخصصة في مجال الدعاية والإعلان، نقدم خدمات إبداعية شاملة تلبي احتياجات عملائنا،
            ونسعى دائماً لتقديم أفضل الحلول الإعلانية بأحدث التقنيات وأعلى معايير الجودة.
          </p>
          <p className="text-ink/70 leading-8">
            بخبرة واسعة في السوق المحلي، نفخر بتقديم خدمات متميزة تشمل التصميم الجرافيكي، الطباعة
            بجميع أنواعها، اللوحات الإعلانية، الستائر، والهوية البصرية الكاملة.
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="border-t border-ink/15">
            {POINTS.map((pt, i) => (
              <div key={i} className="flex items-start gap-6 py-7 border-b border-ink/15">
                <span className="font-serif text-2xl text-oxblood/70 w-8 shrink-0 text-center">
                  <pt.icon className="w-7 h-7 text-oxblood mx-auto" />
                </span>
                <div>
                  <h3 className="font-serif text-xl mb-1.5">{pt.title}</h3>
                  <p className="text-ink/60 text-sm leading-7">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}