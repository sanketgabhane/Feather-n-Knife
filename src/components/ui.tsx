import type { FormEvent } from "react";
import { Link } from "react-router-dom";

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 15.5 15 5m0 0H6m9 0v9" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m0 0-5-5m5 5-5 5" />
    </svg>
  );
}

export function BrandMark() {
  return (
    <Link className="brand-mark" to="/" aria-label="The Feather n' Knife, home">
      <svg className="brand-mark__symbol" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <path d="M9 29C10 18 19 8 30 7c-1 11-8 20-19 22Z" />
        <path d="M8 31 28 10M15 24l-1-7m7 1 5-1M18 29l2-7" />
      </svg>
      <span className="brand-mark__wording">
        <span>The Feather</span>
        <span>n' Knife</span>
      </span>
    </Link>
  );
}

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`A new project idea from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const status = event.currentTarget.querySelector(".form-status");
    if (status) {
      status.textContent = "Opening your email app. If it doesn't open, write to info@thefeathernknife.com.";
    }
    window.location.href = `mailto:info@thefeathernknife.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Your name</span>
        <input autoComplete="name" name="name" placeholder="The name we should know" required />
      </label>
      <label>
        <span>Your email</span>
        <input autoComplete="email" name="email" type="email" placeholder="you@somewhere.com" required />
      </label>
      <label>
        <span>A little about your idea</span>
        <textarea name="message" rows={4} placeholder="The more we know, the better..." required />
      </label>
      <button className="button button--paper" type="submit">
        Send your note <ArrowIcon diagonal />
      </button>
      <p className="form-status" aria-live="polite" />
    </form>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="page-width cta-band__inner">
        <div>
          <p className="eyebrow eyebrow--dark">Your turn</p>
          <h2>
            Got a good thing <em>brewing?</em>
          </h2>
        </div>
        <Link className="button button--paper" to="/contact">
          Start a conversation <ArrowIcon diagonal />
        </Link>
      </div>
    </section>
  );
}
