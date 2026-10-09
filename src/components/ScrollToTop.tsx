import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(false);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        .scroll-to-top {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 99999;
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 50%;
          
          background: "rgba(23, 40, 32, 0.92)"
          color: #ffffff;
          font-size: 28px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(12px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .scroll-to-top:hover {
          background: #145251;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .scroll-to-top {
            right: 16px;
            bottom: 16px;
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <button
        type="button"
        className={`scroll-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
        tabIndex={isVisible ? 0 : -1}
      >
        ↑
      </button>
    </>
  );
}
