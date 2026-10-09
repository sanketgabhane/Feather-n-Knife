import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, CtaBand } from "../components/ui";

export default function Tribe() {
  useEffect(() => {
    document.title = "The tribe · The Feather n' Knife";
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">The tribe</span>
          </nav>
          <p className="eyebrow eyebrow--dark">People</p>
          <h1 className="page-title">
            Storytellers
            <br />
            and <em>strategists.</em>
          </h1>
          <p className="page-lead">
            Two founders. One shared feeling. Words and design made in the same room, so the
            brand never has to be translated between departments.
          </p>
        </div>
      </section>

      <section className="people">
        <article className="page-width person">
          <img
            src="/images/blog-voice.jpg"
            alt="A writing desk with a pen and a feather, the content side of the studio"
          />
          <div>
            <span>The Feather</span>
            <h2>Ruchita Kulkarni</h2>
            <p className="person__role">Founder & content specialist</p>
            <p>
              Ruchita is the voice of the studio. She is a people person in the practical
              sense — curious about how someone works, what they care about, and the sentence
              they would actually say out loud.
            </p>
            <p>
              A life of moving and listening, including a defence-family childhood spent
              across the country, turned into a craft: taking a brand's messy truth and
              editing it until it feels like a story worth keeping.
            </p>
            <Link className="text-link text-link--dark" to="/blog/sound-like-someone">
              Read her kind of note <ArrowIcon />
            </Link>
          </div>
        </article>
        <article className="page-width person person--flip">
          <img
            src="/images/slide-identity.jpg"
            alt="Brand materials, a palette knife and coloured paper on the design table"
          />
          <div>
            <span>The Knife</span>
            <h2>Debarati Dutta</h2>
            <p className="person__role">Founder & design specialist</p>
            <p>
              Debarati gives the words a place to live. She is the sharper eye — shape,
              colour, crop and the courage to leave a thing out so the idea can be seen.
            </p>
            <p>
              Design, in this studio, is not decoration after the copy is done. It is how a
              brand becomes recognisable before anyone reads the caption.
            </p>
            <Link className="text-link text-link--dark" to="/services/branding">
              See the identity work <ArrowIcon />
            </Link>
          </div>
        </article>
      </section>
      <CtaBand />
    </>
  );
}
