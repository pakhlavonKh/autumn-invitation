import {
  Heart,
  MapPin,
  Clock,
  Gift,
  Shirt,
  Calendar,
  CheckCircle,
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
    <h2 className="font-serif text-3xl md:text-4xl text-autumn-brown text-center">
      {children}
    </h2>
  );
}

export function WeddingInvitation() {
  return (
    <div className="bg-[#f6efe7] text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen h-screen flex items-center overflow-hidden">

        {/* gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6efe7] via-[#efe4d8] to-[#e8d8c7]" />

        {/* blurred bg image */}
        <img
          src={coupleHero}
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm scale-105"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="text-center md:text-left">
            <p className="uppercase tracking-[0.3em] text-xs text-autumn-brown/70 mb-4">
              We are getting married
            </p>

            <h1 className="font-script text-5xl md:text-7xl text-autumn-rust leading-tight">
              Carlos
              <span className="mx-3 text-autumn-warm">&</span>
              Camila
            </h1>

            <p className="mt-6 text-muted-foreground max-w-md">
              With love and the blessing of our families, we invite you to
              celebrate our marriage.
            </p>

            <div className="mt-8 flex items-center gap-6 justify-center md:justify-start">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  December
                </p>
                <p className="text-4xl font-serif text-autumn-rust">20</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  2025
                </p>
              </div>

              <div className="h-10 w-px bg-autumn-brown/20" />

              <div className="text-sm text-muted-foreground">
                Saturday <br /> 4:00 PM
              </div>
            </div>

            <div className="mt-10">
              <a className="inline-block px-8 py-3 bg-autumn-warm text-white text-sm tracking-wide rounded-full hover:opacity-90 transition">
                View Details
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-[280px] md:w-[360px] aspect-[3/4]">

              {/* soft background blob */}
              <div className="absolute inset-0 bg-[#e9d8c7] rounded-[40%] blur-2xl opacity-40 scale-110" />

              <img
                src={coupleHero}
                className="relative w-full h-full object-cover rounded-[24px] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-script text-2xl text-muted-foreground italic">
            "And now these three remain: faith, hope and love.
            But the greatest of these is love."
          </p>

          <p className="text-xs uppercase tracking-widest mt-4 text-muted-foreground">
            1 Corinthians 13:13
          </p>

          <Divider />

          <p className="text-muted-foreground text-sm leading-relaxed">
            With the blessing of God and our families, we joyfully invite you
            to share this special moment with us.
          </p>
        </div>
      </section>

      {/* ================= NAMES ================= */}
      <section className="py-24 px-6 bg-[#efe4d8]">
        <div className="max-w-3xl mx-auto text-center">

          <img
            src={coupleWalking}
            className="w-[280px] md:w-[340px] h-[380px] object-cover rounded-xl mx-auto shadow-lg mb-12"
          />

          <h2 className="font-script text-6xl text-autumn-rust">
            Carlos
            <span className="mx-3 text-autumn-warm">&</span>
            Camila
          </h2>

          <p className="mt-6 text-muted-foreground">
            Together with their families request the honor of your presence
          </p>

          <Divider />

          <CountdownTimer />
        </div>
      </section>

      {/* ================= DETAILS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">

          <SectionTitle>Ceremony Details</SectionTitle>
          <Divider />

          <div className="space-y-4 text-muted-foreground">

            <div className="flex justify-center gap-2">
              <Calendar className="w-4 h-4 text-autumn-warm" />
              Saturday, December 20th, 2025
            </div>

            <div className="flex justify-center gap-2">
              <Clock className="w-4 h-4 text-autumn-warm" />
              4:00 PM
            </div>

            <div className="flex justify-center gap-2">
              <MapPin className="w-4 h-4 text-autumn-warm" />
              Autumn Valley Estate, Napa Valley
            </div>
          </div>

          <a className="inline-block mt-8 px-8 py-3 bg-autumn-warm text-white rounded-full text-sm">
            View Location
          </a>
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section className="py-24 px-6 bg-[#efe4d8]">
        <div className="max-w-xl mx-auto">

          <SectionTitle>Schedule</SectionTitle>
          <Divider />

          <div className="space-y-6 text-sm">
            {[
              ["4:00 PM", "Ceremony"],
              ["5:00 PM", "Cocktail Hour"],
              ["6:30 PM", "Reception"],
              ["10:00 PM", "After Party"],
            ].map(([time, event]) => (
              <div key={time} className="flex justify-between border-b border-autumn-brown/10 pb-2">
                <span className="font-serif text-autumn-rust">{time}</span>
                <span className="text-muted-foreground">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DRESS / GIFTS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">

          <Shirt className="mx-auto mb-4 text-autumn-warm" />
          <SectionTitle>Dress Code</SectionTitle>
          <p className="mt-3 text-muted-foreground">
            Semi-formal in warm autumn tones
          </p>

          <Divider />

          <Gift className="mx-auto mb-4 text-autumn-warm" />
          <SectionTitle>Gift Registry</SectionTitle>
          <p className="mt-3 text-muted-foreground">
            Your presence is the greatest gift
          </p>
        </div>
      </section>

      {/* ================= RSVP ================= */}
      <section className="py-24 px-6 bg-[#efe4d8] text-center">

        <CheckCircle className="mx-auto mb-4 text-autumn-warm" />

        <SectionTitle>Confirm Attendance</SectionTitle>

        <p className="mt-4 text-muted-foreground">
          Please confirm before November 20, 2025
        </p>

        <a className="inline-block mt-8 px-10 py-3 bg-autumn-warm text-white rounded-full">
          RSVP Now
        </a>
      </section>

      {/* ================= FINAL ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">

        <img
          src={coupleClose}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6">
          <h2 className="font-script text-5xl text-white">Thank You</h2>
          <p className="text-white/80 mt-4">
            We can't wait to celebrate with you
          </p>
        </div>
      </section>
    </div>
  );
}