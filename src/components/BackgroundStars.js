import React, { useMemo, useState, useEffect } from "react";
import starGif from "../Assets/Star.gif";

function Star({ left, top, size, startDelay }) {
  const [visible, setVisible] = useState(false);
  const [gifKey, setGifKey] = useState(Math.random());

  // initial staggered appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setGifKey(Math.random());
    }, startDelay * 1000);

    return () => clearTimeout(timer);
  }, [startDelay]);

  // random independent restart loop (prevents sync forever)
  useEffect(() => {
    if (!visible) return;

    const restart = () => {
      setGifKey(Math.random());

      const nextDelay = Math.random() * 4000 + 3000; // 3–7s
      timerRef = setTimeout(restart, nextDelay);
    };

    let timerRef = setTimeout(
      restart,
      Math.random() * 4000 + 3000
    );

    return () => clearTimeout(timerRef);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="background-star"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img src={starGif} alt="" key={gifKey} />
    </div>
  );
}

function BackgroundStars({ count = 30 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 30 + 20,
      startDelay: Math.random() * 6,
    }));
  }, [count]);

  return (
    <div className="background-stars">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
}

export default BackgroundStars;
