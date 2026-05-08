import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-12-20T16:00:00");

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = WEDDING_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Дни", value: timeLeft.days },
    { label: "Часы", value: timeLeft.hours },
    { label: "Минуты", value: timeLeft.minutes },
    { label: "Секунды", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {units.map((unit) => (
        <div key={unit.label} className="text-center animate-countdown-pulse" style={{ animationDelay: `${units.indexOf(unit) * 0.2}s` }}>
          <div className="font-serif text-4xl md:text-5xl font-bold text-autumn-rust">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
