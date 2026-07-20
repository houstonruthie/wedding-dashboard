"use client";

import { useEffect, useState } from "react";

const weddingTime = new Date("2028-04-22T00:00:00-04:00").getTime();

function getTimeLeft() {
  const difference = Math.max(0, weddingTime - Date.now());

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const initialUpdate = window.setTimeout(() => setTimeLeft(getTimeLeft()), 0);
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1_000);
    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown" aria-label="Countdown to April 22, 2028">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <span className="countdown-number">{String(value).padStart(2, "0")}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
