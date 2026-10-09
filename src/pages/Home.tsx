import { useEffect } from "react";
import { Link } from "react-router-dom";
import ClientLogoLoop from "../components/ClientLogoLoop";
import Slider from "../components/Slider";
import { ArrowIcon, ContactForm } from "../components/ui";
import { posts, services } from "../data";

export default function Home() {
  useEffect(() => {
    document.title = "The Feather n' Knife | Content & Design Tribe";
  }, []);

  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/images/studio-hero.jpg"
          alt="A designer's hands composing a colourful brand campaign at a sunlit studio table"
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content page-width">
          <p className="eyebrow hero__eyebrow">A content + design tribe</p>
          <h1 id="hero-title" className="hero__title">
            The Feather
            <span>n' Knife.</span>
          </h1>
          <p className="hero__summary">
            We help good brands find their voice, then give people a reason to
            listen.
          </p>
          <div className="hero__actions">
            <Link className="button button--coral" to="/contact">
              Let's make a mark <ArrowIcon diagonal />
            </Link>
            <Link className="text-link text-link--light" to="/about">
              Get to know us <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1, 2, 3].map((repeat) => (
            <span className="ticker__group" key={repeat}>
              <span>Story first</span>
              <i>✳</i>
              <span>Design with a point of view</span>
              <i>✳</i>
              <span>Made to mean something</span>
              <i>✳</i>
            </span>
          ))}
        </div>
      </div>

      <section className="story section-paper">
        <div className="section-topline page-width" data-reveal>
          <span>01 / A LITTLE ABOUT US</span>
          <span>HUMBLE IN OUR APPROACH. BOLD IN OUR IDEAS.</span>
        </div>
        <div className="story__layout page-width" data-reveal>
          <div className="story__main">
            <p className="eyebrow eyebrow--dark">
              A different kind of creative tribe
            </p>
            <h2>
              Humble enough to listen.
              <br />
              Bold enough to <em>make you look.</em>
            </h2>
          </div>
          <div className="story__aside">
            <span className="story__asterisk" aria-hidden="true">
              ✳
            </span>
            <p>
              We're storytellers, strategists and designers who believe a brand
              should feel like more than a logo and a posting schedule. It
              should feel like <em>you</em>.
            </p>
            <Link className="text-link text-link--dark" to="/about">
              Read our story <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1, 2, 3].map((repeat) => (
            <span className="ticker__group" key={repeat}>
              <span>Story first</span><i>✳</i>
              <span>Design with a point of view</span><i>✳</i>
              <span>Made to mean something</span><i>✳</i>
            </span>
          ))}
        </div>
      </div> */}

      <section className="services section-ink">
        <div className="services__intro page-width" data-reveal>
          <div>
            <p className="eyebrow eyebrow--light">02 / THE THINGS WE DO</p>
            <h2>
              Good ideas.
              <br />
              <em>Good execution.</em>
            </h2>
          </div>
          <p className="services__lead">
            From the first big thought to the post that makes someone stop
            scrolling, we make the pieces work together.
          </p>
        </div>
        <div className="service-list page-width">
          {services.map((service, index) => (
            <Link
              className="service-row"
              to={`/services/${service.slug}`}
              key={service.slug}
              data-reveal
              style={
                { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
              }
            >
              <span className="service-row__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <span className="service-row__arrow">
                <ArrowIcon diagonal />
              </span>
            </Link>
          ))}
        </div>
        <div className="page-width services__more">
          <Link className="text-link text-link--light" to="/services">
            See how we work <ArrowIcon />
          </Link>
        </div>
      </section>

      <section
        className="company section-paper"
        aria-labelledby="company-title"
      >
        <div className="page-width">
          <div className="company__head" data-reveal>
            <div>
              <p className="eyebrow eyebrow--dark">03 / IN GOOD COMPANY</p>
              <h2 id="company-title">
                Good people.
                <br />
                <em>Good company.</em>
              </h2>
            </div>
            <div className="company__aside">
              <p>
                The best work happens when good people bring their big, messy,
                brilliant ideas to the table. A few frames from the worlds we
                build together.
              </p>
              <Link className="text-link text-link--dark" to="/contact">
                Let's make something together <ArrowIcon />
              </Link>
            </div>
          </div>
          <Slider />
        </div>
      </section>

      <section className="journal section-sand" aria-labelledby="journal-title">
        <div className="page-width">
          <div className="journal__head" data-reveal>
            <div>
              <p className="eyebrow eyebrow--dark">04 / THE JOURNAL</p>
              <h2 id="journal-title">
                Notes from
                <br />
                <em>the studio.</em>
              </h2>
            </div>
            <Link className="text-link text-link--dark" to="/blog">
              All blog notes <ArrowIcon />
            </Link>
          </div>
          <div className="journal__grid">
            {posts.slice(0, 3).map((post, index) => (
              <Link
                className={`journal-card${index === 0 ? " journal-card--feature" : ""}`}
                to={`/blog/${post.slug}`}
                key={post.slug}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
                }
              >
                <img src={post.image} alt={post.imageAlt} />
                <div>
                  <span>
                    {post.category} · {post.read}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="tribe section-paper">
        <div className="tribe__inner page-width" data-reveal>
          <div className="tribe__heading">
            <p className="eyebrow eyebrow--dark">05 / THE PEOPLE</p>
            <h2>
              Two minds.
              <br />
              <em>One shared feeling.</em>
            </h2>
            <p>Different superpowers, very much on the same page.</p>
            <Link className="text-link text-link--dark" to="/tribe">
              Meet the tribe <ArrowIcon />
            </Link>
          </div>
          <div className="founders">
            <Link className="founder" to="/tribe">
              <span className="founder__label">The Feather</span>
              <h3>
                Ruchita
                <br />
                Kulkarni
              </h3>
              <p>Founder & content specialist</p>
              <span className="founder__mark" aria-hidden="true">
                F.
              </span>
            </Link>
            <Link className="founder" to="/tribe">
              <span className="founder__label">The Knife</span>
              <h3>
                Debarati
                <br />
                Dutta
              </h3>
              <p>Founder & design specialist</p>
              <span
                className="founder__mark founder__mark--knife"
                aria-hidden="true"
              >
                K.
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ClientLogoLoop />

      <section className="contact" id="contact">
        <div className="contact__inner page-width">
          <div className="contact__copy" data-reveal>
            <p className="eyebrow eyebrow--dark">06 / YOUR TURN</p>
            <h2>
              Got a good
              <br />
              thing <em>brewing?</em>
            </h2>
            <p className="contact__summary">
              Tell us what you're dreaming up. We'll bring the questions, the
              ideas and the good coffee energy.
            </p>
            <div className="contact__details">
              <a href="mailto:info@thefeathernknife.com">
                info@thefeathernknife.com
              </a>
              <a href="tel:+918169870983">+91 81698 70983</a>
              <Link to="/contact">Visit the contact page</Link>
            </div>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
