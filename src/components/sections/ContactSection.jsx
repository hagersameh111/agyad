import React from "react";
import { IconPin, IconPhone, IconMail, IconClock, IconSend } from "../icons";

export default function ContactSection() {
  return (
    <section className="bg-ink py-20 font-sans" dir="rtl" lang="ar">
      <div className="max-w-full mx-auto px-8 p-10 md:px-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-600">اتصل</span> <span className="text-white">بنا</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            نسعد بتواصلكم معنا، فريقنا جاهز لخدمتكم والإجابة على استفساراتكم
          </p>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Right Column: Contact Information */}
          <div className="flex flex-col gap-10">
            
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="p-0 text-red-600 shrink-0 mt-1">
                <IconPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">العنوان</h4>
                <p className="text-gray-400 text-sm">المملكة العربية السعودية - تبوك</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="p-0 text-red-600 shrink-0 mt-1">
                <IconPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">الهاتف</h4>
                <p className="text-gray-400 text-sm" dir="ltr">0580294230</p>
                <p className="text-gray-400 text-sm" dir="ltr">0595014299</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="p-0 text-red-600 shrink-0 mt-1">
                <IconMail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">البريد الإلكتروني</h4>
                <p className="text-gray-400 text-sm">info@babajyad.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-5">
              <div className="p-0 text-red-600 shrink-0 mt-1">
                <IconClock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">ساعات العمل</h4>
                <p className="text-gray-400 text-sm">السبت - الخميس: 9 صباحاً - 10 مساءً</p>
              </div>
            </div>

            {/* Actual Google Maps Embed */}
            <div className="mt-4 lg:pl-10">
              <iframe
                title="موقعنا على الخريطة"
                src="https://maps.google.com/maps?q=تبوك،%20المملكة%20العربية%20السعودية&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl opacity-90 transition-opacity hover:opacity-100 border border-white/5 shadow-lg"
              ></iframe>
            </div>
          </div>

          {/* Left Column: Contact Form */}
          <div className="bg-[#1e2836] p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
            <h3 className="text-2xl text-white font-bold mb-8 text-right">أرسل لنا رسالة</h3>
            
            <form className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-gray-300 text-sm mb-2 text-right">الاسم الكامل</label>
                <input 
                  type="text" 
                  placeholder="ادخل اسمك"
                  className="w-full bg-[#364050] border border-transparent rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm mb-2 text-right">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    placeholder="رقم هاتفك"
                    className="w-full bg-[#364050] border border-transparent rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors text-right"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-2 text-right">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    placeholder="بريدك الإلكتروني"
                    className="w-full bg-[#364050] border border-transparent rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 text-sm mb-2 text-right">الرسالة</label>
                <textarea 
                  rows="5"
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full bg-[#364050] border border-transparent rounded-lg px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 resize-none transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <IconSend className="w-5 h-5" />
                إرسال الرسالة
              </button>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}