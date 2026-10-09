import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/ui";
import { posts } from "../data";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog · The Feather n' Knife";
  }, []);

  const [featured, ...rest] = posts;

  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Blog</span>
          </nav>
          <p className="eyebrow eyebrow--dark">The journal</p>
          <h1 className="page-title">
            Notes on voice,
            <br />
            <em>design and attention.</em>
          </h1>
          <p className="page-lead">
            Short essays from the studio. No growth hacks. Just the way we think about brands
            that want to be felt, not merely posted.
          </p>
        </div>
      </section>

      {featured ? (
        <section className="blog-feature">
          <Link className="page-width blog-feature__card" to={`/blog/${featured.slug}`}>
            <img src={featured.image} alt={featured.imageAlt} />
            <div>
              <span>
                {featured.category} · {featured.date} · {featured.read}
              </span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <em>
                Read the note <ArrowIcon />
              </em>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="blog-list">
        <div className="page-width blog-list__grid">
          {rest.map((post) => (
            <Link className="blog-list__card" to={`/blog/${post.slug}`} key={post.slug}>
              <img src={post.image} alt={post.imageAlt} />
              <span>
                {post.category} · {post.date}
              </span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
