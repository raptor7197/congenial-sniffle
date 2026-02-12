"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-07-19T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: Math.max(0, days),
          hours: Math.max(0, hours),
          minutes: Math.max(0, minutes),
          seconds: Math.max(0, seconds),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] xl:w-[600px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] flex items-center justify-center font-sarpanch text-white z-30 px-4 sm:px-6 md:px-8">
      {/* Background Banner with angled ends */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vector20.svg"
          alt="Timer Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Timer Content */}
      <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 pb-2 pr-1 sm:pr-2 md:pr-4 xl:pr-8">
        <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
          <span className="text-[24px] leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold">
            {timeLeft.days}
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] tracking-wider mt-1">
            DAYS
          </span>
        </div>
        <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
          <span className="text-[24px] leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold">
            {timeLeft.hours}
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] tracking-wider mt-1">
            HOURS
          </span>
        </div>
        <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
          <span className="text-[24px] leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold">
            {timeLeft.minutes}
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] tracking-wider mt-1">
            MINUTES
          </span>
        </div>
        <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
          <span className="text-[24px] leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold">
            {timeLeft.seconds}
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] tracking-wider mt-1">
            SECONDS
          </span>
        </div>
      </div>
    </div>
  );
}
