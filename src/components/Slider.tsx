import { useEffect, useRef, useState } from "react";
import { slides } from "../data";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const count = slides.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Frames from the studio and the company we keep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(index - 1);
        if (event.key === "ArrowRight") go(index + 1);
      }}
      tabIndex={0}
    >
      <div
        className="slider__viewport"
        onTouchStart={(event) => {
          startX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (startX.current == null) return;
          const delta = (event.changedTouches[0]?.clientX ?? startX.current) - startX.current;
          if (delta > 42) go(index - 1);
          if (delta < -42) go(index + 1);
          startX.current = null;
        }}
      >
        {slides.map((slide, slideIndex) => (
          <figure
            className={`slider__slide${slideIndex === index ? " is-active" : ""}`}
            key={slide.src}
            aria-hidden={slideIndex !== index}
          >
            <img src={slide.src} alt={slide.alt} />
            <figcaption>
              <span>{slide.kicker}</span>
              <strong>{slide.caption}</strong>
            </figcaption>
          </figure>
        ))}
        <div className="slider__arrows">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous frame">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next frame">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div className="slider__bar">
        <p aria-live="polite">
          <span>{String(index + 1).padStart(2, "0")}</span> / {String(count).padStart(2, "0")}
          <em>{slides[index]?.kicker}</em>
        </p>
        <div className="slider__dots" role="tablist" aria-label="Choose a frame">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Show ${slide.kicker}`}
              className={slideIndex === index ? "is-active" : ""}
              onClick={() => go(slideIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
