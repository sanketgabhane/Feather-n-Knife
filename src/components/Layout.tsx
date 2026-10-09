import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { services } from "../data";
import { ArrowIcon, BrandMark } from "./ui";

const explore = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "Our story" },
  { to: "/tribe", label: "The tribe" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen && window.innerWidth <= 820 ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header
        className={`site-header${isScrolled || !onHome || menuOpen ? " is-scrolled" : ""}${menuOpen ? " menu-active" : ""}`}
      >
        <BrandMark />
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <NavLink to="/about" onClick={closeMenu}>
            Our story
          </NavLink>
          <div className="nav-parent">
            <NavLink to="/services" onClick={closeMenu}>
              What we do
            </NavLink>
            <div className="nav-sub">
              {services.map((service) => (
                <NavLink
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={closeMenu}
                >
                  {service.title}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/tribe" onClick={closeMenu}>
            The tribe
          </NavLink>
          <NavLink to="/blog" onClick={closeMenu}>
            Blog
          </NavLink>
          <NavLink
            className="site-nav__contact"
            to="/contact"
            onClick={closeMenu}
          >
            Let's talk <ArrowIcon diagonal />
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="page-width footer__top">
          <div className="footer__brand">
            <BrandMark />
            <p>
              A little feather.
              <br />
              A little knife.
              <br />
              <em>A whole lot of heart.</em>
            </p>
          </div>
          <nav className="footer__col" aria-label="Explore">
            <p>Explore</p>
            {explore.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <nav className="footer__col" aria-label="Services">
            <p>Services</p>
            <NavLink to="/services">All services</NavLink>
            {services.map((service) => (
              <NavLink key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </NavLink>
            ))}
          </nav>
          <div className="footer__col">
            <p>Studio</p>
            <a href="mailto:info@thefeathernknife.com">
              info@thefeathernknife.com
            </a>
            <a href="tel:+918169870983">+91 81698 70983</a>
            <a href="tel:+919373431410">+91 93734 31410</a>
            <span>
              4th Floor, TRIOS, Balaji Business Center, Pune–Mumbai Highway,
              Pune
            </span>
            {/* <a href="https://www.instagram.com/feathernknife/" target="_blank" rel="noreferrer">
              Instagram <ArrowIcon diagonal />
            </a> */}
          </div>
        </div>

        {/* <div className="page-width footer__base">
          <span>© {new Date().getFullYear()} The Feather n' Knife</span>
          <span>Pune, India · Good ideas, everywhere</span>
          <a
            href="https://www.instagram.com/feathernknife/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            Instagram <ArrowIcon diagonal />
          </a>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to the top ↑
          </a>
          </div> */}

        <div
          className="page-width footer__base"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "20px",
            paddingBottom: "20px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            © {new Date().getFullYear()} The Feather n' Knife
          </span>

          {/* <span
            style={{
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            Pune, India · Good ideas, everywhere
          </span> */}

          <div
            aria-label="Social media links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexShrink: 0,
            }}
          >
            {/* Instagram */}
            <a
              href="https://www.instagram.com/feathernknife/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "inherit",
                textDecoration: "none",
                transition: "opacity 0.25s ease",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1A4.1 4.1 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6V21h-3.8v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.4V9Z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>
        {/* </div> */}
      </footer>
    </div>
  );
}
