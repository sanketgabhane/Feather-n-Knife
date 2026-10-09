import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/ui";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact · The Feather n' Knife";
  }, []);

  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="page-width contact-page">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact</span>
            </nav>
            <p className="eyebrow eyebrow--dark">Let's catch up</p>
            <h1 className="page-title">
              Tell us what
              <br />
              you're <em>making.</em>
            </h1>
            <p className="page-lead">
              A new brand, a tired feed, a founder who needs a clearer story. Write to us —
              we pick up enquiries the same day.
            </p>
            <dl className="contact-facts">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:info@thefeathernknife.com">info@thefeathernknife.com</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+918169870983">+91 81698 70983</a>
                  <a href="tel:+919373431410">+91 93734 31410</a>
                </dd>
              </div>
              <div>
                <dt>Studio</dt>
                <dd>4th Floor, TRIOS, Balaji Business Center, Pune–Mumbai Highway, Pune, Maharashtra</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="next-steps">
        <div className="page-width next-steps__grid">
          <article>
            <span>01</span>
            <h2>You write.</h2>
            <p>A few honest lines are better than a twelve-page brief. We'll ask for the rest.</p>
          </article>
          <article>
            <span>02</span>
            <h2>We reply.</h2>
            <p>Same day, with a real response — not an autoresponder wearing a smile.</p>
          </article>
          <article>
            <span>03</span>
            <h2>We talk.</h2>
            <p>A conversation about the work, the audience and whether we're the right tribe for it.</p>
          </article>
        </div>
      </section>
    </>
  );
}
