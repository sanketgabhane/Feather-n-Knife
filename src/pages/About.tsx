import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, CtaBand } from "../components/ui";

export default function About() {
  useEffect(() => {
    document.title = "Our story · The Feather n' Knife";
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Our story</span>
          </nav>
          <p className="eyebrow eyebrow--dark">The studio</p>
          <h1 className="page-title">
            A company born
            <br />
            out of <em>passion.</em>
          </h1>
          <p className="page-lead">
            The Feather n' Knife stands for humble and bold. We are a content and design tribe
            in Pune, helping brands weave a story that feels like them — not like a template.
          </p>
        </div>
      </section>

      <section className="split-block">
        <div className="page-width split-block__grid">
          <img
            src="/images/studio-hero.jpg"
            alt="The studio table where campaigns are composed by hand"
          />
          <div>
            <p className="eyebrow eyebrow--dark">Why we exist</p>
            <h2>We take the undefined route on purpose.</h2>
            <p>
              Brands come to us when the feed is busy and the feeling is missing. The logo
              exists. The posts go out. Still, nobody could describe the brand if the website
              closed for a day.
            </p>
            <p>
              We listen first. Then we write, design and build a world with a point of view —
              humble in how we work with you, bold in what we put into the world.
            </p>
            <Link className="text-link text-link--dark" to="/services">
              See what we make <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="values section-ink">
        <div className="page-width values__grid">
          <article>
            <span>The feather</span>
            <h2>Humble.</h2>
            <p>
              We don't arrive with a costume for your brand. We ask, we notice, we rewrite
              until the sentence sounds like you on a clear day.
            </p>
          </article>
          <article>
            <span>The knife</span>
            <h2>Bold.</h2>
            <p>
              Soft is not the same as vague. We cut what doesn't belong, so the idea is sharp
              enough to be remembered.
            </p>
          </article>
        </div>
      </section>

      <section className="note-row">
        <div className="page-width note-row__grid">
          <p>Pune studio. Work that travels.</p>
          <p>
            Storytelling, social, identity and personal brands — made by people who still care
            how a sentence sits next to a colour.
          </p>
          <Link className="text-link text-link--dark" to="/tribe">
            Meet Ruchita & Debarati <ArrowIcon />
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
