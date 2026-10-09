import type { CSSProperties } from "react";

const logoSheet =
  "https://static.wixstatic.com/media/ac9a7e_e0e31cc4b26c49eeb5800641e8111dd5~mv2.png/v1/fill/w_845,h_701,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ac9a7e_e0e31cc4b26c49eeb5800641e8111dd5~mv2.png";

// Coordinates isolate one client at a time from the supplied 845 x 701 logo sheet.
const clients = [
  { name: "Aris Bioenergy", x: 57, y: 36 },
  { name: "Black Tree", x: 209, y: 36 },
  { name: "Celestial Wealth Advisors", x: 354, y: 36 },
  { name: "Cosy Feed", x: 499, y: 36 },
  { name: "FinDeSolution", x: 644, y: 36 },
  { name: "Garnier", x: 57, y: 124 },
  { name: "Gutlu", x: 209, y: 124 },
  { name: "Krassna Clinics", x: 354, y: 124 },
  { name: "Konkan Trails", x: 499, y: 124 },
  { name: "Wine It Up", x: 644, y: 124 },
  { name: "Louis Philippe", x: 57, y: 208 },
  { name: "Madhavbaug", x: 209, y: 208 },
  { name: "Pixxort", x: 354, y: 208 },
  { name: "Ravima", x: 499, y: 208 },
  { name: "Skovian", x: 644, y: 208 },
  { name: "Sopranos", x: 57, y: 290 },
  { name: "Spoorthy Engineering College", x: 209, y: 290 },
  { name: "Sparklor Media", x: 354, y: 290 },
  { name: "The Stray Crew", x: 499, y: 290 },
  { name: "Sweet Smile Dental Clinic", x: 644, y: 290 },
  { name: "Wurth", x: 57, y: 374 },
  { name: "Xplore", x: 209, y: 374 },
  { name: "Zyanna", x: 354, y: 374 },
  { name: "91 Digi", x: 499, y: 374 },
  { name: "Nishu's Cask", x: 644, y: 374 },
  { name: "Attitudist", x: 57, y: 460 },
  { name: "Lumina Datamatics", x: 209, y: 460 },
  { name: "Arbors by the Lake", x: 354, y: 460 },
  { name: "Bollineni Astra", x: 499, y: 460 },
  { name: "BRB Infra", x: 644, y: 460 },
  { name: "Mahaveer", x: 209, y: 565 },
  { name: "Pride", x: 354, y: 565 },
  { name: "JLL", x: 499, y: 565 },
];

function LogoSequence({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="client-loop__sequence" aria-hidden={duplicate || undefined}>
      {clients.map(({ name, x, y }) => (
        <li className="client-loop__item" key={name}>
          <span
            className="client-loop__logo"
            role={duplicate ? undefined : "img"}
            aria-label={duplicate ? undefined : name}
            style={{
              backgroundImage: `url("${logoSheet}")`,
              backgroundPosition: `-${x}px -${y}px`,
            } as CSSProperties}
          />
        </li>
      ))}
    </ul>
  );
}

export default function ClientLogoLoop() {
  return (
    <section className="client-loop" aria-label="Our clients">
      <div className="page-width client-loop__intro">
        <span className="eyebrow">In good company</span>
        <span className="client-loop__line" aria-hidden="true" />
      </div>
      <div className="client-loop__window" tabIndex={0} aria-label="Client logos, moving continuously">
        <div className="client-loop__track">
          <LogoSequence />
          <LogoSequence duplicate />
        </div>
      </div>
    </section>
  );
}