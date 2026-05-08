import {
  Heart,
  MapPin,
  Clock,
  Gift,
  Shirt,
  Calendar,
  CheckCircle,
  Flower2,
  Leaf,
} from "lucide-react";

import coupleHero from "@/assets/couple-hero.jpg";
import coupleWalking from "@/assets/couple-walking.jpg";
import coupleClose from "@/assets/couple-close.jpg";

import { CountdownTimer } from "./CountdownTimer";

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-10">
      <div className="h-px w-16 bg-autumn-brown/20" />
      <Heart className="w-4 h-4 text-autumn-warm fill-autumn-warm" />
      <div className="h-px w-16 bg-autumn-brown/20" />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-4xl md:text-5xl text-autumn-brown">
      {children}
    </h2>
  );
}

export function WeddingInvitation() {
  return (
    <div className="bg-[#f6efe7] text-foreground">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Scale */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${coupleHero})` }}
        />

        {/* Dark Warm Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Golden Gradient Overlay - Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d2817]/80 via-transparent to-transparent" />

        {/* Warm Golden Gradient Overlay - Top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b6f47]/40 via-transparent to-transparent" />

        {/* Radial Warm Glow - Behind Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-orange rounded-full blur-3xl opacity-30 pointer-events-none" 
          style={{
            background: 'radial-gradient(circle, rgba(232, 168, 124, 0.4) 0%, rgba(212, 119, 94, 0.2) 50%, transparent 70%)'
          }}
        />

        {/* Vignette Effect */}
        <div className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Floating Autumn Leaves */}
        <Leaf className="absolute top-16 left-12 w-8 h-8 text-amber-600/60 animate-float-slow z-20" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
        <Leaf className="absolute top-32 right-20 w-6 h-6 text-orange-700/50 animate-float-medium z-20" style={{ transform: 'rotate(45deg)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
        <Leaf className="absolute bottom-40 left-1/4 w-7 h-7 text-amber-700/55 animate-float-fast z-20" style={{ transform: 'rotate(-30deg)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
        <Leaf className="absolute bottom-32 right-1/4 w-5 h-5 text-orange-600/50 animate-float-slow z-20" style={{ transform: 'rotate(60deg)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />
        <Leaf className="absolute top-1/2 right-16 w-6 h-6 text-amber-800/45 animate-float-medium z-20" style={{ transform: 'rotate(-15deg)', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }} />

        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noise)" /%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          {/* Decorative Line Above */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-200/40"></div>
            <span className="text-amber-100/60 text-xs tracking-widest uppercase font-light">Вместе как один</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-200/40"></div>
          </div>

          {/* Main Typography - Editorial Style */}
          <div className="mb-12">
            <h1 className="font-script text-7xl md:text-8xl lg:text-9xl leading-none mb-3 text-white drop-shadow-lg" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Carlos
            </h1>
            
            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 my-6 px-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-200/60 to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-200/70"></div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-200/60 to-transparent"></div>
            </div>

            <h1 className="font-script text-6xl md:text-7xl lg:text-8xl leading-none text-amber-100 drop-shadow-lg" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Camila
            </h1>
          </div>

          {/* Wedding Metadata */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-amber-50/80 text-sm tracking-widest uppercase font-light">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-200" />
              <span>20 декабря 2026</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-amber-200/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-200" />
              <span>Поместье Осенняя Долина</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse z-20">
          <div className="text-center">
            <p className="text-xs text-amber-100/50 tracking-widest uppercase mb-2">Прокрутить</p>
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-6 bg-gradient-to-b from-amber-200/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
        @keyframes float-slow {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes float-medium {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.08); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes float-fast {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.15); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4.5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        @keyframes float-leaf-orange {
          0% { transform: translateY(0) rotate(-8deg) scale(1); }
          50% { transform: translateY(-24px) rotate(8deg) scale(1.08); }
          100% { transform: translateY(0) rotate(-8deg) scale(1); }
        }
        @keyframes float-leaf-yellow {
          0% { transform: translateY(0) rotate(6deg) scale(1); }
          50% { transform: translateY(-18px) rotate(-6deg) scale(1.04); }
          100% { transform: translateY(0) rotate(6deg) scale(1); }
        }
        @keyframes countdown-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
        .animate-countdown-pulse { animation: countdown-pulse 1.5s ease-in-out infinite; }`}
      </style>
      {/* ================= INTRO ================= */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-autumn-brown mb-8 leading-snug">Наша история продолжается</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Каждая великая история любви имеет момент, когда два сердца бьют в унисон. Мы рады пригласить вас отпраздновать нашу—день, наполненный радостью, смехом и людьми, которых мы больше всего любим.
          </p>
        </div>
      </section>

      {/* ================= NAMES ================= */}
      <section className="py-28 px-6 md:px-12 bg-[#efe4d8]/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src={coupleWalking}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Вместе</p>
            <h2 className="font-script text-5xl md:text-6xl text-autumn-rust mb-2">Carlos</h2>
            <h2 className="font-script text-5xl md:text-6xl text-autumn-warm mb-8">+ Camila</h2>

            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Вместе с нашими семьями мы с радостью просим честь вашего присутствия на праздновании нашего брака.
            </p>

            <div className="my-8 flex gap-2">
              <div className="h-8 w-px bg-autumn-brown/30"></div>
              <div className="text-sm text-muted-foreground">Начинается новая глава</div>
            </div>

            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Детали</SectionTitle>
          <div className="my-8 h-1 w-16 bg-autumn-warm"></div>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Calendar className="w-5 h-5 text-autumn-warm flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Дата</p>
                  <p className="text-lg font-serif text-autumn-rust">20 декабря</p>
                  <p className="text-sm text-muted-foreground">Суббота, 2026</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-5 h-5 text-autumn-warm flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Время</p>
                  <p className="text-lg font-serif text-autumn-rust">4:00 PM</p>
                  <p className="text-sm text-muted-foreground">Начало церемонии</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-autumn-warm flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Место</p>
                  <p className="text-lg font-serif text-autumn-rust">Осенняя Долина</p>
                  <p className="text-sm text-muted-foreground">Долина Напа</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section className="py-32 px-6 md:px-12 bg-[#efe4d8]/30">
        <div className="max-w-2xl mx-auto">
          <SectionTitle>График</SectionTitle>
          <div className="my-8 h-1 w-16 bg-autumn-warm"></div>

          <div className="relative space-y-8 mt-16">
            {[
              ["4:00 PM", "Церемония", "Пусть начнутся клятвы"],
              ["5:00 PM", "Час коктейлей", "Отпраздновать с нами"],
              ["6:30 PM", "Приём", "Еда, музыка и танцы"],
              ["10:00 PM", "Вечеринка", "Ночь продолжается"],
            ].map(([time, event, desc], idx) => (
              <div key={time} className="pl-8 border-l-2 border-autumn-warm/30 pb-4">
                <p className="font-serif text-autumn-rust text-lg">{time}</p>
                <p className="font-semibold text-autumn-brown mt-1">{event}</p>
                <p className="text-sm text-muted-foreground mt-1 font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DRESS / GIFTS ================= */}
      <section className="py-32 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div className="md:border-r-2 md:border-autumn-brown/20 md:pr-12">
            <div className="flex items-center gap-3 mb-4">
              <Shirt className="w-6 h-6 text-autumn-warm" />
              <h3 className="font-serif text-2xl text-autumn-brown">Дресс-код</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-light">
              Полуформальный наряд в теплых осенних тонах. Подумайте о ржавчине, золоте, кремовых и бордовых цветах. Мы будем рады, если вы примете дух сезона!
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-autumn-warm" />
              <h3 className="font-serif text-2xl text-autumn-brown">Подарки</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-light">
              Ваше присутствие - это истинный дар. Однако, если вы хотите внести свой вклад, у нас есть реестр, доступный по запросу.
            </p>
          </div>
        </div>
      </section>

      {/* ================= RSVP ================= */}
      <section className="py-32 px-6 md:px-12 bg-[#efe4d8]/50">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-autumn-warm" />
            <h2 className="font-serif text-4xl text-autumn-brown">Дайте нам знать</h2>
          </div>
          <p className="text-muted-foreground mb-10 font-light">Пожалуйста, подтвердите участие до 20 ноября 2026 года</p>

          <form className="space-y-6">
            <div>
              <label htmlFor="rsvp-name" className="block text-sm font-medium text-autumn-brown mb-2">Ваше имя</label>
              <input id="rsvp-name" name="name" type="text" required className="w-full px-4 py-2 border-b-2 border-autumn-warm/30 bg-transparent focus:outline-none focus:border-autumn-warm transition-colors" placeholder="Иван Петров" />
            </div>
            <div>
              <label htmlFor="rsvp-email" className="block text-sm font-medium text-autumn-brown mb-2">Адрес электронной почты</label>
              <input id="rsvp-email" name="email" type="email" required className="w-full px-4 py-2 border-b-2 border-autumn-warm/30 bg-transparent focus:outline-none focus:border-autumn-warm transition-colors" placeholder="you@example.com" />
            </div>
            <div>
              <p className="text-sm font-medium text-autumn-brown mb-4">Будете ли вы отмечать с нами?</p>
              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="attendance" value="yes" required className="accent-autumn-warm w-4 h-4" />
                  <span className="text-muted-foreground">Да, я буду там!</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="attendance" value="no" required className="accent-autumn-warm w-4 h-4" />
                  <span className="text-muted-foreground">Не смогу придти</span>
                </label>
              </div>
            </div>
            <button type="submit" className="mt-8 px-8 py-3 bg-autumn-warm text-white font-semibold text-sm tracking-widest rounded-sm hover:bg-autumn-rust transition-colors">Отправить подтверждение</button>
          </form>
        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src={coupleClose}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6">
          <h2 className="font-script text-5xl text-white">Спасибо</h2>
          <p className="text-white/80 mt-4">
            Мы с нетерпением ждём отпраздновать с вами
          </p>
        </div>
      </section>
    </div>
  );
}
